import React from 'react';
import './Modal.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSettings } from '../../store/actions/settingsActions';
import SettingsForm from '../Settings/SettingsForm/SettingsForm';

const Modal = () => {
  const isOpen = useSelector((state) => state.settings.isOpen);
  const dispatch = useDispatch();

  return (
    <div className="modal">
      <div
        className="modal__backdrop"
        onClick={(e) => dispatch(toggleSettings(!isOpen))}
      ></div>
      <div className={isOpen ? 'modal__card open' : 'modal__card'}>
        <div className="settings">
          <div className="settings__header">
            <h2>Settings</h2>
            <span onClick={(e) => dispatch(toggleSettings(!isOpen))}>x</span>
          </div>
          <div className="settings__config">
            <SettingsForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
