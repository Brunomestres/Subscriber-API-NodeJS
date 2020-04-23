const mongoose = require('mongoose');

const subscriberSchema = mongoose.Schema({
    username: {
        type: String,
        required:true
    },
    userChannel: {
        type: String,
        required:true
    },
    userData:{
        type: Date,
        required:true,
        default: Date.now
    }
});

module.exports = mongoose.model('Subscriber', subscriberSchema);