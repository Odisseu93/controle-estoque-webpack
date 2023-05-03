import { useContext } from "react";
import { RenderContext } from "..";

export const useRender = ()=> {
    const {render, setRender} = useContext(RenderContext);

    return {render, setRender};
};