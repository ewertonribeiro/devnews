

interface IUser{
    GitHubId:string,
    fullName:string,
    email:string,
    avatar:string,
    subscription?:boolean,
    stripeId?:{
        id:string
    }
}

export {IUser}