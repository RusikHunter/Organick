import "./LocationSection.scss"
import type { SubmitHandler } from "react-hook-form"
import type { LocationFormValues } from "@interfaces/locationFormValues"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { toast } from "react-toastify"
import emailjs from '@emailjs/browser'
import { SERVICE_ID, TEMPLATE_ID_LOCATION, PUBLIC_KEY } from "../../config/emailjs_keys"

function LocationSectionForm() {
    const schema = yup.object().shape({
        full_name: yup.string().required("This field is required"),
        email: yup.string().email("Enter correct email").required("This field is required"),
        company: yup.string().required("This field is required"),
        subject: yup.string().required("This field is required"),
        message: yup.string().required("This field is required")
    })

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit: SubmitHandler<LocationFormValues> = async (data) => {
        const templateParams = {
            full_name: data.full_name,
            to_email: data.email,
            company: data.company,
            subject: data.subject,
            message: data.message
        }

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID_LOCATION,
                templateParams,
                PUBLIC_KEY
            )

            toast.success("Message sent!")
        } catch (error) {
            toast.error("Error sending.")
        }

        reset()
    }

    const onError = (): void => {
        toast.error("Incorrect form data!")
    }

    return (
        <form className="location__form" onSubmit={handleSubmit(onSubmit, onError)}>
            <label htmlFor="locationInputName" className="location__label location__label--name label">
                <span className="label__text">Full Name* <span className="label__text--error">{errors.full_name?.message}</span></span>

                <input
                    type="text"
                    className="location__input location__input--name input"
                    id="locationInputName"
                    placeholder="Your Full Name"
                    {...register("full_name")}
                />
            </label>

            <label htmlFor="locationInputEmail" className="location__label location__label--email label">
                <span className="label__text">Your Email* <span className="label__text--error">{errors.email?.message}</span></span>

                <input
                    type="email"
                    className="location__input location__input--email input"
                    id="locationInputEmail"
                    placeholder="Your Email Address"
                    {...register("email")} />
            </label>

            <label htmlFor="locationInputCompany" className="location__label location__label--company label">
                <span className="label__text">Company* <span className="label__text--error">{errors.company?.message}</span></span>

                <input
                    type="text"
                    className="location__input location__input--company input"
                    id="locationInputCompany"
                    placeholder="Your Company Name"
                    {...register("company")} />
            </label>

            <label htmlFor="locationInputSubject" className="location__label location__label--subject label">
                <span className="label__text">Subject* <span className="label__text--error">{errors.subject?.message}</span></span>

                <input
                    type="text"
                    className="location__input location__input--subject input"
                    id="locationInputSubject"
                    placeholder="How Can We Help"
                    {...register("subject")} />
            </label>

            <label htmlFor="locationTextareaMessage" className="location__label location__label--message label">
                <span className="label__text">Message* <span className="label__text--error">{errors.message?.message}</span></span>

                <textarea
                    id="locationTextareaMessage"
                    className="location__input location__input--message input"
                    placeholder="Your Message"
                    rows={11}
                    {...register("message")}
                ></textarea>
            </label>

            <div className="location__submit-wrap">
                <input
                    type="submit"
                    className="location__input location__input--submit button button--blue input"
                    id="locationInputSubmit"
                    value="Send Message"
                />
            </div>
        </form>
    )
}

export default LocationSectionForm