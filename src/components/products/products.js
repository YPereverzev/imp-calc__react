import React from 'react';
// import PropTypes from 'prop-types';
import ImportedItems from '../importedItems';

export default function Products (props){
   
    return (
            <div>
                {props.exporter.products.map(item => {
                    return (
                        <div key={item.nameOfPc}>
                            <ImportedItems item={item}/>
                            
                        </div>
                    )
                })}
            </div>
        );
    
}

// products.propTypes = {

// };

