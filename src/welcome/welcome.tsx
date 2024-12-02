import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import saveAs from "file-saver";
// import imageCompression from "browser-image-compression";
import { ADDRESS_MAP, LOGO_BASE_64_URL_MAP, WEBSITE_MAP } from "./constants";
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [signature, setSignature] = useState<string>("");
  // const [photoPreview, setPhotoPreview] = useState<string | null>(null);
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
              <tr style="height: 30px; vertical-align: top; text-align: left">
                <td>
                  <a
                    href="mailto:${email}"
                    style="font-size: 10px; text-decoration: none; color: #484b55; display: block"
                  >
                    ${email}
                  </a>
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
                              border-radius: 50%;
                              border: 1px solid #7e8087;
                              text-decoration: none;
                              display: inline-block;
                              width: 20px;
                              height: 20px;
                            "
                          >
                            <img
                              src="https://famesters.github.io/signature/static/telegram@2x.png"
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
                              border-radius: 50%;
                              border: 1px solid #7e8087;
                              text-decoration: none;
                              display: inline-block;
                              width: 20px;
                              height: 20px;
                            "
                            >
                              <img
                                src="https://famesters.github.io/signature/static/linkedIn@2x.png"
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
                            href="WhatsApp"
                            target="_blank"
                            style="
                              padding: 1px;
                              border-radius: 50%;
                              border: 1px solid #7e8087;
                              text-decoration: none;
                              display: inline-block;
                              width: 20px;
                              height: 20px;
                            "
                            >
                              <img
                                src="https://famesters.github.io/signature/static/whatsapp@2x.png"
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
                    width="72px"
                    height="31px"
                    src="${LOGO_BASE_64_URL_MAP[project]}"
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

  // const handlePhotoChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     try {
  //       const options = { maxSizeMB: 1, maxWidthOrHeight: 51, useWebWorker: true };
  //       const compressedFile = await imageCompression(file, options);

  //       const reader = new FileReader();
  //       reader.onload = (e) => setPhotoPreview(e.target?.result as string);
  //       reader.readAsDataURL(compressedFile);
  //     } catch (error) {
  //       console.error("Ошибка сжатия изображения:", error);
  //     }
  //   }
  // };

  const downloadSignature = () => {
    const blob = new Blob([signature], { type: "text/html;charset=utf-8" });
    saveAs(blob, "email_signature.html");
  };

  const resetForm = () => {
    reset();
    // setPhotoPreview(null);
    setSignature("");
  };

  return (
    <div className="App p-4 bg-gray-100">
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

        {/* <div className="flex gap-2">
          <label>Photo:</label>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
        </div> */}

        {/* {photoPreview && (
          <div>
            <img src={photoPreview} alt="Preview" width="51" style={{ borderRadius: "100%", height: "51px" }} />
          </div>
        )} */}
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
          <div dangerouslySetInnerHTML={{ __html: signature }} className="bg-white p-2" />
          <button onClick={downloadSignature} className="w-32 bg-green-600 text-white cursor-pointer p-2 mt-4">
            Скачать файл
          </button>
        </div>
      )}
    </div>
  );
};
