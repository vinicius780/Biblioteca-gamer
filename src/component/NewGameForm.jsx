import { useState } from "react"
import TextInput from "./TextInput"

export default function NewGameForm({addGame}) {

  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")
  
    const handleSubmit = (ev) => {
        ev.preventDefault()
        if (!title.trim() || !cover.trim()) return
        addGame({ title, cover })
        setTitle("")
        setCover("")
    }

    return (
        <form onSubmit={handleSubmit}>
         <TextInput value={title} setValue={setTitle} placeholder = "Titulo" />
           <TextInput value={cover} setValue={setCover} placeholder = "URl da capa..." />
            <button type="submit">Adicionar</button>
        </form>
    )
}