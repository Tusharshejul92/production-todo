const Todo = require("../model/Todo")

exports.getTodo = async (req, res) => {
    try {
        const result = await Todo.find()
        res.status(200).json({ message: "ftech success", result })
    } catch (error) {
        res.status(500).json({ message: error.message || "somthing went rong" })
    }
}
exports.addTodo = async (req, res) => {

    try {
        await Todo.create(req.body)
        res.status(201).json({ message: "todo add success" })
    } catch (error) {
        res.status(500).json({ message: error.message || "somthing went rong" })
    }
}
exports.updateTodo = async (req, res) => {
    try {
        await Todo.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: "todo update success" })
    } catch (error) {
        res.status(500).json({ message: error.message || "somthing went rong" })
    }
}
exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "todo delete success" })
    } catch (error) {
        res.status(500).json({ message: error.message || "somthing went rong" })
    }
}