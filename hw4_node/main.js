const fse =  require('fs-extra');

let firstFolder = './firstFolder';
let secondFolder = './secondFolder';
let thirdFolder = './thirdFolfer';
let file = './firstFolder/newfile.txt'

function createFolder(folderName) { // function for creating folders
    fse.ensureDirSync(folderName);
};
function createFile(fileName) {
    fse.ensureFileSync(fileName);
};


//fse.copyFileSync


//fse.emptyDirSync(firstFolder);
//fse.removeSync(firstFolder);

createFolder(firstFolder);
createFile(file);
createFolder(secondFolder);
createFolder(thirdFolder);