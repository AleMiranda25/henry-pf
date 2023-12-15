//Funcionalidad
import { bgHome } from "../../assets/Backgrounds/backgrounds";
import { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import { Footer, Navbar, TableUserAdm } from "../../Components";

const UserAdm = () => {
  const isAdmin = true;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        if(isAdmin){
          const res = await axios.get(`/users`);
          setUsers(res.data.users);
        }

      } catch (err) {
          console.log(err);
      }
    }

    getUsers();
  }, [users])

  return (
    <div
      className="flex flex-col justify-around gap-20 bg-cover bg-center bg-no-repeat h-screen max-w-full md:flex-0 shrink-0"
      style={{
        backgroundImage: `url(${bgHome})`,
      }}
    >
      <Navbar />
      <TableUserAdm users={users? users : []} setUsers={setUsers} />
      <Footer />
    </div>
  );
};

export default UserAdm;
