import React from 'react';

function Navigation(props) {
    return (
        <div>
             {
                 props.products.map((item) => {
                // debugger;
                 console.log(item);
                    return (
                        <div key={item.id}>
                            <button className="Exporters__provider-select-button"
                                onClick={() => props.onImporterClick(item.id)}
                            > 
                                providerName : {item.providerName}
                            </button>
                        </div>)
                })} 

        </div>
    );
}

export default Navigation;