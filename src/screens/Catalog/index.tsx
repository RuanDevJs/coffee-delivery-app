import { useEffect, useState } from "react";
import { FlatList } from "react-native";

import Heading from "./components/Heading";
import Coffee from "./components/Coffee";

import { Coffes } from "@services/api";
import { Device } from "@utils/device";

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import { useNavigation } from "@react-navigation/native";
import Product from "@components/Coffee";

import Select from "./components/Select";
import * as Styled from "./styles";
import Button from "@components/Button";
import { useTheme } from "styled-components/native";

const ITEM_SIZE = Device.width * 0.72;
const SPACER_ITEM_SIZE = (Device.width - ITEM_SIZE) / 2;

type SelectedCatalog =
  | "all"
  | "tradicional"
  | "gelado"
  | "com leite"
  | "especial";

type CATALOG = {
  key: SelectedCatalog;
  label: string;
};

const CATALOG: CATALOG[] = [
  {
    key: "all",
    label: "Todos",
  },
  {
    key: "tradicional",
    label: "Tradicional",
  },
  {
    key: "gelado",
    label: "Gelado",
  },
  {
    key: "com leite",
    label: "Com Leite",
  },
  {
    key: "especial",
    label: "Especial",
  },
];

export default function Catalog() {
  const theme = useTheme();
  const navigate = useNavigation();

  const [selectedCatalog, setSelectedCatalog] =
    useState<SelectedCatalog>("all");
  const [loadingSelectedCatalog, setLoadingSelectedCatalog] = useState(false);

  const [filteredCoffee, setFilteredCoffee] = useState<typeof Coffes>(Coffes);
  const translateX = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler(({ contentOffset }) => {
    translateX.value = contentOffset.x;
  });

  useEffect(() => {
    function filterCoffeeByCatalog() {
      if (selectedCatalog !== "all") {
        const updatedCatalog = Coffes.filter((coffee) => {
          if (coffee !== null && coffee.category) {
            return coffee.category.includes(selectedCatalog);
          }
        });

        setFilteredCoffee(updatedCatalog);
        setTimeout(() => setLoadingSelectedCatalog(false), 1200);
      }
    }

    function filterAllCoffee() {
      if (selectedCatalog === "all") {
        setFilteredCoffee(Coffes);
        setLoadingSelectedCatalog(false);
      }
    }

    filterCoffeeByCatalog();
    filterAllCoffee();
  }, [selectedCatalog]);

  return (
    <Styled.Container bounces={false}>
      <Heading />
      <Styled.CoffeeSlide>
        <Animated.FlatList
          data={Coffes}
          keyExtractor={(_, index) => `$coffee-id=${index}`}
          renderItem={({ item, index }) => {
            if (item.key) {
              return (
                <Styled.SpacerItemSize style={{ width: SPACER_ITEM_SIZE }} />
              );
            }

            return <Coffee data={item} animation={{ index, translateX }} />;
          }}
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          decelerationRate={0}
          bounces={false}
          snapToInterval={ITEM_SIZE}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
        />
      </Styled.CoffeeSlide>
      <Styled.CoffeeList>
        <Styled.Title>Nossos cafés </Styled.Title>
        <FlatList
          data={CATALOG}
          keyExtractor={(item, index) => `$key=${item.key}`}
          renderItem={({ item }) => (
            <Select
              text={item.label}
              onPress={() => setSelectedCatalog(item.key)}
              active={selectedCatalog === item.key}
            />
          )}
          horizontal
        />
      </Styled.CoffeeList>
      <Styled.Footer>
        <FlatList
          data={filteredCoffee}
          keyExtractor={(_, index) => `$coffee-id=${index}`}
          renderItem={({ item }) => {
            return (
              <Product
                data={item}
                onPress={() => navigate.navigate("Product", { product: item })}
              />
            );
          }}
          pagingEnabled
          scrollEventThrottle={16}
          decelerationRate={0}
          bounces={false}
        />
      </Styled.Footer>
    </Styled.Container>
  );
}
