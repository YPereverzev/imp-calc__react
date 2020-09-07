import React from 'react';
import Rate from '../rate';
import PropTypes from "prop-types";

function Feedbacks(props) {
    // debugger;
    return (
        <div>
            <Rate activeExporter={props.activeExporter}/>
            {props.activeExporter.experience.map((experience) => {
                return (    <div key={experience.shipmentId}>
                            <p>
                                Manager: {experience.manager}
                            </p>
                        </div>  );
            })}
        </div>
    );
}


Feedbacks.propTypes = {
    activeExporter: PropTypes.shape({
        experience: PropTypes.arrayOf(PropTypes.shape({
                manager: PropTypes.string,
        }))
    }).isRequired
}


export default Feedbacks;