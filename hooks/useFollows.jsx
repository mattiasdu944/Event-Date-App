import React from 'react'

const useFollows = () => {
    const url = 'http://localhost:3000/api/followers'

    const addFollow = async ( data ) => {
        const response = await fetch( url ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }

    const deleteFollow = async ( id ) => {
        const response = await fetch( `http://localhost:3000/api/followers/${id}` ,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }


    return [ addFollow, deleteFollow ]
}

export default useFollows