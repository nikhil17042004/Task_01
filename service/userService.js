const users=require('../models/userModel');

const UserDTO=require('../dtos/userDto.js');

const getAllUsers = ()=>{
    return users;
}

const creatUsers=(name,email)=>{
    const id= Date.now().toString();
    const users= new UserDTO(id,name,email);
    users.push(user);
    return user;
}

const updateUser = (id,name,email)=>{
    const user= users.find(u => u.id === id);
    if(!user) return null;

    user.name = name || user.name;
    user.email= email || user.email;
    return user;
}

const deleteUser = (id)=>{
    const index = users.findIndex(u=>u.id === id);
    if(index === -1) return false;

    users.splice(index,1);
    return true;
}

module.exports={
    getAllUsers,
    creatUsers,
    updateUser,
    deleteUser,
}
