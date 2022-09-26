const fse =  require('fs-extra');

const folders = ['./firstFolder', './secondFolder', './thirdFolfer'];
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

createFolder(folders[0]);
createFile(folders[0] + file);
createFolder(folders[1]);
moveObject(folders[0] + file, folders[1] + file);
createFolder(folders[2]);
copyObject(folders[1] + file, folders[2] + file);
emptyFolder(folders[1]);
removeObject(folders[0]);