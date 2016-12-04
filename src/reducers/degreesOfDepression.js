export const initialState = [
  {
    text: 'None',
    min: 0,
    max: 4
  },
  {
    text: 'Mild',
    min: 5,
    max: 9
  },
  {
    text: 'Moderate',
    min: 10,
    max: 14
  },
  {
    text: 'Moderately Severe',
    min: 15,
    max: 19
  },
  {
    text: 'Severe',
    min: 20,
    max: 27
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
