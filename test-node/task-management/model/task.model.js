import pool from "../db/dbConfig.js";

export default class Task{
    constructor(id,title,description,status,date,priorityId){
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.date = date;
        this.priorityId = priorityId;
    }
    static findByPriority(id){
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,con)=>{
            if(!err){
              let sql = "select task.id,task.title,task.description,task.date,task.status,task.priorityId,task_priority.priority from task inner join task_priority on task.priorityId = task_priority.id where task.priorityId = ?";
              con.query(sql,[id*1],(err,result)=>{
                 con.release();
                 err ? reject(err) : resolve(result);
              });
            }
            else
              reject(err);
           })
        });
    }
    static findAll(){
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,con)=>{
            if(!err){
              let sql = "select task.id,task.title,task.description,task.date,task.status,task.priorityId,task_priority.priority from task inner join task_priority on task.priorityId = task_priority.id";
              con.query(sql,(err,result)=>{
                 con.release();
                 err ? reject(err) : resolve(result);
              });
            }
            else
              reject(err);
           })
        });
    }
    static create(task){
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,con)=>{
            if(!err){
               let sql = "insert into task(title,description,date,priorityId) values(?,?,?,?)";
               con.query(sql,[task.title,task.description,task.date,task.priorityId*1],(err,result)=>{
                con.release();
                err ? reject(err) : resolve(true);
               });
            }
            else
              reject(err);
           })
        })
    }
}