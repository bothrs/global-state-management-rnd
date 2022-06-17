import { useState, createContext, useContext } from 'react'
// Types
import { UserType } from '../types/UserType'

/* --- Types ----------------------------------------------------------------------------------- */

type UserContextType = {
  user: null | UserType
  setUser?: (user: null | UserType) => void
}

/* --- UserContext ----------------------------------------------------------------------------- */

const UserContext = createContext<UserContextType>({ user: null })

/* --- <UserContextManager/> ------------------------------------------------------------------- */

const UserContextManager = (props) => {
  // Props
  const { children } = props

  // State
  const [user, setUser] = useState<null | UserType>(null)

  // -- Render --

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

/* --- useUserContext() ------------------------------------------------------------------------ */

const useUserContext = () => useContext(UserContext)

/* --- Exports --------------------------------------------------------------------------------- */

export { UserContextManager, useUserContext }
