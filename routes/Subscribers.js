const express = require('express');
const Subscriber = require('../models/Subscriber');
const router = express.Router();

router.get('/',async (req,res)=>{
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers)
    } catch (error) {
        res.status(500).json({ message: error.message });        
    }
});

router.get('/:id', (req,res)=>{
    
});

router.post('/',async (req,res)=>{
    const subscribers = new Subscriber({
        username: req.body.userName,
        userChannel: req.body.userChannel
    });

    try {
        const newSubscriber = await subscribers.save();
        res.status(201).json(newSubscriber);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/:id',(req,res)=>{
    
});

router.delete('/:id',(req,res)=>{
    
});


module.exports = router;