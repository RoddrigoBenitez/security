import React from "react";


const SECURITY_CODE = 'paradigma';

function UseState ({ name }) {

    const [state, setState] = React.useState({
        value: '',
        error: false,  
        loading: false,
    }) ;

    // const [value, setValue] = React.useState('');
    // const [error, setError] = React.useState(false);
    // const [loading, setLoading] = React.useState(false);

    console.log(state.value);


    React.useEffect(() =>  {
        console.log('empezando el efecto')
        
        if(!!state.loading){
            setTimeout(()=> {
                console.log('validacion up')
    
                if(state.value === SECURITY_CODE){

                    setState({ 
                        ...state,
                        error:false,
                        loading:false,
                     });

                    //setError(true);
                } else {
                    setState({ 
                        ...state,
                        error: true,
                        loading:false,
                     });
                }

    
                console.log('validacion down')
            }, 2000)
        }
        
        console.log('termonando el efecto')
    }, [state.loading]);

    return (
        <div>
        <h2>Eliminar {name}</h2>
        
        <p>Por favor escribe el  codigo de seguridad.</p>

        {(state.error && !state.loading) && (
            <p>Error: el codigo es incorrecto</p>
        )}
        {state.loading && (
            <p>Cargando...</p>
        )}

        <input placeholder="Codigo de seguridad" 
        value={state.value}
        onChange={(event) =>{
            setState({ 
                ...state,
                value:event.target.value,
             });
        }}
        />
        
        <button
        onClick={() => {
            //setError(false);  aca compila
            setState({ 
                ...state,
                loading:true,
             }); }}
        >Comprobar</button>


        </div>
    )
}

export { UseState };