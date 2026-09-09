import { Copy } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Section from "./common/Section";
import { profile } from "../data/portfolioData";

export default function Contact() {
  const { email, phone, location, socialLinks } = profile;

  const formRef = useRef(null);

  const [status, setStatus] = useState(null);
const [copied, setCopied] = useState(false);
const [sending, setSending] = useState(false);

  const [errors, setErrors] = useState({});

 const copyEmail = async () => {
  await navigator.clipboard.writeText(email);

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formEl = formRef.current;

    if (!formEl) return;

    const formData = new FormData(formEl);

    const name = formData.get("name")?.toString().trim();

    const from_email = formData.get("email")?.toString().trim();

    const subject = formData.get("subject")?.toString().trim();

    const message = formData.get("message")?.toString().trim();

    let newErrors = {};

    if (!name) {
      newErrors.name = "Full Name is required";
    }

    if (!from_email) {
      newErrors.email = "Email is required";
    }

    if (!subject) {
      newErrors.subject = "Subject is required";
    }

    if (!message) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      setStatus({
        type: "error",
        message: "Please fill all required fields",
      });

      return;
    }

    setErrors({});

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;

    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    setSending(true);

    setStatus({
      type: "info",
      message: "Sending message...",
    });

    try {
      await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);

      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });

      formEl.reset();
    } catch (err) {
      console.error(err);

      setStatus({
        type: "error",
        message: "Failed to send message",
      });
    } finally {
      setSending(false);

      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }
  };

  return (
    <Section id="contact">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#7C3AED]/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full" />

      {/* MAIN CONTAINER */}
      <div>
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="section-heading text-white">
            Contact <span className="text-[#7C3AED]">Me</span>
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Let's create something beautiful together
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* TITLE */}
            <div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight text-white">
                Let's Build
              </h1>

              <h2 className="text-5xl md:text-6xl font-black text-[#7C3AED] mt-2">
                Something Great
              </h2>

              <p className="mt-6 max-w-xl leading-relaxed text-lg text-gray-400">
                I'm actively looking for opportunities. If you're hiring a
                frontend developer or building a project, let's talk.
              </p>
            </div>

            {/* INFO CARDS */}
            <div className="space-y-5">
              {/* EMAIL */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="flex justify-between items-center p-6 rounded-3xl border bg-white/5 border-white/10 backdrop-blur-xl transition-all duration-300"
              >
                <div>
                  <p className="text-[#7C3AED] text-sm mb-1">Email</p>

                  <p className="font-medium text-gray-300">{email}</p>
                </div>

                <div className="relative">
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                 bg-green-500 text-white text-xs font-medium 
                 px-3 py-1.5 rounded-lg whitespace-nowrap"
                    >
                      Copied!
                    </motion.div>
                  )}

                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-2 bg-[#7C3AED] text-white px-4 py-2 rounded-xl hover:scale-105 transition"
                  >
                    <Copy size={16} />
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </motion.div>

              {/* PHONE */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="p-6 rounded-3xl border bg-white/5 border-white/10 backdrop-blur-xl transition-all duration-300"
              >
                <p className="text-[#7C3AED] text-sm mb-1">Phone</p>

                <p className="font-medium text-gray-300">{phone}</p>
              </motion.div>

              {/* LOCATION */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="p-6 rounded-3xl border bg-white/5 border-white/10 backdrop-blur-xl transition-all duration-300"
              >
                <p className="text-[#7C3AED] text-sm mb-1">Location</p>

                <p className="font-medium text-gray-300">{location}</p>
              </motion.div>
            </div>

            {/* LINKEDIN */}
            <motion.a
              whileHover={{ x: 8 }}
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#7C3AED] tracking-[3px] text-sm font-semibold"
            >
              VIEW LINKEDIN PROFILE →
            </motion.a>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-[35px] p-8 md:p-10 border bg-white/5 border-white/10 backdrop-blur-2xl"
          >
            {/* TOP GLOW */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#7C3AED]/20 blur-3xl rounded-full" />

            <h3 className="text-3xl font-bold mb-8 relative z-10 text-white">
              Send Me a Message
            </h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5 relative z-10"
            >
              {/* NAME */}
              <div>
                <label className="text-sm text-gray-500">Full Name *</label>

                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 px-5 py-4 rounded-2xl border outline-none transition-all duration-300 bg-black/40 border-gray-700 text-white focus:border-[#7C3AED] focus:scale-[1.01]"
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm text-gray-500">Email *</label>

                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 px-5 py-4 rounded-2xl border outline-none transition-all duration-300 bg-black/40 border-gray-700 text-white focus:border-[#7C3AED] focus:scale-[1.01]"
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                )}
              </div>

              {/* SUBJECT */}
              <div>
                <label className="text-sm text-gray-500">Subject *</label>

                <input
                  name="subject"
                  type="text"
                  placeholder="Enter subject"
                  className="w-full mt-2 px-5 py-4 rounded-2xl border outline-none transition-all duration-300 bg-black/40 border-gray-700 text-white focus:border-[#7C3AED] focus:scale-[1.01]"
                />

                {errors.subject && (
                  <p className="text-red-500 text-sm mt-2">{errors.subject}</p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm text-gray-500">Message *</label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full mt-2 px-5 py-4 rounded-2xl border outline-none resize-none transition-all duration-300 bg-black/40 border-gray-700 text-white focus:border-[#7C3AED] focus:scale-[1.01]"
                ></textarea>

                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                )}
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="submit"
                disabled={sending}
                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-[#7C3AED]
                  hover:bg-[#6D28D9]
                  text-white
                  font-semibold
                  shadow-[0_10px_40px_rgba(124,58,237,0.4)]
                  transition-all
                  duration-300
                "
              >
                {sending ? "Sending..." : "Send Message →"}
              </motion.button>
            </form>

            {/* STATUS */}
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`
                  mt-5 p-4 rounded-2xl text-sm font-medium

                  ${
                    status.type === "success"
                      ? "bg-green-500/20 text-green-400"
                      : status.type === "error"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-gray-500/20 text-gray-300"
                  }
                `}
              >
                {status.message}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
