import { useState } from "react";
import "./App.css";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// components
import Registration from "./assets/components/Registration";

function App() {
    return (
        <>
            <main>
                <section className="registrationContainer">
                    <Registration
                        createAccount="Create an account"
                        fbIcon="fa-brands fa-facebook"
                        ghIcon="fa-brands fa-github"
                        liIcon="fa-brands fa-linkedin"
                        emailAlternative="Or use your email to register"
                    />
                </section>
            </main>
        </>
    );
}

export default App;
