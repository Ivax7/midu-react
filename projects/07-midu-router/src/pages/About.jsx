import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'IR a la home',
    description: '¡Hola! Me llamo Xavi Serrano y estoy creando un clon de React Router.'
  },
  en: {
    title: 'About us',
    button: 'GO to home page',
    description: '¡Hi! My name is Xavi Serrano and I\'m creating a clone of React Router.'

  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en // pasamos el lenguage que tiene la página y sinó por defecto en inglés
}

// Pagina AboutUs
export default function AboutPage({ routeParams}) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src="../perfil.png" alt='Foto de Xavi'/>
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}

