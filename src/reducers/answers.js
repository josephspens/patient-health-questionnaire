export const initialState = [
  'Not at all',
  'Several days',
  'More than half the days',
  'Nearly every day'
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
