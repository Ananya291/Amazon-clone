import React from 'react'
import Header from './Header'

function Main({component}) {
    return (

        <div>
            
            <Header/>
        {component}
        </div>
    )
}

export default Main
