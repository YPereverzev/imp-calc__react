import React from 'react';
import PropTypes from 'prop-types';

function Rate(props) {
    // debugger;
    return (
        <div>
            RATE: {props.activeExporter.experience.reduce((sum, item) => {
                    // debugger;
                    return sum + item.rating
                    }, 0
                )/props.activeExporter.experience.length}
        </div>
    );
}

Rate.propTypes = {
    activeExporter: PropTypes.shape({
        experience: PropTypes.arrayOf(PropTypes.shape({
                rating: PropTypes.number
            })
        )
    }).isRequired
};


export default Rate;