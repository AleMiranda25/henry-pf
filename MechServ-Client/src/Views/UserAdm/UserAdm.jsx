//Funcionalidad
import { bgHome } from "../../assets/Backgrounds/backgrounds";
import { useState, useEffect } from 'react';
import axios from 'axios';

//Components
import { Footer, Navbar, TableUserAdm } from "../../Components";

const UserAdm = () => {
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
          const res = await axios.get(`/users`);
          setUsers(res.data.users);
      } catch (err) {
          console.log(err);
      }
    }

    getUsers();
  }, [refresh])

  return (
    <div
      className="flex flex-col justify-around gap-20 bg-cover bg-center bg-no-repeat h-screen max-w-full md:flex-0 shrink-0"
      style={{
        backgroundImage: `url(${bgHome})`,
      }}
    >
      <Navbar />
      <TableUserAdm users={users? users : []} setUsers={setUsers} refresh={refresh} setRefresh={setRefresh}/>
      <Footer />
    </div>
  );
};

export default UserAdm;
