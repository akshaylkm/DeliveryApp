import React, { Fragment } from 'react'
import AvailableMeal from './AvailableMeal'
import MealsDescription from './MealsDescription'

function Meals() {
  return (
    <Fragment>
        <MealsDescription/>
        <AvailableMeal/>
    </Fragment>
  )
}

export default Meals