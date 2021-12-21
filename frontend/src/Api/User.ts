
// import axios from 'axios'
import {Session} from "@supabase/supabase-js"

import { baseUrl } from "./BaseUrl"

import axios from 'axios'


 const User = {

  async findUser(user:Session):Promise<boolean>{

     const response =  await axios.post(`${baseUrl}/finduser`,{
       email:user.user.email
     })
    
    return response.data
  },

  async CreateUser(data:Session){

    if(!User.findUser(data)){

      return
    }
    if(!User.findUser(data)){

      return
    }

    await axios.post(`${baseUrl}/users/create`,{
      GitHubId:data?.user?.id,
      fullName:data?.user?.user_metadata.full_name,
      email:data?.user?.user_metadata.email,
      avatar:data?.user?.user_metadata.avatar_url,
    })

      
    }
}

export {User}