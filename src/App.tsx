import React from 'react'
import { CssBaseline } from '@mui/material'
import AppBar from './components/AppBar'
import Drawer from './components/Drawer'
import UiContext from './context/UI/uiContext'
import Main from './components/Main'
import AuthContext from './context/Auth/authContext'
import LoginDialog from './components/Login'
import SnackbarContext from './context/Snackbar/snackbarContext'

function App() {
  return (
    <SnackbarContext>
      <AuthContext>
        <UiContext>
          <>
            <CssBaseline />
            <Main />
            <AppBar />
            <Drawer />
            <LoginDialog />
          </>
        </UiContext>
      </AuthContext>
    </SnackbarContext>
  )
}

export default App
