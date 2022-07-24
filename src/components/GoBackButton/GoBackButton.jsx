import { useNavigate } from "react-router-dom";
import { BackButton } from "./GoBackButton.styled"

export const GoBackButton = () => {

    const navigate = useNavigate();    
    
    return (
        <BackButton type="button" onClick={() => navigate(-1)}>
            Go back
        </BackButton>
    )
}