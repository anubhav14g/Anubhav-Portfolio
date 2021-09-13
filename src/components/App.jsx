import React from "react";
import Header from "./Header.jsx";
import About from "./About.jsx";
import Profile from "./Profile.jsx";
import Skills from "./Skills.jsx";
import Hobbies from "./Hobbies.jsx";
import Experiences from "./Experiences.jsx";
import Projects from "./Projects.jsx";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App(){
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={About}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/skills" component={Skills}/>
                    <Route path="/hobbies" component={Hobbies}/>
                    <Route path="/experiences" component={Experiences}/>
                    <Route path="/projects" component={Projects}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;