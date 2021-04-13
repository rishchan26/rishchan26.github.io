import './Button.css'
import './Menu.css'
import MessageForm from './MessageForm'
import {useState} from 'react'
import linkedIn from './icons/linkedin.png'
import twitter from './icons/twitter.png'
import github from './icons/github.png'

const Menu = ({contentToggler}) => {

    const [opened, setOpened] = useState(false)

    const openCloseMenu = () => {
        let open = !opened
        if (open) {
            setTimeout(contentToggler, 350)
        } 
        else {
            contentToggler()
        }
        setOpened(open)
    }

    return (
        <div className="menu-bar">
            <div className={opened ? "menu-drawer" : "menu-drawer closed"}>
                <div className={opened ? "menu-content" : "hidden"}>
                    <h1 className="heading"><span className="reverse-theme">Rishabh</span> <span className="spacer">Chanana</span></h1>
                    <MessageForm/>
                    <div>
                        <div className="menu-icon-tray">
                            <a href="https://www.linkedin.com/in/rishabhchanana26/" target="_blank" rel="noreferrer"><img src={linkedIn} className="icon" alt=""/></a>
                            <a href="https://twitter.com/ChananaRishabh" target="_blank" rel="noreferrer"><img src={twitter} className="icon" alt=""/></a>
                            <a href="https://github.com/rishchan26" target="_blank" rel="noreferrer"><img src={github} className="icon" alt=""/></a>
                        </div>
                        <p className="menu-footnote">Made by Rishabh Chanana</p>
                    </div>
                </div>
            </div>
            <button className = {opened ? "button opened" : "button"} onClick = {openCloseMenu} onDoubleClick={(e) => e.preventDefault()}>
                <svg width="50" height="50" viewBox="0 0 100 100" className="hamburger-icon">
                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
        </div>
        
    )
}

export default Menu