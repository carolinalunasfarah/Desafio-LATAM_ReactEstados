import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const RegistrationForm = () => {
    // form states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // data validation
    const validateData = (e) => {
        e.prevent.default();

        if (
            name.trim === "" ||
            email.trim === "" ||
            password.trim === "" ||
            confirmPassword.trim === ""
        ) {
            setError(true);
            return;
        }
        setError(false);
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
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                </Form.Group>
                <Button class="secondary" type="submit">
                    Sign in
                </Button>
            </form>
        </>
    );
};

export default RegistrationForm;
