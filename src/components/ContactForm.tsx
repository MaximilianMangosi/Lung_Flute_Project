"use client";

import { useState, type FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up real form submission (e.g. email API, Formspree, etc.)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-14 h-14 rounded-full bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center mb-4">
          <svg
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-[#0A1628] mb-2">
          Message received!
        </h3>
        <p className="text-sm text-gray-500">
          {/* TODO: replace with real confirmation copy */}
          Thank you for reaching out. We&apos;ll get back to you as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-[#0A1628] mb-1.5"
        >
          Full name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Hiroshi Tanaka"
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#0A1628] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D9488]/40 focus:border-[#0D9488] transition-colors duration-150"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-[#0A1628] mb-1.5"
        >
          Email address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#0A1628] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D9488]/40 focus:border-[#0D9488] transition-colors duration-150"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-[#0A1628] mb-1.5"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about yourself and how you'd like to collaborate..."
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#0A1628] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D9488]/40 focus:border-[#0D9488] transition-colors duration-150 resize-none"
        />
      </div>

      <button
        type="submit"
        className="bg-[#0D9488] hover:bg-[#14B8A8] text-white font-semibold py-3 rounded-lg transition-colors duration-200 text-sm mt-1"
      >
        Send message
      </button>
    </form>
  );
}
