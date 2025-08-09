function Input({type , placeholder , value , onChange , onBlur , name , refProp}){
    return (
        <>
        <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        ref={refProp}
        className="input"
        
        />
        </>
    )
}