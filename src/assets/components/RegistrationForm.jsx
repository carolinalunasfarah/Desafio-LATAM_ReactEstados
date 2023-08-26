import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegistrationForm = ({ setAlert }) => {
    // form states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // data validation
    const validateData = (e) => {
        e.preventDefault();

        const validateFormGroups =
            !name || !email || !password || !confirmPassword;
        const validatePassword = password !== confirmPassword;

        validateFormGroups
            ? setAlert({
                  error: true,
                  msg: "You need to enter all data",
                  color: "danger",
              })
            : setAlert({
                  error: false,
                  msg: "You successfully sign in",
                  color: "success",
              });

        if (validatePassword) {
            setAlert({
                error: true,
                msg: "Passwords doesn't match",
                color: "warning",
            });
            return;
        }

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <>
            <form className="registerForm" onSubmit={validateData}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="yourmail@mail.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicConfirmPassword">
                    <Form.Control
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                </Form.Group>
                <Button
                    variant="warning"
                    size="lg"
                    type="submit"
                    className="m-2 fw-bold submitBtn">
                    Sign in
                </Button>
            </form>
        </>
    );
};

export default RegistrationForm;
