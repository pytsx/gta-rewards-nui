import { useContext } from "react";
import { APIContext } from "./API.context";

export const useAPI = () => useContext(APIContext)