import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import {
  Header,
  Hero,
  Specials,
  Popular,
  AppStore,
  Menu,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <Theme>
        <GlobalStyles />
        <Header />
        <Hero />
        <Specials />
        <Popular />
        <AppStore />
        <Menu />
        <Footer />
      </Theme>
    </>
  );
}

export default App;
