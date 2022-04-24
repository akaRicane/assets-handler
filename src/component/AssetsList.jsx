import React from 'react';
import { AnalyzerContext } from '../App';

const AssetsList = () => {

    const context = React.useContext(AnalyzerContext);

    return (
        <table>
            <tbody>
                {
                    context.assetsList.map((elem, idx) => {
                        return (
                            <tr key={'assetList-cell-' + idx}>
                                <td>{elem}</td>
                            </tr>
                        )})
                }
            </tbody>
        </table>
    );
};

export default AssetsList;