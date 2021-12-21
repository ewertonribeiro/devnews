import mongoose from 'mongoose'

export async function ConnectDb(){
    try{
        await mongoose.connect("mongodb+srv://DevFinance:80965907@cluster0.kvo0u.mongodb.net/DevNews?retryWrites=true&w=majority")

        console.log("DB Connected")

    }
    catch(e){
        console.log(`Error:${e}` )
    }

}

ConnectDb()


