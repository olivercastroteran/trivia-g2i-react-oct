import {
  toggleSettings,
  setSettings,
  resetSettings,
} from '../actions/settingsActions';
import { settingsReducer } from './settingsReducer';

describe('Settings Reducer', () => {
  it('Should return default state', () => {
    const newState = settingsReducer(undefined, {});
    expect(newState).toEqual({
      isOpen: false,
      querySettings: {
        difficulty: 'hard',
        nOfQuestions: '10',
      },
    });
  });

  it('Should toggle the settings if isOpen: true', () => {
    const newState = settingsReducer(undefined, toggleSettings(true));
    expect(newState).toEqual({
      isOpen: true,
      querySettings: {
        difficulty: 'hard',
        nOfQuestions: '10',
      },
    });
  });

  it('Should set new settings', () => {
    const newState = settingsReducer(
      undefined,
      setSettings({
        difficulty: 'easy',
        nOfQuestions: '5',
      })
    );
    expect(newState).toEqual({
      isOpen: false,
      querySettings: {
        difficulty: 'easy',
        nOfQuestions: '5',
      },
    });
  });

  it('Should reset the settings', () => {
    const newState = settingsReducer(undefined, resetSettings());
    expect(newState).toEqual({
      isOpen: false,
      querySettings: {
        difficulty: 'hard',
        nOfQuestions: '10',
      },
    });
  });
});
