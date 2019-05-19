const [fs, path] = [require('fs'), require('path')];
const HERE = path.resolve();

const splitter = fileArr => {
    let index = 1;

    return fileArr.forEach(file => {
        const wordArr = file.split('.');
        const ext = wordArr[wordArr.length - 1];

        if (ext === 'avi') {
            fs.renameSync(
                path.join(HERE, file),
                path.join(HERE, `Episode ${index}.${ext}`)
            );
            return (index += 1);
        }
    });
};

const getDirectory = (path, callback) =>
    fs.readdir(path, (err, content) =>
        err ? console.error(err) : callback(null, content)
    );

getDirectory(HERE, (err, files) =>
    err ? console.error(err) : splitter(files)
);
