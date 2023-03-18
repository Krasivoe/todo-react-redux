import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'all',
  colors: []
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeStatus(state, action) {
      state.status = action.payload;
    },
    changeColor: {
      reducer(state, action) {
        const { color, changeType } = action.payload;
        const { colors } = state;
        switch (changeType) {
          case 'add':
            if (!colors.includes(color)) {
              colors.push(color);
            }
            break;
          case 'remove':
            state.colors = colors.filter(existingColor => existingColor !== color);
            break;
          default:
            return;
        }
      },
      prepare(color, changeType) {
        return {
          payload: { color, changeType }
        };
      }
    }
  }
});

export default filtersSlice.reducer;
export const { changeStatus, changeColor } = filtersSlice.actions;
