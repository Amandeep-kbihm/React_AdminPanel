import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import  * as Material from '../../link/links'
import {recoverpassword,setrecoverpassword} from '../../actions/admin/recoverpassword'

import {styles} from '../../style'

class RecoverPassword extends React.Component{
    state = {
        password: "",
        confirmPassword: "",
        error: false,
        success: ""
    }
    componentWillMount(){
        this.props.setrecoverpassword(false)
    }
    componentWillReceiveProps(newProps){
        if(newProps.admin.success){
            this.props.history.push("/login");
        }
    }
    handleRecoverPassword = (event) => {
        event.preventDefault();
        let token = this.props.match.params.token;
        const {password,confirmPassword} = this.state
        if(password == confirmPassword){
            this.props.recoverpassword(token,password);
        }
        else {
            this.setState({
                error: true
            })
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        let {classes} = this.props
        const {error} = this.state
        return(
            <main className={classes.main}>
                <Material.CssBaseline />
                <Material.Paper className={classes.paper}>
                    <Link to="/login"><Material.ArrowBackRounded /></Link>
                    <Material.Avatar className={classes.avatar}>
                        <Material.LockOutlinedIcon/>
                    </Material.Avatar>
                    {error && <Material.Typography component="h1" variant="h5">
                            Password does not match
                        </Material.Typography>
                    }
                        <div>
                        <Material.Typography component="h1" variant="h5">
                            Recover Password
                        </Material.Typography> 
                        <form className={classes.form} onSubmit={this.handleRecoverPassword}>
                        <Material.FormControl margin="normal" required fullWidth>
                            <Material.InputLabel htmlFor="password">Password</Material.InputLabel>
                            <Material.Input id="password" type="password" name="password" onChange={this.handleChange} autoComplete="password" autoFocus />
                        </Material.FormControl>
                        <Material.FormControl margin="normal" required fullWidth>
                            <Material.InputLabel htmlFor="confirm_password">Confirm Password</Material.InputLabel>
                            <Material.Input id="confirm_password" type="password" name="confirmPassword" onChange={this.handleChange} autoComplete="confirm_password" autoFocus />
                        </Material.FormControl>
                        <Material.Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            Submit
                        </Material.Button>    
                        </form>
                        </div>
                </Material.Paper>
            </main>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        admin: state.RecoverPasswordReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return Object.assign( {}, bindActionCreators( {
        recoverpassword,
        setrecoverpassword
    }, dispatch ), {});
}

export default Material.withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(RecoverPassword))
