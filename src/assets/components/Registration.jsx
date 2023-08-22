import SocialButton from "./SocialButton";

const Registration = ({
    createAccount,
    fbIcon,
    ghIcon,
    liIcon,
    mailAlternative,
}) => {
    return (
        <>
            <h2>{createAccount}</h2>
            <SocialButton fbIcon={fbIcon} ghIcon={ghIcon} liIcon={liIcon} />
            <p>{mailAlternative}</p>
        </>
    );
};

export default Registration;
