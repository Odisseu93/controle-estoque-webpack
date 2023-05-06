import React from "react";
import { IMainContext } from "./types";

export const MainContext = React.createContext<IMainContext>({} as IMainContext);