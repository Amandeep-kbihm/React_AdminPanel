import React from 'react'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import  * as Material from '../../link/links'
import {checkemail,setmessage} from '../../actions/admin/forgetpassword'

import {styles} from '../../style'

class ForgetPassword extends React.Component{
    state = {
        email: "",
        successmsg: ""
    }
    handleCheckEmail = (event) => {
        event.preventDefault();
        this.props.checkemail(this.state)
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    componentWillMount(){
        this.props.setmessage(false)
    }
    componentWillReceiveProps(newProps){
       if(newProps.admin.successmsg) {
        this.setState({
            successmsg: true
        })
       }
    }
    render(){
        let {classes} = this.props
        const {error,message} = this.props.admin
        const {successmsg} = this.state
        return(
            <main className={classes.main}>
                <Material.CssBaseline />
                <Material.Paper className={classes.paper}>
                    <Link to="/login"><Material.ArrowBackRounded /></Link>
                    <Material.Avatar className={classes.avatar}>
                        <Material.LockOutlinedIcon/>
                    </Material.Avatar>
                    {successmsg && 
                        <Material.Typography component="h1" variant="h5">
                            Email has been sent successfully
                        </Material.Typography>
                    }
                    {!successmsg && (
                        <div>
                        <Material.Typography component="h1" variant="h5">
                            Forget Password
                        </Material.Typography> 
                        <form className={classes.form} onSubmit={this.handleCheckEmail}>
                        <Material.FormControl margin="normal" required fullWidth error={!!error}>
                            <Material.InputLabel htmlFor="email">Email Address</Material.InputLabel>
                            <Material.Input id="email" type="email" name="email" onChange={this.handleChange} autoComplete="email" autoFocus />
                        </Material.FormControl>
                        <Material.Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                            Send
                        </Material.Button>    
                        </form>
                        </div>
                    ) }
                </Material.Paper>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        admin: state.ForgetPasswordReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return Object.assign( {}, bindActionCreators( {
        checkemail,
        setmessage
    }, dispatch ), {});
}

export default Material.withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ForgetPassword))
