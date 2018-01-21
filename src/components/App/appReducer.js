import { HAYUM_CHANGE_BACKGROUND } from "./appActions";
import getBGColor from "../../utils/backgroundColorGenerator";

const initialState = {
  background: getBGColor()
};

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case HAYUM_CHANGE_BACKGROUND:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default appReducer;
