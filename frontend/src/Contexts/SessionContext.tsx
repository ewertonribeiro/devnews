import { createContext , Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Session } from "@supabase/supabase-js";




interface SessionProps{
    children:ReactNode
}

interface Sessions{
    session:Session,
    setSession:Dispatch<SetStateAction<Session>>
}

export const SessionContext = createContext<Sessions | null>({} as Sessions)



export function SessionC(props:SessionProps){

    const [session,setSession] = useState<Session>(null)

    return (
        <SessionContext.Provider value={{session , setSession}} >

            {props.children}

        </SessionContext.Provider>
    )

}