import Game from "./component/Game"
import NewGameForm from "./component/NewGameForm"
import useGameCollection from "./hooks/useGameCollection"

export default function App() {
const {games, addGame, removeGame} = useGameCollection()
  return (
<div style={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}}>
  <h1>Biblioteca de Games</h1>
  <NewGameForm addGame={addGame} />
  <div className="games">
    {games.length > 0 ? (
      games.map((game) => (
        <Game 
          key={game.id}
          title={game.title}
          cover={game.cover}
          onRemove={() => removeGame(game.id)}
        />
      ))
    ) : (
      <h2>Parece que ainda não adicionou nenhum Game. Tente adicionar algum !!!</h2>
    )}
  </div>
</div>
  )
}