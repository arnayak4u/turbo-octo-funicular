import { compose } from 'redux';

import {outcomeCategoryConstants, outcomeIdConstants} from '../constants/deliveryConstants';

const checkForFaultDeliveries = (result) =>{
    const {deliveryState} = result;
    const faultDelivery = deliveryState[outcomeCategoryConstants.faultyDeliveries].items.find(itm => itm.active);
    if(faultDelivery){
        result['faultDelivery'] = true;
        result['fault'] = faultDelivery.text

    }
    else{
        result['faultDelivery'] = false;
    }
    return result;
}

const checkForRuns = (result) =>{
    const {deliveryState} = result;
    const runCounter = deliveryState[outcomeCategoryConstants.runCounter].items.find(itm => itm.active);
    if(runCounter){
        result['runScored'] = true;
        result['howManyRuns'] = runCounter.text;
        result['runId'] = runCounter.id;

    }
    else{
        result['runScored'] = false;
    }
    return result;
}
const checkForWicketFall = (deliveryState) => {
    let result = {deliveryState};
    const wicket = deliveryState[outcomeCategoryConstants.wicketCounter].items.find(itm => itm.active);
    if(wicket){
        result['wicketFall'] = true;
        result['wicketFallReason'] = wicket.text

    }
    else{
        result['wicketFall'] = false;
    }

    return result;
}

export const generateDeliveryOutcome = (deliveryState) =>{
    return compose(checkForFaultDeliveries,checkForRuns,checkForWicketFall)(deliveryState);
}

export const generateOutcomeDisplayText = (outcome) =>{
    let primaryText , secondaryText;
    if(outcome['wicketFall']){
        primaryText = 'W';
        secondaryText = outcome['wicketFallReason'];
    }
    if(outcome['runScored']){
        primaryText = outcomeIdConstants[outcomeCategoryConstants.runCounter]
                      .primaryText[outcome['runId']];
        secondaryText = outcome['howManyRuns'];
        if(outcome['wicketFall']){
            primaryText = 'W';
        }
    }
    if(outcome['faultDelivery']){
        secondaryText = outcome['fault'];
    }
    return {primaryText , secondaryText}
}