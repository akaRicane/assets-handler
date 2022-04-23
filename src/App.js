import React, { useState } from 'react';

import AssetsList from './component/AssetsList';
import Analyzer from './component/Analyzer';
import './App.css';


const App = () => {

    const [assetsList, setAssetsList] = useState(['1', '2', 'rooo']);

    return (
        <div>
            <h1>App homepage</h1>
            <Analyzer setAssetsList={setAssetsList}/>
            <AssetsList assetsList={assetsList} />
        </div>
    );
}

export default App;
