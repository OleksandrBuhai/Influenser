import './App.css'
import Main from "./components/Main.jsx";
import SocialMedia from "./components/SocialMedia.jsx";
import Description from "./components/Description.jsx";
import Skills from "./components/Skills.jsx";
import Affords from "./components/Affords.jsx";
import TalkToUS from "./components/TalkToUS.jsx";
import Video from "./components/Video.jsx";
import DesignSkill from "./components/DesignSkill.jsx";

function App() {
    return (
        <>
            <Main/>
            <SocialMedia/>
            <Description/>
            <Skills/>
            <Affords/>
            <TalkToUS/>
            <Video/>
            <DesignSkill/>
        </>
    )
}

export default App
