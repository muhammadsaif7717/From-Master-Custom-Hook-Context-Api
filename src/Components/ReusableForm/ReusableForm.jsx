

const ReusableForm = ({formTitle,handleSubmit,submitButtonText='Submit',children}) => {

    const handleLocalSubmit=(event)=>{
        event.preventDefault();
        const data={
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        }
        handleSubmit(data)
    }
    return (
        <div>
            {/* <h4>{formTitle}</h4> */}
            <h4>{children}</h4>
            <form onSubmit={handleLocalSubmit}>
                <input  type="text" name="name"/>
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={submitButtonText} />
            </form>
        </div>
    );
};

export default ReusableForm;