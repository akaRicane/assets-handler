import { useState } from 'react';
import Analyzer from './component/Analyzer';
import './App.css';

function App() {

    const [assets, setAssets]= useState({});

    return (
        <div>
            <h1>App homepage</h1>
            <Analyzer assets={assets}/>
        </div>
    );
}

export default App;
