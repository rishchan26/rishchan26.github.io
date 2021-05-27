import './MessageForm.css'
import spinner from './icons/spinner.png'
import {useState} from 'react'

const MessageForm = () => {

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(true)
    const [response, setResponse] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const formURL = new URL('https://docs.google.com/forms/d/e/1FAIpQLScASQFS6oT0hAYWezCQMd3AWp2VvflP4GAHObWYpik3DTMKZA/formResponse')
    const emailField = 'entry.991324329'
    const messageField = 'entry.1362745466'

    const sendMessage = (e) => {
        e.preventDefault()
        setLoading(true)
        if (email === '') {
            setSuccess(false)
            setLoading(false)
            setResponse('Please enter your email')
            return
        }
        if (message === '') {
            setSuccess(false)
            setLoading(false)
            setResponse('Message cannot be left blank')
            return
        }
        formURL.searchParams.append(emailField, email)
        formURL.searchParams.append(messageField, message)
        fetch(formURL, {
            method: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            mode: 'no-cors',
        })
        .then(() => {
            setSuccess(true)
            setLoading(false)
            setResponse('Thank you for your message!')
            setMessage('')
            setEmail('')
        })
        .catch(() => {
            setSuccess(false)
            setLoading(false)
            setResponse('Something went wrong!')
        })
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <input type="email" placeholder="johndoe@email.com" className="email-box" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <textarea placeholder="Your message" className="message-box" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button className={loading ? "send-button hidden" : "send-button"} type="submit">Send</button>
                <img src={spinner} alt="spinner" className={loading ? "loader" : "hidden loader"}/>
                <p className={success ? "success" : "error"}>{response}</p>
            </form>
        </div>
    )
}

export default MessageForm