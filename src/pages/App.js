import React, { useState } from 'react';

import Analyzer from '../component/Analyzer';
import AssetsList from '../component/AssetsList';
import NavBar from '../component/NavBar';

import './App.css';

const App = () => {

    const [assetsList, setAssetsList] = useState(["test"]);
    const [assetsFolder, setAssetsFolder] = useState('/Users/ricane/Documents/Projets/coding/mapping/public/assets');

    const handleAssetsFolderInput = (event) => {
        setAssetsFolder(event.target.value);
    }

    return (
        <div>
            <NavBar />
            <h3>App</h3>
            <Analyzer setAssetsList={setAssetsList} assetsFolder={assetsFolder} />
            <input type='text' onChange={handleAssetsFolderInput} />
            <p>{assetsFolder}</p>
            <AssetsList assetsList={assetsList} />
        </div>
    );
};

export default App;