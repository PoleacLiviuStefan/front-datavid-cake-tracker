const InputForm = ({ isBirthDate = false, type, placeholder, value, onChange, options = [] }) => {
  if (isBirthDate) {
    return (
      <select value={value} onChange={onChange} className="bg-transparent text-black font-bold border-[1px] border-black px-4 rounded-[30px] my-4 w-[100px] h-[35px]" required>
        <option value="" disabled>{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    );
  }

  return (
    <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={`placeholder-gray-500 bg-transparent text-black font-bold border-[1px] border-black px-4 rounded-[30px] my-4 ${isBirthDate ? "w-[100px]" : "w-[300px]"} h-[35px]`} required />
  );
};

export default InputForm;
