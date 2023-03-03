import "./End.css"

const End = ({retry, score}) => {
  return (
    <div>
         <h1> Fim de jogo!</h1>
         <h2>A sua pontuação foi: <span>{score}</span></h2>
        <button onClick={retry}> Reiniciar jogo</button>
       
    </div>
  )
}

export default End