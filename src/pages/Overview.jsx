import React from 'react';
import { AnalyzerContext } from '../App';

import NavBar from '../component/NavBar';
import AssetsList from '../component/AssetsList';
import FileOperations from '../component/FileOperations';

const Overview = () => {

    const context = React.useContext(AnalyzerContext);
    const [categories, setCategories] = React.useState([]);
    const [toggleLister, setToggleLister] = React.useState("gif")
    const [chosenFile, setChosenFile] = React.useState("some/file.path");

    React.useEffect(() => {
        console.log("In use effect mouting Assets overview ...");
        var catList = [];
        context.assetsList.forEach((asset) => {
            const cat = asset["cat"];
            if (catList.includes(cat) === false) {
                catList.push(cat);
                addCategorie(cat);
            }
        });
    }, [context.assetsList]);

    const addCategorie = cat => {
        // console.log("Appending: " + cat);
        setCategories(state => [...state, cat]);
    }

    const handleCatButtonClick = (cat) => {
        setToggleLister(cat)
    }

    return (
        <div className='overview'>
            <NavBar />
            <div className='overwiew-assetsList'>
                <h3>Selection</h3>
                <table>
                    <tbody>

                        {
                            categories.map((asset, key) => {
                                if (key % 3 === 0) {
                                    return (
                                        <tr>
                                            <td><button id={"cat-btn" + { key }} onClick={() => handleCatButtonClick(asset)}>{asset}</button></td>
                                        </tr>
                                    )
                                }
                                else {
                                    return (
                                            <td><button id={"cat-btn" + { key }} onClick={() => handleCatButtonClick(asset)}>{asset}</button></td>
                                    )
                                }
                            }
                            )}
                    </tbody>
                </table>
                <div id="toggle status"><p>Sort by: {toggleLister}</p></div>
                <AssetsList assets={context.assetsList} cat={toggleLister} setChosenFile={setChosenFile} />
            </div>
            <div className='overwiew-fileOperations'>
                <FileOperations file={chosenFile} />
            </div>

        </div>
    );
};

export default Overview;