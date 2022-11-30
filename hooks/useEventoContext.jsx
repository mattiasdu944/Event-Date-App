import { useContext } from "react";
import EventoContext from "../context/EventoProvider";

export const useEventoContext = () =>{
    return useContext(EventoContext);
}