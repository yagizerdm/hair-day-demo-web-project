import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Book from './Book';
import Menu from './Menu';

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="nav-item">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/book" className="nav-item">
              Book
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path='/menu' element={<Menu />}></Route>
      </Routes>
    </>
  );
};

export default Nav;