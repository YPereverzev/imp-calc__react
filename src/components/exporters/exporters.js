import React, { useState, useMemo, useEffect } from 'react';
import Navigation from '../navigation';
import Exporter from '../exporter';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OrderBox from '../orderbox';
import { producstLoaded, allExportersSelector } from '../../redux/reducer/selectors';

import { loadProducts } from '../../redux/actions';
import styles from './exporters.module.css';

function Exporters({ exporters, loaded, loadProducts, match, history }) {
  useEffect(() => {
    if (!loaded) loadProducts();
  }, []); //eslint-disable-line
 

  const [activeExporterId, setActiveExporter] = useState(exporters[0].id);
  // history.push(`/${activeExporterId}`)

  return (
    <div className={styles.exporters}>
      <div class="container p-0">
        <div class="row p-0">
          <div class="col p-0">
            <Navigation exporters={exporters} onImporterClick={setActiveExporter} />
          </div>

          <div class="col-lg-6 p-0">
            <Exporter activeExporterId={activeExporterId} />
          </div>
          <div class="col p-0">
            <OrderBox />
          </div>
        </div>
      </div>
    </div>
  );
}

Exporters.propTypes = {
  exporters: PropTypes.arrayOf(
    PropTypes.shape({
      exporterName: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  exporters: allExportersSelector(state),
  loaded: producstLoaded(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: () => dispatch(loadProducts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Exporters);
