import {BoxContent} from './Card.jsx'
function Card(props){

    return(
        <BoxContent  className={props.estilizacao} onClick={props.reproduz}>
                    <img src={props.imagem} alt=""></img>
                    <h4>{props.titulo}</h4>
         </BoxContent>
    )
}

export default Card