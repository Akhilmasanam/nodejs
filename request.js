const { log } = require('console')
const path = require('path')
const filepath="/root/akhil.txt"

console.log(path.extname(filepath))
console.log(path.dirname(filepath))
console.log(path.basename(filepath))


console.log(path.resolve(path.dirname(filepath), path.basename(filepath)));

console.log(__dirname);
console.log(__filename);



// const http = require('http');
// const fs = require('fs');

// http.createServer((req, resp) => {

//     let file = "home";   // default page

//     if (req.url !== "/") {
//         file = req.url.replace("/", "");  // remove '/'
//     }

//         // toreplaceall we need to use req.url.replace(/\//g,"")
// //         ✅ / ... /
// // These slashes define a regex pattern
// // \/
// // / is a special character in regex (used to define regex itself)
// // So to match a real /, we escape it using \

// // regex means regular expressions



//   ======================================================  

//     // Serve CSS
//     if (req.url === "/page.css") {
//         fs.readFile("pages/page.css", "utf-8", (error, data) => {
//             if (error) {
//                 resp.writeHead(404);
//                 resp.end("CSS not found");
//             } else {
//                 resp.writeHead(200, { "Content-Type": "text/css" });
//                 resp.write(data);
//                 resp.end();
//             }
//         });
//         return;  // stop further execution
//     }

//     // First read header
//     fs.readFile("pages/header.html", "utf-8", (err, headerdata) => {

//         if (err) {
//             resp.writeHead(500);
//             resp.end("Header not found");
//             return;
//         }

//         // Then read page
//         fs.readFile("pages/" + file + ".html", "utf-8", (error, data) => {

//             if (error) {
//                 resp.writeHead(404);
//                 resp.end("<h1>Page not found</h1>");
//             } else {
//                 resp.writeHead(200, { "Content-Type": "text/html" });
//                 resp.write(headerdata + data);
//                 resp.end();
//             }
//         });

//     });

// }).listen(3800);



// ========================================================








// const http = require('http')
// const fs= require('fs')


// http.createServer((req,resp)=>{
   

//     let file="/home";
//     if(req.url !="/"){
//         file=req.url;
//     }


// //    let collectiveheader;
//     // fs.readFile("pages/header.html","utf-8", (error, headerdata)=>{
//     //     if(error){
//     //         console.log("can not find header")
//     //     }
        
//     //        collectiveheader= headerdata
//     // })

//     let collectiveheader= fs.readFileSync("pages/header.html","utf-8",)

//     console.log(req.url)
//     if(req.url!="/page.css"){
//         // GET /favicon.ico
//     fs.readFile("pages"+ file +".html", "utf-8", (error, data)=>{
//         if(error){
//             console.log(error)
//         }
//         resp.writeHead(200,{"Content-type":"text/html"})
//         resp.write(collectiveheader+""+data)
//         resp.end()
//     })
// }
// else if(req.url=="/page.css"){
//     fs.readFile("pages/page.css", "utf-8",(error, data)=>{
//         if(error){
//             console.log("css is not found")
//         } 
//         resp.writeHead(200,{"Content-type":"text/css"})
//         resp.write(data);
//         resp.end()
//     })

// }

// }).listen(3800);








// http.createServer((req,resp)=>{
//    const page= fs.readFileSync("pages/page.html", "utf-8")
//    resp.write(page);
//    resp.end()
// }).listen(3800);


















// const http =require('http')
// const fs= require('fs')


// const operations=process.argv[2]
//  const filename= process.argv[3]
//     const filedata= process.argv[4]
//     const fullname="html/"+filename+".txt"

// if(operations=="create"){
//     // const filename= process.argv[3]
//     // const filedata= process.argv[4]
//     // const fullname="html/"+filename+".txt"
//     fs.writeFileSync(fullname, filedata)
// }else if (operations=="read"){
//    const filecontents= fs.readFileSync(fullname, "utf-8")
//    console.log(filecontents)

// }else if(operations=="append"){
//    fs.appendFileSync(fullname, filedata)
//     console.log("updated the file")
// }else if(operations=="delete"){
//     const deleatfile=fs.unlinkSync(fullname)
//     console.log("file had been delated successfulley")
// }
















// const http= require('http')
// const userformsubmited=require("./userdatasubmit") 


// http.createServer((req,resp)=>{
//     resp.writeHead(200,{"Content-Type":"text/html"})
//     userformsubmited(req, resp)

// }).listen(3800);
















// const http = require ('http')
// const fs= require('fs')
// const querystring= require('querystring')

// http.createServer((req,resp)=>{
//     fs.readFile("html/web.html","utf-8", (err, data)=>{
//         if(err){
//             resp.writeHead(500,{"Content-Type":"text/html"})
//             resp.write("<h1>internal server error</h1>")
//             resp.end()
//         }
//         else{
//             resp.writeHead(200,{"Content-Type":"text/html"})
//             if(req.url=="/"){
//             resp.write(data)
//             }
//             else if(req.url=="/submit"){
//             let userdata=[];
//             req.on("data",(chunks)=>{
//                 userdata.push(chunks)
//             })
//             req.on("end",()=>{
//               let alldata= Buffer.concat(userdata).toString();
//               let readabledata= querystring.parse(alldata)
          


//              console.log(chunks)


// // console.log(userdata)

// //               [
// //     <Buffer 75 73 65 72 6e 61 6d 65 3d 61 6b 68 69 6c 26 70 61 73 73 77 6f 72 64 3d 31 32 33>
// // ]

// //                    console.log(alldata)
// //                    username=akhil&password=123
// // file created successfully
// // username=akhil&password=123
// // file created successfully

// // console.log(readabledata)
// // [Object: null prototype] { username: 'akhil', password: '123' }
// // file created successfully

//               let userinput= " my username is "+readabledata.username+ " and the password is "+ readabledata.password
             
//             //   fs.writeFileSync("root/"+ readabledata.username+".txt", userinput)

//             fs.writeFile("root/"+readabledata.username+".txt", userinput,"utf-8",(err)=>{
//             if(err){
//                 console.log("internal server error")

//             }else{
//                 console.log("file created successfully")
//             }
//         }
//         )


//             })
//             resp.write("<h1> data had been submited</h1>")
//         }
//         }resp.end() 

//     })

// }).listen(4800)









// const http = require ('http')
// const fs= require('fs')
// const querystring= require('querystring')

// http.createServer((req,resp)=>{
//     fs.readFile("html/web.html","utf-8", (err, data)=>{
//         if(err){
//             resp.writeHead(500,{"Content-Type":"text/html"})
//             resp.write("<h1>internal server error</h1>")
//             resp.end()
//         }
//         else{
//             resp.writeHead(200,{"Content-Type":"text/html"})
//             if(req.url=="/"){
//             resp.write(data)
//             }
//             else if(req.url=="/submit"){
//             let userdata=[];
//             req.on("data",(chunks)=>{
//                 userdata.push(chunks)
//             })
//             req.on("end",()=>{
//               let alldata= Buffer.concat(userdata).toString();
//               let readabledata= querystring.parse(alldata)
//               console.log(readabledata)
//             })
//             resp.write("<h1> data had been submited</h1>")
//         }
//         }resp.end()

//     })

// }).listen(4800)















// const http = require('http')
// const fs= require('fs')


// http.createServer((req, resp)=>{
//     fs.readFile("html/web.html","utf-8",(err, data)=>{
          
//     if(err){
//         resp.writeHead( 500, {'Content-Type': "Text/Html"})
//         resp.write('<h1> internal error occur</h1>')
//         resp.end()
//     }
//          resp.writeHead(200,{"content-Type":"Text/Html"})
//     if(req.url=="/"){
//         resp.write(data)
//         resp.end()
//     }
//     else if(req.url=="/submit"){
//         resp.write("<h1>the document had been submited</h1>")
//         resp.end()
//     }
//     })

// }).listen(4800)









// const http = require('http')
// const fs= require('fs')
// http.createServer((req, resp)=>
// fs.readFile("html/web.html","utf-8",(err, data)=>{
//     if(err){
//         resp.writeHead(400,{"Content-Type": "Text/Plane"})
//         resp.writable("internal server error happens")
//         resp.end()
//     }
//     else{
//          resp.writeHead(200,{"Content-Type":"Text/Html"})
//          resp.write(data);
//          resp.end()
//     }
// })

// ).listen(4288)







// const args= process.argv
// const http= require('http')

// http.createServer((req, resp)=>{
//     resp.write("<h1> this is a header</h1>")
//     resp.end()
// }).listen(args[2])





// const http = require('http')


// http.createServer((req,resp)=>{
//     resp.setHeader("Content-Type","Text/html")
// console.log(req.method)

// if(req.url=="/"){
//    resp.write("<h1>this is first</h1>")
// }
// else if(req.url=="/second"){
//     resp.write("<h1>this is second</h1>")

// }
// else if(req.url== "/third"){
//     resp.write("this is third")
// }
// else{
//     resp.write("404")
// }

// resp.end("this is responce")
// }).listen(4800)






// const http= require('http')

// const userdata=[
//     {
//     name:"akhil",
//     age:21,
//     rollno:51
// },
// {
//     name:"akhil",
//     age:21,
//     rollno:51
// },
// {
//     name:"akhil",
//     age:21,
//     rollno:51
// }
// ]


// const userlist=http.createServer((req, resp)=>{
//   resp.setHeader("Content-Type","Text/json")
//     resp.write(JSON.stringify(userdata))
//     resp.end()
// })

// userlist.listen(4900)


// http.createServer((req,resp)=>{
//     resp.write('<h2>this is a header<h2>')
//     resp.end()
// }).listen(4800)