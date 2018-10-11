import {outcomeCategoryConstants, outcomeIdConstants} from "../constants/deliveryConstants";
const {[outcomeCategoryConstants.wicketCounter]:{id:wcConst},
[outcomeCategoryConstants.faultyDeliveries]:{id:fdConst},
[outcomeCategoryConstants.runCounter]:{id:rcConst}} = outcomeIdConstants;

const currentDeliveryInitialState = {
    [outcomeCategoryConstants.runCounter]: {
        items: [{ id: rcConst.DotBall, text: 'Dot Ball' },
        { id: rcConst.SixRuns, text: '6 Runs' }, { id: rcConst.FourRuns, text: '4 Runs' },
        { id: rcConst.ThreeRuns, text: '3 Runs' },
        { id: rcConst.TwoRuns, text: '2 Runs' }, { id: rcConst.OneRun, text: '1 Run' }], active: true
    },
    [outcomeCategoryConstants.wicketCounter]: {
        items: [{ id: wcConst.HitWicket, text: 'Hit Wicket' },
        { id: wcConst.Bowled, text: 'Bowled' }, { id: wcConst.Stumped, text: 'Stumped' },
        { id: wcConst.RunOut, text: 'Run Out' }, { id: wcConst.Caught, text: 'Caught' },
        { id: wcConst.LBW, text: 'LBW' }, { id: wcConst.CaughtNBowled, text: 'Caught N Bowled' }], active: true
    },
    [outcomeCategoryConstants.faultyDeliveries]: {
        items: [{ id: fdConst.NoBall, text: 'No Ball' },
        { id: fdConst.Wide, text: 'Wide' }, { id: fdConst.DeadBall, text: 'Dead Ball' },
        { id: fdConst.Byes, text: 'Byes' }], active: true
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
        case 'NEXT_DELIVERY':
            return currentDeliveryInitialState;
        default:
            return state
    }
}