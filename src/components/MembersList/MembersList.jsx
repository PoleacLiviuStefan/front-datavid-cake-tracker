import Member from './Member';

export const MembersList = ({ header, members }) => {
  return (
    <div className='flex flex-col items-center mt-[20px] bg-white px-[20px] shadow-xl'>
      <h3 className='mt-4 bg-white text-black text-[20px] font-extrabold lg:text-[30px]'>{header}</h3>
      <ul className='w-full lg:w-[300px] h-full'>
        {members.map((member, index) => (
          <Member member={member} key={index} />
        ))}
      </ul>
    </div>
  );
};
