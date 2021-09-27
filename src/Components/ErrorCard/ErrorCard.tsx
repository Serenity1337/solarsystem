import React from 'react'
import classes from './ErrorCard.module.scss'
import {Props} from './ErrorCardTypes'
export const ErrorCard = (props: Props) => {
  return (
    <div className={classes.errorContainer}>
      <div className={classes.errorMsg}>{props.stringErr}</div>
    </div>
  )
}
