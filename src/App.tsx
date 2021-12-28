import React from 'react'
import { CssBaseline } from '@mui/material'
import AppBar from './components/AppBar'
import Drawer from './components/Drawer'
import UiContext from './context/UI/uiContext'
import Main from './components/Main'
import AuthContext from './context/Auth/authContext'

function App() {
  return (
    <AuthContext>
      <UiContext>
        <>
          <CssBaseline />
          <Main />
          <AppBar />
          <Drawer />
        </>
      </UiContext>
    </AuthContext>
  )
}

export default App
