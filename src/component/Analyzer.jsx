import React from 'react';
import axios from 'axios';
import { AnalyzerContext } from '../App';

const Analyzer = () => {

    const context = React.useContext(AnalyzerContext);

    const requestAnalysis = () => {
        console.log('Request analysis to server ...');
        axios.get('https://localhost:3001/analyze', { params: { "folder": context.assetsFolder } })
            .then(res => {
                context.setAssetsList(res.data);
                console.log("Assets analysis is done ! (found " + res.data.length + ")");
            })
            .catch(err => {
                console.log("... server request failed !");
                console.log(err);
            });

    };

    return (
        <div id='analyzer'>
            <button id='analyzer-Btn' onClick={requestAnalysis}>Analyze</button>
        </div>
    );
};

export default Analyzer;