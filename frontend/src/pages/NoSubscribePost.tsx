import { Header } from "../components/Header";


export function NoSubscribePost(){

    const string:string = 'Ewerton e Milane sao casados'

    console.log(string.slice(0,3))

    return(
        <>
        <Header selected="posts"/>
        <section className="postSingleSection">
        <main className="postSingleMain">

                <h1>Underrated React Hooks you’re missing out on!</h1>
                <time>12 de março de 2021</time>
                <article className="noSubscribeArticle">
                React Hooks provide us with access to core React functionalities within the context of function components. 
                Traditionally, to optimize React, developers have had to switch between function and class components, however, 
                React Hooks allow us to use function components throughout projects to build both small and large applications.

                    If you’re a React developer who likes to write function components over class components, then this article is for you; 
                    we’ll look at three helpful yet somewhat underrated React Hooks that you might not be so familiar with, useImperativeHandle, 
                    useLayoutEffect, and useDebugValue. We’ll explore their use cases, syntax, and a few code examples. Let’s get started!

                    <h2>React useImperativeHandle Hook</h2>

                                    
                        Chiamaka Umeh
                        A frontend developer with a passion for designing highly-responsive user interfaces for JavaScript-based web and mobile apps using React and React Native.
                        Underrated React Hooks you’re missing out on
                </article>

                <button className="subscribeNowButton" >Wanna continue reading?   <span>Subscribe Now!! 🤗 </span> </button>
                      

                        
        </main>
        </section>

        </>
    )
}