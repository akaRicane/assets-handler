import React from 'react';

const AssetsList = ({ assets, cat, setChosenFile }) => {
    return (
        <table id={"assetList-table"}>
            <tbody id={"assetList-body"}>
                {
                    // eslint-disable-next-line
                    assets.map((asset, key) => {
                        const fileName = asset.file;
                        const fileCat = asset.cat;
                        if (fileCat === cat) {
                            return (
                                <tr id={"assetList-row-" + { key }}>

                                    <td id={"assetList-td-btn-" + { key }}><button onClick={() => setChosenFile(fileName)}>🔎</button></td>
                                    <td id={"assetList-td-" + { key }}>{fileName}</td>
                                </tr>
                            )}
                        })
                }
            </tbody>
        </table>
    );
};

export default AssetsList;