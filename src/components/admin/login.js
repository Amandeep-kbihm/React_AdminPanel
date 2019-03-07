import React from 'react'
import { Link  } from "react-router-dom";
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import  * as Material from '../../link/links'
import {styles} from '../../style'

import {login,setLogin} from '../../actions/admin/login'

class Login extends React.Component{
    state = {
        email: "",
        password: "",
        status: 1,
    }
    handleLogin = (event) => {
        event.preventDefault();
        this.props.login(this.state)
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    componentWillMount() {
        this.props.setLogin(false)
    }
    componentWillReceiveProps(newProps) {
        if(newProps.admin.success) {
            this.props.history.push("/");
        }
    }
    render(){
        let {classes} = this.props
        const {error} = this.props.admin
        return(
            <main className={classes.main}>
                <Material.CssBaseline />
                <Material.Paper className={classes.paper}>
                    <Material.Avatar className={classes.avatar}>
                        <Material.LockOutlinedIcon/>
                    </Material.Avatar>
                    <Material.Typography component="h1" variant="h5">
                        Sign in
                    </Material.Typography>
                    <form className={classes.form} onSubmit={this.handleLogin}>
                        <Material.FormControl margin="normal" required fullWidth error={!!error && !!error.email}>
                            <Material.InputLabel htmlFor="email">Email Address</Material.InputLabel>
                            <Material.Input id="email" type="email" name="email" onChange={this.handleChange} autoComplete="email" autoFocus />
                        </Material.FormControl>
                        <Material.FormControl margin="normal" required fullWidth error={!!error && !!error.password}>
                            <Material.InputLabel htmlFor="password">Password</Material.InputLabel>
                            <Material.Input name="password" type="password" id="password" onChange={this.handleChange} autoComplete="current-password" />
                        </Material.FormControl>
                        <Material.Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        Sign In
                        </Material.Button>    
                    </form>
                    <Link to="/forgetpassword">Forget Password</Link>
                </Material.Paper>
            </main>    
        )
    }
}
Login.propTypes = {
    classes: Material.PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        admin: state.LoginReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return Object.assign( {}, bindActionCreators( {
        login,
        setLogin
    }, dispatch ), {});
}

export default Material.withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Login))