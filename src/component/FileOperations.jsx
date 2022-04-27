import React from 'react';
import axios from 'axios';

const FileOperations = ({ file, assetsFolder }) => {

    const [renameInput, setRenameInput] = React.useState("");

    React.useEffect(() => {
        setRenameInput(assetsFolder + file);
    }, [file, assetsFolder])

    const handleInputText = (event) => {setRenameInput(event.target.value);}

    const deleteFile = () => {
        console.log("Query to delete: " + file + "(" + assetsFolder + ")");
        axios.get('https://localhost:3001/file_remove', { params: { "file": file, "folder": assetsFolder } })
            .then(res => {
                alert("Delete file is: " + res.data + " -> " + file);
            })
            .catch(err => {
                console.log("... server request failed !");
                console.log(err);
            });

    };

    const renameFile = () => {
        const oldPath = assetsFolder + file;
        var ext = oldPath.split(".").at(1);
        var splitPath = oldPath.split("/");
        splitPath.pop(-1);
        splitPath.push(renameInput + '.' + ext);
        const newPath = splitPath.join("/");
        console.log("Query to rename: " + oldPath + " in: " + newPath);
        axios.get('https://localhost:3001/file_rename', { params: { "oldPath": oldPath, "newPath": newPath } })
            .then(res => {
                alert("Rename file is: " + res.data + " -> " + newPath);
            })
            .catch(err => {
                console.log("... server request failed !");
                console.log(err);
            });

    };

    return (
        <div>
            <h3>File Operations</h3>
            <h4>{assetsFolder + '' + file}</h4>
            <input onChange={event => handleInputText(event)}/>
            <button onClick={renameFile}>rename</button>
            <button onClick={deleteFile}>delete</button>
        </div>
    );
};

export default FileOperations;