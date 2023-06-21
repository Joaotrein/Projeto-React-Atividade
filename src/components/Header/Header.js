import { Cabecalho } from "./Header.jsx"

function Header() {
    return (
        <Cabecalho>
            <h1>Video</h1>
            <input type="text" placeholder="Clique aqui para buscar" id="Busca"></input>
        </Cabecalho>
    )
}

export default Header