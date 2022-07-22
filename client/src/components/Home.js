import Button from "react-bootstrap/Button";
import { Navigate } from "react-router-dom";

export default function Home() {
  const navigate = Navigate();

  const handleLogoutButton = () => {
    navigate("/");
  };

  return (
    <div>
      <Button block size="lg" type="submit" disabled={!handleLogoutButton()}>
        Logout
      </Button>
    </div>
  );
}
