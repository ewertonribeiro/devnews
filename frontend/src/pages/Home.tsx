import { GitgubButton } from "../components/githubButton";

import Girl from '../assets/Mulher.svg'

export function Home(){
    return(
        <>
         <header>
      <div className='headerWrapper'>

        <div>
          <h1>Dev.news</h1>

          <nav>
            <a className='selected'>Home</a>
            <a>Post</a>
          </nav>

        </div>
        
        <GitgubButton/>

      </div>

    </header>

    <main>
      <section className='title'>
        <div className='mainContainer'>
            <h3 className='hey'>👏 Hey , Welcome</h3>

            <div>
              <p>News about <br/> the <span>React</span> world</p>
              <span>Get acess to all the publications <br/> <span>for $9.90 month</span></span>
            </div>
            <button>Subscribe Now!!</button>
        </div>

      </section>
      <section className='img'>
        <img src={Girl} alt="Girl coding" />
      </section>
    </main>
        </>
    )
}