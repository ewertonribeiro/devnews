import { useEffect, useContext } from "react"
import { FaGithub } from "react-icons/fa"
import {supabase } from '../Services/Supabase'
import {User} from '../Api/User'
import { SessionContext } from "../Contexts/SessionContext"



export function GitgubButton(){

    const {session , setSession} = useContext(SessionContext)

    useEffect(()=>{

      checkSession()

            window.addEventListener('hashchange', function() {
                checkSession();
              });
              
      },[session])



  async function checkSession(){
    const session =  await supabase.auth.session()
    
    
    setSession(session)

    if(!session){
      return
    }
     User.CreateUser(session)
        
        
      }

      async function logIn(){

         await supabase.auth.signIn({
           provider:'github'
         
         })
        
       
        }

        async function logOut(){

          await supabase.auth.signOut()

          setSession(null)
        }
      



    if(session){
        return(
            <button className='login' onClick={logOut}>
         <FaGithub color="#04D361" size={25}/>{session.user?.user_metadata.user_name}</button>
        )
    }
    return(
            <button className='login' onClick={logIn}>
          <FaGithub color='#EBA417' size={25}/>Sigin with Github</button> 

    )
        
    
        
    
}