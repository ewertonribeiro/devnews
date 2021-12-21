import {loadStripe} from '@stripe/stripe-js'


export async function GetStripe(){
    const StripeFront = await loadStripe('pk_test_51K71KoL8Wum4uTvxtgXg7gGlhg4pI0hmweqLANd1AQzlefnDyoSdAHQOdQG1vLCabcybfE5cAHfJHkWPZheM2vdb00pOmSJcGO');


    return StripeFront
}