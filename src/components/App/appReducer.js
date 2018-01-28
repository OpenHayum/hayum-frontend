import { HAYUM_CHANGE_BACKGROUND } from "./appActions";
import getBGColor from "../../utils/backgroundColorGenerator";

const initialState = {
  background: getBGColor()
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default appReducer;
