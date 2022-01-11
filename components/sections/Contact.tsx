import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "../../styles/components/sections/contact.module.scss";

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
      <h2>Contact</h2>

      <div className={styles.contact_form}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className={styles.input}>
            <label htmlFor='name'>Name</label>
            <input type='text' {...register("name")} />
          </div>
          <div className={styles.input}>
            <label htmlFor='email'>Email</label>
            <input type='text' {...register("email")} />
          </div>
          <div className={styles.input}>
            <label htmlFor='message'>Message</label>
            <textarea rows={12} {...register("message")} />
          </div>
          <button type='submit'>
            <span>Send Email</span>
            <Image src={"/icons/send_it.svg"} width={20} height={20} />
          </button>
        </form>
      </div>

      <div className={styles.contact_info}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo facere
          similique temporibus. Nulla maxime vitae, sit assumenda deleniti nemo
          dicta.
        </p>
        <div>
          <Image src={"/icons/email.svg"} width={20} height={20} />
          <span>example@example.com</span>
        </div>
        <div>
          <Image src={"/icons/location.svg"} width={20} height={20} />
          <span>Budapest, Remote</span>
        </div>
        <div>
          <Image src={"/icons/github.svg"} width={20} height={20} />
          <Image src={"/icons/linkedin.svg"} width={20} height={20} />
          <Image src={"/icons/upwork.svg"} width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
