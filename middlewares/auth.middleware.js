import jwt from "jsonwebtoken"
const isLoggedIn = async (req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return res.status(400).json({
            success:false,
            message:"Token is not there"
        })
    }

    const verifyToken = jwt.verify(token,process.env.JWT_KEY)

    if(!verifyToken){
        return res.status(400).json({
            success:false,
            message:"Token is InValid"
        })
    }
    req.user = verifyToken;
    next();
}

const authorizedRoles = (...roles)=>(req,res,next)=>{
    const userRole = req.user.role;
    const findf = roles.includes(userRole)
    // console.log(findf);
    if(!findf){
        return res.status(400).json({
            success:false,
            message:"Dont't have permission"
        })
    }
    next();
}
export { isLoggedIn , authorizedRoles}