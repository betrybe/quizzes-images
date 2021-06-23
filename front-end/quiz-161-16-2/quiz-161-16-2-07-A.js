function myReducer(state = '', action) {
  switch (action.type) {
    case 'NEW_ACTION':
      return { state: action.state };
    default:
      return state;
  }
}
