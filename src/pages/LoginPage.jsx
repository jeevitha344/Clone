import React, { useState ,useEffect} from 'react'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { firebaseAuth } from '../firebase/firebase-config'
const LoginPage = () => {
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("")
const navigate=useNavigate()
const handelSignIn = async ()=>{

  try{
    await signInWithEmailAndPassword(firebaseAuth,email,password)
  }catch(error){
    console.log(error)
  }
}

// onAuthStateChanged(firebaseAuth,(currentUser)=>{
//   if(currentUser) navigate('/')
// })

 useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/")
    })
    return () => unsubscribe()
  }, [navigate])

  


  return (
    <div className='relative'>
      <BackgroundImage/>
      <div className='logincontent absolute top-0 left-0 bg-black/60 w-full h-full'>
<Header/>
<div className='form-wrapper flex flex-col  text-white  items-center justify-center gap-8 h-[85vh]'>
  <div className='form flex flex-col items-center justify-center gap-8 bg-[#000000b0] h-[70vh] p-8  border-none rounded'>
<div className='title'>
<h1 className='font-bold text-2xl'>Login</h1>
</div>
<div className='container flex flex-col gap-8 '>
<input type="email" placeholder='Email ' name='email'
 className='py-1  px-4 w-100 h-[3.4rem] outline-0 bg-white border rounded text-black'
 onChange={(e)=>setEmail(e.target.value)}
 value={email}
 />
<input type="password" placeholder='Password' name='password'
className='py-1 px-4 w-100 h-[3.4rem] outline-0  bg-white  border rounded text-black'
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>
<button 
className='p-4 bg-red-600 cursor-pointer  border rounded outline-none  text-white  border-none
'
onClick={handelSignIn}
>Login</button>

</div>
  </div>

</div>
      </div>
    </div>
  )
}

export default LoginPage





// import React, { useState, useEffect } from "react";
// import BackgroundImage from "../components/BackgroundImage";
// import Header from "../components/Header";
// import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { firebaseAuth } from "../firebase/firebase-config";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
  
// //emailid :jeevi1609@gmail.com password:123456

//   // Handle login
//   const handleSignIn = async () => {
//     if (!email || !password) {
//       alert("Please enter both email and password");
//       return;
//     }

//     try {
//       await signInWithEmailAndPassword(firebaseAuth, email, password);
//       // Navigate after successful login
     
//     } catch (error) {
//       // Show a clear error
//       if (error.code === "auth/user-not-found") {
//         alert("User not found. Please sign up first.");
//       } else if (error.code === "auth/wrong-password") {
//         alert("Wrong password. Try again.");
//       } else if (error.code === "auth/invalid-email") {
//         alert("Invalid email format.");
//       } else {
//         console.log(error);
//         alert("Login failed");
//       }
//     }
//   };

//   // Listen to auth state
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
//       if (currentUser) {
//         navigate("/");
//       } 
//     });
//     return () => unsubscribe();
//   }, [navigate]);

//   return (
//     <div className="relative">
//       <BackgroundImage />
//       <div className="logincontent absolute top-0 left-0 bg-black/60 w-full h-full">
//         <Header />
//         <div className="form-wrapper flex flex-col text-white items-center justify-center gap-8 h-[85vh] border-none ">
//           <div className="form flex flex-col items-center justify-center gap-8 bg-[#000000b0] h-[70vh] p-8 border-none rounded">
//             <div className="title">
//               <h1 className="font-bold text-2xl">Login</h1>
//             </div>
//             <div className="container flex flex-col gap-8">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 className="py-1 px-4 w-100 h-[3.4rem] outline-0 bg-white border rounded text-black"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 className="py-1 px-4 w-100 h-[3.4rem] outline-0 bg-white border rounded text-black"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 className="p-4 bg-red-600 cursor-pointer border rounded text-white outline-none border-none"
//                 onClick={handleSignIn}
//               >
//                 Login
//               </button>
//               <p>Don't have a Already account? <span className="text-red-600 px-2 cursor-pointer" onClick={()=>navigate('/signin')}> Sign In </span> </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

