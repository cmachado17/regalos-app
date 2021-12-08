import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import IngresoRegalos from './components/IngresoRegalos';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListarRegalos from "./components/ListarRegalos";

function App() {
  return (
    <div className="App container">
      <Header />
      <Row>
        <Col xs={6}>
        <IngresoRegalos />
        </Col>
        <Col xs={6}>
        <ListarRegalos />
        </Col>

      </Row>
    
    </div>
  );
}

export default App;
