import logo from './logo.svg';
import './App.css';
import CustomForm from './components/CustomForm';
import NavBar from './components/NavBar';
import CustomeTable from './components/common/table/CustomeTable'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Row,Col} from 'react-bootstrap'

function App() {
  return (
    <div className="App" >
      <ToastContainer/>
      <NavBar/>
      <Row>
        <Col md={6} sm={12}>
        <CustomForm/>
        </Col>
        <Col md={6} sm={12}>
        <CustomeTable/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
