import { Header } from "../components/Header";

import {useHref} from 'react-router-dom'

export function PostSingle(){

 const subscription = false


    return(
        <>

        <Header selected="posts"/>

        <section className="postSingleSection">
        <main className="postSingleMain">

                <h1>Underrated React Hooks you’re missing out on!</h1>
                <time>12 de março de 2021</time>
                <article className={subscription ? '' : 'noSubscribeArticle'}>
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

                        December 8, 2021 6 min read
                        Underrated React Hooks youre missing out on

                        React Hooks provide us with access to core React functionalities 
                        within the context of function components. Traditionally, to optimize React,
                        developers have had to switch between function and class components, however, 
                        React Hooks allow us to use function components throughout projects to build both small and large applications.

                        If you’re a React developer who likes to write function components over class components, 
                        then this article is for you; we’ll look at three helpful yet somewhat underrated React Hooks that
                        you might not be so familiar with, useImperativeHandle, useLayoutEffect, and useDebugValue. 
                        We’ll explore their use cases, syntax, and a few code examples. Let’s get started!
                        React useImperativeHandle Hook

                        In React, data is passed from parent to child components via props, 
                        known as unidirectional data flow. The parent component cannot directly call a 
                        function defined in the child component or reach down to grab a value for itself.

                        In certain circumstances, we want our parent component to reach down to the child 
                        component, getting data that originates in the child component for its own use. 
                        We can achieve this type of data flow with the useImperativeHandle Hook, 
                        which allows us to expose a value, state, or function inside a child component to the parent component through ref. 
                        You can also decide which properties the parent component can access, thereby maintaining the private scoping of the child component.
                </article>
        </main>
        </section>
      
        </>
    )
    
}