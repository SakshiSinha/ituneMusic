export const DATA = "DATA";

export const VIEW = "VIEW";

export const data = payload => ({
  type: DATA,
  payload
});

export const View = payload => ({
  type: VIEW,
  payload
});
