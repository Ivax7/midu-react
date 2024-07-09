export const Square = ({ children, isSelected, updateBoard, index }) => {
  
  const className = `square ${isSelected ? 'is-selected' : ''}`


  const hadleClick = () => {
    updateBoard(index) // le pasamos el índice para saber en cuál de las cuadrillas ha hecho click
  }

  return (
    <div onClick={hadleClick} className={className}>
      {children}
    </div>
  )
}
