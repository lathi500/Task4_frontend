
const THolderData = ({tholders}) => {
    return (
        <>
            {
                tholders.slice(0, 100).map((th) => {
                    const {id, HolderAddress, Balance} = th;
                    console.log(th);
                    return (
                        <tr key={id} >
                            <td>{HolderAddress}</td>
                            <td>{Balance}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default THolderData   ;