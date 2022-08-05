//bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

//react components
import { Routes, Route, BrowserRouter } from 'react-router-dom';

//screens
import HomeView from './views/HomeView';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src="/images/brand_icon.png"
                  alt=""
                  width="30"
                  height="24"
                  className="d-inline-block align-text-top"
                />
                Shop-Project
              </Navbar.Brand>
              <Nav>
                <Nav.Link href="#pricing">Login</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<HomeView />}></Route>
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All Right Reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
