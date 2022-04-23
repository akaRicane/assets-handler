import React, { useState } from 'react';

import AssetsList from './component/AssetsList';
import Analyzer from './component/Analyzer';
import './App.css';


const App = () => {

    const [assetsList, setAssetsList] = useState(['empty']);
    const [assetsFolder, setAssetsFolder] = useState('/Users/ricane/Documents/Projets/coding/mapping/public/assets');

    const handleAssetsFolderInput = (event) => {
        setAssetsFolder(event.target.value);
    }

    return (
        <div>
            <h1>App homepage</h1>
            <Analyzer setAssetsList={setAssetsList} assetsFolder={assetsFolder}/>
            <input type='text' onChange={handleAssetsFolderInput}/>
            <p>{assetsFolder}</p>
            <AssetsList assetsList={assetsList} />
        </div>
    );
}

export default App;
