const Task=require('../models/task');
const asyncWrapper=require('../middlleware/async')

const getAlltasks =
    async (req, res) => {
        try {
            const tasks=await Task.find({})
            res.status(200).json({
                tasks,
                amount:tasks.length
            })
        } catch (error) {
            res.status(500).json({
                message:error
            })
        }
}

const createTask = async(req, res) => {
    try {
        const Task= await Task.create(req.body);
        res.status(201).json({Task});
    } catch (error) {
        res.status(500).json({
            message:error
        })
    }

}
const getTask = async(req, res) => {
try {
    const {id:taskID}=req.params
    const task=await Task.findOne({_id:taskID})
    // res.send("Get single task");
    if(!task){
        return res.status(404).json({
            message:"No tak with the id"
        })
    }
    res.status(201).json({task});
    
} catch (error) {
    res.status(500).json({
        message:error
    })
}
}

const deleteTask = async(req, res) => {
    try {
        const {id:taskID}=req.params
        const task=await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({
                message:"No task with the id"
            })
        }
        res.status(200).json({
            task
        })
    } catch (error) {
        res.status(500).json({
            message:error
        })  
    }
    // res.send("delete task");
}

const updateTask = async(req, res) => {
    try {
        const {id:taskID} =req.params;
        const task=await Task.findOneAndUpdate({_id:taskid},req.body,
            {
                new:true,
                runValidators:true
            })
        
        if(!task){
            return res.status(404).json({
                message:"No task with the id"
            })
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({
            message:error
        })
    }
    // res.send("update task");
}

module.exports = {
    getAlltasks, createTask, getTask, updateTask, deleteTask
}
