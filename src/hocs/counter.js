import React from 'react';
import useAmount from '../hooks/useAmount';


export default (WrappedComponent) => (props) => {
    const amountProps = useAmount(0);
    return <WrappedComponent {...props} {...amountProps}/>
    
}
