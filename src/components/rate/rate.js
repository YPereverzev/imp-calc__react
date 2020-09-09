import React from 'react';
import PropTypes from 'prop-types';

function Rate(props) {
    return (
        <div>
            RATE: {rateCalc({...props})}

        </div>
    );
}

function rateCalc ({activeExporter}) {

    return activeExporter.experience.reduce((sum, item) => {
        return sum + item.rating
        }, 0
    )/activeExporter.experience.length
}

Rate.propTypes = {
    activeExporter: PropTypes.shape({
        experience: PropTypes.arrayOf(PropTypes.shape({
                rating: PropTypes.number
            })
        ).isRequired
    }).isRequired
};


export default Rate;