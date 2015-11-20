export const inc = () => ({ type: 'inc' });
export const dec = () => ({ type: 'dec' });

export const incAsync = () => (dispatch, getState) => dispatch({ type: 'inc' });
