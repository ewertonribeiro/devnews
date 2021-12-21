import { useContext } from "react";

import { SessionContext } from "../Contexts/SessionContext";


export function UseSession(){

    const value = useContext(SessionContext)


    return value
}