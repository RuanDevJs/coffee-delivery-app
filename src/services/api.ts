import Image1 from "@assets/coffee_list/Image-1.svg";
import Image2 from "@assets/coffee_list/Image-2.svg";
import Image3 from "@assets/coffee_list/Image-3.svg";
import Image4 from "@assets/coffee_list/Image-4.svg";
import Image5 from "@assets/coffee_list/Image-5.svg";
import Image6 from "@assets/coffee_list/Image-6.svg";
import Image7 from "@assets/coffee_list/Image-7.svg";
import Image8 from "@assets/coffee_list/Image-8.svg";
import Image9 from "@assets/coffee_list/Image-9.svg";
import Image10 from "@assets/coffee_list/Image-10.svg";
import Image11 from "@assets/coffee_list/Image-11.svg";
import Image12 from "@assets/coffee_list/Image-12.svg";
import Image13 from "@assets/coffee_list/Image-13.svg";
import Image from "@assets/coffee_list/Image.svg";

import { SvgProps } from "react-native-svg";

export interface CoffeeProps {
  key?: "left" | "right";
  _id?: string;
  name?: string;
  description?: string;
  category?: string[];
  Image?: React.FC<SvgProps>;
  price?: number;
  quantity?: number;
}

export const Coffes: CoffeeProps[] = [
  {
    key: "left",
  },
  {
    _id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    category: ["Tradicional"],
    Image: Image1,
    price: 9.9,
    quantity: 0,
  },
  {
    _id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    category: ["tradicional"],
    Image: Image2,
    price: 9.9,
    quantity: 0,
  },
  {
    _id: "4f0e30d3-07a5-4c5c-bd9e-6f0d9c03d5b1",
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    category: ["tradicional"],
    Image: Image3,
    price: 9.9,
    quantity: 0,
  },
  {
    _id: "d77f8a22-61c1-4ee5-b4ea-328ff7669ff3",
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    category: ["tradicional"],
    Image: Image4,
    price: 9.9,
    quantity: 0,
  },
  {
    _id: "49142e95-6d27-4d79-aebc-21e56e1e5a57",
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    category: ["gelado"],
    Image: Image5,
    price: 9.9,
    quantity: 0,
  },
  {
    _id: "8d1fb2a3-1d00-4a5b-9e5d-974ad3d3b28b",
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    category: ["com leite"],
    Image: Image6,
    price: 9.9,
    quantity: 0,
  },
  {
    _id: "e7d88925-3aef-4e9d-94b0-7c2ab08225e2",
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    category: ["especial", "gelado"],
    Image: Image7,
    price: 9.9,
    quantity: 0,
  },
  {
    _id: "3c34eb16-3e27-4f3e-a38c-8ce105e2abdb",
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    category: ["especial", "com leite"],
    Image: Image8,
    price: 9.9,
    quantity: 0,
  },
  {
    _id: "9a29c072-9940-4b5a-b7b8-50d5e5a28a6c",
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    category: ["especial"],
    Image: Image9,
    price: 9.9,
    quantity: 0,
  },
  {
    _id: "0ac04e5e-57b2-43e7-9c92-7bfac0112ce1",
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    category: ["especial", "gelado"],
    Image: Image10,
    price: 9.9,
    quantity: 0,
  },
  {
    _id: "26edaf38-080b-4f9b-85a0-2e5911c2e980",
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    category: ["tradicional", "com leite"],
    Image: Image11,
    price: 9.9,
    quantity: 0,
  },
  {
    _id: "64fb5f48-7d20-4cd4-bc24-04c8e6d7bb14",
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    category: ["tradicional", "gelado"],
    Image: Image12,
    price: 9.9,
    quantity: 0,
  },
  {
    _id: "1f9c6b0e-82f1-4bb6-9b51-3d181a0e98c2",
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    category: ["gelado", "com leite"],
    Image: Image13,
    price: 9.9,
    quantity: 0,
  },
  {
    _id: "71f6df50-4e8f-4d24-9c57-971f249dbdbd",
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    category: ["gelado", "com leite"],
    Image: Image,
    price: 9.9,
    quantity: 0,
  },
  {
    key: "right",
  },
];
