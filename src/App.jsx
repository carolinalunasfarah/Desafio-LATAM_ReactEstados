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
                        emailAlternative="Or use your email to register"
                    />
                </section>
            </main>
        </>
    );
}

export default App;
