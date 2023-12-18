import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import { Header, Hero, Service, Popular, AppStore, Footer } from "./components";

function App() {
  return (
    <>
      <Theme>
        <GlobalStyles />
        <Header />
        <Hero />
        <Service />
        <Popular />
        <AppStore />
        <Footer />
      </Theme>
    </>
  );
}

export default App;
