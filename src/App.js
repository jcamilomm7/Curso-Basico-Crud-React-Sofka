
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./config/routes"
import './scss/app.scss';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.patch}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
