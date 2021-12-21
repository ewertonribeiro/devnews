import axios from "axios";
import { baseUrl } from "./BaseUrl";

export const GetSTRIPE = {

    async GetPrice(){

        const response =  await axios.get(`${baseUrl}/prices`)

    const{price} = response.data

    return price
    }
}