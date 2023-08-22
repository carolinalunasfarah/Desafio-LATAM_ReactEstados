const Alert = ({ success, error }) => {
    return (
        <>
            <p>{success}</p>
            <p>{error}</p>
        </>
    );
};

export default Alert;
