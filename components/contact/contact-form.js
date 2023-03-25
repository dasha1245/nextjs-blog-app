import {useState, useEffect} from "react";

import css from './contact-form.module.css';
import Notification from "@/components/ui/notification";

function ContactForm() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const [requestStatus, setRequestStatus] = useState('');
    const [requestError, setRequestError] = useState('');

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error'){
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setRequestError(null)
            }, 3000);

            return () => clearTimeout(timer)
        }
    }, [requestStatus])

    async function sendContactData(contactDetails) {
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(contactDetails),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong!');
        }
    }

    async function sendMessageHandler(event) {
        event.preventDefault();
        setRequestStatus('pending');

        try {
            await sendContactData({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage
            })
            setRequestStatus('success');
            setEnteredMessage('');
            setEnteredName('');
            setEnteredEmail('');
        } catch (e) {
            setRequestError(e.message);
            setRequestStatus('error');
        }
    }

    let notificationData;
    if (requestStatus === 'pending') {
        notificationData = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way!'
        }
    }
    if (requestStatus === 'success') {
        notificationData = {
            status: 'success',
            title: 'Success!',
            message: 'Message sent successfully!'
        }
    }
    if (requestStatus === 'error') {
        notificationData = {
            status: 'error',
            title: 'Error!',
            message: requestError
        }
    }
    return <section className={css.contact}>
        <h1>How can I help you?</h1>
        <form className={css.form} onSubmit={sendMessageHandler}>
            <div className={css.controls}>
                <div className={css.control}>
                    <label htmlFor={'email'}>Your Email</label>
                    <input type={'email'}
                           id={'email'}
                           required
                           value={enteredEmail}
                           onChange={event => setEnteredEmail(event.target.value)}/>
                </div>
                <div className={css.control}>
                    <label htmlFor={'name'}>Your Name</label>
                    <input type={'text'}
                           id={'name'}
                           required
                           value={enteredName}
                           onChange={event => setEnteredName(event.target.value)}/>
                </div>
            </div>
            <div className={css.control}>
                <label htmlFor={'message'}>Your Message</label>
                <textarea id={'message'}
                          rows={5}
                          required
                          value={enteredMessage}
                          onChange={event => setEnteredMessage(event.target.value)}></textarea>
            </div>
            <div className={css.actions}>
                <button>Send Message</button>
            </div>
        </form>
        {notificationData && <Notification
            status={notificationData.status}
            title={notificationData.title}
            message={notificationData.message}/>}
    </section>
}

export default ContactForm