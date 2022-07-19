import { useState, createContext, useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
// Types
import { UserType } from '../types/UserType'

/* --- Types ----------------------------------------------------------------------------------- */

type UserContextType = {
  user: null | UserType
  setUser?: (user: null | UserType) => Promise<void>
}

/* --- UserContext ----------------------------------------------------------------------------- */

const UserContext = createContext<UserContextType>({ user: null })

/* --- <UserContextManager/> ------------------------------------------------------------------- */

const UserContextManager = (props) => {
  // Props
  const { children } = props

  // State
  const [user, setUser] = useState<null | UserType>(null)

  // -- DidMount() --

  useEffect(() => {
    try {
      const checkPersistedUser = async () => {
        const persistedUser = await AsyncStorage.getItem('@user')
        if (persistedUser) setUser(JSON.parse(persistedUser))
      }
      checkPersistedUser()
    } catch {
      console.log('no persisted user to restore')
    }
  }, [])

  // -- Handlers --

  const setUserAndPersist = async (user: null | UserType) => {
    try {
      setUser(user)
      if (user) await AsyncStorage.setItem('@user', JSON.stringify(user))
      else await AsyncStorage.removeItem('@user') // Remove when null
    } catch (error) {
      console.warn('failed to persist user', error)
    }
  }

  // -- Render --

  return <UserContext.Provider value={{ user, setUser: setUserAndPersist }}>{children}</UserContext.Provider>
}

/* --- useUserContext() ------------------------------------------------------------------------ */

const useUserContext = () => useContext(UserContext)

/* --- Exports --------------------------------------------------------------------------------- */

export { UserContextManager, useUserContext }
