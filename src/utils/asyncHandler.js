const asyncHandler=(requesthandler)=>{
    (req,res,next)=>{
        Promise
        .resolve(requesthandler(rew,res,next))
        .catch((err)=>next(err))
    }
}

export {asyncHandler}

// const asyncHandler=()=>{}
// const asyncHandler=(func)=>  {()=>{}}
// const asyncHandler=(func)=>()=>{}

// this is the higher order function which can take the function as the input or send the response as the function in the output
// const asyncHandler =(func)=>async()=>{}

// const asyncHandler = (func) => async (req,res,next)=>{
//     try {
//         await funf(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message:error.message
//         })

//     }
// }