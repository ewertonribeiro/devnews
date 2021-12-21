import { useContext } from "react";
import { Link } from "react-router-dom";
import { GitgubButton } from "./githubButton";
import { SessionContext } from "../Contexts/SessionContext";

interface IHeaderProps{
  selected:string
}


export function Header(props:IHeaderProps){

    
  const {session} = useContext(SessionContext)
    return (

        <header>
      <div className='headerWrapper'>

        <div>
          <h1>Dev.news</h1>

          <nav>
            <Link to={"/"} className={props.selected=== 'home' ? 'selected' : "notSelected"}>
            Home
            </Link>
            <Link to={"/posts"} className={props.selected === 'posts' ? "selected" : 'notSelected'}>
            Post
            </Link>
          </nav>

        </div>
        
        <GitgubButton/>

      </div>

         </header>
    )
}
