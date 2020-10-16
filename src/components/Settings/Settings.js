import React from 'react';
import './Settings.scss';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { toggleSettings } from '../../store/actions/settingsActions';

const Settings = () => {
  const isOpen = useSelector((state) => state.settings.isOpen);
  const dispatch = useDispatch();

  return (
    <SettingsIcon
      className="settings-btn"
      onClick={(e) => dispatch(toggleSettings(!isOpen))}
    />
  );
};

export default Settings;
