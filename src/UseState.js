import React from "react";


const SECURITY_CODE = 'paradigma';

function UseState ({ name }) {

    const [state, setState] = React.useState({
        value: '',
        error: false,  
        loading: false,
        deleted: false,
        confirmed: false,
    }) ;

    // const [value, setValue] = React.useState('');
    // const [error, setError] = React.useState(false);
    // const [loading, setLoading] = React.useState(false);

    // this const's for diferents states
    const onConfirm = () => {
        setState({ 
            ...state,
            error:false, 
            loading:false,
            confirmed: true,
         });
    };

    const onError = () =>{
        setState({ 
            ...state,
            error: true,
            loading:false,
         });
    }

    const onWrite = (newEvent) =>{
        setState({ 
            ...state,
            value: newEvent,
         });
    }

    const onCheck = () =>{
        setState({ 
            ...state,
            loading:true,
         })
    }

    const onDelete = () =>{
        setState({
            ...state,
            deleted: true,

        })
    }

    const onReset = () =>{
        setState({
            ...state,
            confirmed: false,
            deleted: false,
            value: '',
        })
    }

    React.useEffect(() =>  {
        console.log('empezando el efecto')
        
        if(!!state.loading){
            setTimeout(()=> {
                console.log('validacion up')
    
                if(state.value === SECURITY_CODE){
                    
                    onConfirm();
                
                } else {
                    onError();
                }    
                console.log('validacion down')
            }, 2000)
        }
        
        console.log('termonando el efecto')
    }, [state.loading]);



    if(!state.deleted && !state.confirmed){
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
                onWrite(event.target.value);
            }}
            />
            
            <button
            onClick={() => {
                //setError(false);  aca compila
                onCheck();
                 }}
            >Comprobar</button>
    
    
            </div>
        );
    }else if(!!state.confirmed && !state.deleted){
        return (
            <React.Fragment>
                <p>Por Favor, reingrese su clave</p>
                <button
                    onClick={() =>
                        onDelete()
                    }
                >
                    Eliminar
                </button>
                <button
                    onClick={() =>
                        onReset()
                    }
                >
                    No Eliminar
                </button>
            </React.Fragment>
        );
    }else{
        return (
            <React.Fragment>
                <p>Fue elimanado con exito!!</p>
                <button
                    onClick={() =>
                        onReset()
                    }
                >Recuperar e ir a inicio</button>
            </React.Fragment>
        );
    }
}

export { UseState };