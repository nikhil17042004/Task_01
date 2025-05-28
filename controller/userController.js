const express = require('express');
const router=express.Router();
const userService= require('../service/userService');

router.get('/allUsers',(req,res)=>{
    const allUsers=userService.getAllUsers();
    res.json(allUsers);
});


router.post('/create',(req,res)=>{
    const {name,email} = req.body;

    if(!name || !email) {
        return res.status(400).json({message: 'name and email required'})
    }
      const newUser = userService.creatUsers(name, email);
  res.status(201).json(newUser);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const updated = userService.updateUser(id, name, email);

  if (!updated) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(updated);
});


router.delete('/:id', (req, res) => {

    const { id } = req.params;

  const wasDeleted = userService.deleteUser(id);

  if (!wasDeleted) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(204).send(); 
});

module.exports = router;
