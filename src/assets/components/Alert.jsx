const Alert = ({ color, msg }) => {

    return (
        <>
            <p variant={color}>{msg}</p>
        </>
    );
};

export default Alert;
