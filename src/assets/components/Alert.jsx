const Alert = ({ success, invalid }) => {
    return (
        <>
            <p>{success}</p>
            <p>{invalid}</p>
        </>
    );
};

export default Alert;
