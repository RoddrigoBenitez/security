import React from "react";


const SECURITY_CODE = 'paradigma';

function UseState ({ name }) {

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    console.log(value);


    React.useEffect(() =>  {
        console.log('empezando el efecto')
        
        if(!!loading){
            setTimeout(()=> {
                console.log('validacion up')
    
                if(value === SECURITY_CODE){
                    setLoading(false);
                    //setError(true);
                } else {
                    setError(true);
                    setLoading(false);
                }

    
                console.log('validacion down')
            }, 2000)
        }
        
        console.log('termonando el efecto')
    }, [loading]);

    return (
        <div>
        <h2>Eliminar {name}</h2>
        
        <p>Por favor escribe el  codigo de seguridad.</p>

        {(error && !loading) && (
            <p>Error: el codigo es incorrecto</p>
        )}
        {loading && (
            <p>Cargando...</p>
        )}

        <input placeholder="Codigo de seguridad" 
        value={value}
        onChange={(event) =>{
            setValue(event.target.value)
        }}
        />
        
        <button
        onClick={() => {
            //setError(false);  aca compila
            setLoading(true);}}
        >Comprobar</button>


        </div>
    )
}

export { UseState };