const fse =  require('fs-extra');

let firstFolder = './firstFolder';
let secondFolder = './secondFolder';
let thirdFolder = './thirdFolfer';
let file = '/newfile.txt';

function createFolder(folderName) { // function for creating folders
    fse.ensureDirSync(folderName);
};
function createFile(fileName) {
    fse.ensureFileSync(fileName);
};
function moveObject(object1,object2) { // src <String> dest <String> Note: When src is a file, dest must be a file and when src is a directory, dest must be a directory.
    fse.moveSync(object1,object2, { overwrite: true })
}




//fse.emptyDirSync(firstFolder);
//fse.removeSync(firstFolder);

createFolder(firstFolder);
createFile(firstFolder + file);
createFolder(secondFolder);
moveObject(firstFolder + file, secondFolder + file);
createFolder(thirdFolder);

