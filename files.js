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
// we use the fs.mkdir(path, options, callback) method to create a directory
// check if the directory exists before creating it

fs.mkdir("./assets", {recursive: true}, (error, path) => {
    if(error) {
        console.error(error);
    }
    console.log("Directory created successfully to", path);

    // because we used recursive:  true, undefined will be returned if the dir exists
    const finalPath = path || "./assets";
    console.log("Final path:", finalPath);
})




//deleting files
// use the fs.rm(path, options, callback) method to delete a file
fs.rm("./documents/doc1.txt", (error) => {
    if(error) {
        console.error(error);
    }
    console.log("File deleted successfully");
})