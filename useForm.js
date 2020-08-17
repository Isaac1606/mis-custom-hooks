import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );

    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            // sumamente util
            // del elemento del formulario que este 
            // cambiando toma su name y a ese elemento dale su
            // nuevo valor
            [target.name]: target.value
        });
    }

    return [values, handleInputChange, reset];

}
