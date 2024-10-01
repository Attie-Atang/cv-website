import './ContactForm.css';

function ContactForm() {
    return (
        <section className="contact-form">
            <h2>Contact Me</h2>
            <form>
                <label>
                    <p>Name:</p>
                    <input type="text" placeholder="Your name" />
                </label>
                <label>
                    <p>Email:</p>
                    <input type="email" placeholder="Your email" />
                </label>
                <label>
                    <p>Message:</p>
                    <textarea placeholder="Your message"></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default ContactForm;
