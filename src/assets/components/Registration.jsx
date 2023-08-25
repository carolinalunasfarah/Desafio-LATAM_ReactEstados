import { useState } from "react";

import RegistrationForm from "./RegistrationForm";
import SocialButton from "./SocialButton";
import Alert from "./Alert";

const Registration = ({ createAccount, emailAlternative }) => {
    const [alert, setAlert] = useState({
        error: "",
        msg: "",
        color: "",
    });

    return (
        <>
            <h2>{createAccount}</h2>
            <SocialButton
                fbIcon="fa-brands fa-facebook fa-3x"
                ghIcon="fa-brands fa-github fa-3x"
                liIcon="fa-brands fa-linkedin fa-3x"
            />
            <p>{emailAlternative}</p>

            <RegistrationForm setAlert={setAlert} />
            {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
        </>
    );
};

export default Registration;
