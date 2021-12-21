import Girl from '../assets/Mulher.svg'

import { useContext, useEffect, useState } from "react";

import { GetSTRIPE } from "../Api/Stripe";
import { SessionContext } from "../Contexts/SessionContext";
import { SubscribeButton } from "../components/subscribeButton";
import { Header } from "../components/Header";



 export function Home(){

  const [price,SetPrice] = useState<number>(0)

  

useEffect(()=>{


  async function PRICE(){
    const price = await GetSTRIPE.GetPrice();


    SetPrice(price)
  }

PRICE()


},[])

function Format(value:number){

  const newValue = (value / 100).toLocaleString('en-US',{
    style:"currency",
    currency:"USD"
  })

return newValue
}




    return(
        <>
         <Header selected='home'/>

    <main>
      <section className='title'>
        <div className='mainContainer'>
            <h3 className='hey'>👏 Hey , Welcome</h3>

            <div>
              <p>News about <br/> the <span>React</span> world</p>
              <span>Get acess to all the publications <br/> <span>for  {Format(price)} 

                month</span></span>
            </div>
            <SubscribeButton/>
        </div>

      </section>
      <section className='img'>
        <img src={Girl} alt="Girl coding" />
      </section>
    </main>
        </>
    )
}



