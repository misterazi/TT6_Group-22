import Button from "react-bootstrap/Button";
import { useNavigate  } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();


    const handleLogoutButton = () => {
        navigate("/");
      }

    return (
        <div>
             <Button block size="lg" type="submit" onClick={handleLogoutButton}>
              Logout
            </Button>
        </div>
      );
}