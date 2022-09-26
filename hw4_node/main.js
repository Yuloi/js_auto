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
    fse.moveSync(object1,object2, { overwrite: true });
};
function copyObject(obj1,obj2) {
    fse.copySync(obj1,obj2);
};
function emptyFolder(dir) { //empty folder, if folder doesn't exist create empty folder 
    fse.emptyDirSync(dir);
}
function removeObject(path) { // remove dir or file, if path doesnt exist do nothing
    fse.removeSync(path);
}

createFolder(firstFolder);
createFile(firstFolder + file);
createFolder(secondFolder);
moveObject(firstFolder + file, secondFolder + file);
createFolder(thirdFolder);
copyObject(secondFolder + file, thirdFolder + file);
emptyFolder(secondFolder);
removeObject(firstFolder);