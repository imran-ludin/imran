const Button=(props)=>{

    const myStyles={
        backgroundColor: props.color,
        width: props.width
    };
    return(
        <button style={myStyles} onClick={props.click}>{props.text}</button>
    );
}
export default Button;