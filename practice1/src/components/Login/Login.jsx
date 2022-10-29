import { connect } from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../Common/FormsControls/FormsControls'
import { login } from '../../redux/authReducer'
import { Navigate } from 'react-router-dom'

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name="email" placeholder="Email" component={Input} validate={[required]} /> 
                </div>
                <div>
                    <Field name='password' placeholder="Password" component={Input} validate={[required]} />
                </div>
                <div>
                    <Field name='rememberMe' component={Input} type="checkbox" /> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);