import { Link } from "react-router-dom";
import { Aside, Container } from "./styles";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src="/logo.svg" alt="Coffe Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Rio de Janeiro, RJ</span>
        </div>

        <Link to={""}>
          <ShoppingCart size={22} weight="fill" />
        </Link>
      </Aside>
    </Container>
  );
}
