function FooterAddress() {
    return (
        <address className="footer__address-info">
            <h5 className="footer__title footer__title--contact-us h5">Contact us</h5>

            <dl className="footer__description-list">
                <dt className="footer__description-term">
                    <span className="footer__span text">Email</span>
                </dt>
                <dd className="footer__description-definition">
                    <a href="mailto:support@organic.com" className="footer__link text">support@organic.com</a>
                </dd>

                <dt className="footer__description-term">
                    <span className="footer__span text">Phone</span>
                </dt>
                <dd className="footer__description-definition">
                    <a href="tel:0123456789" className="footer__link text">+01 123 456 789</a>
                </dd>

                <dt className="footer__description-term">
                    <span className="footer__span text">Address</span>
                </dt>
                <dd className="footer__description-definition">
                    <a href="https://www.google.com/maps/place/88+Brooklyn+Ave,+Brooklyn,+NY+11216,+%D0%A1%D0%A8%D0%90/@40.677099,-73.9470458,653m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c25b84595d61fd:0xc00ede9005b9a8a5!8m2!3d40.677099!4d-73.9444709!16s%2Fg%2F11csdw1nfp?entry=ttu&g_ep=EgoyMDI1MDYwOS4xIKXMDSoASAFQAw%3D%3D" target="_blank" className="footer__link text">88 road, borklyn street, USA</a>
                </dd>
            </dl>
        </address>
    )
}

export default FooterAddress