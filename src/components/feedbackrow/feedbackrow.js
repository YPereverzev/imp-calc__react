import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { 
    experienceLoadingError,
    experienceLoaded,
    experienceLoading,
    experienceIdSelector,
    usersSelector
 } from '../../redux/reducer/selectors';
import Loader  from  '../loader';
import {loadExperience} from  '../../redux/actions';


import style from './feedbackrow.module.css';

const FeedbackRow = ( props ) => {

    useEffect(() => {
        if (!props.loaded) props.loadExperience();
        //rewrite: one request per id by experience
    }, []) //eslint-disable-line
    
    if (props.loading || !props.loaded) return <Loader />;


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
    
    return {
        experience: experienceIdSelector(state, ownProps),
        users: usersSelector(state),
        loading: experienceLoading(state),
        loaded: experienceLoaded(state),
        error: experienceLoadingError(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    // debugger
    return {
        loadExperience: () => dispatch(loadExperience())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackRow);// FeedbackRow;