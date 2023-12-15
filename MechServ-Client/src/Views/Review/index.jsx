//Funcionalidad
import { useNavigate } from "react-router";
import { bgHome } from "../../assets/Backgrounds/backgrounds";
import { useAuth0 } from "@auth0/auth0-react";

//Components
import { Footer, Navbar } from "../../Components";
import ReviewUser from "../../Components/ReviewUser/ReviewUser";

const Review = () => {
  const { user, logout } = useAuth0();
  // const navigate = useNavigate();
  const idOrder = localStorage.getItem("orderToReview");

  console.log("review order:", idOrder);

  return (
    <div
      className="flex flex-col justify-around gap-20 bg-cover bg-center bg-no-repeat h-screen max-w-full md:flex-0 shrink-0"
      style={{
        backgroundImage: `url(${bgHome})`,
      }}
    >
      <Navbar />

      <ReviewUser />

      <Footer />
    </div>
  );
};

export default Review;
