import axios from 'axios'


export function createUser(user) {
  return axios.post('http://localhost:5001/api/user', user)
}
export async function getUsers(user) {
  try {
    return await axios.get('http://localhost:5001/api/users')
  } catch (error) {
    return error
  }
}

export function mapUserObject(user) {
  return {
    nomeCompleto: user.nomeCompleto.value,
    email: user.email.value,
    estado: user.estado.value,
    empresa: user.empresa.value || null,
    telefone: user.telefone.value
  }
}

