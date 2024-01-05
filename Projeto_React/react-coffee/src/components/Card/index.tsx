import { CheckFat } from "@phosphor-icons/react/dist/ssr";
import {
  CoffeeImg,
  Container,
  Control,
  Description,
  Order,
  Price,
  Tags,
  Title,
} from "./styles";
import { ShoppingCart } from "@phosphor-icons/react";
import { QuantityInput } from "../Form/QuantityInput";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { useCart } from "../../hooks/useCart";

type Props = {
  coffe: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
};

export function Card({ coffe }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const theme = useTheme();
  const { addItem } = useCart();

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }
  function decrementQuantity() {
    if (quantity > 1) setQuantity((state) => state - 1);
  }

  function handleAddItem() {
    addItem({ id: coffe.id, quantity });
    setIsItemAdded(true);
    setQuantity(1);
  }

  useEffect(() => {
    let timeout: number;

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isItemAdded]);

  return (
    <Container>
      <CoffeeImg src={coffe.image} alt={coffe.title} />

      <Tags>
        {coffe.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Title>{coffe.title}</Title>

      <Description>{coffe.description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffe.price.toFixed(2)}</span>
        </Price>

        <Order>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <CheckFat
                weight="fill"
                size={22}
                color={theme.colors["base-card"]}
              />
            ) : (
              <ShoppingCart size={22} color={theme.colors["base-card"]} />
            )}
          </button>
        </Order>
      </Control>
    </Container>
  );
}
