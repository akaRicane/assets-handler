import React from 'react';
import axios from 'axios';
import { AnalyzerContext } from '../App';

const requestAnalysis = (folder, functionSetter) => {

    console.log('Request analysis to server ...');
    axios.get('https://localhost:3001/analyze', { params: { "folder": folder } })
        .then(res => {
            functionSetter(res.data);
            console.log("Assets analysis is done ! (found " + res.data.length + ")");
        })
        .catch(err => {
            console.log("... server request failed !");
            console.log(err);
        });

};

const Analyzer = () => {

    const context = React.useContext(AnalyzerContext);

    const handleBtnClick = () => {
        requestAnalysis(context.assetsFolder, context.setAssetsList);
    }

    return (
        <div id='analyzer'>
            <button id='analyzer-Btn' onClick={handleBtnClick}>Analyze</button>
        </div>
    );
};

export { Analyzer, requestAnalysis};