const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'file.txt');

// Read the file and log its contents
const fileData = fs.readFileSync(filePath);
console.log(fileData); // this gives us a buffer stream
console.log(fileData.toString()); // this gives us the actual content of the file, when we explicitly convert it to a string

function readFileContent(filePath) {
	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) {
			console.error(`Error reading file from disk: ${err}`);
		} else {
			console.log(`File content:\n${data}`);
		}
	});
}

function writeFileContent(filePath, content) {
	fs.writeFile(filePath, content, 'utf8', (err) => {
		if (err) {
			console.error(`Error writing file: ${err}`);
		} else {
			console.log('File has been written');
		}
	});
}

function appendToFile(filePath, content) {
	fs.appendFile(filePath, content, 'utf8', (err) => {
		if (err) {
			console.error(`Error appending to file: ${err}`);
		} else {
			console.log('Content has been appended');
			readFileContent(filePath);
		}
	});
}

readFileContent(filePath);
writeFileContent(filePath, 'File content written by Node.js!');
readFileContent(filePath);

fs.appendFileSync(filePath, 'Hello World!');

setTimeout(() => {
	appendToFile(filePath, '\nFile is appended with this content.');
}, 1000);

function copyFileContent(sourceFilePath, destinationFilePath) {
	fs.copyFile(sourceFilePath, destinationFilePath, (err) => {
		if (err) {
			console.error(`Error copying file: ${err}`);
		} else {
			console.log('File has been copied');
			readFileContent(destinationFilePath);
		}
	});
}

const newFilePath = path.join(__dirname, 'copy_file.txt');
copyFileContent(filePath, newFilePath);
