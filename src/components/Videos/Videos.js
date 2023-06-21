import { Videocontent, Videoimagem } from "./videos.jsx";

function Video(props) {
    return (
        <Videocontent class="box-pagina-principal media1" onClick={props.reproduz}>
            <Videoimagem src={props.link} alt=""></Videoimagem>
            <h4>{props.titulo}</h4>
        </Videocontent>
    )
}

export default Video