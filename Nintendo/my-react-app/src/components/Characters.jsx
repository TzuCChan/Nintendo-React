import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './characters.css'

export default function Characters({ data }) {
  const [uniqueCharacters, setUniqueCharacters] = useState([])

useEffect(() => {
    let uniqueCharacterArray = [...new Map(data.map((char) => [char.character, char])).values()];
    console.log(uniqueCharacterArray)
    setUniqueCharacters(uniqueCharacterArray)    
  }, [data])
}