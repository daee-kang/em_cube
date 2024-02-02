import { ReactNode, createContext } from "react";

type GameContextType = {};

export const GameContext = createContext<GameContextType>({});

export const GameContextProvider = ({ children }: { children: ReactNode }) => {
  return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
};
