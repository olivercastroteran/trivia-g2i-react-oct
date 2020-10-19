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

export const resetSettings = (settings) => {
  return {
    type: 'RESET_SETTINGS',
  };
};
