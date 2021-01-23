import React, { Component } from 'react'
import { actualizarUsuario } from '../store/reducers/user/userActions';
import { connect } from 'react-redux';
class Usuario extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e){

        const { actualizarUsuario } = this.props;

        actualizarUsuario({ username : e.target.value });

    }

    render() {

        const { user } = this.props;

        return (
            <div>
                <h2>Usuario</h2>
                <label htmlFor="">Usuario:</label>
                <input type="text" defaultValue={user.username} onChange={this.onChange}/>
                <label htmlFor="">Area:</label>
                <input type="text" defaultValue={user.area}/>
            </div>
        )
    }
}

const mapStateToPros = state => ({
    user : state
});

const mapDispatchToPros = ({
    actualizarUsuario
  });

export default connect(mapStateToPros, mapDispatchToPros)(Usuario);