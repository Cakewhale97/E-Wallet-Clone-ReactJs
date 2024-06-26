import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

// Create a slice. This function takes a single object argument and generates a slice reducer with corresponding action creators and action types.
const cardSlice = createSlice({
  // The name of the slice. This is used to generate the action types.
  name: "card",
  
  // The initial state for the reducer.
  initialState,
  
  // An object where the keys will become action type strings, and the functions are reducers that will be run when that action type is dispatched.
  reducers: {
    // The addCard reducer. This will be run when the addCard action is dispatched.
    addCard(state, action) {
      // Log the payload of the action for debugging purposes.
      console.log("Card added:", action.payload);
      
      // Add the payload of the action to the state. Redux Toolkit uses Immer under the hood, which allows us to write "mutating" logic here. Immer will correctly create a new immutable state based on these "mutations".
      state.push(action.payload);
    },
  },
});

// Export the action creators generated by createSlice. In this case, we're exporting the addCard action creator.
export const { addCard } = cardSlice.actions;

// Export the reducer generated by createSlice. This reducer will handle all actions defined in the slice and update the state accordingly.
export default cardSlice.reducer;