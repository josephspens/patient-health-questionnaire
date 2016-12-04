export const initialState = [
  {
    id: 1,
    name: 'Hannibal Lecter',
    bio: 'Hannibal Lecter is depicted as a man of taste and details, and a nearly-obsessive perfectionist. He takes an instant dislike to "rude" people.',
    avatar: 'http://vignette4.wikia.nocookie.net/hannibal/images/4/4e/Mads_mikkelsen_%282%29.jpg/revision/latest?cb=20130628181941'
  },
  {
    id: 2,
    name: 'Frederick Chilton',
    bio: 'He is the general administrator for Baltimore State Hospital for the Criminally Insane and a "collector of psychopaths". Chilton is a very proud and arrogant man, seeking fame in higher psychiatric circles by housing various dangerous psychopaths then attempting to rehabilitate them.',
    avatar: 'http://4.bp.blogspot.com/-aULflSvLktc/UUJbW_RmrAI/AAAAAAAAD5k/MY2it2Oe5CQ/s1600/Chilton3.JPG'
  },
  {
    id: 3,
    name: 'Alana Bloom',
    bio: 'Alana is a psychology professor, FBI consultant, and Hannibal Lecter\'s former student. She is shown to be an intelligent and compassionate woman, dedicated to her work and deeply concerned for others\' well-being.',
    avatar: 'http://vignette1.wikia.nocookie.net/hannibal/images/6/65/Caroline_dhavernas_%282%29.jpg/revision/latest?cb=20130628180734'
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
