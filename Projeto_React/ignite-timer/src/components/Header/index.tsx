import { NavLink } from "react-router-dom";
import logoIgnite from "../../assets/logo-ignite.svg";
import { Scroll, Timer } from "phosphor-react";
import { HeaderContainer } from "./styles";
export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} />
      </span>
      <nav>
        <NavLink to={"/"} title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to={"/history"} title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
