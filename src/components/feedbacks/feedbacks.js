import React from 'react';
import Rate from '../rate';

function Feedbacks(props) {
    return (
        <div>
            <Rate activeExporter={props.activeExporter}/>
            {props.activeExporter.experience.map((feddback) => {
                return (    <div key={feddback.shipmentId}>
                            feedback: {feddback.manager}
                            feedback: {feddback.text}
                        </div>  );
            })}
        </div>
    );
}

export default Feedbacks;