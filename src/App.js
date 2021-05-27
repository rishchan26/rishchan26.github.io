import './App.css'
import Menu from './components/Menu'
import animoji from './animoji.mp4'
import {useState} from 'react'
import linkedInWhite from './components/icons/linkedin-white.png'
import twitterWhite from './components/icons/twitter-white.png'
import githubWhite from './components/icons/github-white.png'

function App() {

    const [displayContent, setDisplayContent] = useState(true)

    const showHideContent = () => {
        let display = !displayContent
        setDisplayContent(display)
    }

    return (
        <div className="App">
            <Menu contentToggler={showHideContent}/>
            <div className={displayContent ? "main" : "main hidden"}>
                <div className="main-left">
                    <h1 className="main-left-title">
                        <span className="reverse">Hello</span> World
                    </h1>
                    <p className="main-left-para">
                        I am Rishabh a Master's CSE student at Ohio State University. After my graduation I'll be joining Bloomberg in New York City as a Software Engineer.
                    </p>
                </div>
                <div className="main-right">
                    <video autoPlay muted loop defaultmuted="true" playsInline onContextMenu={(e) => e.preventDefault()} preload="auto">
                        <source src={animoji} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className="footer">
                <div className="icon-tray">
                    <a href="https://www.linkedin.com/in/rishabhchanana26/" target="_blank" rel="noreferrer"><img src={linkedInWhite} className="icon" alt=""/></a>
                    <a href="https://twitter.com/ChananaRishabh" target="_blank" rel="noreferrer"><img src={twitterWhite} className="icon" alt=""/></a>
                    <a href="https://github.com/rishchan26" target="_blank" rel="noreferrer"><img src={githubWhite} className="icon" alt=""/></a>
                </div>
                <p className="footnote">Made by Rishabh Chanana</p>
            </div>
        </div>
    );
}

export default App;
