import React from "react";

function UseState ({ name }) {

    const [error, setError] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() =>  {
        console.log('empezando el efecto')
        
        if(!!loading){
            setTimeout(()=> {
                console.log('validacion up')
    
                setLoading(false);
    
                console.log('validacion down')
            }, 2000)
        }
        
        console.log('termonando el efecto')
    }, [loading]);

    return (
        <div>
        <h2>Eliminar {name}</h2>
        
        <p>Por favor escribe el  codigo de seguridad.</p>

        {error && (
            <p>Error: el codigo es incorrecto</p>
        )}
        {loading && (
            <p>Cargando...</p>
        )}

        <input placeholder="Codigo de seguridad" />
        
        <button
        onClick={() => setLoading(true)}
        >Comprobar</button>


        </div>
    )
}

export { UseState };