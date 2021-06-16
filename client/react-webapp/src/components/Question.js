import React from 'react'

const Question = ({ perguntas, handleChange }) => {
  const [selectedAnswers, setselectedAnswers] = React.useState({})

  const handleClick = (pergunta, alternativa) => {
    const newAnswerers = selectedAnswers
    newAnswerers[pergunta.id] = alternativa.id
    setselectedAnswers({...newAnswerers})

    
    handleChange(pergunta, alternativa)
  }

  return (
    <div>
      {perguntas.map(pergunta => {
        return <div key={pergunta.id}>
          <h2>{pergunta.title}</h2>
          {pergunta.alternativas.map(alternativa =>
            <p
              style={{
                "cursor": "pointer",
                "color": selectedAnswers[pergunta.id] === alternativa.id ? 'red' : 'black'
              }}
              key={alternativa.id}
              onClick={() => { handleClick(pergunta, alternativa) }}>{alternativa.title}</p>
          )}
        </div>
      })}
    </div>
  )
}

export default Question
