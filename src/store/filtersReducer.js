const initialState = {
  status: 'all',
  colors: []
};

export const CHANGE_STATUS = 'FILTERS/CHANGE_STATUS';
export const CHANGE_COLOR = 'FILTERS/CHANGE_COLOR';

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return {
        ...state,
        status: action.payload
      };
    case CHANGE_COLOR: {
      const { color, changeType } = action.payload;
      switch (changeType) {
        case 'add':
          return {
            ...state,
            colors: state.colors.concat(color)
          };
        case 'remove':
          return {
            ...state,
            colors: state.colors.filter(existingColor => existingColor !== color)
          };
        default:
          return state;
      }
    }
    default:
      return state;
  }
};

export const actionSetStatus = status => ({ type: CHANGE_STATUS, payload: status });
export const actionSetColor = (color, changeType) => ({
  type: CHANGE_COLOR,
  payload: { color, changeType }
});

export default filtersReducer;
