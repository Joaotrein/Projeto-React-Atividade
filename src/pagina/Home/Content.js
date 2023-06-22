import Card from "../../componentes/Card/Card"
import { VideosSection } from "./Content.jsx"

function Home(props){

    return(
        <VideosSection>
                <Card 
                reproduz={props.reproduz}
                imagem={"https://picsum.photos/400/400?a=1"}
                titulo={"Vídeo 1"}
                />
                <Card 
                reproduz={props.reproduz}
                imagem={"https://picsum.photos/400/400?a=2"}
                titulo={"Vídeo 2"}
                />
                <Card 
                reproduz={props.reproduz}
                imagem={"https://picsum.photos/400/400?a=3"}
                titulo={"Vídeo 3"}
                />
                <Card 
                reproduz={props.reproduz}
                imagem={"https://picsum.photos/400/400?a=4"}
                titulo={"Vídeo 4"}
                />
                <Card 
                reproduz={props.reproduz}
                imagem={"https://picsum.photos/400/400?a=5"}
                titulo={"Vídeo 5"}
                />
                <Card 
                reproduz={props.reproduz}
                imagem={"https://picsum.photos/400/400?a=6"}
                titulo={"Vídeo 6"}
                />
                <Card 
                reproduz={props.reproduz}
                imagem={"https://picsum.photos/400/400?a=7"}
                titulo={"Vídeo 7"}
                />
                <Card 
                reproduz={props.reproduz}
                imagem={"https://picsum.photos/400/400?a=8"}
                titulo={"Vídeo 8"}
                />
            </VideosSection>
    )
}

export default Home