"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import {
  CONTACT_TOPICS,
  createLocalizedContactSchema,
  type ContactFormValues,
} from "@/schemas/contact";
import ContactFormStatus from "./ContactFormStatus";

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const locale = useLocale() as "de" | "en";
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const schema = createLocalizedContactSchema({
    nameMin: t("errors.nameMin"),
    emailInvalid: t("errors.emailInvalid"),
    messageMin: t("errors.messageMin"),
    messageMax: t("errors.messageMax"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      topic: "therapie",
      message: "",
      locale,
      company: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitState("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale }),
      });

      if (!response.ok) {
        setSubmitState("error");
        return;
      }

      setSubmitState("success");
      reset({ ...values, name: "", email: "", phone: "", message: "" });
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          {t("nameLabel")}
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder={t("namePlaceholder")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="mt-1 block w-full rounded-lg border border-border bg-paper px-3 py-2 text-ink"
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-error">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          {t("emailLabel")}
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder={t("emailPlaceholder")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="mt-1 block w-full rounded-lg border border-border bg-paper px-3 py-2 text-ink"
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-error">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-ink">
          {t("phoneLabel")}
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder={t("phonePlaceholder")}
          className="mt-1 block w-full rounded-lg border border-border bg-paper px-3 py-2 text-ink"
          {...register("phone")}
        />
      </div>

      <div>
        <span className="block text-sm font-medium text-ink">
          {t("topicLabel")}
        </span>
        <div className="mt-2 flex flex-wrap gap-4">
          {CONTACT_TOPICS.map((topic) => (
            <label
              key={topic}
              className="flex items-center gap-2 text-sm text-ink"
            >
              <input
                type="radio"
                value={topic}
                className="h-4 w-4"
                {...register("topic")}
              />
              {t(
                topic === "therapie"
                  ? "topicTherapie"
                  : topic === "mma"
                    ? "topicMma"
                    : "topicSonstiges",
              )}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          {t("messageLabel")}
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder={t("messagePlaceholder")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-1 block w-full rounded-lg border border-border bg-paper px-3 py-2 text-ink"
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-error">
            {errors.message.message}
          </p>
        )}
      </div>

      <input type="hidden" value={locale} {...register("locale")} />

      {/* Honeypot field: hidden from sighted and screen-reader users, left empty by real visitors. */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
      >
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-11 items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-light disabled:opacity-60"
      >
        {isSubmitting ? t("submitting") : t("submit")}
      </button>

      {submitState === "success" && (
        <ContactFormStatus
          status="success"
          title={t("successTitle")}
          body={t("successBody")}
        />
      )}
      {submitState === "error" && (
        <ContactFormStatus
          status="error"
          title={t("errorTitle")}
          body={t("errorBody")}
        />
      )}
    </form>
  );
}
