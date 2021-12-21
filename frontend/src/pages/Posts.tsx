import { useContext } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { SessionContext } from "../Contexts/SessionContext";





export function Posts(){
    
  const {session} = useContext(SessionContext)
    return(
        <>
        <Header selected="posts"/>
        <main className="postsMain">

            <section className="posts">

                <div className="post">
                        <time>12 de março de 2021</time>
                        <Link to='/postsingle'>
                        <h2>Underrated React Hooks you’re missing out on!</h2>
                        
                        </Link>
                        <p>In this guide you will leran how to create a entire web Aplication using pre processor SASS!!</p>
                </div>
              

            </section>

        </main>
        </>
    )
}