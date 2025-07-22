import MailImage from "@assets/icons/mail.svg"
import PhoneImage from "@assets/icons/phone.svg"

function ContactUsSectionContent() {
    return (
        <>
            <h2 className="contact-us__title h2">We'd love to talk about how we can work together.</h2>

            <p className="contact-us__text text">Feel free to reach out to us anytime for inquiries, orders, or partnership opportunities. We're here to help and support your journey to organic living.</p>

            <a href="mailto:support@saasflow.com" className="contact-us__link">
                <img src={MailImage} alt="Mail" className="contact-us__link-icon" width={89} height={89} loading="lazy" />

                <div className="contact-us__link-text-wrap">
                    <h6 className="contact-us__link-title h6">Message</h6>

                    <span className="contact-us__link-text text">support@organic.com</span>
                </div>
            </a>

            <a href="tel:01123456789" className="contact-us__link">
                <img src={PhoneImage} alt="Phone" className="contact-us__link-icon" width={89} height={89} loading="lazy" />

                <div className="contact-us__link-text-wrap">
                    <h6 className="contact-us__link-title h6">Contact Us</h6>

                    <span className="contact-us__link-text text">+01 123 456 789</span>
                </div>
            </a>
        </>
    )
}

export default ContactUsSectionContent