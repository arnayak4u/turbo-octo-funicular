import {outcomeCategoryConstants, outcomeIdConstants} from "../constants/deliveryConstants";
const {[outcomeCategoryConstants.wicketCounter]:{id:wcConst}} = outcomeIdConstants;

const currentDeliveryInitialState = {
    [outcomeCategoryConstants.runCounter]: {
        items: [{ id: wcConst.DotBall, text: 'Dot Ball' },
        { id: 'SixRuns', text: '6 Runs' }, { id: 'FourRuns', text: '4 Runs' },
        { id: 'ThreeRuns', text: '3 Runs' },
        { id: 'TwoRuns', text: '2 Runs' }, { id: 'OneRun', text: '1 Run' }], active: true
    },
    [outcomeCategoryConstants.wicketCounter]: {
        items: [{ id: 'HitWicket', text: 'Hit Wicket' },
        { id: 'Bowled', text: 'Bowled' }, { id: 'Stumped', text: 'Stumped' },
        { id: 'RunOut', text: 'Run Out' }, { id: 'Caught', text: 'Caught' },
        { id: 'LBW', text: 'LBW' }, { id: 'CaughtNBowled', text: 'Caught N Bowled' }], active: true
    },
    [outcomeCategoryConstants.faultyDeliveries]: {
        items: [{ id: 'NoBall', text: 'No Ball' },
        { id: 'Wide', text: 'Wide' }, { id: 'DeadBall', text: 'Dead Ball' },
        { id: 'Byes', text: 'Byes' }], active: true
    }
}

export default function currentDelivery(state = currentDeliveryInitialState, action) {
    switch (action.type) {
        case 'ON_TOGGLE':
            const { changedDeliveryCategory, changedControlIndex } = action.payload;

            const items = state[changedDeliveryCategory].items;
            const clickedItem = items[changedControlIndex];
            const activeItem = { ...clickedItem, active: !clickedItem.active };
            let newItems = items.map(itm => ({ ...itm, active: false }));
            newItems.splice(changedControlIndex, 1, activeItem);
            let newState = { ...state };
            newState[changedDeliveryCategory] = { items: [...newItems], active: true };
            return newState;

        default:
            return state
    }
}