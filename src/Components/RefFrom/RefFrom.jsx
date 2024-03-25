import { useRef } from "react";


const RefFrom = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }

    return (
        <div>
            <h1>Ref From</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input ref={emailRef} defaultValue={'s@h.com'} type="email" name="email" />
                <br />
                <input ref={passwordRef} type="password" name="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefFrom;