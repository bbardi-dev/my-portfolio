import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { InView } from "react-intersection-observer";

import styles from "../../styles/components/sections/contact.module.scss";
import { Sections } from "../../utils/types";

interface Inputs {
  name: string;
  email: string;
  message: string;
}
type EmailStatus = "initial" | "success" | "error";

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
  } = useForm<Inputs>();

  const [submitting, setSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState<EmailStatus>("initial");

  const onFormSubmit: SubmitHandler<Inputs> = async (data) => {
    setSubmitting(true);
    try {
      console.log(data);
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.status === 200) setEmailStatus("success");
      else {
        setEmailStatus("error");
      }
    } catch (error) {
      setEmailStatus("error");
      console.error(error);
    } finally {
      reset();
      setTimeout(() => setEmailStatus("initial"), 1000 * 2);
      setSubmitting(false);
    }
  };

  return (
    <InView threshold={0.5} as='div' onChange={(inView) => (inView ? setOnScreen("Contact") : null)}>
      <div className={styles.contact} id='contact'>
        <h2>Contact</h2>

        <div className={styles.contact_content}>
          <div className={styles.contact_form}>
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <div className={styles.input}>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  {...register("name", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    maxLength: {
                      value: 64,
                      message: "Is your name really longer than 64 characters? 🤔",
                    },
                  })}
                />
                {errors?.name?.message && <span className={styles.error_msg}>{errors?.name?.message}</span>}
              </div>
              <div className={styles.input}>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  {...register("email", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email",
                    },
                    maxLength: {
                      value: 64,
                      message: "Is your email address really longer than 64 characters? 🤔",
                    },
                  })}
                />
                {errors?.email?.message && (
                  <span className={styles.error_msg}>{errors?.email?.message}</span>
                )}
              </div>
              <div className={styles.input}>
                <label htmlFor='message'>Message</label>
                <textarea
                  rows={12}
                  {...register("message", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                    minLength: {
                      value: 25,
                      message: "Your message should at least be 25 characters.",
                    },
                    maxLength: {
                      value: 999,
                      message: "Your message shouldn't be longer than 999 characters.",
                    },
                  })}
                />
                {errors?.message?.message && (
                  <span className={styles.error_msg}>{errors?.message?.message}</span>
                )}
              </div>
              <button
                disabled={submitting}
                onSubmit={handleSubmit(onFormSubmit)}
                type='submit'
                style={
                  emailStatus === "success"
                    ? { backgroundColor: "#3FF071" }
                    : emailStatus === "error"
                    ? { backgroundColor: "#F03F4A" }
                    : {}
                }
              >
                {emailStatus === "initial" ? (
                  <>
                    <span>Send Email </span> <Image src={"/icons/send_it.svg"} width={40} height={40} />
                  </>
                ) : emailStatus === "success" ? (
                  <span>Email Sent successfully 😎👍</span>
                ) : (
                  <span>Error, please try again 😥</span>
                )}
              </button>
            </form>
          </div>

          <div className={styles.contact_info}>
            <p>
              Feel free to get in touch. I'm currently looking for full-time positions, as well as freelance
              contract work, but open to all business inquiries. Below are a few more links where you can
              find me.
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
