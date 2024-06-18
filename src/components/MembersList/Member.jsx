import { IoPersonSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { FaCakeCandles } from "react-icons/fa6";

const  Member = ({member,index}) => {

    const formatDate = (date) =>{
        const fullDate = new Date(date);
        const day =String(fullDate.getDate()).padStart(2, '0');
        const month= String(fullDate.getMonth() + 1).padStart(2, '0');
        const year = fullDate.getFullYear();

        return `${day}/${month}/${year}`;
    }

    return (
        <li className={`flex flex-col items-start p-4 my-12 ${index%2 ? 'bg-gray-100' : 'bg-gray-100'} text-black shadow-lg`} >
            <span className="flex  w-full font-bold lg:text-[20px]"><IoPersonSharp className=' text-[36px] mt-1 mr-2' /><span className='flex flex-col items-start  leading-5'>Full Name <span className='font-extrabold'>{member.lastName} {member.firstName}</span></span></span>
                <span className='flex justify-center items-center w-full text-[18px] lg:text-[24px] font-extrabold mt-4'><FaLocationDot />Location</span>
                <span className="flex items-center"><FaMapMarkedAlt className='text-[24px] mr-1' />Country: {member.country}</span>
                <span className="flex items-center"><FaCity className='text-[24px] mr-1'/>City: {member.city}</span>
                <span className="flex items-center"><FaCakeCandles className='text-[24px] mr-1'/>Birth Date: {formatDate(member.birthDate)}</span>
        </li>
    )
}

export default Member;