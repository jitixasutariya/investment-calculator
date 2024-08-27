import "./App.css";
import Header from "./Components/Header/Header";
import { GlobalStyle } from "./Styles/GeneralStyle";

function App() {
  return (
    <div className="container">
      <GlobalStyle />
      <Header />
    </div>
  );
}

export default App;
