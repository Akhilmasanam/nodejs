const userform= require("./userform")
const querystring= require('querystring')

function userdatasubmited(req, resp){

    if(req.url=='/'){
       userform(req,resp)
    }
    else if(req.url=='/submit'){
        resp.write('<h1>the form had been submited successfully</h1>')
        let userdata=[];
        req.on('data',(chunks)=>{
             userdata.push(chunks)
        })
        req.on('end',()=>{
        let alldata= Buffer.concat(userdata).toString();
        let readabledata= querystring.parse(alldata)
        console.log(readabledata);
        resp.end()
    })
  

    }
    else{
        resp.write("<h1>internsl server error</h1>")
        resp.end()
    }
    
}

module.exports=userdatasubmited;