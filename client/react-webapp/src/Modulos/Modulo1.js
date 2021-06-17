import React from 'react'
import Question from '../components/Questions/Question'
import { UserContext } from '../context/UserContext'
import './modules.css'

const Modulo1 = () => {
  const userFromContext = React.useContext(UserContext).user
  const [answerers, setAnswerers] = React.useState([])
  const [perguntasModulo1, setPerguntasModulo1] = React.useState([])

  React.useEffect(() => {
    setPerguntasModulo1([
      {
        title: "1. Qual é o órgão Gestor da Lei Federal de Incentivo à Cultura? ",
        id: 'mod-1-perg-1',
        alternativas: [{
          id: 1,
          title: "a) O Ministério da Cultura",
          correct: false,
        },
        {
          id: 2,
          title: "b) A Secretaria Especial da Cultura, do Ministério do Turismo",
          correct: true,
        },
        {
          id: 3,
          title: "c) A Secretaria de Cultura de cada Estado e do Distrito Federal",
          correct: false,
        },
        {
          id: 4,
          title: "d) A instituição vinculada do Ministério da Cultura relacionada com a linguagem artística do projeto",
          correct: false,
        },
        {
          id: 5,
          title: "e) A Comissão Nacional de Incentivo à Cultura - CNIC",
          correct: false,
        }

        ]
      },
      {
        title: "1. Qual é o órgão Gestor da Lei Federal de Incentivo à Cultura? ",
        id: 'mod-1-perg-2',
        alternativas: [{
          id: 1,
          title: "a) O Ministério da Cultura",
          correct: false,
          selected: false
        },
        {
          id: 2,
          title: "b) A Secretaria Especial da Cultura, do Ministério do Turismo",
          correct: true,
          selected: false
        },
        {
          id: 3,
          title: "c) A Secretaria de Cultura de cada Estado e do Distrito Federal",
          correct: false,
          selected: false
        },
        {
          id: 4,
          title: "d) A instituição vinculada do Ministério da Cultura relacionada com a linguagem artística do projeto",
          correct: false,
          selected: false
        },
        {
          id: 5,
          title: "e) A Comissão Nacional de Incentivo à Cultura - CNIC",
          correct: false,
          selected: false
        }

        ]
      }, {
        title: "1. Qual é o órgão Gestor da Lei Federal de Incentivo à Cultura? ",
        id: 'mod-1-perg-3',
        alternativas: [{
          id: 1,
          title: "a) O Ministério da Cultura",
          correct: false,
          selected: false
        },
        {
          id: 2,
          title: "b) A Secretaria Especial da Cultura, do Ministério do Turismo",
          correct: true,
          selected: false
        },
        {
          id: 3,
          title: "c) A Secretaria de Cultura de cada Estado e do Distrito Federal",
          correct: false,
          selected: false
        },
        {
          id: 4,
          title: "d) A instituição vinculada do Ministério da Cultura relacionada com a linguagem artística do projeto",
          correct: false,
          selected: false
        },
        {
          id: 5,
          title: "e) A Comissão Nacional de Incentivo à Cultura - CNIC",
          correct: false,
          selected: false
        }

        ]
      }
    ])
  }, [])


  const persisteAnswerer = (pergunta, alternativa) => {
    const questionAlreadyAnswered = answerers.findIndex(res => res.perguntaId === pergunta.id)
    if (questionAlreadyAnswered > -1) {
      const newAnswerers = answerers
      newAnswerers[questionAlreadyAnswered].alternativaEscolhidaId = alternativa.id
      setAnswerers([...newAnswerers])
    } else {
      const newAnswerers = answerers
      newAnswerers.push({ perguntaId: pergunta.id, alternativaEscolhidaId: alternativa.id })
      setAnswerers([...newAnswerers])
    }
  }

  const handleAlternativeChange = (pergunta, alternativa) => {
    persisteAnswerer(pergunta, alternativa)
  }

  const handleSubmit = () => {
    console.log(answerers);
  }

  return (
    <div className={'module-questions'}>
      <h2>MODULO1</h2>
      <h3>{userFromContext.nomeCompleto.value}, responda as perguntas abaixo para obter o certificado</h3>
      <Question perguntas={perguntasModulo1} handleChange={handleAlternativeChange} />
      <button onClick={() => { handleSubmit() }}>Enviar</button>
    </div>
  )
}

export default Modulo1
