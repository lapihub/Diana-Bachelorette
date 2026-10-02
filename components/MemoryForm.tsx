"use client";

import { useState } from "react";
import { links } from "@/content/weekend";

type State = "idle" | "sending" | "sent" | "error";

/** Sends a memory (name + text) as an email to the organisers via Web3Forms. */
export default function MemoryForm() {
  const [state, setState] = useState<State>("idle");

  if (!links.web3formsKey) {
    return <p className="label text-center text-ink-soft">Formuläret kommer snart</p>;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setState("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: links.web3formsKey,
          subject: `Nytt minne till Diana från ${data.name}`,
          from_name: "Dianas Bridal Weekend",
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="text-center">
        <p className="font-serif text-3xl italic text-ink">Tack! Ditt minne är skickat 💛</p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="label mt-6 text-ink-soft underline decoration-gold/60 underline-offset-[6px] hover:text-gold-deep"
        >
          Skriv ett till
        </button>
      </div>
    );
  }

  const field =
    "w-full border-0 border-b border-champagne bg-transparent px-0 py-3 font-serif text-xl text-ink placeholder:text-ink-soft/50 focus:border-gold focus:outline-none focus:ring-0";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Spam protection: real visitors never see or fill this */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <label className="block">
        <span className="label text-gold-deep">Ditt namn</span>
        <input name="name" required autoComplete="name" className={field} placeholder="Förnamn" />
      </label>

      <label className="block">
        <span className="label text-gold-deep">Ditt minne med Diana</span>
        <textarea
          name="message"
          required
          rows={6}
          className={`${field} resize-y leading-relaxed`}
          placeholder="Det var sommaren 2015 och …"
        />
      </label>

      <div className="text-center">
        <button
          type="submit"
          disabled={state === "sending"}
          className="label inline-flex items-center gap-3 border border-ink px-6 py-3.5 text-ink transition-colors hover:bg-ink hover:text-ivory disabled:opacity-50"
        >
          {state === "sending" ? "Skickar …" : "Skicka minnet"}
          <span aria-hidden>→</span>
        </button>
        {state === "error" && (
          <p className="mt-4 text-sm text-rose-deep">
            Något gick fel. Försök igen, eller skicka minnet privat till arrangörerna.
          </p>
        )}
      </div>
    </form>
  );
}
