import GeneralCuriosities from '@molecules/GeneralCuriosities/GeneralCuriosities'
import styles from "./GeneralCuriositiesPage.module.scss";
import React from 'react'
import Background from '@atoms/Background/Background';
import Heading from '@atoms/Heading/Heading';
import Arrow from '@atoms/Arrow/Arrow';

function GeneralCuriositiesPage() {
  return (
    <div className={styles[`GeneralCuriositiesPage__Content`]}>
<<<<<<<< HEAD:pages/GeneralCuriosities/index.jsx
      <img className={styles[`GeneralCuriositiesPage__Header--rectangle`]} alt="ornament" src="assets/images/extras/Rectangle.png"></img>
========
      <img className={styles[`GeneralCuriositiesPage__Header--rectangle`]} src="assets/images/extras/Rectangle.png" alt="" />
>>>>>>>> c651fca78cd10a2ff6ad6d6d7fd2e90473088bcd:pages/GeneralCuriosities/GeneralCuriositiesPage.jsx
      <header className={styles[`GeneralCuriositiesPage__Header`]}>  
      <Arrow white={true}></Arrow>
      <Heading level="1" className={styles[`GeneralCuriositiesPage__Content--text`]} size="Xlarge" color="white" style="italic"> General Curiosities </Heading>
      </header>
        <div className={styles[`GeneralCuriositiesPage__Container`]}>
        <GeneralCuriosities></GeneralCuriosities>
    <span className={styles[`GeneralCuriositiesPage__Background`]} >
        <Background></Background>
        
    </span>
    </div>
    </div>
  )
}

export default GeneralCuriositiesPage