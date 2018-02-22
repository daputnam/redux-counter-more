const initialState = {
  counts: [0, 18, -2]
}

function reducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counts: state.counts.map((counter, index) => {
          if (action.payload === index) {
            return counter + 1
          }
          return counter
        })
      }
    case "DECREMENT":
      return {
        ...state,
        counts: state.counts.map((counter, index) => {
          if (action.payload === index) {
            return counter - 1
          }
          return counter
        })
      }
    case "ADD_COUNTER":
      return {
        ...state,
        counts: [...state.counts, 0]
      }
    default:
      return state;
  }

}

export default reducer