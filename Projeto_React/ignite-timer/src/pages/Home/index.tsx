import { HandPalm, Play } from "phosphor-react";
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles";
import { FormProvider } from "react-hook-form";
// import * as zod from "zod";
// import { useContext } from "react";

// const newCycleFormValidationSchema = zod.object({
//   task: zod.string().min(1, "Informe a tarefa"),
//   minutesAmount: zod
//     .number()
//     .min(5, "O ciclo precisa ser de no mínimo 5 minutos")
//     .max(60, "O ciclo precisa ser de no máximo 60 minutos"),
// });

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormProvider></FormProvider>

        <StopCountdownButton>
          <HandPalm size={24} />
          Interromper
        </StopCountdownButton>

        <StartCountdownButton>
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
