const fs = require("fs");

fs.writeFile("newFile.txt", "Hola Mundo", (e) => {
    if (e) throw new Error(e);
    console.log("File created");
}) 