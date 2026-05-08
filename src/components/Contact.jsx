import { Copy } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function Contact() {
  const email = "hissijadoon@gmail.com";
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const { darkMode } = useSelector((state) => state.theme);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setStatus({ type: "info", message: "Email copied to clipboard" });
    setTimeout(() => setStatus(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEl = formRef.current;
    if (!formEl) return;

    const formData = new FormData(formEl);
    const name = formData.get("name")?.toString().trim();
    const from_email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !from_email || !message) {
      setStatus({
        type: "error",
        message: "Please fill all required fields (Name, Email, Message).",
      });
      return;
    }

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error("Missing EmailJS env vars", {
        serviceID,
        templateID,
        publicKey,
      });
      setStatus({
        type: "error",
        message:
          "Contact is not configured. Please set EmailJS environment variables (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY).",
      });
      return;
    }

    setSending(true);
    setStatus({ type: "info", message: "Sending message..." });
    try {
      // Use formRef.current explicitly per spec
      const res = await emailjs.sendForm(
        serviceID,
        templateID,
        formRef.current,
        publicKey,
      );
      console.log("EmailJS response:", res);
      setStatus({ type: "success", message: "Message sent. Thank you!" });
      // reset the form fields
      formEl.reset();
    } catch (err) {
      console.error("EmailJS send error:", err);
      const userMessage =
        err?.text || err?.message || "Failed to send. Please try again later.";
      setStatus({ type: "error", message: `Send failed: ${userMessage}` });
    } finally {
      setSending(false);
      // keep status visible a bit longer on success/error
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 text-black dark:text-white"
    >
      <div className="text-center mb-16">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 ${darkMode ? "text-white" : "text-black"}`}
        >
          Contact <span className="text-[#7C3AED]">Me</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-10 "
        >
          {/* HEADING */}
          <div>
            <h1
              className={`text-4xl md:text-5xl font-bold leading-tight ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Let's Build
            </h1>

            <h2 className="text-4xl md:text-5xl font-bold text-[#7C3AED]">
              Something Great
            </h2>

            <p className="text-gray-700 dark:text-gray-400 mt-6 max-w-xl">
              I'm actively looking for opportunities. If you're hiring a
              frontend developer or building a project, let's talk.
            </p>
          </div>

          {/* EMAIL */}
          <div className="flex justify-between items-center border border-gray-300 dark:border-gray-700 rounded-xl p-5 bg-gray-100 dark:bg-white/5 backdrop-blur-md text-black dark:text-white">
            <div>
              <p className="text-[#7C3AED] text-sm">Email</p>
              <p className="text-black  dark:text-gray-400">{email}</p>
            </div>

            <button
              onClick={copyEmail}
              className="flex items-center gap-2 text-sm bg-[#7C3AED]/30 px-3 py-1 rounded-md hover:bg-[#7C3AED]/40 transition"
            >
              <Copy size={16} /> Copy
            </button>
          </div>

          {/* PHONE */}
          <div className="border border-gray-300 dark:border-gray-700 rounded-xl p-5 bg-gray-100 dark:bg-white/5 backdrop-blur-md text-black dark:text-white">
            <p className="text-[#7C3AED] text-sm">Phone</p>
            <p className="text-black  dark:text-gray-400">+92 3321536332</p>
          </div>

          {/* LOCATION */}
          <div className="border border-gray-300 dark:border-gray-700 rounded-xl p-5 bg-gray-100 dark:bg-white/5 backdrop-blur-md text-black dark:text-white ">
            <p className="text-[#7C3AED] text-sm">Location</p>
            <p className="text-black  dark:text-gray-400">
              Abbottabad, Khyber Pakhtunkhwa PK
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/hifza-jadoon-28001b318"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-widest text-[#7C3AED] hover:underline mt-6 inline-block"
          >
            VIEW LINKEDIN PROFILE →
          </a>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border border-[#7C3AED]/30 rounded-2xl p-6 bg-black/5 dark:bg-white/5 backdrop-blur-lg mt-4"
        >
          <h3
            className={`text-2xl font-semibold mb-5 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Send Me a Message
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-700 dark:text-gray-500">
                Full Name *
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-2 rounded-lg bg-transparent border border-gray-400 dark:border-gray-700 focus:border-[#7C3AED] outline-none text-black dark:text-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 dark:text-gray-500">
                Email *
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-2 rounded-lg bg-transparent border border-gray-400 dark:border-gray-700 focus:border-[#7C3AED] outline-none text-black dark:text-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 dark:text-gray-500">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                placeholder="Enter subject"
                className="w-full mt-2 px-4 py-2 rounded-lg bg-transparent border border-gray-400 dark:border-gray-700 focus:border-[#7C3AED] outline-none text-black dark:text-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 dark:text-gray-500">
                Message *
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-2 px-4 py-2 rounded-lg bg-transparent border border-gray-400 dark:border-gray-700 focus:border-[#7C3AED] outline-none text-black dark:text-white resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] transition py-3 rounded-2xl font-semibold text-white cursor-expand"
            >
              {sending ? "Sending..." : "Send Message →"}
            </button>
          </form>

          {status && (
            <div
              className={`mt-4 p-3 rounded-md ${status.type === "success" ? "bg-green-100 text-green-800" : status.type === "error" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"}`}
            >
              {status.message}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
