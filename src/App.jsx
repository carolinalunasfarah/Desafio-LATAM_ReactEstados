import { useState } from "react";
import "./App.css";
import Registration from "./assets/components/Registration";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <main>
                <section className="registration-container">
                    <Registration />
                </section>
            </main>
        </>
    );
}

export default App;
