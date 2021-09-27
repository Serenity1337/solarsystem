import React from 'react'
import Form from '../../Components/Form'
import Header from '../../Components/Header'
import classes from './Home.module.scss'

export const Home = () => {
  return (
    <div className={classes.home}>
      {/* 
    1) heading 
    2) form
    3) either render the answer card or the failed validation card  
    
    */}
      <Header />
      <Form />
    </div>
  )
}
