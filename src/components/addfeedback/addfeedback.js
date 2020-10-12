import React from 'react';
import styles from './addfeedback.module.css';
import { connect } from 'react-redux';
import { addFeedback } from '../../redux/actions';


const AddFeedback = (props) => {

    return (
        <div className={styles.addFeedback}>
            <form className={styles.feedbackForm} onSubmit={(e) => handleSubmit(props.onSubmit, props.exporter, e)}>
                <fieldset>
                    <legend className={styles.legend}>Leave your review</legend>

                    <p>
                        <label className={styles.form__label_name} for="user_name">Your name</label><br></br>
                        <input className={styles.form__input_name} id="user_name"></input>
                    </p>
                    <p>
                        <label className={styles.form__label_textarea} for="feedback_area">Your review</label><br></br>
                        <textarea className={styles.form__textarea} id="feedback_area"></textarea>
                    </p>
                    <p>
                        <button className={styles.form__submit_button} /*primary block*/>PUBLISH REVIEW</button>
                    </p>                    
                </fieldset>
            </form>
        </div>
    );
};

// здесь надо получить значения полей и отдать в диспачт чтобы записать в State
function handleSubmit(onSubmit, id, e) {
    const exporterId = id;
    e.preventDefault();
    
    const userName = document.getElementById("user_name").value;
    const feedbackText = document.getElementById("feedback_area").value;
    onSubmit({ name: userName, review: feedbackText, exporterId: exporterId
     });
    // addFeedback({id: feedbackId, name: feedbackText.value});
    
     ;
}

//переписать на селекторы и проверить нужнен ли этот блок вообще
const mapStateToProps = (state, ownProps) => {
    return {
        // state: state,
        // ownProps: ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (feedbackInfo) => dispatch(addFeedback({ feedbackInfo }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFeedback) ;