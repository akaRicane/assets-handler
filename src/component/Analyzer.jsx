import React from 'react';
import axios from 'axios';

const Analyzer = ({setAssetsList, assetsFolder}) => {

    const requestAnalysis = () => {
        console.log('Request analysis to server ...');
        axios.get('https://localhost:3001/analyze', {params: {"folder": assetsFolder}})
            .then(res => {
                setAssetsList(res.data);
                console.log("Assets analysis is done ! (found " + res.data.length + ")");
            })
            .catch(err => {
                console.log("... server request failed !");
                console.log(err);
            });

    };

    return (
        <div>
            <button onClick={requestAnalysis}>Analyze</button>
        </div>
    );
};

export default Analyzer;