import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Overview from './pages/Overview';

const AnalyzerContext = React.createContext();

const App = () => {

    const [assetsList, setAssetsList] = React.useState(["init"]);
    const [assetsFolder, setAssetsFolder] = useState('/Users/ricane/Documents/Projets/coding/mapping/public/assets');

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