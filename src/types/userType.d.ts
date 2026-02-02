export interface UserData {
  access_token: string
  user: UserClass
  created: string
}

export interface UserClass {
  id: string
  firstname: string
  lastname: string
}
