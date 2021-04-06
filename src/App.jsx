// NPM Packages
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Internal
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AccountView from "./pages/AccountView";
import "./styles/style.css";

export default function App() {
  // Router
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={AccountView} path="/AccountView" />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
