import React from "react";
import { IAlertContext } from "./types";

export const AlertContext = React.createContext<IAlertContext>({} as IAlertContext);