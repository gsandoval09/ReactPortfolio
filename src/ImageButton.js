function ImageButton(args) {
    function visitPage(link){
        window.location = link;
    }

    return(
        <button onClick={() => visitPage(args.link)}>
            <img src={args.imgSrc} alt="" style={{width:args.width+"px", height:args.height+"px"}}>
            </img>
        </button>

    )
}


export default ImageButton;