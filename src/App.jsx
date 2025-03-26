import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoApp from "./components/TodoApp/TodoApp";
import LogIn from "./components/LogIn/LogIn";
import NoPath from "./components/NoPath/NoPath";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  const [Login, setLogin] = useState(false)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn setLogin={setLogin}/>} />
        <Route path="/todo" element={
          <PrivateRoute Login={Login}>
            <TodoApp />
          </PrivateRoute>
        } />
        <Route path="*" element={<NoPath />} />
      </Routes>
    </Router>
  );
}

export default App;
