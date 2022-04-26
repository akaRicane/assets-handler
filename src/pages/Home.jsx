import React from 'react';
import { AnalyzerContext } from '../App';

import {Analyzer} from '../component/Analyzer';
import NavBar from '../component/NavBar';

const Home = () => {

    const context = React.useContext(AnalyzerContext);

    const handleAssetsFolderInput = (event) => {
        context.setAssetsFolder(event.target.value);
    }

    return (
        <div className='home'>
            <NavBar />
            <div>
                <h3 id='home-pageTitle'>Home</h3>
                <Analyzer />
                <input id='home-folderInput' type='text' onChange={handleAssetsFolderInput} />
                <p id='home-folderQuery'>{context.assetsFolder}</p>
                <p id='home-nbAssetsFound'>Assets found: {context.assetsList.length}</p>
            </div>
        </div>
    );
};

export default Home;