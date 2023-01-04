export const FATCH_SHOW = "FATCH_SHOW";
export const fatchShowAction = () => ({
  type: FATCH_SHOW,
});

export const FATCHED_SHOW = " FATCHED_SHOW";
export const fatchedShowAction = (show: any[]) => ({
  type: FATCHED_SHOW,
  payload: show,
});
