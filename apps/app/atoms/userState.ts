import { atom } from 'recoil'
// Types
import { UserType } from '../types/UserType'

/* --- userState ------------------------------------------------------------------------------- */

const userState = atom<null | UserType>({
  key: 'user',
  default: null,
})

/* --- Exports --------------------------------------------------------------------------------- */

export { userState }
