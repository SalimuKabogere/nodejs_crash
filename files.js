import fs from "node:fs";


// reading files
fs.readFile("./documents/doc1.txt", "utf8", (data, error) => {
    if(error) {
        console.error(error);
        return;
    }
    console.log(data);
})




//writing files
const content = "this is my work";
fs.writeFile("./documents/doc2.txt", content, (error) => {
    if(error) {
        console.error(error);
    }
    console.log("File written successfully");
})






//directories







//deleting files