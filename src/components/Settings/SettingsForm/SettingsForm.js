import React, { useState } from 'react';
import './SettingsForm.scss';
import { useDispatch } from 'react-redux';
import { setSettings } from '../../../store/actions/settingsActions';

const SettingsForm = () => {
  const [difficulty, setDifficulty] = useState('hard');
  const [nOfQuestions, setnOfQuestions] = useState('10');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSettings({ difficulty, nOfQuestions }));
  };

  const handleDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const handleQuestions = (e) => {
    setnOfQuestions(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__input">
        <label>Difficulty</label>
        <select defaultValue={difficulty} onChange={handleDifficulty}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="form__input">
        <label>N&deg; of questions</label>
        <select defaultValue={nOfQuestions} onChange={handleQuestions}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <button className="form__btn">Save</button>
    </form>
  );
};

export default SettingsForm;
