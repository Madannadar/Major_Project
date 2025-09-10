import { useState } from "react";

const Register = () => {
    const [isRegister, setIsRegister] = useState(false);

    const handleSubmit = () => {
        const state = isRegister;
    }

    return (
        <div>
            <h1>Register page</h1>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="confirm password" />
            <button type="submit" onClick={() => setIsRegister(true)}>Submit</button>
        </div >
    )
}

export default Register;