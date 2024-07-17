import { EVENTS } from './consts'
import { BUTTONS } from './consts'

export function navigate (href) {
  window.history.pushState({}, '', href)
  // crear un evento personalizado para avisar que hemos cambiado de url
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}


export function Link ({ target, to, ...props}) {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.primary // left click (primary click)

    // se abre la ventana de diferentes maneras dependiendo de la combinación de botones
    const isModifiedEvent = event.metaKey || event.altKey || event.shiftKey || event.ctrlKey

    const isManegeableEvent = target === undefined || target === '_self' 
    
    if (isMainEvent && isManegeableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to) // navegación con SPA
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}