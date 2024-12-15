import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SyntaxHighlighter from "react-syntax-highlighter";
import { ProjectType } from "./types";
import { getSignatureTemplate } from "./Signaturetemplate";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LangSwitcher";

interface FormData {
  name: string;
  surname: string;
  jobTitle: string;
  email: string;
  phone: string;
  avatarLink?: string;
  telegram?: string;
  whatsapp?: string;
  linkedin?: string;
}

export const HomePage: React.FC = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [signature, setSignature] = useState<string>("");
  const [project, setProject] = useState<ProjectType>("mGlobal");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { name, surname, jobTitle, email, phone, telegram, whatsapp, linkedin, avatarLink } = data;

    const signatureHTML = getSignatureTemplate({
      name,
      surname,
      jobTitle,
      email,
      phone,
      telegram,
      whatsapp,
      linkedin,
      avatarLink,
      project,
    });

    setSignature(signatureHTML);
  };

  const resetForm = () => {
    reset();
    setSignature("");
  };

  return (
    <div className="App p-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold"> {t("Header")}</h1>
        <LanguageSwitcher />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div>
          <label>{t("Project")}: </label>
          <select value={project} onChange={(e) => setProject(e.target.value as "mGlobal" | "magnetto")}>
            <option value="mGlobal">mGlobal</option>
            <option value="magnetto">Magnetto</option>
          </select>
        </div>

        <div className="flex gap-2">
          <label>{t("Name")}:</label>
          <input {...register("name", { required: true })} placeholder={t("Enter a name")} />
        </div>

        <div className="flex gap-2">
          <label>{t("Surname")}:</label>
          <input {...register("surname", { required: true })} placeholder={t("Enter a surname")} />
        </div>

        <div className="flex gap-2">
          <label>{t("Job title")}:</label>
          <input {...register("jobTitle", { required: true })} placeholder={t("Enter a job title")} />
        </div>

        <div className="flex gap-2">
          <label>Email:</label>
          <input {...register("email", { required: true })} placeholder={t("Enter your e-mail address")} type="email" />
        </div>

        <div className="flex gap-2">
          <label>{t("Phone number")}:</label>
          <input
            {...register("phone", {
              required: true,
              validate: (value) => !value || value?.startsWith("+") || t("The phone must start with '+'"),
            })}
            placeholder={t("Enter the phone number")}
            type="tel"
          />
          {errors.phone && <span style={{ color: "red" }}>{errors.phone.message}</span>}
        </div>

        <div className="flex gap-2">
          <label>{t("Avatar link")}:</label>
          <input {...register("avatarLink")} placeholder={t("Enter avatar link")} />
        </div>

        <div className="flex gap-2">
          <label>Telegram :</label>
          <input
            {...register("telegram", {
              validate: (value) =>
                !value || value?.startsWith("https://") || t('The link should start with "https://"'),
            })}
            placeholder={t("Enter the link to your telegram account")}
          />
          {errors.telegram && <span style={{ color: "red" }}>{errors.telegram.message}</span>}
        </div>

        <div className="flex gap-2">
          <label>Whatsapp:</label>
          <input
            {...register("whatsapp", {
              validate: (value) =>
                !value || value?.startsWith("https:///") || t('The link should start with "https://"'),
            })}
            placeholder={t("Enter the link to your whatsapp account")}
          />
          {errors.whatsapp && <span style={{ color: "red" }}>{errors.whatsapp.message}</span>}
        </div>

        <div className="flex gap-2">
          <label>Linkedin:</label>
          <input
            {...register("linkedin", {
              validate: (value) =>
                !value || value?.startsWith("https://") || t('The link should start with "https://"'),
            })}
            placeholder={t("Enter the link to your linkedin account")}
          />
          {errors.linkedin && <span style={{ color: "red" }}>{errors.linkedin.message}</span>}
        </div>

        <div className="flex gap-4">
          <button type="button" className="w-fit bg-red-600 text-white cursor-pointer p-2" onClick={resetForm}>
            {t("Clear the form")}
          </button>
          <button type="submit" className="w-fit bg-green-600 text-white cursor-pointer p-2">
            {t("Generate signature")}
          </button>
        </div>
      </form>

      {signature && (
        <div>
          <h2>Generated Signature:</h2>
          <div
            dangerouslySetInnerHTML={{ __html: signature }}
            className="bg-white border border-black border-solid rounded-lg p-4"
          />
          <div className="mt-6 font-bold text-xl -mb-2 "> {t("Source code")}</div>
          <div className="max-h-60 overflow-scroll ">
            <SyntaxHighlighter language="html">{signature}</SyntaxHighlighter>
          </div>
        </div>
      )}
    </div>
  );
};
