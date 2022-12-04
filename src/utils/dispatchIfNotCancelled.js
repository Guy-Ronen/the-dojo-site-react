export const dispatchIfNotCancelled = (dispatch, isCancelled, action) => {
  if (!isCancelled) {
    dispatch(action);
  }
};
