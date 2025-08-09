import Label from "../../atoms/Label/Label";
import Label from "../../atoms/Input/Input";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";

export default function FormField({ 
    label ,
    type ,
    placeholder ,
    name , 
    register , 
    errors
    }){
    return(
        <>
        <div className="form-field">
            <Label text={label} htmlFor={name}/>
            <Input 
            type={type}
            placeholder={placeholder}
            name={name}
            refProp={register}
            />
            <ErrorMessage message={errors?.[name]?.message}/>
        </div>
        </>
    )
}