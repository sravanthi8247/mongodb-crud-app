const User = require('../models/User')
exports.createUser=async(req,res)=>{
    try{
        const{fullName,emailAddress,mobileNo} = req.body
        await User.create({fullName,emailAddress,mobileNo})
        res.json({success:true,
            message:'User added successfully!!'
        })
    }catch(error){
        console.log(error)
        res.json({success:false,
            message:error
        })
    }
}
exports.getUsers=async(req,res)=>{
    try{
        const data=await User.find()
        res.json({success:true,
            message:'user data',
            data:data
        })
    }catch(error){
        console.log(error)
        res.json({success:false,
            message:'something went wrong.'

        })
    }
}
exports.deleteUser=async(req,res)=>{
    try{
        const id=req.params.id
        await User.findByIdAndDelete(id)
        res.json({success:true,
            message:'User data successfully deleted'
        })
    }catch(error){
        console.log(error)
        res.json({success:false,
            message:'something went wrong.'

        })
    }
}
exports.updateUser=async(req,res)=>{
    try{
        const id=req.params.id
        await User.findByIdAndUpdate(id,req.body)
        res.json({success:true,
            message:'User updated successfully'
        })
    }catch(error){
        console.log(error)
        res.json({success:false,
            message:'something went wrong.'

        })
    }
}
exports.getsingleUser=async(req,res)=>{
    try{
        const id=req.params.id
        const user=await User.findById(id)
        res.json({success:true,
            data: user
        })
    }catch(error){
        console.log(error)
        res.json({success:false,
            message:'something went wrong.'

        })
    }
}
