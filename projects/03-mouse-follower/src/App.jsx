import { useEffect, useState } from 'react';

const FollowMouse = () => {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0})
  
  // Pointer move
  useEffect(() => {
    console.log('effect', { enabled })
    const handleMove = (event) => {
      const { clientX, clientY } = event; // Esta línea utiliza la desestructuración de objetos para extraer las propiedades clientX y clientY del objeto event.
      setPosition({ x: clientX, y: clientY})
    }

    if (enabled) { // que se active el efecto solo cuando el enable es true
      window.addEventListener('pointermove', handleMove)
    }

    // limpiamos el efecto para desactivar
    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    } // se ejecuta cuando deja de aparecer el componente y cuando cambia la dependencia
  }, [enabled]) // el efecto se ejecuta cada vez que cambia el valor de enabled

  // [] => solo se ejecuta una vez cuando se monta el componente
  // [enabled] => se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined => se ejecuta cada vez que se renderiza el componente


  // change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }

  })


  return (
  <>
    <div style={{
      position: 'absolute',
      backgroundColor: '#f5f24f',
      border: '2px solid black',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -25,
      top: -25,
      width: 50,
      height: 50,
      transform: `translate(${position.x}px, ${position.y}px)`
    }}
    />

    <button onClick={() => setEnabled(!enabled)}>
    {enabled ? 'Desactivar' : 'Activar'} seguir puntero
    </button>
  </>
  )
}

function App() {
  return (
    <main>
    <FollowMouse />

    </main>
  )
}

export default App
