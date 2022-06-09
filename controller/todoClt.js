const _ = require('lodash')
const Todo = require('../models/todo')

const todoClt = {
    getAllTodo:async(req,res)=>{
        try {
            const todo = await Todo.find()
            const result = await Promise.allSettled([
                Todo.countDocuments()
            ])
            const count = result[0].status ==="fulfilled"?result[0].value:0
        
            res.json({todo,count})
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    GetCompltedTodo: async(req,res)=>{
        try {
            const result = await Todo.find()
            const todo = result.filter(list=>list.completed)
            const count = todo.length
            res.json({todo,count})
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    GetActiveToDo:async(req,res)=>{
        const result = await Todo.find()
        const todo = result.filter(list=>!list.completed)
        const count = todo.length
        // let data =[]
        // const r = len=>Math.random().toString(36).substring(len)
        // for(let i =0; i<500000;i++){
        //     data.push({
        //         text:r(7)
        //     })
        // }
        // const text = "Learn English"
        // console.time('indexing_time')
        // const textIndex = _.invertBy(data,"text")
        // console.timeEnd('indexing_time')
        // console.time('search_time')
        // const log = textIndex[text]
        // console.timeEnd('search_time')
        // console.log(log?'Found':"Not Found")
         res.json({todo,count})
    },
    addTodo:async(req,res)=>{
        try {
            const {text} = req.body
            const newTodo = new Todo({text})
            const newData=  await newTodo.save()
            res.json({newData})
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    EditTodo:async(req,res)=>{
        try {
            const {completed,text} = req.body
            const todo = await Todo.findByIdAndUpdate({_id:req.params.id},{completed:completed,text:text})
            res.json({todo})
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    DeleteTodo:async(req,res)=>{
        try {
            await Todo.findByIdAndDelete({_id:req.params.id})
            res.json("Delete Success")
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    }
}

module.exports = todoClt