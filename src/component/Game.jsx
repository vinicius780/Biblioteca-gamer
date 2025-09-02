export default function game({title, cover, onRemove}) {
    return (
          <div>
            <img src={cover} alt={title} width="150" />
            <div>
              <h2>{game.title}</h2>
              <button onClick={onRemove}>Remover Game</button>
            </div>
          </div>
    )
}