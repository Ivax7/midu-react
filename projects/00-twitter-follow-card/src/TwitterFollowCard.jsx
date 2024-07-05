// Importamos hook para añadir funcionalidad y código arbitrario en los componentes
import { useState } from "react";

export function TwitterFollowCard({ children, userName, initialIsFollowing}) {
  
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing) // estado inicial es sin seguir = false
  
  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing 
  ? 'tw-followCard-button is-following' // si estamos siguiendo 
  : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing) // le damos la vuelta al valor al hacer click en el
  }

  return(
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
      <img 
      className='tw-followCard-avatar'
      alt={`El avatar de ${userName}`}
      src={`https://unavatar.io/${userName}`} />
      <div className='tw-followCard-info'>
        {children}
        <span className={'tw-followCard-infoUserName'}>@{userName}</span>
      </div>
    </header>

    <aside>
      <button className={buttonClassName} onClick={handleClick}> 
        <span className="tw-followCard-text">{text}</span>
        <span className="tw-followCard-stopFollow">Dejar de seguir</span>
      </button>
    </aside>
    </article>
  )
}
