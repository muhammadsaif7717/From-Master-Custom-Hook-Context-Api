
const SimpleForm = () => {

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(event.target.name.value)
        console.log(event.target.email.value)
        console.log('Form submited')
    }

    return (
        <div>
            <h1>Simple Form 1</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"/>
                <br />
                <input type="email" name="email" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;