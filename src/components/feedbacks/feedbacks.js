import React from 'react';
import Rate from '../rate';
import PropTypes from 'prop-types';
import FeedbackRow from '../feedbackrow';
import AddFeedback from '../addfeedback';
import { connect } from 'react-redux';
import { exporterSelector } from '../../redux/reducer/selectors';
import styles from './feedbacks.module.css';

function Feedbacks(props) {
    return (
        <div className={styles.feedbacks}>
            <Rate activeExporter={props.activeExporter}/>
            
            {props.activeExporter.experience.map((experience) => {
                return <FeedbackRow key={experience} experienceId={experience}/>
            })}

            <AddFeedback exporter={props.activeExporter}/>
        </div>
    );
}




Feedbacks.propTypes = {
    activeExporter: PropTypes.shape({
        experience: PropTypes.arrayOf(PropTypes.string)
    }).isRequired
}




const mapStateToProps = (state, ownProps) => {
    return {
        activeExporter: exporterSelector(state, ownProps)
        // ownProps: ownProps
    }
}

export default connect(mapStateToProps)(Feedbacks) ;