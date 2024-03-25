import useInputState from "../Hooks/useInputState";

const HookForm = () => {
    // const [name,handleNameChange]= useInputState('Saif')
    const nameState= useInputState('Saif')

    const handleSubmit=event=>{
        // console.log('form data: ',name)
        console.log('form data: ',nameState.value)
        event.preventDefault();
    }


    return (
        <div>
            <h1>Hook Form </h1>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name"/>
                <br /> */}
                <input {...nameState} type="text" name="name"/>
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;