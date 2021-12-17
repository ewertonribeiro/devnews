import { User } from "@supabase/supabase-js"
import { useEffect, useState } from "react"
import { FaGithub } from "react-icons/fa"
import {supabase} from '../Services/Supabase'

export function GitgubButton(){
    const [isUser , setUser] = useState<User | null>(null )

    useEffect(()=>{

    
            checkUser();

            window.addEventListener('hashchange', function() {
                checkUser();
              });
      },[isUser])

      async function checkUser(){
        
        const Newuser:User | null=  supabase.auth.user()
        setUser(Newuser)
    
        
        console.log(isUser)
      }

      async function logIn(){

          await supabase.auth.signIn({
           provider:'github'
         
         }).then(res=>{
             const {user  } = res

            
             setUser(user)
             console.log(isUser)
         })

        

       }
    if(isUser){
        return(
            <button className='login'>
         <FaGithub color="#04D361" size={25}/>{isUser.user_metadata.user_name}</button>
        )
    }
    return(
            <button className='login' onClick={()=>logIn()}>
          <FaGithub color='#EBA417' size={25}/>Sigin with Github</button> 

    )
        
    
        
    
}