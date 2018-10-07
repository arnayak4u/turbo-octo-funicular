export default function outcome(state = [], action) {
    switch (action.type) {
      case 'NEXT_DELIVERY':
        return [...state,action.payload]
      default:
        return state
    }
  }