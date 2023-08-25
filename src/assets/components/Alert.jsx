import Badge from "react-bootstrap/Badge";

const Alert = ({ children, color }) => {
    return (
        <>
            <Badge bg={color}>{children}</Badge>
        </>
    );
};

export default Alert;
