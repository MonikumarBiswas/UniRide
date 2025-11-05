import { FaCarSide } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const StudentLg = () => {

      const navigate = useNavigate();
      const [studentID, setStudentID] = useState('');
      const [password, setPassword] = useState('');

      const handleSubmit = (e) =>{
         e.preventDefault() ; 

         if( studentID && password ){
           navigate('/points');
         }
         else {
           alert("please fill the form ! ")
         }
      };





  return ( 

    <div className="flex flex-col justify-center items-center bg-[#cbbfc1] p-10 rounded-2xl m-5 shadow-2xl">
      <div className="flex flex-col justify-center items-center mb-4">
         <FaCarSide className="font-bold text-9xl  text-[#ff006e]" /><section className="text-3xl font-bold text-[#ff006e]"> UniRide</section>

        <h2 className="text-4xl font-bold mb-4 text-[#2b2d42] pt-5">Student Login</h2>
      </div>
     
      <form  onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-4">
         <input type="text" placeholder="Student ID" value={studentID} onChange={(e) => setStudentID(e.target.value)}  className="w-84 bg-white border-black  px-4 py-2 border-2 border-dashed rounded-lg focus:outline-none shadow-2xl" required />
         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-84 bg-white border-black  px-4 py-2 border-2 border-dashed rounded-lg focus:outline-none shadow-2xl" required />
         <button type="submit" className="bg-[#023e8a] text-white px-6 py-2 rounded-2xl font-semibold 
                                        hover:bg-[#03045e] hover:shadow-lg transition-transform duration-300 
                                        hover:-translate-y-1 ">
            Login
         </button>
      </form>

    </div>

   );
}
 
export default StudentLg;