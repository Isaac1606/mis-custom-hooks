import { useState, useEffect, useRef } from "react"


export const useFetch = (url) => {

    // La referencia representa si se esta usando o no el componente
    const isMounted = useRef(true);
    
    const [state, setState] = useState({data: null, loading: true, error: null});
    
    // useEffect que solo tiene definido la funcion de desmontado   
    useEffect(() => {
        // Cuando se deje de usar la funcion
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({data: null, loading: true, error: null});

        fetch( url )
            .then( resp => resp.json() )
            .then( data =>{
                // Si el componente esta montado haz el cambio sino no
                if(isMounted.current){
                    setState({
                        loading: false,
                        error: null,
                        data: data,
                    })  
                }    
            })
            
    }, [url])

    return state;

}
