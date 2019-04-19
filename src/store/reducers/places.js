import {
  ADD_PLACE,
  SELECT_PLACE,
  DELETE_PLACE,
  DESELECT_PLACE
} from "../actions/actionTypes";

const initialState = {
  places: [],
  selectedPlace: null
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {
            uri:
              "https://i.pinimg.com/originals/70/fc/0c/70fc0c9846423ccf3ff8506fd9268233.jpg"
          }
        })
      };
    default:
      return state;
  }
};

export default reducers;
