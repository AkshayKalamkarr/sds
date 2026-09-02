"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHardHat,
  FaShoppingCart,
  FaPencilRuler,
  FaUserShield,
  FaCalculator,
  FaPercent,
  FaCloudUploadAlt,
  FaPaperPlane,
} from "react-icons/fa";

/* ---------------------------------------------------------
   Shared signature element (also used on the Contact page):
   registration-mark corners, reading like an annotated
   technical drawing / site sheet.
--------------------------------------------------------- */
function CornerMarks({ color = "#E8A33D" }) {
  const mark = "absolute w-3 h-3 border-[var(--mark-color)] pointer-events-none";
  return (
    <div style={{ "--mark-color": color }}>
      <span className={`${mark} top-0 left-0 border-t-2 border-l-2`} />
      <span className={`${mark} top-0 right-0 border-t-2 border-r-2`} />
      <span className={`${mark} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${mark} bottom-0 right-0 border-b-2 border-r-2`} />
    </div>
  );
}

const CareerPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    additionalInfo: "",
  });

  const [resume, setResume] = useState(null);
  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: "Please upload your resume",
      });
      return;
    }

    setSubmitStatus({ loading: true, success: false, error: "" });

    try {
      const formDataToSend = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      formDataToSend.append("resume", resume);

      const response = await fetch("/api/emails/career", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setSubmitStatus({ loading: false, success: true, error: "" });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        additionalInfo: "",
      });
      setResume(null);

      setTimeout(() => {
        setSubmitStatus((prev) => ({ ...prev, success: false }));
      }, 3000);
    } catch (error) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: "Failed to submit application. Please try again later.",
      });
    }
  };

  const jobs = [
    { code: "ENG-01", title: "Site Engineer", department: "Engineering", icon: FaHardHat },
    { code: "PRC-02", title: "Purchase Engineer", department: "Product", icon: FaShoppingCart },
    { code: "DES-03", title: "Interior Designer", department: "Design", icon: FaPencilRuler },
    { code: "ADM-04", title: "Admin", department: "Administration", icon: FaUserShield },
    { code: "FIN-05", title: "Accountant", department: "Finance", icon: FaCalculator },
    { code: "ENG-06", title: "Billing Engineer", department: "Engineering", icon: FaPercent },
    { code: "ENG-07", title: "QA/QC Engineer", department: "Engineering", icon: FaCalculator },
  ];

  const statusMessage = () => {
    if (submitStatus.loading) {
      return (
        <p className="flex items-center gap-2 text-[#B4791E] font-mono text-xs tracking-wide">
          <span className="animate-spin">⟳</span> SUBMITTING APPLICATION…
        </p>
      );
    }
    if (submitStatus.success) {
      return (
        <p className="flex items-center gap-2 text-emerald-700 font-mono text-xs tracking-wide">
          ✓ APPLICATION RECEIVED — WE'LL BE IN TOUCH
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

  const labelCls = "font-mono text-[10px] tracking-[0.2em] text-[#8A93A0]";
  const inputBase =
    "w-full bg-transparent border-0 border-b-2 pb-3 pt-1 text-[15px] text-[#1B1F23] placeholder:text-[#8A93A0] outline-none transition-colors duration-300 font-sans";
  const selectCls = `${inputBase} appearance-none`;

  return (
    <div className="min-h-screen bg-[#F3F1EC]">
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

      {/* ============ HERO (video) ============ */}
      <div className="relative h-[52vh] sm:h-[62vh] md:h-[72vh] w-full overflow-hidden bg-[#171B1E]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.42) saturate(0.9)" }}
        >
          <source
            src="/videos/career-2.mp4"
            type="video/mp4"
            media="all and (min-width: 768px)"
          />
          <source
            src="/videos/career-2-mobile.mp4"
            type="video/mp4"
            media="all and (max-width: 767px)"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-[#171B1E]/70 via-transparent to-[#171B1E]" />
        <div className="absolute inset-0 blueprint-grid opacity-70" />

        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[#E8A33D] text-xs sm:text-sm tracking-[0.3em] mb-5"
          >
            SUPREME INFRASTRUCTURE&nbsp;&nbsp;/&nbsp;&nbsp;CAREERS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-display font-semibold uppercase text-white leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight max-w-4xl"
          >
            Build your
            <br />
            <span className="text-[#E8A33D]">career</span> with us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="font-body text-[#C7CCD2] text-base sm:text-lg mt-6 max-w-xl"
          >
            With agility, capacity, range, and ambition, Supreme's crew
            plays on some big stages — on and off the clock.
          </motion.p>
        </div>

        <div className="absolute inset-6 sm:inset-10 pointer-events-none hidden sm:block">
          <CornerMarks color="rgba(232,163,61,0.55)" />
        </div>
      </div>

      <main className="container mx-auto px-6 py-16 md:py-24">
        {/* ============ OPEN POSITIONS — ROSTER ============ */}
        <section className="mb-20 md:mb-28">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <h2 className="font-display font-semibold uppercase text-3xl md:text-4xl text-[#1B1F23]">
                Open Positions
              </h2>
            </div>
            <p className="font-body text-[#5B6470] max-w-sm text-sm">
              {jobs.length} roles currently open across engineering, design,
              and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="relative bg-white p-7 border-2 border-[#1B1F23] hover:border-[#E8A33D] transition-colors duration-300"
              >
                <CornerMarks color="#1B1F23" />
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 flex items-center justify-center border-2 border-[#1B1F23] text-[#1B1F23]">
                    <job.icon className="text-lg" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.15em] text-[#8A93A0] mt-1">
                    {job.code}
                  </span>
                </div>
                <h3 className="font-display font-semibold uppercase text-xl text-[#1B1F23] mb-1.5">
                  {job.title}
                </h3>
                <p className="font-mono text-[11px] tracking-[0.15em] text-[#B4791E]">
                  {job.department.toUpperCase()}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============ STORY PANEL + APPLICATION ============ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* ---- Framed photo plate ---- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative border-2 border-[#1B1F23] p-2 bg-white lg:sticky lg:top-10">
              <CornerMarks color="#E8A33D" />
              <div
                className="h-64 md:h-80 lg:h-[26rem] w-full bg-cover bg-center relative"
                style={{
                  backgroundImage:
                    "url('/images/contact/careerBackground-2.jpg')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#171B1E]/85 via-[#171B1E]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-[#E8A33D] mb-2">
                    ON SITE
                  </p>
                  <h2 className="font-display font-semibold uppercase text-2xl md:text-3xl text-white leading-tight">
                    Be part of our story
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ---- Application Dossier ---- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative bg-[#F8F6F1] border-2 border-[#1B1F23] p-8 sm:p-10"
          >
            <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
              <div>
                <h2 className="font-display font-semibold uppercase text-3xl text-[#1B1F23]">
                  Apply Now
                </h2>
              </div>
              <span className="hidden sm:block font-mono text-[10px] tracking-[0.2em] text-[#8A93A0] border border-[#D8D5CC] px-3 py-1.5">
                FORM 02 / REV A
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-7">
                <div>
                  <label htmlFor="firstName" className={labelCls}>
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`${inputBase} border-[#C7C2B5] focus:border-[#E8A33D]`}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelCls}>
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`${inputBase} border-[#C7C2B5] focus:border-[#E8A33D]`}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-7">
                <div>
                  <label htmlFor="email" className={labelCls}>
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputBase} border-[#C7C2B5] focus:border-[#E8A33D]`}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelCls}>
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="^\+?[1-9]\d{1,14}$"
                    className={`${inputBase} border-[#C7C2B5] focus:border-[#E8A33D]`}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-7">
                <div>
                  <label htmlFor="position" className={labelCls}>
                    POSITION APPLIED FOR
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className={`${selectCls} border-[#C7C2B5] focus:border-[#E8A33D]`}
                    required
                  >
                    <option value="">Select a position</option>
                    <option value="site-engineer">Site Engineer</option>
                    <option value="purchase-engineer">Purchase Engineer</option>
                    <option value="interior-designer">Interior Designer</option>
                    <option value="admin">Admin</option>
                    <option value="accountant">Accountant</option>
                    <option value="billing-engineer">Billing Engineer</option>
                    <option value="qa-qc-engineer">QA/QC Engineer</option>
                    <option value="civil-site-supervisor">Civil Site Supervisor</option>
                    <option value="interior-site-supervisor">Interior Site Supervisor</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className={labelCls}>
                    YEARS OF EXPERIENCE
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className={`${selectCls} border-[#C7C2B5] focus:border-[#E8A33D]`}
                    required
                  >
                    <option value="">Select years of experience</option>
                    <option value="0-2">0–2 years</option>
                    <option value="2-5">2–5 years</option>
                    <option value="5-10">5–10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="resume" className={labelCls}>
                  RESUME / CV
                </label>
                <div className="relative border-2 border-dashed border-[#C7C2B5] hover:border-[#E8A33D] transition-colors duration-300 p-6 text-center mt-2">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    required
                  />
                  <div className="flex flex-col items-center gap-2 text-[#5B6470]">
                    <FaCloudUploadAlt className="text-2xl text-[#8A93A0]" />
                    <p className="font-body text-sm">
                      {resume ? resume.name : "Drag and drop your resume here"}
                    </p>
                    <p className="font-mono text-[10px] tracking-[0.15em] text-[#B4791E]">
                      OR BROWSE FILES · PDF / DOC / DOCX
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="additionalInfo" className={labelCls}>
                  ADDITIONAL INFORMATION
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className={`${inputBase} resize-none border-[#C7C2B5] focus:border-[#E8A33D]`}
                  placeholder="Tell us why you're a great fit for this role…"
                ></textarea>
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
                    <span className="animate-spin">⟳</span> Submitting
                  </>
                ) : (
                  <>
                    Submit Application <FaPaperPlane className="h-3.5 w-3.5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </section>

        {/* ============ WHY JOIN US ============ */}
        <section className="mt-24 md:mt-32">
          <div className="mb-10">
            <h2 className="font-display font-semibold uppercase text-3xl md:text-4xl text-[#1B1F23]">
              Why Join Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                title: "Growth Opportunities",
                copy: "We nurture talent and provide clear pathways for career advancement and professional development.",
              },
              {
                title: "Innovative Environment",
                copy: "Work with modern tools and methods in a setting that encourages initiative and creative thinking.",
              },
              {
                title: "Work-Life Balance",
                copy: "We value balance and offer flexible working arrangements alongside comprehensive benefits.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="relative bg-white p-7 border-2 border-[#1B1F23]"
              >
                <CornerMarks color="#E8A33D" />
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#8A93A0]">
                  0{i + 1}
                </span>
                <h3 className="font-display font-semibold uppercase text-xl text-[#1B1F23] mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-[#5B6470] text-[15px] leading-relaxed">
                  {item.copy}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* ============ FOOTER DIVIDER ============ */}
      <div className="bg-[#1B1F23] py-10 mt-24">
        <div className="container mx-auto px-6 flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#7C8591]">
            SDS BHARAT INFRATECH PVT LTD
          </span>
          <div className="flex-1 dim-line h-px" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#7C8591]">
            WE'RE HIRING
          </span>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;