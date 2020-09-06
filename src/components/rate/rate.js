import React from 'react';

function Rate(props) {
    return (
        <div>
            RATE: {props.activeExporter.experience.
                reduce((sum, item) => {
                    // debugger;
                    return sum + item.rating
                    }, 0
                )/props.activeExporter.experience.length}
        </div>
    );
}

export default Rate;