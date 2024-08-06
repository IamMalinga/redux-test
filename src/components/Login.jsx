import { useDispatch } from "react-redux";
import { login, logout } from '../features/user.js'

const  Login = () => {
    const dispatch = useDispatch();

    return(
        <>
            <div>
                <button onClick={() => {dispatch(login( { name:"Malinga", age: 22, email: "malingasamarakoon@gmail.com" }))}} >Button</button>
                <button onClick={() => {dispatch(logout())}}>Logout</button>
            </div>
        </>
    )
}

export default Login;