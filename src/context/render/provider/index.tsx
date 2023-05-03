import React, { ReactNode, useState } from "react";
import { RenderContext } from "..";

export const RenderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [render, setRender] = useState(0);
    return (
        <RenderContext.Provider value={{ render, setRender }}>
            {children}
        </RenderContext.Provider>)
};