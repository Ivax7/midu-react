import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button} from 'react-bootstrap';
import { ArrowsIcon } from './components/Icons';
import './App.css'
import { useStore } from './hooks/useStore';
import { AUTO_LANGUAGE } from './constants';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types.d';
import { TextArea } from './components/TextArea';

function App() {
  const { fromLanguage, toLanguage, fromText, result, interchangeLanguages, setFromLanguage, setToLanguage } = useStore()
  
  return (
    <Container fluid>
      <h2>Google Translate</h2>
      
      <Row>
        <Col>
          <LanguageSelector
            type={SectionType.from}
            value={fromLanguage}
            onChange={setFromLanguage}/>
      
          <TextArea
            placeholder='Introducir texto'
            type={SectionType.From}
            value={fromText}
          />

        </Col>

        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage == AUTO_LANGUAGE} onClick={interchangeLanguages}>
          <ArrowsIcon/>
          </Button>
        </Col>
      
        <Col>
          <LanguageSelector
            type={SectionType.to}
            value={toLanguage}
            onChange={setToLanguage}/>


          <TextArea
            placeholder='Traducción'
            type={SectionType.To}
            value={result}

        />
        </Col>
      </Row>
    </Container>
  )
}

export default App
