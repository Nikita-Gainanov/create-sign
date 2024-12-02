import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SyntaxHighlighter from "react-syntax-highlighter";
import { ADDRESS_MAP, LOGO_MAP, WEBSITE_MAP } from "./constants";
import { ProjectType } from "./types";

interface FormData {
  name: string;
  jobTitle: string;
  email: string;
  phone: string;
  avatarLink?: string;
  telegram?: string;
  whatsapp?: string;
  linkedin?: string;
}

export const Welcome: React.FC = () => {
  const BASE_PATH = import.meta.env.VITE_BASE_PATH;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [signature, setSignature] = useState<string>("");
  const [project, setProject] = useState<ProjectType>("mGlobal");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { name, jobTitle, email, phone, telegram, whatsapp, linkedin, avatarLink } = data;

    const signatureHTML = `
    <table style="width: 100%; border-spacing: 0; font-family: Arial, Helvetica, sans-serif">
        <tr>
          ${
            avatarLink
              ? `
                <td style="padding: 10px; width: 5%; vertical-align: top">
                  <img
                    src="${avatarLink}"
                    alt="${name}"
                    width="51px"
                    height="51px"
                    style="border-radius: 26px; border: 2px solid #dde0e4"
                    />
                </td>`
              : ""
          }
          <td style="padding: 10px; width: 50%; vertical-align: top; border-right: 1px solid #e3e3e3">
            <table>
              <tr style="height: 50px; vertical-align: top; text-align: left">
                <td>
                  <div
                    style="
                    font-size: 18px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.43;
                    color: #2a2a34;
                    text-align: left;
                    white-space: nowrap;
                  "
                  >
                    ${name}
                  </div>
                  <div
                    style="
                    font-size: 14px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.82;
                    color: #484b55;
                    text-align: left;
                    white-space: nowrap;
                  "
                  >
                    ${jobTitle}
                  </div>
                </td>
              </tr>
              <tr style="height: 15px; vertical-align: top; text-align: left">
                <td>
                  <a
                    href="mailto:${email}"
                    style="font-size: 10px; text-decoration: none; color: #484b55; display: block"
                  >
                    ${email}
                  </a>
                </td>
              </tr>
              <tr style="height: 15px; vertical-align: top; text-align: left">
                <td>
                  <a
                    href="tel:Телефон"
                    style="font-size: 10px; text-decoration: none; color: #484b55; display: block; line-height: 1.82"
                  >
                    ${phone}
                  </a>
                </td>
              </tr>
              <tr style="height: 20px; vertical-align: top; text-align: left">
                <td>
                  <div
                    style="
                    padding: 6px 0 0;
                    line-height: 8px;
                    font-size: 10px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    color: #7e8087;
                  "
                  >
                    ${
                      telegram
                        ? `
                          <a
                            href="https://${telegram}"
                            target="_blank"
                            style="
                              padding: 1px;
                              text-decoration: none;
                              display: inline-block;
                              width: 20px;
                              height: 20px;
                            "
                          >
                            <img
                              src="${BASE_PATH}/telegram-2-fill.png"
                              alt="Telegram"
                              width="20px"
                              height="20px"
                            />
                          </a>
                          `
                        : ""
                    }
                    ${
                      linkedin
                        ? `
                          <a
                            href="https://${linkedin}"
                            target="_blank"
                            style="
                              padding: 1px;
                              text-decoration: none;
                              display: inline-block;
                              width: 20px;
                              height: 20px;
                            "
                            >
                              <img
                                src="${BASE_PATH}/linkedin-box-fill.png"
                                alt="Linked In"
                                width="20px"
                                height="20px"
                              />
                          </a>
                          `
                        : ""
                    }
                    ${
                      whatsapp
                        ? `
                          <a
                            href="https://${whatsapp}"
                            target="_blank"
                            style="
                              padding: 1px;
                              text-decoration: none;
                              display: inline-block;
                              width: 20px;
                              height: 20px;
                            "
                            >
                              <img
                                src="${BASE_PATH}/whatsapp-fill.png"
                                alt="WhatsApp"
                                width="20px"
                                height="20px"
                              />    
                          </a>
                          `
                        : ""
                    }
                  </div>
                </td>
              </tr>
            </table>
          </td>
          <td style="padding: 10px 20px; width: 45%; vertical-align: top">
            <table>
              <tr style="height: 50px; vertical-align: top; text-align: left">
                <td>
                  <img
                    style="padding-top: 10px"
                    width="auto"
                    height="31px"
                    src="${BASE_PATH}/${LOGO_MAP[project]}"
                    alt="${project}"
                  />
                </td>
              </tr>
              <tr style="height: 30px; vertical-align: top; text-align: left">
                <td>
                  <div
                    style="
                    font-size: 10px;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.43;
                    color: #484b55;
                    text-align: left;
                    white-space: nowrap;
                  "
                  >
                    ${ADDRESS_MAP[project]}
                  </div>
                </td>
              </tr>
              <tr style="height: 20px; vertical-align: top; text-align: left">
                <td>
                  <a
                    href="https://${WEBSITE_MAP[project]}"
                    target="_blank"
                    style="font-size: 10px; text-decoration: none; color: #484b55; display: block; line-height: 1.82"
                  >
                    ${WEBSITE_MAP[project]}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>`;

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
              validate: (value) => !value || value?.startsWith("t.me/") || "Ссылка должна начинаться на 't.me/'",
            })}
            placeholder="Введите telegram аккаунт"
          />
          {errors.telegram && <span style={{ color: "red" }}>{errors.telegram.message}</span>}
        </div>

        <div className="flex gap-2">
          <label>Whatsapp:</label>
          <input
            {...register("whatsapp", {
              validate: (value) => !value || value?.startsWith("wa.me/") || "Ссылка должна начинаться на 'wa.me/'",
            })}
            placeholder="Введите адрес"
          />
          {errors.whatsapp && <span style={{ color: "red" }}>{errors.whatsapp.message}</span>}
        </div>

        <div className="flex gap-2">
          <label>Linkedin:</label>
          <input
            {...register("linkedin", {
              validate: (value) =>
                !value || value?.startsWith("linkedin.com/") || "Ссылка должна начинаться на 'linkedin.com/'",
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
