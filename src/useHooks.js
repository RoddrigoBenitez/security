import React from "react";


const SECURITY_CODE = 'paradigma';

function UseReducer ({ name }) {

    const [state, dispatch] = React.useReducer(reducer, { initialState }) ;

    // const [value, setValue] = React.useState('');
    // const [error, setError] = React.useState(false);
    // const [loading, setLoading] = React.useState(false);

    // this const's for diferents states
    const onConfirm = () => {
        dispatch({ type: actionTypes.confirm })
    };

    const onError = () =>{
        dispatch({ type: actionTypes.error })
    }

    const onWrite = ({ target: {value} }) =>{
        dispatch({ type: actionTypes.write, payload: value })
    }

    const onCheck = () =>{
        dispatch({ type: actionTypes.check })
    }

    const onDelete = () =>{
        dispatch({ type: actionTypes.delete })
    }

    const onReset = () =>{
        dispatch({ type: actionTypes.reset })
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
            onChange={onWrite
                
            // (event) =>{
            //     // dispatch(
            //     //    { type: actionTypes.write, payload: event.target.value  }
            //     // )
            //     onWrite(event.target.value);}
                }
            />
            
            <button
            onClick={onCheck
                //setError(false);  aca compila
                //onCheck();
                 }
            >Comprobar</button>
    
    
            </div>
        );
    }else if(!!state.confirmed && !state.deleted){
        return (
            <React.Fragment>
                <p>Por Favor, reingrese su clave</p>
                <button
                    onClick={onDelete}
                >
                    Eliminar
                </button>
                <button
                    onClick={onReset}
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
                    onClick={onReset}
                >Recuperar e ir a inicio</button>
            </React.Fragment>
        );
    }
}






const initialState = {
        value: '',
        error: false,  
        loading: false,
        deleted: false,
        confirmed: false,
};


const reducerObject = (state, payload) =>({
    [actionTypes.confirm]:{
        ...state,
        error:false, 
        loading:false,
        confirmed: true,
    },
    [actionTypes.error]:{
        ...state,
        error: true,
        loading: false,
    },
    [actionTypes.check]: {
        ...state,
        loading: true,
    },
    [actionTypes.write]:{ 
        ...state,
        value: payload,
    },
    [actionTypes.delete]:{
        ...state,
        deleted: true,
    },
    [actionTypes.reset]:{
        ...state,
        confirmed: false,
        deleted: false,
        value: '',
    }
})

const actionTypes = {
    confirm: 'CONFIRM',
    error: 'ERROR',
    check: 'CHECK',
    write: 'WRITE',
    delete: 'DELETE',
    reset: 'RESET',
}

const reducer = (state, action) =>{
    if(reducerObject(state)[action.type]){
        return reducerObject(state, action.payload)[action.type];
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

export { UseReducer }