import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './characters.css'

export default function Character({ data }) {
  const [filteredData, setFilteredData] = useState([])
  let { name } = useParams()
}