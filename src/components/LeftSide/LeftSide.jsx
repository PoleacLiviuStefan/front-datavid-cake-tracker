import { useEffect, useState } from 'react';
import cake from '../../assets/cake.png';
import pieceOfCake from '../../assets/piece_of_cake.png';

export const LeftSide = ({ submittedForm }) => {
  const [cakeVisibility, setCakeVisibility] = useState(false);

  useEffect(() => {
    if (submittedForm) {
      const timer = setTimeout(() => {
        setCakeVisibility(true);
      }, 1000);

      // Curățarea timeout-ului în caz că componenta se demontează înainte ca timeout-ul să se finalizeze
      return () => clearTimeout(timer);
    }
  }, [submittedForm]);

  return (
    <div className={`flex flex-col items-center bg-blue-500 w-full ${submittedForm && "lg:animate-[makeFullWidth_1s_ease-in-out_forwards]" } w-full lg:w-[700px] h-full z-50`}>
      <h1 className='mt-[20px] font-extrabold text-[22px] lg:text-[32px]'>Datavid Cake Tracker </h1>
      <div className='flex justify-center items-center w-full h-full '>
        <img src={cake} className={`w-[250px] lg:w-[400px] ${cakeVisibility && "animate-[disappear_1s_ease-in-out_forwards]"}`} />
        {submittedForm && <img src={pieceOfCake} className='rotate-[4deg] mt-[-50px] ml-[-255px] w-[150px] lg:w-[250px]  lg:animate-[extract_2s_ease-in-out_forwards]' />}
      </div>
      {cakeVisibility && <h2 className={`mb-[20px] font-extrabold text-[24px] lg:text-[36px] ${cakeVisibility && "animate-[appear_1s_ease-in-out_forwards]"} whitespace-nowrap`}> THANK YOU FOR COMPLETING THE FORM</h2>}
    </div>
  );
};
