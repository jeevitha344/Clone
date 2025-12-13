import React, { useState ,useEffect } from 'react'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import { firebaseAuth } from '../firebase/firebase-config'
import { createUserWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const SignUpPage = () => {
const [showPassword ,setShowPassword]=useState(false)
const [formValues,setFormValues]=useState({email:"",password:""})
const navigate =useNavigate()

const handleSignIn =async()=>{
  try{
    const{email,password}=formValues;
    await createUserWithEmailAndPassword(firebaseAuth,email,password)
    
  } catch(error){
    console.log("error")
  }
}
 useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser)
        {
          navigate("/");
        } 
    });
    return () => unsubscribe();
  }, [navigate]);

// onAuthStateChanged(firebaseAuth,(currentUser)=>{
//   if(currentUser) navigate('/')
// })

//  useEffect(() => {
//     const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
//       if (currentUser) navigate("/")
//     })
//     return () => unsubscribe()
//   }, [])




  return (
 <div className='container relative  w-full h-screen'>
  <BackgroundImage/>
  <div className='content  absolute top-0 left-0 bg-black/75 h-full w-full '>
    <Header login/>
    <div className=' body flex flex-col justify-center items-center mt-10 px-4 text-center  '>

      <div className='   text-white max-w-xl '>
        <h1 className='font-bold text-4xl md:text-5xl leading-tight'>Unlimited movies, Tv show and more</h1>
        <h4 className='mt-5 text-2xl font-semibold'>watch anywhere,cancel Anytime</h4>
        <h6 className='mt-5 text-lg font-medium'>Ready to watch? Enter your email to create or restart membership</h6>
      </div>
<div className={`form  grid w-[90%] md:w-[60%] mt-6 ${
    showPassword
      ? "grid-cols-[1fr_1fr]"
      : "grid-cols-[2fr_1fr]"
  }`}>
  {
    showPassword ? (<input type="password" placeholder='password' name='password'
       className='text-black p-3 text-lg w-180 bg-white focus:outline-none'
       value={formValues.password}
       onChange={(e)=>setFormValues({...formValues,[e.target.name]: e.target.value})}
       
       />)
    :(
<input type="email" placeholder='email address' name='email' 
className='text-black p-3 text-lg  w-180 bg-white   focus:outline-none'
value={formValues.email}
onChange={(e)=>setFormValues({...formValues,[e.target.name]: e.target.value})}
/>
    )
  }
{
  !showPassword ?(<button className=' py-0.5 bg-red-600 cursor-pointer text-white w-42'onClick={()=>setShowPassword(true)}>Get Started</button>
):<button className=' py-0.5 bg-red-600 cursor-pointer text-white w-42'onClick={handleSignIn}>Sign In</button>
}
</div>
    </div>
  </div>
 </div>

  )
}

export default SignUpPage
