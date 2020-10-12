import React from 'react';
import { connect } from 'react-redux';
import { experienceIdSelector, usersSelector } from '../../redux/reducer/selectors';
import style from './feedbackrow.module.css';

const FeedbackRow = ( props ) => {

    return (
        <div className={style.feedbackrow} key={props.experience}>
            <p>
                Manager: {props.users.find((user) => {
                    return user.id === props.experience.managerId
                }).name}
            </p>
            <p>
                feedback: {props.experience.feedback}
            </p>
            -------//-------
        </div>)
    
};

const mapStateToProps = (state, ownProps) => {
     ;
    return {
        experience: experienceIdSelector(state, ownProps),
        // .find((item) => item.id === ownProps.experienceId),
        // experience: experienceIdSelector(state, ownProps),
        users: usersSelector(state)
    }
}


export default connect(mapStateToProps)(FeedbackRow);// FeedbackRow;