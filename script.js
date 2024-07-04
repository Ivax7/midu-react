const App = () => {
  return botones
};

const botones = <>
<button data-id="123">Me gusta</button>
<button data-id="234">Me gusta</button>
<button data-id="567">Me gusta</button>
</>

const appDomElement = document.getElementById('app');
const root = ReactDOM.createRoot(appDomElement);
root.render(<App />);