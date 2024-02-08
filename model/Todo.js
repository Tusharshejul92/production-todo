const mongoose = require("mongoose")


const toodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model("todo", toodoSchema)