import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

export enum Page {
  NOTES = 'NOTES',
  DATA = 'DATA',
}

interface UiContextType {
  drawerOpen: boolean
  setDrawerOpen: Dispatch<SetStateAction<boolean>>
  loginOpen: boolean
  setLoginOpen: Dispatch<SetStateAction<boolean>>
  currentPage: Page
  setCurrentPage: Dispatch<SetStateAction<Page>>
}

const Context = createContext({} as UiContextType)

const UiContext = ({ children }: { children: ReactNode }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [loginOpen, setLoginOpen] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<Page>(Page.NOTES)
  return (
    <Context.Provider
      value={{ drawerOpen, setDrawerOpen, loginOpen, setLoginOpen, currentPage, setCurrentPage }}
    >
      {children}
    </Context.Provider>
  )
}

export const useContextUi = () => {
  return useContext(Context)
}

export default UiContext
