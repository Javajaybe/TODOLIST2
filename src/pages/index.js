// index.js
import React from 'react';
import TodoList from '../Components/TodoList';
import styles from './index.module.css';


const Home = () => {
  return (
    <div className={`${styles.fullHeightContainer} bg-blue-500 p-4`}>
      <h1 className={`text-4xl font-bold mb-4 ${styles.centeredText}`}>TodoListCompleted</h1>
      <TodoList />
        
      </div>
  );
};

export default Home;
