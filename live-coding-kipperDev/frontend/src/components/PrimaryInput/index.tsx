import { Input } from "@chakra-ui/react"
import { ChangeEventHandler } from "react"
import './PrimaryInput.css'

interface PrimaryInputProps {
    name: string
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
    label: string
    placeholder: string
}

const PrimaryInput = ({ name, onChange, value, label, placeholder }: PrimaryInputProps) => {
    return(
        <div className="input-container">
            <label className="label">{label}</label>
            <Input 
                variant='filled' 
                placeholder={placeholder}
                name={name} 
                value={value} 
                onChange={onChange}
            />
        </div>
    )
}

export default PrimaryInput