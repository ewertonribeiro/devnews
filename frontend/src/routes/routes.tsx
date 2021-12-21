
import { useContext } from 'react'
import {BrowserRouter , Route , Routes as Switch} from 'react-router-dom'
import { SessionContext } from '../Contexts/SessionContext'

import {Home} from '../pages/Home'
import { NoSubscribePost } from '../pages/NoSubscribePost'

import { Posts } from '../pages/Posts'
import { PostSingle } from '../pages/PostSingle'

export function Routes(){

const {session} = useContext(SessionContext)

return(
    <BrowserRouter>
    <Switch>
        <Route  path='/'  element={<Home/>}/>
        <Route path='/posts' element={<Posts/>}  />
        <Route path='/postSingle' element={session ? <PostSingle/> : <NoSubscribePost/>}  />
    </Switch>
    </BrowserRouter >
)
}