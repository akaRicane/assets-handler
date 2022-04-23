const AssetsList = ({ assetsList }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Assets List</th>
                </tr>
            </thead>

            <tbody>
                {
                    assetsList.map((elem, idx) => {
                        return (
                            <tr key={'assetList-cell-'+idx}>
                                <td>{elem}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default AssetsList;