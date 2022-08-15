const mongoose = require('mongoose');
const { Schema, model } = mongoose;  

const celebritySchema = new Schema(
    {
        name: {type: String},
        occupation: {type: String, defualt: 'Unkown'},
        catchPhrase: {type: String}
    }
);

module.exports = model('Celebrity', celebritySchema);