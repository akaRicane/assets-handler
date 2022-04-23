import React, { } from 'react';
import axios from 'axios';

const Analyzer = ({setAssetsList}) => {

    const requestAnalysis = () => {
        console.log('Request analysis to server ...');
        axios.get('https://localhost:3001/analyze')
            .then(res => {
                console.log(res.data);
                setAssetsList(res.data);
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