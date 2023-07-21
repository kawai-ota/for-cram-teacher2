import React from 'react';
import styles from '../styles/menubar.module.css';
import  {MenubarData}  from './MenubarData';

interface MenubarItem {
  title:string;
  icon:JSX.Element;
  link:string;
}

const Menubar = () => {
  return (
    <div className={styles.Menubar}>
      <ul className={styles.MenubarList}>
        {MenubarData.map((value:MenubarItem,key:number) => (
          <li key={key} className = {styles.row} onClick={()=>{
            window.location.pathname = value.link
          }}>
            <div className = {styles.icon}>{value.icon}</div>
            <div className = {styles.title}>{value.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menubar
