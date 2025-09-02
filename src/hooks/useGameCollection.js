 import { useState } from "react"

export default function useGameCollection() {

  const [games, setGames] = useState(() => {  
    const storedGames = localStorage.getItem("obc-game.lib") // Se não houver nada no localStorage (ou seja,
    //  é a primeira vez que o usuário abre a página), storedGames será null. Então retornamos um array vazio como estado inicial []
    if(!storedGames) return []
   return JSON.parse(storedGames)
  })

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000000)
    const game = { id, title, cover }
    setGames(state => {
      const newState = [...state, game]
      localStorage.setItem("obc-game.lib", JSON.stringify(newState))
      return newState
    })
  }

  const removeGame = (id) => {
    setGames(state => {
      const newState = state.filter(game => game.id !== id)
      localStorage.setItem("obc-game.lib", JSON.stringify(newState))
      return newState
    })
  }
  return {games, addGame, removeGame}
}