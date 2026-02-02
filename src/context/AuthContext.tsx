import { createContext, type SetStateAction } from 'react'
import type { UserData } from '../types/userType'

// TS - inteface til typer
interface AuthContextProps {
  userData: UserData | null
  setUserData: React.Dispatch<SetStateAction<UserData | null>>
}

// Opret context og kald den AuthContext
export const AuthContext = createContext<AuthContextProps>(undefined!)
