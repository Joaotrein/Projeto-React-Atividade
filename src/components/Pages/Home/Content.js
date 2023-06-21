import Video from '../../Videos/Videos'

function HomePage(props) {

    return(
         
        <section class="painel-de-videos">
            <Video
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=69"} 
                titulo={"Título do vídeo"}
            />

            <Video
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=2"} 
                titulo={"Título do vídeo"}
            />

            <Video
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=3"} 
                titulo={"Título do vídeo"}
            />

            <Video
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=4"} 
                titulo={"Título do vídeo"}
            />

            <Video
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=5"} 
                titulo={"Título do vídeo"}
            />

            <Video
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=6"} 
                titulo={"Título do vídeo"}
            />

            <Video
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=7"} 
                titulo={"Título do vídeo"}
            />

            <Video
                reproduz={props.reproduz}
                link={"https://picsum.photos/400/400?a=8"} 
                titulo={"Título do vídeo"}
            />
                   
        </section>
    )
}

export default HomePage