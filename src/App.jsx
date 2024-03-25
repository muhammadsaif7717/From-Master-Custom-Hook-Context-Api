import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefFrom from './Components/RefFrom/RefFrom'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import SimpleForm2 from './Components/SimpleForm2/SimpleForm2'

function App() {

//   const handleSignUpSubmit=(data)=>{
//     console.log('sign up data',data)
// }
//   const handleUpdateProfile=(data)=>{
//     console.log('update profile data',data)
// }

  return (
    <>
    <h1>Form Master</h1>
      <Grandpa></Grandpa>




      {/* <SimpleForm></SimpleForm> */}
      {/* <SimpleForm2></SimpleForm2> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'Sign UP'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign UP</h2>
          <p>Please Sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} submitButtonText='Update' handleSubmit={handleUpdateProfile}>
      <div>
          <h2>Update Profile</h2>
          <p>Please keep your profile updated</p>
        </div>
      </ReusableForm> */}


    </>
  )
}

export default App
