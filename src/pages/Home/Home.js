import React from 'react';
import Card from '../../components/Card/Card';
import './Home.scss';
import Settings from '../../components/Settings/Settings';
import Modal from '../../components/Modal/Modal';
import { useSelector } from 'react-redux';

const Home = () => {
  const isOpen = useSelector((state) => state.settings.isOpen);

  return (
    <div className="home">
      {isOpen ? <Modal /> : null}
      <Card />
      <Settings />
    </div>
  );
};

export default Home;
