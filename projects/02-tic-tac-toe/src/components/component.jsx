import { useState, useEffect } from 'react'
const Component = () => {
  const [value, setValue] = useState(false)

  useEffect(() => {
    // como mínimo, se ejecuta una vez
    console.log('El codigo a ejecutar')
  })
}