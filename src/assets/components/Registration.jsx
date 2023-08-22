import RegistrationForm from "./RegistrationForm";
import SocialButton from "./SocialButton";

const Registration = ({
    createAccount,
    fbIcon,
    ghIcon,
    liIcon,
    emailAlternative,
    success,
    invalid
}) => {
    return (
        <>
            <h2>{createAccount}</h2>
            <SocialButton fbIcon={fbIcon} ghIcon={ghIcon} liIcon={liIcon} />
            <p>{emailAlternative}</p>
            <RegistrationForm success={success} invalid = {invalid}/>
        </>
    );
};

export default Registration;
