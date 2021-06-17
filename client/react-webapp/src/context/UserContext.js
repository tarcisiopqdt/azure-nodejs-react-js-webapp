import * as React from 'react'

const userInfos = {
  nomeCompleto: { value: '', required: true },
  email: { value: '', required: true },
  estado: { value: '', required: true },
  empresa: { value: '', required: false },
  telefone: { value: '', required: true }
}

export const UserContext = React.createContext(userInfos)

const UserContextApi = (props) => {
  const [user, setUser] = React.useState(userInfos)

  return (
    <UserContext.Provider value={{ user: { ...user }, setUser }} >
      <>
        {props.children}
      </>
    </UserContext.Provider >
  );
}

export default UserContextApi;