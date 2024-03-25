import { useState } from "react";

const SimpleForm2 = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 charecter or longer')
        }
        else {
            setError('')
            console.log(name, email, password)
            console.log('Form submited')
        }
    }

    const handleNameChange = event => {
        console.log(event.target.value)
        setName(event.target.value)
    }
    const handleEmailChange = event => {
        console.log(event.target.value)
        setEmail(event.target.value)
    }
    const handlePasswordChange = event => {
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    return (
        <div>
            <h1>Simple Form 2</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="name" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" required />
                <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default SimpleForm2;