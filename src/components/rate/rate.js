import React from 'react';
import PropTypes from 'prop-types';
import styles from './rate.module.css';

function Rate(props) {
  return (
    <div className={styles.rate}>
      _______________________________________________
      <br></br>
      Средний рейт: {rateCalc({ ...props })}
    </div>
  );
}

function rateCalc({ activeExporter }) {
  //rewrite because: experienceId instead of experience value
  return (
    activeExporter.experience.reduce((sum, item) => {
      return sum + item.rating;
    }, 0) / activeExporter.experience.length
  );
}

// надо написать селектор чтобы получать эти экспириенсы в функцию расчета рейтинга
// или же передавать сюда уже отобранные данные
// ХЗ....

Rate.propTypes = {
  activeExporter: PropTypes.shape({
    experience: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number,
      }),
    ).isRequired,
  }).isRequired,
};

export default Rate;
