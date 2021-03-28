export interface ToggleDrawer {
  type: string;
  payload: null;
}
export interface SetHeaderTitle {
  type: string;
  payload: string;
}

export interface Navigation {
  headerTitle: string;
  isDrawerOpen: Boolean;
}

export type NavigationActionTypes = ToggleDrawer | SetHeaderTitle;
