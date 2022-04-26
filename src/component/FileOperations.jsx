import React from 'react';
import axios from 'axios';

const FileOperations = ({ file, assetsFolder }) => {

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

    return (
        <div>
            <h3>File Operations</h3>
            <h4>{assetsFolder + '' + file}</h4>
            <button onClick={deleteFile}>delete</button>
        </div>
    );
};

export default FileOperations;