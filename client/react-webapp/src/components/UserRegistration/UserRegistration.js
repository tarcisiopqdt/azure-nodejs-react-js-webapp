import React from 'react'
import { UserContext } from '../../context/UserContext'

const UserRegistration = ({ handleSubmitUserInformations }) => {

  const userFromContext = React.useContext(UserContext).user
  const setUserFromContext = React.useContext(UserContext).setUser
  const [invalidInputs, setInvalidInputs] = React.useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      handleSubmitUserInformations(userFromContext)
    }
  }

  const handleChange = (e) => {
    const newUserInfos = userFromContext
    newUserInfos[e.target.name] = { value: e.target.value, required: newUserInfos[e.target.name].required }
    setUserFromContext({ ...newUserInfos })
  }

  const validateForm = () => {
    const campos = Object.keys(userFromContext)
    const errors = []
    campos.forEach(campo => {
      var fieldIsRequired = userFromContext[campo].required;
      if (fieldIsRequired) {
        var x = userFromContext[campo].value;
        if (x === "" || x === null || !x) {
          errors.push(campo)
        }
      }
    })

    if (errors.length > 0) {
      setInvalidInputs([...errors])
      return false;
    } else {
      setInvalidInputs([])
    }
    return true
  }

  const fieldIsInvalid = (name) => {
    return invalidInputs && invalidInputs.indexOf(name) > -1
  }

  return (
    <div id="form-wrapper" className={`animar`}>
      <form id="form-user-registration" name="form-user-registration-name">
        <div className='form-item'>
          <label>
            Nome Completo {userFromContext.nomeCompleto.required && "*"}:
            <input type="text" name="nomeCompleto" id="nomeCompleto"
              value={userFromContext.nomeCompleto.value} onChange={handleChange} />
            {fieldIsInvalid('nomeCompleto') && <p>Campo obrigatório</p>}
          </label>
        </div>

        <div className='form-item'>
          <label>
            E-mail {userFromContext.email.required && "*"}:
            <input type="email" name="email" id="email"
              value={userFromContext.email.value} onChange={handleChange} />
            {fieldIsInvalid('email') && <p>Campo obrigatório</p>}
          </label>
        </div>

        <div className='form-item'>
          <label>
            Estado {userFromContext.estado.required && "*"}:
            <input type="text" name="estado" id="estado" value={userFromContext.estado.value} onChange={handleChange} />
            {fieldIsInvalid('estado') && <p>Campo obrigatório</p>}
          </label>
        </div>

        <div className='form-item'>
          <label>
            Empresa {userFromContext.empresa.required && "*"}:
            <input type="text" name="empresa" id="empresa"
              value={userFromContext.empresa.value} onChange={handleChange} />
            {fieldIsInvalid('empresa') && <p>Campo obrigatório</p>}
          </label>
        </div>

        <div className='form-item'>
          <label>
            Telefone {userFromContext.telefone.required && "*"}:
            <input type="text" name="telefone" id="telefone"
              value={userFromContext.telefone.value} onChange={handleChange} />
            {fieldIsInvalid('telefone') && <p>Campo obrigatório</p>}
          </label>
        </div>

        <div className='form-item'>
          <button onClick={handleSubmit}>Continuar</button>
        </div>
      </form>
    </div>
  )
}

export default UserRegistration
