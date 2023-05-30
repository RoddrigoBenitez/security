import React from "react";
import { Loading } from "./loading";
class ClassState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: true,
            loading: false,
        };
    }


    // componentDidMount(){
    //     console.log('componentDidMount')
    // }

    // componentWillUnmount(){
    //     console.log('componentWillUnmount')
    // }


    componentDidUpdate(){
        console.log('actualizando');

        if(!!this.state.loading){
            setTimeout(()=> {
                console.log('validacion up')
    
                this.setState({ loading: false });
    
                console.log('validacion down')
            }, 2000)
        }
    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    
    render(){
        return (
                <div>
                <h2>Eliminar {this.props.name}</h2>
                
                <p>Por favor escribe el  codigo de seguridad.</p>

                {this.state.error && (
                    <p>Error: el codigo es incorrecto</p>
                )}
                
                {this.state.loading && (
                    <Loading />
                )}
                
                <input placeholder="Codigo de seguridad" />

                <button
                onClick={() => this.setState({ loading: true })
                        }
                >Comprobar</button>

                </div>
            );
    }
}

export { ClassState };
