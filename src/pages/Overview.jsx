import React from 'react';

import AssetsList from '../component/AssetsList';
import NavBar from '../component/NavBar';

const Overview = () => {

    return (
        <div className='overview'>
            <NavBar />
            <div>
                <h3>Overview</h3>
                <AssetsList />
            </div>
        </div>
    );
};

export default Overview;