import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/tab';
import Tabs from 'react-bootstrap/Tabs';


function App() {
  return (
    <div className="App">
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Inventory</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Deliveries</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<body>
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="inventory" title="Inventory">
    <Container>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Item</th>
      <th>Recieved</th>
      <th>Sold</th>
      <th>Remaining</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Item1</td>
      <td>50</td>
      <td>25</td>
      <td>25</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Item2</td>
      <td>25</td>
      <td>25</td>
      <td>0</td>
    </tr>
    <tr>
      <td>3</td>
      <td> Item3</td>
      <td> 50</td>
      <td>0</td>
      <td>50</td>
    </tr>
  </tbody>
</Table>
  </Container>



  </Tab>
  <Tab eventKey="deliveries" title="Deliveries">
    <p>implement delivery page, listing the deliveries with ability to click and load what is it each. unique id for each delivery and unique id attached to each item in the delivery</p>
  </Tab>
  <Tab eventKey="contact" title="Customers">
  <Container>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Customer</th>
      <th>Purchased</th>
      <th>Paid</th>
      <th>Remaining</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Customer1</td>
      <td>$50,000</td>
      <td>$25,000</td>
      <td>$25,000</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Customer2</td>
      <td>$25,000</td>
      <td>$25,000</td>
      <td>$0</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Customer3</td>
      <td>$50,000</td>
      <td>$0</td>
      <td>$50,000</td>
    </tr>
  </tbody>
</Table>
  </Container>
  </Tab>
</Tabs>
  <br>
  </br>
  <br>
  </br>
  


</body>
        
    
    </div>
  );
}

export default App;
