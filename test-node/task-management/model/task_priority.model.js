import pool from "../db/dbConfig.js";

export default class TaskPriority{
    constructor(id,priority){
        this.id = id;
        this.priority = priority;
    }

    static findAll(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                  let sql = "select * from task_priority";
                  con.query(sql,(err,result)=>{
                    con.release();
                    err ? reject(err) : resolve(result);
                  })
                }
                else
                 reject(err);
            })
        });
    }
}