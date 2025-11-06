

const Button = ({messeage}) => {
  return ( 

                  <button className="mb-5 bg-[#023e8a] text-white px-6 py-2 rounded-2xl font-semibold 
                                   hover:bg-[#03045e] hover:shadow-lg transition-transform duration-300 
                                     hover:-translate-y-1 ">
                      {messeage}
                  </button>


   );
}
 
export default Button;