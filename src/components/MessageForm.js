import './MessageForm.css'
import spinner from './icons/spinner.png'
import {useState} from 'react'

const MessageForm = () => {

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(true)
    const [response, setResponse] = useState('')
    const [message, setMessage] = useState('')

    const sendMessage = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setResponse('Thank you for your message!')
            setMessage('')
            setTimeout(() => {
                setResponse('')
            }, 2000)
        }, 1300)
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <textarea placeholder="Send me a message" className="message-box" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button className={loading ? "send-button hidden" : "send-button"} type="submit">Send</button>
                <img src={spinner} alt="spinner" className={loading ? "loader" : "hidden loader"}/>
                <p className={success ? "success" : "error"}>{response}</p>
            </form>
        </div>
    )
}

export default MessageForm