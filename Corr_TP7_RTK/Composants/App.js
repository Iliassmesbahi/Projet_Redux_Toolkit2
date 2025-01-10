import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import List from "./list";
import Ajout from "./Ajout";
import Modification from "./Modification";
import { Provider } from "react-redux";

const App = () => {
  return (
    
      <BrowserRouter>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
              E-Learning
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link active" to="/">
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/nouveau">
                    Nouveau tutoriel
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<List />}></Route>
            <Route path="/nouveau" element={<Ajout />}></Route>
            <Route path="/tuto/:code" element={<Modification />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
   
  );
};
export default App;
