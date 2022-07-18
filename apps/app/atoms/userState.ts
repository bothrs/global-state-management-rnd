import { useEffect } from 'react'
import { atom, useRecoilState } from 'recoil'
import AsyncStorage from '@react-native-async-storage/async-storage'
// Types
import { UserType } from '../types/UserType'

/* --- Atoms ----------------------------------------------------------------------------------- */

const userState = atom<null | UserType>({
  key: 'user',
  default: null,
})

/* --- useUserState() -------------------------------------------------------------------------- */

const useUserState = () => {
  // State
  const [user, setUser] = useRecoilState(userState)

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

  // -- Handlers ---

  const setUserAndPersist = async (user: null | UserType) => {
    try {
      setUser(user)
      if (user) await AsyncStorage.setItem('@user', JSON.stringify(user))
      else await AsyncStorage.removeItem('@user') // Remove when null
    } catch (error) {
      console.warn('failed to persist user', error)
    }
  }

  // -- Return --

  return [user, setUserAndPersist] as const
}

/* --- Exports --------------------------------------------------------------------------------- */

export { userState, useUserState }
