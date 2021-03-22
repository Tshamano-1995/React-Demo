import React from 'react'

const hello = () => {
    // return (
    //     <div>
    //         <h1>hello vishwas</h1>
    //     </div>
    return React.createElement(
        'div',
        null,
        React.createElement('h1',null,'Hello vishwas')
    )
}


export default hello
