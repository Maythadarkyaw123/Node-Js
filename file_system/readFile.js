//READING FILE
// const fs = require("fs");

// fs.readFile("sample.txt", "utf8", (err, data) =>{
//     if(err){
//         console.log("Error found!", err);
//         return;
//     }
//     console.log("File Content: ", data);
// });

//WRITING FILE
// const fs = require("fs");

// fs.writeFile("writeFile.txt", "Hello This is new file.", (err)=>{
//     if(err){
//         console.log("Error found!", err);
//         return;
//     }
//     console.log("File write successfully");
// });

//TEXT APPEND
// const fs = require("fs");

// fs.appendFile("writeFile.txt","\nThis is append text.", (err)=>{
//     if(err){
//         console.log("Error Found!", err);
//         return;
//     }
//     console.log("Append Successfully.");
// });

//DELETE FILE
const fs = require("fs");

fs.unlink("sample.txt", (err) => {
  if (err) {
    console.log("Error Found!", err);
    return;
  }
  console.log("File Delete Successfully");
});
