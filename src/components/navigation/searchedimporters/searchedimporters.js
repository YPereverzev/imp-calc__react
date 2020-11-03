import React from 'react';
import { connect } from 'react-redux';
import styles from './searchedimporters.module.css';
import Loader from '../../loader';
import { exportersAlreadyLoadedSelector } from '../../../redux/reducer/selectors';

const SearchedImporters = (props) => {
    if (!props.exporters[0]) return <Loader />
    debugger;
    return (
        <div>
            <div  className={styles.searchedImporters} >
                <form  className={styles.searchedImporters_form}
                    method="post"
                >
                        <select 
                        size="4" 
                        multiple 
                        name="serchedImporters"
                        // autocomplete="off"
                        >
                        {props.exporters.map((item) => {
                            debugger;
                            console.log(item);
                                return (
                                    <option 
                                        className={styles.nav_button}
                                        key={item.id} 
                                        onClick={() => props.onImporterClick(item.id)}>
                                        {item.exporterName}
                                    </option>
                                )
                        })} 

                        </select>
                    <p>
                        {/* <input type="submit" value="Отправить"></input> */}
                    </p>
                </form>
                <p></p>
                </div>      
        </div>
    );
};

const mapDispatchToProps = (state) => {
    debugger;
    return {
        exporters: exportersAlreadyLoadedSelector(state)
    }
}

export default connect(mapDispatchToProps)(SearchedImporters);        