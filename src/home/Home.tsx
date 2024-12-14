import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SyntaxHighlighter from "react-syntax-highlighter";
import { ProjectType } from "./types";
import { getSignatureTemplate } from "./Signaturetemplate";

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
      <h1 className="text-xl font-bold">Создать подпись для E-mail</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div>
          <label>Проект: </label>
          <select value={project} onChange={(e) => setProject(e.target.value as "mGlobal" | "magnetto")}>
            <option value="mGlobal">mGlobal</option>
            <option value="magnetto">Magnetto</option>
          </select>
        </div>

        <div className="flex gap-2">
          <label>Имя:</label>
          <input {...register("name", { required: true })} placeholder="Введите имя" />
        </div>

        <div className="flex gap-2">
          <label>Фамилия:</label>
          <input {...register("surname", { required: true })} placeholder="Введите имя" />
        </div>

        <div className="flex gap-2">
          <label>Должность:</label>
          <input {...register("jobTitle", { required: true })} placeholder="Введите должность" />
        </div>

        <div className="flex gap-2">
          <label>Email:</label>
          <input
            {...register("email", { required: true })}
            placeholder="Введите адрес электронной почты"
            type="email"
          />
        </div>

        <div className="flex gap-2">
          <label>Номер телефона:</label>
          <input
            {...register("phone", {
              required: true,
              validate: (value) => !value || value?.startsWith("+") || "Телефон должен начинаться на '+'",
            })}
            placeholder="Введите номер телефона"
            type="tel"
          />
          {errors.phone && <span style={{ color: "red" }}>{errors.phone.message}</span>}
        </div>

        <div className="flex gap-2">
          <label>Ссылка на аватар:</label>
          <input {...register("avatarLink")} placeholder="Введите ссылку на аватор" />
        </div>

        <div className="flex gap-2">
          <label>Telegram :</label>
          <input
            {...register("telegram", {
              validate: (value) => !value || value?.startsWith("https://") || "Ссылка должна начинаться на 'https://'",
            })}
            placeholder="Введите telegram аккаунт"
          />
          {errors.telegram && <span style={{ color: "red" }}>{errors.telegram.message}</span>}
        </div>

        <div className="flex gap-2">
          <label>Whatsapp:</label>
          <input
            {...register("whatsapp", {
              validate: (value) => !value || value?.startsWith("https:///") || "Ссылка должна начинаться на 'https://'",
            })}
            placeholder="Введите адрес"
          />
          {errors.whatsapp && <span style={{ color: "red" }}>{errors.whatsapp.message}</span>}
        </div>

        <div className="flex gap-2">
          <label>Linkedin:</label>
          <input
            {...register("linkedin", {
              validate: (value) => !value || value?.startsWith("https://") || "Ссылка должна начинаться на 'https://'",
            })}
            placeholder="Введите адрес"
          />
          {errors.linkedin && <span style={{ color: "red" }}>{errors.linkedin.message}</span>}
        </div>

        <div className="flex gap-4">
          <button type="button" className="w-fit bg-red-600 text-white cursor-pointer p-2" onClick={resetForm}>
            Очистить форму
          </button>
          <button type="submit" className="w-fit bg-green-600 text-white cursor-pointer p-2">
            Сгенерировать подпись
          </button>
        </div>
      </form>

      {signature && (
        <div>
          <h2>Generated Signature:</h2>
          <div
            dangerouslySetInnerHTML={{ __html: signature }}
            className="bg-white p-2 border border-black border-solid rounded-lg p-4"
          />
          <div className="mt-6 font-bold text-xl -mb-2 ">Исходный код:</div>
          <div className="max-h-60 overflow-scroll ">
            <SyntaxHighlighter language="html">{signature}</SyntaxHighlighter>
          </div>
        </div>
      )}
    </div>
  );
};
