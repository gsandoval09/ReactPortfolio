function ImageButton(props) {
    console.log(props);
    return(
        <button>
            <img src={props.imgSrc} href="https://github.com/gsandoval09" alt="">
            </img>
        </button>

    )
}



export default ImageButton;