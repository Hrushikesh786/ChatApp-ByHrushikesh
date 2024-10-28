import jwt from "jsonwebtoken"

export const createTokenAndSaveCookie=async(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_Token,{
        expiresIn:"10d"
    })
   await res.cookie("jwt",token,{
        httpOnly:true,
        secure:true,
        sameSite:"strict"
    })
    // console.log("token is:",token)

}