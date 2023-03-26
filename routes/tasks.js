const express=require('express');
const {getAlltasks, createTask, getTask,updateTask,deleteTask}=require('../controllers/tasks');
const router=express.Router();



router.route('/').get(getAlltasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask); 

module.exports=router;