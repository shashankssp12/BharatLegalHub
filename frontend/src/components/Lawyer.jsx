import React, { useState, useContext, useEffect } from 'react'
import stateContext from '../context/StateContext'
import Card from './Card'

const Lawyer = () => {
  const context = useContext(stateContext)
  const { getAdvocates, advocates } = context;

  useEffect(() => {
    // getAdvocates()
  }, [])

  return (
    <>
      <div className="cardSection">
        {
          // advocates && advocates.map((item, index) => {

          //  return
          // <Card data={item} />
          <Card />
          // })
        }
      </div>
    </>
  )
}

export default Lawyer