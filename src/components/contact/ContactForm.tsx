"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] bg-paper p-5 text-ink shadow-glow">
      <div className="grid gap-4">
        <label className="grid gap-2 font-black uppercase">
          Name
          <input
            required
            name="name"
            className="min-h-14 rounded-2xl border border-ink/15 bg-cream px-4 font-bold outline-none focus:border-orange"
          />
        </label>
        <label className="grid gap-2 font-black uppercase">
          Phone
          <input
            required
            name="phone"
            inputMode="tel"
            className="min-h-14 rounded-2xl border border-ink/15 bg-cream px-4 font-bold outline-none focus:border-orange"
          />
        </label>
        <label className="grid gap-2 font-black uppercase">
          Message
          <textarea
            required
            name="message"
            rows={5}
            className="resize-y rounded-2xl border border-ink/15 bg-cream px-4 py-3 font-bold outline-none focus:border-orange"
          />
        </label>
      </div>
      <button type="submit" className="brand-button mt-5 w-full bg-orange text-ink shadow-glow">
        <span className="relative z-10">{sent ? "Message noted locally" : "Send Enquiry"}</span>
        <Send size={18} aria-hidden="true" className="relative z-10" />
      </button>
      <p className="mt-4 text-sm font-bold text-charcoal/60">
        Demo/local form only. For live bookings and orders, use call or WhatsApp actions.
      </p>
    </form>
  );
}
