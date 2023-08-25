import Badge from "react-bootstrap/Badge";

const Alert = ({ color, msg }) => {
    return (
        <>
            <Badge bg={color}>{msg}</Badge>
        </>
    );
};

export default Alert;
