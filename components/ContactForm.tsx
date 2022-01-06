import { SubmitHandler, useForm } from "react-hook-form";
import styles from "../styles/sections/contact.module.scss";

interface Inputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onFormSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className={styles.contact} id='contact'>
      <div className={styles.contact_form}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className={styles.input}>
            <label htmlFor='name'>Your Name: </label>
            <input type='text' {...register("name")} />
          </div>
          <div className={styles.input}>
            <label htmlFor='email'>Your Email: </label>
            <input type='text' {...register("email")} />
          </div>
          <div className={styles.input}>
            <label htmlFor='subject'>Subject: </label>
            <input type='text' {...register("subject")} />
          </div>
          <div className={styles.input}>
            <label htmlFor='message'>Message: </label>
            <textarea
              rows={12}
              placeholder='Start typing...'
              {...register("message")}
            />
          </div>
          <button type='submit'>Send Email</button>
        </form>
      </div>
    </div>
  );
}
