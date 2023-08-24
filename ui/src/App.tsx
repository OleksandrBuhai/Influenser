import './App.css';
import Main from './components/Main.jsx';
import SocialMedia from './components/SocialMedia.jsx';
import Description from './components/Description.tsx';
import Skills from './components/Skills.jsx';
import Affords from './components/Affords.jsx';
import TalkToUS from './components/TalkToUS.jsx';
import Video from './components/Video.jsx';
import DesignSkill from './components/DesignSkill.jsx';
import Books from './components/Books.jsx';
import { Team } from '@/entities/worker';
import Testimonial from './components/Testimonial.jsx';
import News from './components/News.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Main />
      <SocialMedia />
      <Description />
      <Skills />
      <Affords />
      <TalkToUS />
      <Video />
      <DesignSkill />
      <Books />
      <Team />
      <Testimonial />
      <News />
      <Footer />
    </>
  );
}

export default App;
