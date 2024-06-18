import { useState,useEffect } from 'react';
import InputForm from '../atoms/InputForm';
import axios from 'axios';

const AddMemberForm = ({ submittedForm, handleSubmitForm }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [days, setDays] = useState([]);

  const handleForm = async (e) => {
    e.preventDefault();
    const birthDate = `${birthYear}-${birthMonth}-${birthDay}`;
    try {
      const response = await axios.post(`/api/add-member`, { firstName, lastName, birthDate, country, city }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.data);
      handleSubmitForm(true);
    } catch (err) {
      if (err.response) {
        alert(`Error: ${err.response.data.error}`);
      } else {
        alert("Error: Unknown error");
      }
    }
  };

  const handleInputValue = (setter) => (e) => {
    setter(e.target.value);
  };

  useEffect(() => {
    const updateDays = () => {
      const month = months.findIndex(m => m.value === birthMonth) + 1;
      const year = parseInt(birthYear, 10);
      let daysInMonth = 31;

      if (month === 4 || month === 6 || month === 9 || month === 11) {
        daysInMonth = 30;
      } else if (month === 2) {
        daysInMonth = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
      }

      setDays(Array.from({ length: daysInMonth }, (_, i) => ({ value: i + 1, label: i + 1 })));
    };

    updateDays();
  }, [birthMonth, birthYear]);

  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" }
  ];

  const years = Array.from({ length: 100 }, (_, i) => ({ value: `${2023 - i}`, label: `${2023 - i}` }));

  return (
    <form onSubmit={handleForm} className={`flex flex-col items-center justify-center bg-white w-full lg:w-[500px] h-full py-4 ${submittedForm && "overflow-x-hidden invisible animate-[narrowToZero_1s_ease-in-out_forwards] lg:animate-[narrowToZeroMobile_1s_ease-in-out_forwards]"} text-black `}>
      <h1 className='leading-5 lg:leading-8 text-black text-center lg:text-left font-extrabold text-[20px] lg:text-[34px] w-full lg:w-[300px]'>Welcome, please complete the below information</h1>
      <h2 className='font-bold mt-1'>It&apos;s just a piece of cake...</h2>
      <InputForm type="text" placeholder='First Name' value={firstName} onChange={handleInputValue(setFirstName)} />
      <InputForm type="text" placeholder='Last Name' value={lastName} onChange={handleInputValue(setLastName)} />
      <InputForm type="text" placeholder='Country' value={country} onChange={handleInputValue(setCountry)} />
      <InputForm type="text" placeholder='City' value={city} onChange={handleInputValue(setCity)} />
      <div className="flex space-x-2">
        <InputForm isBirthDate={true} type="select" placeholder='Day' value={birthDay} onChange={handleInputValue(setBirthDay)} options={days} />
        <InputForm isBirthDate={true} type="select" placeholder='Month' value={birthMonth} onChange={handleInputValue(setBirthMonth)} options={months} />
        <InputForm isBirthDate={true} type="select" placeholder='Year' value={birthYear} onChange={handleInputValue(setBirthYear)} options={years} />
      </div>
      <button type="submit" className='font-extrabold mx-6 w-[300px] text-white transition duration-[.3s] ease-in-out bg-blue-500 hover:bg-blue-400' disabled={submittedForm}>{submittedForm ? "SENT" : "SEND"}</button>
    </form>
  );
};

export default AddMemberForm;
