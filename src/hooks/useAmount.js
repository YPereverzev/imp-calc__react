import  { useState } from 'react';


function useAmount(amount = 0) {
    const [qty, setQty] = useState(amount);
    const increment = ()=> setQty(qty + 1);
    const  decrement = ()=> qty > 0 ? setQty(qty - 1) : 0;
    return {qty, increment, decrement};
}
export default useAmount;