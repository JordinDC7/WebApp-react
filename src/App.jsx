import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import allRoutes from "./routes/publicRoutes";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        {" "}
        {/* Provide a fallback for loading */}
        <Routes>
          {allRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.element />}
              exact={route.exact}
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
