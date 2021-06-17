import React from "react";
import { Switch, Route, useLocation, Link } from "react-router-dom";

import Module1 from './Modulos/Modulo1'
import Module2 from './Modulos/Modulo2'
import Module3 from './Modulos/Modulo3'
import UserRegistration from './components/UserRegistration/UserRegistration'
import { UserContext } from './context/UserContext'
import { createUser, mapUserObject, getUsers } from './services/UserRegistrationService'

function App() {
  const userFromContext = React.useContext(UserContext).user
  const [creationOK, setcreationOK] = React.useState(false)
  let location = useLocation();

  React.useEffect(() => {
    getUsers().then((res) => {
      console.log(res)
    })
  }, [])

  const handleSubmitUserInformations = () => {
    const userToCreate = mapUserObject(userFromContext)
    createUser(userToCreate).then((res) => {
      if (res.status === 200) {
        console.log(location)
        setcreationOK(true)
      }

    })
  }

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <h1 style={{ "textAlign": "center" }}>Bem-vindo a Aplicação MERN</h1>
          <h2 style={{ "textAlign": "center" }}>Escolha um dos módulos do curso</h2>
          <nav>
            <ul>
              <li> <Link to="/">Home</Link></li>
              <li><Link to="/modulo1">Modulo 1</Link></li>
              <li><Link to="/modulo2">Modulo 1</Link></li>
              <li><Link to="/modulo3">Modulo 1</Link></li>
            </ul>
          </nav>
        </Route>
        <Route path="/modulo1" exact>
          {!creationOK && <UserRegistration handleSubmitUserInformations={handleSubmitUserInformations} />}
          {creationOK && <Module1 />}
        </Route>
        <Route path="/modulo2" exact>
          <Module2 />
        </Route>
        <Route path="/modulo3" exact>
          <Module3 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
