//Funcionalidad
import { useNavigate } from "react-router";
import { bgHome } from "../../assets/Backgrounds/backgrounds";
import { useAuth0 } from "@auth0/auth0-react";

//Components
import { Footer, Navbar } from "../../Components";

const Profile = () => {
  const { user, logout } = useAuth0();
  // const navigate = useNavigate();

  return (
    <div
      className="flex flex-col justify-around gap-20 bg-cover bg-center bg-no-repeat h-screen max-w-full md:flex-0 shrink-0"
      style={{
        backgroundImage: `url(${bgHome})`,
      }}
    >
      <Navbar />
      <div className=" text-[whitesmoke] flex flex-col gap-10 justify-around bg-black bg-opacity-60 backdrop-blur-sm p-5 mx-auto rounded-badge">
        {
          //* TITULO
        }
        <h1 className="font-[Oswald] text-center font-bold text-5xl">
          {user.name}
        </h1>
        <img
          className=" place-self-center w-1/2"
          src={user.picture}
          alt={user.name}
        />
        <div className="font-[Oswald] grid place-content-center text-[20px]">
          <p>Nombre: {user.given_name}</p>
          <p>Apellido: {user.family_name}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
