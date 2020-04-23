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

router.get('/:id',getSubscriber, (req,res)=>{
    res.json(res.subscriber);
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

router.patch('/:id',getSubscriber,async (req,res)=>{
    if(req.body.userName != null)
    {
        res.subscriber.username = req.body.userName;
    }
    if(req.body.userChannel != null)
    {
        res.subscriber.userChannel = req.body.userChannel;
    }

    try {
        const updateSubscriber = await res.subscriber.save();
        res.json(updateSubscriber);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
});

router.delete('/:id',getSubscriber, async (req,res)=>{
    try {
        await res.subscriber.remove();
        res.json({ message: 'Subscriber was deleted!'})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
});


async function getSubscriber(req,res,next)
{
    try {
        subscriber = await Subscriber.findById(req.params.id);
        if(subscriber == null)
        {
            return res.status(404).json({message: 'Subscriber not found'});
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

    res.subscriber = subscriber;
    next();
}

module.exports = router;
