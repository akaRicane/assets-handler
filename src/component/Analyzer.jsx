import React, { useState } from 'react';
import axios from 'axios';

const Analyzer = (props) => {

    const [analysis, setAnalysis] = useState({});

    const requestAnalysis = () => {
        console.log('Analyzing ...');
        axios.post('https://localhost:3001/')
        .then(res => {
            console.log(res);
            setAnalysis(res)
        })
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <div>
            <button onClick={requestAnalysis} >Analyze</button>
        </div>
    );
};

export default Analyzer;