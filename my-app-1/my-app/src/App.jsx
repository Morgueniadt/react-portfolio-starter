import Greeting from "./components/Greeting";
import ModuleTitle from "./components/ModuleTitle";
import Clicky from "./components/Clicky";
import Countdown from "./components/Countdown";
//import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUp";
import Listy from "./components/Listy";
const App = () => {
    return (
        <>
            <h1>Hello from App</h1>
            <Listy/>
            <SignUpForm/>
            
            <Clicky />
            <Greeting intro="Mór" />
            <ModuleTitle title="Front End Dev" students={20} />
            <ModuleTitle title="AI" />
            <ModuleTitle title="Advanced JavaScript" />
            <Countdown /> 
        </>
    );
};

export default App;
