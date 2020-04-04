import { AnyAction } from "redux";

export interface ExampleState {
  isExample: boolean;
}

const initState = {
  isExample: false,
};

const exampleReducer = (state = initState, action: AnyAction) => {
  switch (action.type) {
    default:
      return {
        ...state,
        isExample: true,
      };
  }
};

export default exampleReducer;
