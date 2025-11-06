import photo from './assets/map.png';
import Button from './button';


 const data1 = [
            {title: "IICT",  description : "Available Auto : 3" , buttonText : "Book Now !" },
            {title: "Shah poran Hall",  description : "Available Auto : 5" , buttonText : "Book Now !" },
            {title: "Mujtoba Ali Hall",  description : "Available Auto : 2" , buttonText : "Book Now !" },
            {title: "Ladies Hall",  description : "Available Auto : 4" , buttonText : "Book Now !" },

        ];

         const data2 = [
           
            {title: "Cafetaria",  description : "Available Auto : 4" , buttonText : "Book Now !" },
            {title: "D-Building",  description : "Available Auto : 4" , buttonText : "Book Now !" },
            {title: "UC Building",  description : "Available Auto : 4" , buttonText : "Book Now !" },
            {title: "SUST Gate",  description : "Available Auto : 4" , buttonText : "Book Now !" },

        ];



const MapSec = () => {
  return ( 

  
      <div className=" mt-5 grid md:grid-cols-[1fr_2fr_1fr]   grid-cols-1   justify-center rounded-2xl items-center gap-4 ">

{/* Stopage points  */}

         <div className='  m-2 grid grid-cols-2 md:grid-cols-1 gap-4 space-y-2 justify-center  items-center'>
              
             { data2.map((item , index) => (

                        <div key={index} className="bg-[#00b4d8] p-6  rounded-2xl shadow-blue-400 shadow-2xl  flex flex-col justify-center items-center sm:space-y-6 space-y-5 ">
                           <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                           <p className="text-sm">{item.description}</p>
                             < Button  messeage={item.buttonText}/>
                        </div>
                      ))}
               </div>


    {/* Map section of student portal   */}
          <div className='  flex flex-col justify-center items-center gap-4 m-2 bg-amber-100 h-full rounded-2xl p-6 shadow-2xl '>
            <h1 className='text-4xl font-bold font-serif text-center pt-4'> Student Portal </h1>
              <img src={photo} alt="map Illustration" className="w-full shrink rounded-2xl h-full object-cover"/>
          </div>


{/* Stopage points  */}
           <div className='  m-2 grid grid-cols-2 md:grid-cols-1 gap-4 '>
              
             { data1.map((item , index) => (

                        <div key={index} className="bg-[#00b4d8] p-6   rounded-2xl shadow-blue-400  shadow-2xl flex flex-col justify-center items-center sm:space-y-6 space-y-5 ">
                           <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                           <p className="text-sm">{item.description}</p>
                           < Button  messeage={item.buttonText}/>
                        </div>
                      ))}
               </div>

      </div>


   );
}
 
export default MapSec;