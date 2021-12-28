import React from 'react'
import { Page, useContextUi } from '../../context/UI/uiContext'
import Notes from '../Notes'
import PersonalData from '../PersonalData'

const Main = () => {
  const { currentPage } = useContextUi()

  return (
    <>
      {currentPage === Page.NOTES && <Notes />}
      {currentPage === Page.DATA && <PersonalData />}
    </>
  )
}

export default Main
