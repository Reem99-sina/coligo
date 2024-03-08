"use client"
import clsx from "clsx"
import {FieldErrors,FieldValues,UseFormRegister} from "react-hook-form"
interface InputProps{
    label:string;
    id:string;
    type?:string;
    required?:boolean;
    register:UseFormRegister<FieldValues>;
    errors:FieldErrors,
    disabled?:boolean
}
const Input:React.FC<InputProps> = ({
    label,id,type,required,register,errors,disabled
}) => {
    return ( 
        <div>
            <label htmlFor="id" className="block text-sm font-medium loading-6 text-gray-600">
                {label}
            </label>
            <div className="mt-2">
                <input id={id}type={type}autoComplete={id} disabled={disabled}
                {...register(id,{required})}
                style={{    backgroundColor: "white",
                    padding: "5px",
                    border:" 1px solid #80808091",
                    borderRadius: "5px",color:"black"}}
                />
            </div>
        </div>
     );
}
 
export default Input;