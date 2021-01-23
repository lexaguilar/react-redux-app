import { Component } from "react";
import { connect } from "react-redux";

class Footer extends Component{   

    render(){

        const { usuario } = this.props;

        return (
            <div className="footer">
                Usuario: <b>{usuario.username}</b>  Area: <b>{usuario.area}</b>
            </div>
        )
    }

}

const mapStateToPros = state => ({
    usuario : state.user
});

export default connect(mapStateToPros, null)(Footer);