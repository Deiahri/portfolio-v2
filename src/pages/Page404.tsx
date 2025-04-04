import { useNavigate } from "react-router";
import Button from "../components/Button/Button";

export default function Page404() {
    const navigate = useNavigate();
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        width: "100vw",
        height: "100%",
        minHeight: "100vh",
        position: 'relative',
        zIndex: 1
      }}
    >
        <span style={{fontSize: '2rem'}}>Uh oh</span>
        <span style={{}}>That page doesn't exist</span>
        <Button style={{padding: '0.8rem 2rem', marginTop: '1rem'}} onClick={() => navigate('/') }>Return Home</Button>
    </main>
  );
}
