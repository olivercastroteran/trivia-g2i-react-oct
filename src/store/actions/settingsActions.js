export const toggleSettings = (isOpen) => {
  return {
    type: 'TOGGLE_SETTINGS',
    payload: isOpen,
  };
};

export const setSettings = (settings) => {
  return {
    type: 'SET_SETTINGS',
    payload: settings,
  };
};
