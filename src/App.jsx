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
                        fbIcon="fa-brands fa-facebook fa-3x"
                        ghIcon="fa-brands fa-github fa-3x"
                        liIcon="fa-brands fa-linkedin fa-3x"
                        emailAlternative="Or use your email to register"
                        success="Yay"
                        invalid="Nope"
                    />
                </section>
            </main>
        </>
    );
}

export default App;
