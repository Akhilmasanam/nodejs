const fs= require('fs')


function userForm(req, resp){
   
    if (req.url=="/"){
      fs.readFile("html/web.html","utf-8", (err, data)=>{
        if (err){
            resp.write("<h1>the user form is not visible</h1>")
        }
        else{
            resp.write(data)
        }
        resp.end()
      })
    }

}
module.exports=userForm;