import { ConteudoNav, Lista } from "./Nav.jsx"


function Nav() {
    return (
        <ConteudoNav>
            <ul>
                <Lista>Início</Lista>
                <Lista>Em alta</Lista>
                <Lista>Inscrições</Lista>
                <hr></hr>
                <Lista>Originais</Lista>
                <Lista>Histórico</Lista>
            </ul>
        </ConteudoNav>
    )
}

export default Nav