import React from "react";


const SECURITY_CODE = 'paradigma';

function UseReducer ({ name }) {

    const [state, dispatch] = React.useReducer(reducer, { initialState }) ;

    // const [value, setValue] = React.useState('');
    // const [error, setError] = React.useState(false);
    // const [loading, setLoading] = React.useState(false);

    // this const's for diferents states
    // const onConfirm = () => {
    //     setState({ 
    //         ...state,
    //         error:false, 
    //         loading:false,
    //         confirmed: true,
    //      });
    // };

    // const onError = () =>{
    //     setState({ 
    //         ...state,
    //         error: true,
    //         loading:false,
    //      });
    // }

    // const onWrite = (newEvent) =>{
    //     setState({ 
    //         ...state,
    //         value: newEvent,
    //      });
    // }

    // const onCheck = () =>{
    //     setState({ 
    //         ...state,
    //         loading:true,
    //      })
    // }

    // const onDelete = () =>{
    //     setState({
    //         ...state,
    //         deleted: true,

    //     })
    // }

    // const onReset = () =>{
    //     setState({
    //         ...state,
    //         confirmed: false,
    //         deleted: false,
    //         value: '',
    //     })
    // }

    React.useEffect(() =>  {
        console.log('empezando el efecto')
        
        if(!!state.loading){
            setTimeout(()=> {
                console.log('validacion up')
    
                if(state.value === SECURITY_CODE){
                    
                    dispatch(
                       { type: 'CONFIRM' }
                    )
                
                } else {
                    dispatch(
                       { type: 'ERROR' }
                    )
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
                dispatch(
                   { type: 'WRITE' }
                )
                //onWrite(event.target.value);
            }}
            />
            
            <button
            onClick={() => {
                dispatch(
                   { type: 'CHECK' }
                )
                //setError(false);  aca compila
                //onCheck();
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
                        dispatch(
                            { type: 'DELETE' }
                        )
                    }
                >
                    Eliminar
                </button>
                <button
                    onClick={() =>
                        dispatch(
                            { type: 'RESET' }
                        )
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
                        dispatch(
                            { type: 'RESET' }
                        )
                    }
                >Recuperar e ir a inicio</button>
            </React.Fragment>
        );
    }
}

export { UseReducer };




const initialState = {
        value: '',
        error: false,  
        loading: false,
        deleted: false,
        confirmed: false,
};


const reducerObject = (state) =>({
    'CONFIRM':{
        ...state,
        error:false, 
        loading:false,
        confirmed: true,
    },
    'ERROR':{
        ...state,
        error: true,
        loading: false,
    },
    'CHECK': {
        ...state,
        loading: true,
    },
    'WRITE':{ 
        ...state,
        value: '',
    },
    'DELETE':{
        ...state,
        deleted: true,
    },
    'RESET':{
        ...state,
        confirmed: false,
        deleted: false,
        value: '',
    }
})

const reducer = (state, action) =>{
    if(reducerObject(state)[action.type]){
        return reducerObject(state)[action.type];
    } else {
        return state
    }
}



// const reducer = (state, action) =>{

// };
// const reducerIf = (state, action) =>{
//    if (action.type === 'ERROR'){
//     return {
//         ...state,
//         error: true,
//         loading: false,
//     };
//    } else if (action.type === 'CHECK') {
//     return{
//         ...state,
//         loading:true,
//     };
//    } else {
//     return{
//         ...initialState,
//     }
//    }
// };

// const reducerSwitch = (state, action) =>{
//     switch(action.type){
//         case 'ERROR':
//             return{
//                 ...state,
//                 error: true,
//                 loading: false,
//             };
            
//         case 'CHECK':
//             return{
//                 ...state,
//                 loading: true,
//             };
//         default:
//             return{
//                 ...state
//             }
//     }
// }