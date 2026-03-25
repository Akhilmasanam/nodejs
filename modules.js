const {log} = require('console')

let fs=require('fs')

let os= require('os')

fs.writeFileSync("dummy.txt","this is a dummy text")



// console.log(os.platform())
// console.log(os.hostname())
// console.log(os.cpus())


// console.log(process.cwd())
// console.log(process.pid)


log("this is a log import")
