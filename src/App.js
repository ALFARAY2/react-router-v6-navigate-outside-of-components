import "./styles.css";
import { useLayoutEffect, useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { history } from "./history";

/**
 * https://stackoverflow.com/questions/69871987/react-router-v6-navigate-outside-of-components
 */

const CustomRouter = ({ history, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

export default function App() {
  return (
    <CustomRouter history={history}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </CustomRouter>
  );
}
