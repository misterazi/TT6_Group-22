import Button from "react-bootstrap/Button";
import { useNavigate  } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate ();


    const handleLoginButton = () => {
        navigate("/Home");
      }

    return (
        <div>
             <Button block size="lg" type="submit" onClick={handleLoginButton}>
              Go Back to Home
            </Button>
        </div>
      );
}