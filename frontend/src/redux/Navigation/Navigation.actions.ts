export const toggleDrawer = () => {
  return { type: "TOGGLE_DRAWER", payload: null };
};

export const setHeaderTitle = (title: string) => {
  return { type: "SET_HEADER_TITLE", payload: title };
};
