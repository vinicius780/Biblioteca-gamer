export default function TextInput({value, setValue, placeholder}) {
    return(
             <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
    )
}