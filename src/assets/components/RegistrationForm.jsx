import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegistrationForm = () => {
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="yourmail@mail.com" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="password"
                        placeholder="Confirm password"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign in
                </Button>
            </Form>
        </>
    );
};

export default RegistrationForm;
