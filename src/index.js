const express =require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const mysql=require('mysql2'); 
const app=express();
app.use(cors());
app.use(bodyparser.json());


//database connection
const db =mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'',
   database:'empower',
   port:3306
});
//check database connection
db.connect(err=>{
    if(err) {console.log(err,'dberr');
}
console.log('database connected...');
})
//get all data complaint

app.get('/complaint',(req,res)=>{
    let qr=`select * from complaint`;
    db.query(qr,(err,result)=>{
    if(err)
    {
    console.log(err,'errs');
    }
    if(result.length>0)
    {
        res.send({
            message:'all complaint data',
            data:result
        });
    }
});
});

//get all data appointement
app.get('/appointement',(req,res)=>{
  let qr=`select * from appointement`;
  db.query(qr,(err,result)=>{
  if(err)
  {
  console.log(err,'errs');
  }
  if(result.length>0)
  {
      res.send({
          message:'all appointement data',
          data:result
      });
  }
});
});
//get single data complaint
app.get('/complaint/:id_comp',(req,res)=>{
    let gID=req.params.id_comp;
    let qr=`select * from complaint where id_comp=${gID} `;
    db.query(qr, (err, result) => {
        if (err) {
          console.log(err);
        }
        if (result.length > 0) {
          res.send({
            message: "get single data",
            data: result,
          });
        } else {
          res.send({
            message: "data not found",
          });
        }
      });
    });
    //get single data appointement
    app.get('/appointement/:id_app',(req,res)=>{
      let gID=req.params.id_comp;
      let qr=`select * from appointement where id_app=${gID} `;
      db.query(qr, (err, result) => {
          if (err) {
            console.log(err);
          }
          if (result.length > 0) {
            res.send({
              message: "get single data",
              data: result,
            });
          } else {
            res.send({
              message: "data not found",
            });
          }
        });
      });

    //create data complaint
    app.post("/complaint", (req, res) => {
        console.log(req.body, "createddata");
        let dater = req.body.dater;
        let description = req.body.description;
        let status = req.body.status;
       
      
        let qr = `insert into complaint (dater,description,status) values('${dater}','${description}','${status}')`;
        db.query(qr, (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log(result, "result");
          res.send({
            message: "data inserted",
          });
        });
      });
      //create data appointement
      app.post("/appointement", (req, res) => {
        console.log(req.body, "createddata");
        let date_app = req.body.date_app;
        let hour = req.body.hour;
        
       
      
        let qr = `insert into appointement (date_app,hour) values('${date_app}','${hour}')`;
        db.query(qr, (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log(result, "result");
          res.send({
            message: "data inserted",
          });
        });
      });
      //update data complaint
      app.put("/complaint/:id_comp", (req, res) => {
        console.log(req.body, "updatedata");
      
        let gID = req.params.id_comp;
        let dater = req.body.dater;
        let description = req.body.description;
        let status = req.body.status;
        
      
        let qr = `update complaint set dater='${dater}',description='${description}',status='${status}'  where id_comp =${gID}`;
        db.query(qr, (err, result) => {
          if (err) {
            console.log(err);
          }
          res.send({
            message: "data updated",
          });
        });
      });
      //update data appointement
      app.put("/appointement/:id_app", (req, res) => {
        console.log(req.body, "updatedata");
      
        let gID = req.params.id_app;
        let date_app = req.body.date_app;
        let hour = req.body.hour;
    
        
      
        let qr = `update appointement set dater='${date_app}',description='${hour}'  where id_app =${gID}`;
        db.query(qr, (err, result) => {
          if (err) {
            console.log(err);
          }
          res.send({
            message: "data updated",
          });
        });
      });
      //delete complaint
      app.delete("/complaint/:id_comp", (req, res) => {
        let qID = req.params.id_comp;
      
        let qr = `delete from complaint where id_comp ='${qID}'`;
        db.query(qr, (err, result) => {
          if (err) {
            console.log(err);
          }
          res.send({ message: "data deleted" });
        });
      });
      //delete appointement
      app.delete("/appointement/:id_app", (req, res) => {
        let qID = req.params.id_app;
      
        let qr = `delete from appointement where id_app ='${qID}'`;
        db.query(qr, (err, result) => {
          if (err) {
            console.log(err);
          }
          res.send({ message: "data deleted" });
        });
      });

app.listen(3000,()=>{
    console.log('server running..');
})
