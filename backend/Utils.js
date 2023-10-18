import  Jwt  from "jsonwebtoken"

export const Mytoken=((user)=>{
    return Jwt.sign({
        user:user.username,
        _id:user._id,
        email:user.email

    },"secret",{expiresIn:'1d'})

})