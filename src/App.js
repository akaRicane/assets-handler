import React from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Overview from './pages/Overview';

const AnalyzerContext = React.createContext();

const App = () => {

    const [assetsList, setAssetsList] = React.useState(["init"]);
    const [assetsFolder, setAssetsFolder] = React.useState('/Users/ricane/Documents/Projets/coding/assets_tests');

    React.useEffect(() => {
        requestAssetsDb()
    }, [])

    const requestAssetsDb = () => {
        console.log('Request loadAssetsDb to server ...');
        axios.get('https://localhost:3001/loadAssetsDb')
            .then(res => {
                setAssetsList(res.data.data);
                console.log("assetsDb is loaded ! (found " + res.data.data.length + " from: "+ res.data.folder + ")");
            })
            .catch(err => {
                console.log("... server request failed !");
                console.log(err);
            });

    };

    return (
        <div className='app'>
            <AnalyzerContext.Provider value={{ assetsList, assetsFolder, setAssetsList, setAssetsFolder }}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/overview' element={<Overview />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </AnalyzerContext.Provider>
        </div>
    );
};

export { App, AnalyzerContext };