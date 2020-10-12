// import { act } from "react-dom/test-utils";

export const logger = (store) => (next) => (action) => {
    console.log('before :', store.getState());
    console.log('action :', action);

    next(action);
    console.log('after :', store.getState());

}