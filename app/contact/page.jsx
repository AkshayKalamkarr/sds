"use client";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

/* ---------------------------------------------------------
   Decorative registration-mark corners — the page's
   recurring "technical drawing" signature. Used on every
   card to read like an annotated site/spec sheet.
--------------------------------------------------------- */
function CornerMarks({ color = "#E8A33D" }) {
  const mark =
    "absolute w-3 h-3 border-[var(--mark-color)] pointer-events-none";
  return (
    <div style={{ "--mark-color": color }}>
      <span className={`${mark} top-0 left-0 border-t-2 border-l-2`} />
      <span className={`${mark} top-0 right-0 border-t-2 border-r-2`} />
      <span className={`${mark} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${mark} bottom-0 right-0 border-b-2 border-r-2`} />
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: "",
      email: "",
      contactNumber: "",
      message: "",
    };

    if (formData.fullName.length < 2) {
      newErrors.fullName = "Name must be at least 2 characters long";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(formData.contactNumber)) {
      newErrors.contactNumber = "Please enter a valid phone number";
      isValid = false;
    }

    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitStatus({ loading: true, success: false, error: "" });

      try {
        const response = await fetch("/api/emails/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }

        setSubmitStatus({ loading: false, success: true, error: "" });
        setFormData({
          fullName: "",
          email: "",
          contactNumber: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitStatus((prev) => ({ ...prev, success: false }));
        }, 3000);
      } catch (error) {
        setSubmitStatus({
          loading: false,
          success: false,
          error: "Failed to send message. Please try again later.",
        });
      }
    }
  };

  const statusMessage = () => {
    if (submitStatus.loading) {
      return (
        <p className="flex items-center gap-2 text-[#B4791E] font-mono text-xs tracking-wide">
          <span className="animate-spin">⟳</span> TRANSMITTING…
        </p>
      );
    }
    if (submitStatus.success) {
      return (
        <p className="flex items-center gap-2 text-emerald-700 font-mono text-xs tracking-wide">
          ✓ MESSAGE RECEIVED — WE'LL BE IN TOUCH
        </p>
      );
    }
    if (submitStatus.error) {
      return (
        <p className="flex items-center gap-2 text-red-600 font-mono text-xs tracking-wide">
          ✗ {submitStatus.error.toUpperCase()}
        </p>
      );
    }
    return null;
  };

  const inputBase =
    "w-full bg-transparent border-0 border-b-2 pb-3 pt-1 text-[15px] text-[#1B1F23] placeholder:text-[#8A93A0] outline-none transition-colors duration-300 font-sans";

  return (
    <div className="min-h-screen bg-[#F3F1EC]">
      {/* Fonts + shared utility styles */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap");

        .font-display {
          font-family: "Oswald", sans-serif;
        }
        .font-body {
          font-family: "Inter", sans-serif;
        }
        .font-mono {
          font-family: "IBM Plex Mono", monospace;
        }
        .blueprint-grid {
          background-image: linear-gradient(
              rgba(143, 169, 189, 0.16) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(143, 169, 189, 0.16) 1px, transparent 1px);
          background-size: 42px 42px;
        }
        .dim-line {
          position: relative;
        }
        .dim-line::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: repeating-linear-gradient(
            to right,
            #b8bcc2 0,
            #b8bcc2 6px,
            transparent 6px,
            transparent 12px
          );
          z-index: 0;
        }
      `}</style>

      {/* ============ HERO ============ */}
      <div className="relative h-[62vh] sm:h-[68vh] md:h-[74vh] overflow-hidden bg-[#171B1E]">
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/contact/contact-us-banner.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#171B1E]/95 via-[#171B1E]/80 to-[#171B1E]" />
        <div className="absolute inset-0 blueprint-grid" />

        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[#E8A33D] text-xs sm:text-sm tracking-[0.3em] mb-5"
          >
            SUPREME INFRASTRUCTURE&nbsp;&nbsp;/&nbsp;&nbsp;CONTACT SHEET
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-display font-semibold uppercase text-white leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight max-w-4xl"
          >
            Let's build the
            <br />
            <span className="text-[#E8A33D]">next thing</span> together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="font-body text-[#C7CCD2] text-base sm:text-lg mt-6 max-w-xl"
          >
            Whether it's a project brief, a site query, or a general
            question — our team responds within one working day.
          </motion.p>
        </div>

        {/* corner crosshairs on the hero itself */}
        <div className="absolute inset-6 sm:inset-10 pointer-events-none hidden sm:block">
          <CornerMarks color="rgba(232,163,61,0.55)" />
        </div>
      </div>

      {/* ============ QUICK-SPEC STRIP ============ */}
      <div className="bg-[#1B1F23] border-t border-[#2D343B]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#2D343B]">
            {[
              {
                Icon: FaMapMarkerAlt,
                label: "SITE OFFICE",
                value: "CBD Belapur, Navi Mumbai",
              },
              {
                Icon: FaPhone,
                label: "DIRECT LINE",
                value: "+91 85912 69664",
              },
              {
                Icon: FaEnvelope,
                label: "EMAIL",
                value: "contact@supremeinfrastructure.in",
              },
            ].map(({ Icon, label, value }, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-5 sm:py-7 px-1 sm:px-8"
              >
                <Icon className="text-[#E8A33D] text-lg shrink-0" />
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-[#7C8591]">
                    {label}
                  </p>
                  <p className="font-body text-sm text-white mt-0.5">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ MAIN CONTENT ============ */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* ---- Contact Info Spec Sheet ---- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative bg-white p-8 sm:p-10"
          >
            <CornerMarks color="#1B1F23" />

            <p className="font-mono text-[11px] tracking-[0.25em] text-[#B4791E] mb-2">
              SHEET A — REACH US
            </p>
            <h2 className="font-display font-semibold uppercase text-3xl text-[#1B1F23] mb-8">
              Contact Details
            </h2>

            <div className="space-y-7">
              {[
                {
                  Icon: FaMapMarkerAlt,
                  label: "A. ADDRESS",
                  value: (
                    <>
                      Mayuresh Planet, 603, Supreme Infrastructure Company,
                      Plot No. 42–43,
                      <br />
                      Opp. Navi Mumbai Civil &amp; Criminal Court,
                      <br />
                      Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614
                    </>
                  ),
                },
                {
                  Icon: FaPhone,
                  label: "B. PHONE",
                  value: <>+91 8591269664 &nbsp;/&nbsp; 022-40110378</>,
                },
                {
                  Icon: FaEnvelope,
                  label: "C. EMAIL",
                  value: <>contact@supremeinfrastructure.in</>,
                },
              ].map(({ Icon, label, value }, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 flex items-center justify-center border-2 border-[#1B1F23] text-[#1B1F23]">
                    <Icon />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-[#8A93A0] mb-1">
                      {label}
                    </p>
                    <p className="font-body text-[#33383D] leading-relaxed text-[15px]">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-dashed border-[#D8D5CC]">
              <p className="font-mono text-[10px] tracking-[0.2em] text-[#8A93A0] mb-4">
                D. FOLLOW THE PROJECT
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: FaFacebookF, label: "Facebook" },
                  { Icon: FaTwitter, label: "Twitter" },
                  { Icon: FaInstagram, label: "Instagram" },
                  { Icon: FaLinkedinIn, label: "LinkedIn" },
                ].map(({ Icon, label }, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    aria-label={label}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 flex items-center justify-center border-2 border-[#1B1F23] text-[#1B1F23] hover:bg-[#E8A33D] hover:border-[#E8A33D] hover:text-white transition-colors duration-250"
                  >
                    <Icon size={15} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ---- Work Order / Form ---- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 relative bg-[#F8F6F1] border-2 border-[#1B1F23] p-8 sm:p-10"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="font-mono text-[11px] tracking-[0.25em] text-[#B4791E] mb-2">
                  SHEET B — YOUR MESSAGE
                </p>
                <h2 className="font-display font-semibold uppercase text-3xl text-[#1B1F23]">
                  Send a Request
                </h2>
              </div>
              <span className="hidden sm:block font-mono text-[10px] tracking-[0.2em] text-[#8A93A0] border border-[#D8D5CC] px-3 py-1.5">
                FORM 01 / REV A
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
                <div>
                  <label className="font-mono text-[10px] tracking-[0.2em] text-[#8A93A0]">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Jane Kulkarni"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className={`${inputBase} ${
                      errors.fullName
                        ? "border-red-500"
                        : "border-[#C7C2B5] focus:border-[#E8A33D]"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 font-mono text-[11px] mt-1.5">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="font-mono text-[10px] tracking-[0.2em] text-[#8A93A0]">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`${inputBase} ${
                      errors.email
                        ? "border-red-500"
                        : "border-[#C7C2B5] focus:border-[#E8A33D]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 font-mono text-[11px] mt-1.5">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] tracking-[0.2em] text-[#8A93A0]">
                  CONTACT NUMBER
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="+91 98765 43210"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className={`${inputBase} ${
                    errors.contactNumber
                      ? "border-red-500"
                      : "border-[#C7C2B5] focus:border-[#E8A33D]"
                  }`}
                />
                {errors.contactNumber && (
                  <p className="text-red-500 font-mono text-[11px] mt-1.5">
                    {errors.contactNumber}
                  </p>
                )}
              </div>

              <div>
                <label className="font-mono text-[10px] tracking-[0.2em] text-[#8A93A0]">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project, timeline, or question…"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`${inputBase} resize-none ${
                    errors.message
                      ? "border-red-500"
                      : "border-[#C7C2B5] focus:border-[#E8A33D]"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 font-mono text-[11px] mt-1.5">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="min-h-[20px]">{statusMessage()}</div>

              <motion.button
                type="submit"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitStatus.loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#1B1F23] text-white font-display uppercase tracking-wide text-sm py-4 px-10 hover:bg-[#E8A33D] transition-colors duration-300 disabled:opacity-60"
              >
                {submitStatus.loading ? (
                  <>
                    <span className="animate-spin">⟳</span> Sending
                  </>
                ) : (
                  <>
                    Submit Request <FaPaperPlane className="h-3.5 w-3.5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* ============ SITE PLAN / MAP ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-16 md:mt-24"
        >
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] text-[#B4791E] mb-2">
                SHEET C — LOCATION
              </p>
              <h2 className="font-display font-semibold uppercase text-3xl md:text-4xl text-[#1B1F23]">
                Site Plan
              </h2>
            </div>
            <p className="font-body text-[#5B6470] max-w-sm text-sm">
              CBD Belapur, Navi Mumbai — opposite the Civil &amp; Criminal
              Court. Street parking available on-site.
            </p>
          </div>

          <div className="relative border-2 border-[#1B1F23] p-2 bg-white">
            <CornerMarks color="#E8A33D" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.1054919148572!2d73.03228064559504!3d19.006737810288765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c146766a3db7%3A0x762c073d563eb77a!2sSupreme%20Infrastructure%20Company!5e1!3m2!1sen!2sin!4v1734178610573!5m2!1sen!2sin"
              width="100%"
              height="440"
              style={{ border: 0, filter: "grayscale(0.15) contrast(1.05)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* ============ FOOTER DIVIDER — dimension line ============ */}
      <div className="bg-[#1B1F23] py-10">
        <div className="container mx-auto px-6 flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#7C8591]">
            SUPREME INFRASTRUCTURE CO.
          </span>
          <div className="flex-1 dim-line h-px" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#7C8591]">
            EST. NAVI MUMBAI
          </span>
        </div>
      </div>
    </div>
  );
}