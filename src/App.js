import { Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./pages/LandingPage";
import ContactForm from "./pages/ContactForm";
import ScrollUpButton from "react-scroll-up-button";

function App() {
  return (
    <>
      <ScrollUpButton />
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/contact">
          <ContactForm />
        </Route>
      </Switch>
    </>
  );
}

export default App;
