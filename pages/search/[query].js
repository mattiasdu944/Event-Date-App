import React from 'react'

const SearchPage = () => {
    return (
        <div>SearchPage</div>
    )
}


export async function getServerSideProps(ctx) {

    return {
         props: {},
    }
}


export default SearchPage