const users=require('../models/usermodel');

const createUser=(req,res)=>{
    users.push(req.body);
    res.status(201).json({message:"user created successfully",Date:users})
}

const getUser=(req,res)=>{
    res.status(201).json({message:"user Retrieved",Date:users})
}

const updateUser=(req,res)=>{
    const id=req.params.id;
    users[id]=req.body;
    res.json({message:"user updated successfully",Date:users})
}

const deleteUser=(req,res)=>{
    const id=req.params.id;
    users.splice(id,1);
    res.json({message:"user deleted successfully",Date:users})
}

module.exports={createUser,getUser,updateUser,deleteUser};