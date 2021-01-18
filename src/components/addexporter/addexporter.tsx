import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewExporter } from '../../redux/actions';

import styles from './style.module.css';
import globalStyles from '../../globalstyles.module.css';

interface INewExporterInfo {
  id: string | null;
  exporterName: string;
  location: string;
  image?: string;
  products?: string[];
  experience?: string[];
  payload?: any;
  generateId?: any;

}

export interface AddExporterProps {
  activeExporter?: string;
  addNewExporter: React.ReactNode;
}

const AddExporter: React.FC = (props: any) => {
    const {addNewExporter} = props;
    const [newExporterName, setNewExporterName] = useState('');
    const [newExporterLocation, setnewExporterLocation] = useState('');

    return (
        <div className={globalStyles.card_wrapper}>
          Добавление нового поставщика:

         <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Название
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="newExporterName"
              aria-describedby="basic-addon1"
              onChange={(e) => setNewExporterName(e.currentTarget.value)}
            ></input>

            <div className={styles.newProductName}
              id="newExporterName">
            </div>    
          </div>

          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Локация</span>
            </div>
            <input 
              type="text" 
              className="form-control" 
              id="newExporterLocation"
              onChange={(e) => setnewExporterLocation(e.currentTarget.value)}
            ></input>
          </div>

          <button
            type="button"
            className="btn btn-secondary btn-sm"
            id="addNewExporterBtn"
            onClick={() => addNewExporter({ newExporterName, newExporterLocation })}
          >
            Добавить
        </button>
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addNewExporter: (newExporterInfo: INewExporterInfo) => dispatch(addNewExporter(newExporterInfo))
  }
}

export default connect(null, mapDispatchToProps)(AddExporter);


