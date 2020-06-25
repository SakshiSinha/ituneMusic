import { DATA, VIEW } from "../common/action";

const initialState = {
  filteredData: [],
  id: []
};

const reducer = (state = initialState, { type, payload }) => {
  // return newstate
  switch (type) {
    case DATA:
      //console.log(payload)
      return {
        ...state,
        filteredData: [...state.filteredData, payload]
      };

    case VIEW:
      console.log(payload);
      return {
        ...state,
        id: [...state.id, payload]
      };

    default:
      return state;
  }
  console.log(initialState.filteredData);
};
export default reducer;
