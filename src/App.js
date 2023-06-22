import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer"
import Nav from "./componentes/Nav/Nav";
import Home from "./pagina/Home/Content";
import { FullScreen, PageContent } from './App.jsx'
function App() {

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <body>
      <FullScreen>
        <Header />

        <PageContent>
          <Nav />
          <Home reproduz={reproduzVideo} />
        </PageContent>

        <Footer />
      </FullScreen>
    </body>
  );
}

export default App;
