import photo from './assets/map.png';
import Button from './button';



 const data1 = [
            {title: "IICT",             description : "Available student's : 3" , buttonText : "Accept" },
            {title: "Shah poran Hall",  description : "Available student's : 5" , buttonText : "Accept" },
            {title: "Mujtoba Ali Hall", description : "Available student's : 2" , buttonText : "Accept" },
            {title: "Ladies Hall",      description : "Available student's : 4" , buttonText : "Accept" },

        ];

         const data2 = [
           
            {title: "Cafetaria",   description : "Available student's : 4" , buttonText : "Accept" },
            {title: "D-Building",  description : "Available student's : 4" , buttonText : "Accept" },
            {title: "UC Building", description : "Available student's : 4" , buttonText : "Accept" },
            {title: "SUST Gate",   description : "Available student's : 4" , buttonText : "Accept" },

        ];



const DriverPortal = () => {
  return ( 

  
      <div className=" mt-5 grid md:grid-cols-[1fr_2fr_1fr]   grid-cols-1   justify-center rounded-2xl items-center gap-4 ">


        {/* Stopage points  */}
         <div className='  m-2 grid grid-cols-2 md:grid-cols-1 gap-4 justify-center  items-center'>
              
             { data2.map((item , index) => (

                        <div key={index} className="bg-[#00b4d8] p-5  rounded-2xl shadow-blue-400 shadow-2xl  flex flex-col justify-center items-center sm:space-y-6 space-y-5">
                           <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                           <p className="text-sm">{item.description}</p>
                            <Button  messeage={item.buttonText}> </Button>
                        </div>
                      ))}
               </div>


              {/* This is map section */}

          <div className='  flex flex-col justify-center items-center gap-4 m-2  bg-amber-100 h-full rounded-2xl p-4 shadow-2xl '>
            <h1 className='text-4xl font-bold font-serif text-center pt-4'> Driver Portal </h1>
              <img src={photo} alt="map Illustration" className="w-full shrink rounded-2xl h-full object-cover"/>
          </div>

    {/* Stopage points  */}

           <div className='  m-2 grid grid-cols-2 md:grid-cols-1 gap-4 mb-5'>
              
             { data1.map((item , index) => (

                        <div key={index} className="bg-[#00b4d8] p-5   rounded-2xl shadow-blue-400  shadow-2xl flex flex-col justify-center items-center sm:space-y-6 space-y-5 ">
                           <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                           <p className="text-sm">{item.description}</p>
                            <Button messeage={item.buttonText}> </Button>
                        </div>
                      ))}
               </div>

      </div>


   );
}
 
export default DriverPortal;