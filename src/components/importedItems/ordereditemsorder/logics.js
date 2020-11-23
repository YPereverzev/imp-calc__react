export const paymentBeforeTaxes = (qty, item) => {
    return qty * item.pricePerPc;
  };
  
  export const dutyCalc = (qty, item) => {
    return (qty * item.pricePerPc * item.duty) / 100;
  };
  
  export const vatCalc = (qty, item) => {
    return (dutyCalc(qty, item) + paymentBeforeTaxes(qty, item)) * (item.vat / 100);
  };
  
  export const paymentPlusTaxes = (qty, item) => {
    return dutyCalc(qty, item) + vatCalc(qty, item) + qty * item.pricePerPc;
  };
  
  export const qtyHandler = (event) => {
    // console.log(event);
    // event.target.contenteditable="true";
    // contenteditable="true | false"
  };
  