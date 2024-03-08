"use client"
import ReactSelect from "react-select"
const Select=({disabled,label,options,onChange,value,isMulti}:
    {disabled?:boolean,label:string,isMulti:boolean,options:Record<string,any>[],onChange:(value:Record<string,any>)=>void,value?:Record<string,any>})=>{
    return(
        <div className="z-[100]">
            <label className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <ReactSelect isDisabled={disabled} value={value} 
                onChange={onChange} isMulti={isMulti} options={options}
                 menuPortalTarget={document.body}
                 styles={{
                    menuPortal:(base)=>({
                        ...base,
                        zIndex:9999
                    })
                 }}
                 classNames={{
                    control:()=>"text-sm"
                 }}
                 />
            </div>
        </div>
    )
}
export default Select