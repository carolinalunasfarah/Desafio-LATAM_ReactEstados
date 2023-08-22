import { useState } from "react";
import "./App.css";
import Registration from "./assets/components/Registration";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <main>
                <section className="registrationContainer">
                    <Registration
                        fbIcon="fa-brands fa-facebook"
                        ghIcon="fa-brands fa-github"
                        liIcon="fa-brands fa-linkedin"
                    />
                </section>
            </main>
        </>
    );
}

export default App;
