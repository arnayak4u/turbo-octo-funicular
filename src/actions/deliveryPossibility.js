export const ON_TOGGLE="ON_TOGGLE";
export const toggleAction = ( changedDeliveryCategory, changedControlIndex) =>
 ({type:ON_TOGGLE, payload:{ changedDeliveryCategory, changedControlIndex}});