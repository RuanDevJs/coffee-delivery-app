import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  IAuthWithEmailAndPassword,
  IAuthenticatedUser,
  IRegisterUserWithEmailAndPasswordProps,
  IUserContext,
} from "./types";

import { firebaseAuth, firebaseDatabase } from "@services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import * as database from "firebase/database";

const userContext = createContext({} as IUserContext);

export function UserProvier({ children }: PropsWithChildren) {
  const [authenticatedUser, setAuthenticatedUser] =
    useState<IAuthenticatedUser | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  async function setNewUserInDatabase({
    uid,
    name,
    email,
  }: {
    uid: string;
    name: string;
    email: string;
  }) {
    const databaseRef = database.ref(firebaseDatabase, `/users/${uid}`);
    await database.set(databaseRef, {
      uid: uid,
      name: name,
      email: email,
    });
  }

  async function getUserInDatabase(uid: string): Promise<IAuthenticatedUser> {
    const databaseRef = database.ref(firebaseDatabase, `/users/${uid}`);
    const getUserDatabaseByUid = database.get(databaseRef);

    const parsedUser = (await (
      await getUserDatabaseByUid
    ).toJSON()) as IAuthenticatedUser;

    return {
      uid: parsedUser.uid,
      email: parsedUser.email,
      name: parsedUser.name,
    };
  }

  async function registerUserWithEmailAndPassword({
    name,
    email,
    password,
  }: IRegisterUserWithEmailAndPasswordProps) {
    try {
      const createdUser = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      if (createdUser.user && createdUser.user.email) {
        const userCreated = {
          uid: createdUser.user.uid,
          name: name,
          email: createdUser.user.email,
        };
        await setNewUserInDatabase(userCreated);
        setAuthenticatedUser(userCreated);
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error: ${error.message}`);
      }
    }
  }

  async function authWithEmailAndPassword({
    email,
    password,
  }: IAuthWithEmailAndPassword) {
    try {
      const user = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      if (user.user && user.user.email) {
        const userDatabase = await getUserInDatabase(user.user.uid);
        setAuthenticatedUser(userDatabase);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        throw new Error("E-mail or password does not exists!!!");
      }
    }
  }

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(async (user) => {
      try {
        if (user !== null && user.email) {
          const userDatabase = await getUserInDatabase(user.uid);
          setAuthenticatedUser(userDatabase);
        }
      } catch (error) {
        if (error instanceof Error) {
          setAuthenticatedUser(null);
          throw new Error(`Error: User not authenticated: ${error.message}`);
        }
      } finally {
        setLoadingUser(false);
      }
    });
  }, []);

  return (
    <userContext.Provider
      value={{
        authenticatedUser,
        loadingUser,
        registerUserWithEmailAndPassword,
        authWithEmailAndPassword,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

export function useUser() {
  const {
    registerUserWithEmailAndPassword,
    authWithEmailAndPassword,
    authenticatedUser,
    loadingUser,
  } = useContext(userContext);
  return {
    authenticatedUser,
    loadingUser,
    registerUserWithEmailAndPassword,
    authWithEmailAndPassword,
  };
}
