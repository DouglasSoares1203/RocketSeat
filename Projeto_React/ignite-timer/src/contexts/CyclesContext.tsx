import { ReactNode, createContext, useReducer } from "react";

interface CreateCycleData {
  task: string;
  minuteAmount: number;
}

interface CyclesContextType {
  //cycles: Cycle[]
  //activeCycle:Cycle|undefined
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interruptCurrentCycle: () => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface CyclesContextProvideProps{
    children: ReactNode
}

export function CyclesContextProvider({
    children,
}:CyclesContextProvideProps){
    const [cycleState, dispatch] = useReducer(
        cyclesReducer,
        {
            cycles:[],
            activeCycleId: null
        }
    )
} 
