import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./authentication.css"

const Authentication=()=>{
    return(
        <div className="auth-container">
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}
export default Authentication;