import "./SubscribeSection.scss"
import type { SubmitHandler } from "react-hook-form"
import type { SubscribeFormValues } from "../../interfaces/subscribeFormValues"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { toast } from "react-toastify"
import emailjs from '@emailjs/browser'
import { SERVICE_ID, TEMPLATE_ID_SUBSCRIBE, PUBLIC_KEY } from "../../config/emailjs_keys"

function SubscribeSection() {
    const schema = yup.object().shape({
        email: yup.string().email().required()
    })

    const { register, handleSubmit, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit: SubmitHandler<SubscribeFormValues> = async (data) => {
        console.log(data.email)

        const templateParams = {
            to_email: data.email
        }

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID_SUBSCRIBE,
                templateParams,
                PUBLIC_KEY
            )

            toast.success("The letter has been sent to your email!")
        } catch (error) {
            toast.error("Error sending.")
        }

        reset()
    }

    const onError = (): void => {
        toast.error("Incorrect email!")
    }

    return (
        <section className="subscribe">
            <div className="subscribe__inner container">
                <div className="subscribe__row row">
                    <div className="subscribe__column column">
                        <div className="subscribe__content-block">
                            <div className="subscribe__text-wrap">
                                <h2 className="subscribe__title h2">Subscribe to our Newsletter</h2>
                            </div>

                            <form className="subscribe__form" onSubmit={handleSubmit(onSubmit, onError)}>
                                <label htmlFor="subscribeInputEmail" className="subscribe__label subscribe__label--email">
                                    <input
                                        id="subscribeInputEmail"
                                        placeholder="Your Email Address"
                                        className="subscribe__input subscribe__input--email"
                                        {...register("email")}
                                    />
                                </label>

                                <label htmlFor="subscribeInputEmail" className="subscribe__label subscribe__label--submit">
                                    <input type="submit" id="subscribeInputSubmit" value="Subscribe" className="subscribe__input subscribe__input--submit button button--blue" />
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscribeSection