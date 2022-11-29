const useFollows = () => {
    const url = `${process.env.NEXT_PUBLIC_HOSTNAME}/api/followers`

    const addFollow = async ( data ) => {
        const response = await fetch( url ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(data)
        })
    }

    const deleteFollow = async ( id ) => {
        const response = await fetch( `${url}/${id}` ,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }


    return [ addFollow, deleteFollow ]
}

export default useFollows