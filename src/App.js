import "./styled.css"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import HomePage from "./components/Pages/Home/Content";
import Painel from "./components/PainelContent/PainelContent";


function App() {

  function reproduzVideo(onClick) {
    alert("O vídeo está sendo reproduzido")
  }

  return (
   <>

      <Header/>
      <ContainerMain>
        <Nav/>
        <Painel>
          <HomePage reproduz={reproduzVideo} />
        </Painel>
      </ContainerMain>
      <Footer/>
   </>
  );
}

export default App;
