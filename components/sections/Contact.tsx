import Image from "next/image";
import Link from "next/link";
import { SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { InView } from "react-intersection-observer";
import { Sections } from "../../pages";
import styles from "../../styles/components/sections/contact.module.scss";

interface Inputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm({
  setOnScreen,
}: {
  setOnScreen: (value: SetStateAction<Sections>) => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onFormSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <InView
      threshold={0.5}
      as='div'
      onChange={(inView) => (inView ? setOnScreen("Contact") : null)}
    >
      <div className={styles.contact} id='contact'>
        <h2>Contact</h2>

        <div className={styles.contact_content}>
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
                <Image src={"/icons/send_it.svg"} width={40} height={40} />
              </button>
            </form>
          </div>

          <div className={styles.contact_info}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
              facere similique temporibus. Nulla maxime vitae, sit assumenda
              deleniti nemo dicta.
            </p>
            <div className={styles.icon_info}>
              <Image src={"/icons/email.svg"} width={36} height={36} />
              <span>bbardi.dev@gmail.com</span>
            </div>
            <div className={styles.icon_info}>
              <Image src={"/icons/location.svg"} width={36} height={36} />
              <span>Budapest, Remote</span>
            </div>
            <div className={styles.socials}>
              <Link href='https://www.github.com/bbardi-dev'>
                <a target='blank'>
                  <Image src={"/icons/github.svg"} width={48} height={48} />
                </a>
              </Link>
              <Link href='https://www.linkedin.com'>
                <a target='blank'>
                  <Image src={"/icons/linkedin.svg"} width={48} height={48} />
                </a>
              </Link>
              <Link href='https://www.upwork.com'>
                <a target='blank'>
                  <Image src={"/icons/upwork.svg"} width={48} height={48} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </InView>
  );
}
