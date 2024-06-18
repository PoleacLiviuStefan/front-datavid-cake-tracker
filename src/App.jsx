import './App.css';
import { useState, useEffect } from 'react';
import AddMemberForm from './components/AddMemberForm/AddMemberForm';
import { LeftSide } from './components/LeftSide/LeftSide';
import axios from 'axios';
import { MembersList } from './components/MembersList/MembersList';


function App() {
  const server_url = "http://localhost:3000";
  axios.defaults.baseURL = server_url;
  axios.defaults.withCredentials = true;

  const [submittedForm, setSubmittedForm] = useState(false);
  const [members, setMembers] = useState([]);
  const [sortedMembers, setSortedMembers] = useState([]);

  const fetchMembers = async () => {
    try {
      const response = await axios.get(`/api/show-members`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setMembers(response.data);
    } catch (err) {
      console.error("Error fetching members:", err);
    }
  };

  const fetchSortedMembers = async () => {
    try {
      const response = await axios.get(`/api/sorted-members`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setSortedMembers(response.data);
    } catch (err) {
      console.error("Error fetching sorted members:", err);
    }
  };

  useEffect(() => {
    fetchMembers();
    fetchSortedMembers();
  }, []);

  const handleSubmitForm = (value) => {
    setSubmittedForm(value);
    fetchMembers();
    fetchSortedMembers();
  };

  return (

      <div className='flex flex-col'>
        <div className='flex flex-col-reverse lg:flex-row justify-center items-center w-full lg:w-[1100px] h-[800px] lg:h-[700px] shadow-lg'>
          <LeftSide submittedForm={submittedForm} />
          <AddMemberForm handleSubmitForm={handleSubmitForm} submittedForm={submittedForm} />
        </div>
        <div className='flex flex-col lg:flex-row items-center lg:items-start lg:justify-between '>
          <MembersList header="All members list" members={members} />
          <MembersList header="Sorted members list" members={sortedMembers} />
        </div>
      </div>
  );
}

export default App;
