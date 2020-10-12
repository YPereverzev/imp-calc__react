import React from 'react';


function Choice(props) {
     
    return (
        <div>
            <button onClick={() => props.setComponent('Products')}>Products</button>
            <button onClick={() => props.setComponent('Feedbacks')}>Feedbacks</button>
        </div>
    );
}

export default Choice;