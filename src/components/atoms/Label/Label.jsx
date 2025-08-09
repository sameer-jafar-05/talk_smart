function Label( {text , htmlFor}){
    return (
        <>
        <Label classname="label" htmlFor={htmlFor}>
        {text}
        </Label>
        </>
    );


}
export default Label;
