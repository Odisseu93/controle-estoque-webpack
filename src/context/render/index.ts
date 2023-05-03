import React from "react";
import { TRenderContext } from "./types";

export const RenderContext = React.createContext<TRenderContext>({
    render: 0,
    setRender: ()=> {},
})