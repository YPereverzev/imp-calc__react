// import {  allExporters }  from '../../fixtures'
import { ADD_FEEDBACK } from '../constants';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload, feedbackId, userId } = action;

  switch (type) {
    case ADD_FEEDBACK:
      const { exporterId, name, review } = payload;
      let changedExporter = state.find((item) => item.id === exporterId.id);
      const changedExporterIndex = state.indexOf(changedExporter);
      const newImportItems = [...state];

      changedExporter = {
        ...changedExporter,


        
        experience: [...changedExporter.experience, feedbackId],
      };
      newImportItems[changedExporterIndex] = changedExporter;
      const result = newImportItems;

      return result;
    default:
      return state;
  }
};
