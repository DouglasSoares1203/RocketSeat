import { useTheme } from "styled-components";
import { CoffeeList, Heading, Hero, HeroContent, Info } from "./styles";
import { Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { Card } from "../../components/Card";
import { coffees } from '../../../data.json'


export function Home() {
  const theme = useTheme();
  return (
    <div>
      <Hero>
        <HeroContent>
          <Heading>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </Heading>

          <Info>
            <div>
              <ShoppingCart
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors["yellow-dark"] }}
              />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Package
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors["base-text"] }}
              />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Timer
                size={32}
                weight="fill"
                color={theme.colors.background}
                style={{ backgroundColor: theme.colors.yellow }}
              />
              <span>Entrega rápida e rastreada</span>
            </div>
          </Info>
        </HeroContent>
        <img src="/images/hero-bg.svg" id="hero-bg" alt="" />
      </Hero>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffe={coffee} />
          ))}
        </div>
      </CoffeeList>
    </div>
  );
}
