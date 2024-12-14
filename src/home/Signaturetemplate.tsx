import { ADDRESS_MAP, LOGO_MAP, WEBSITE_MAP } from "./constants";
import { ProjectType } from "./types";

interface SignatureTemplateProps {
  avatarLink?: string;
  name: string;
  surname: string;
  jobTitle: string;
  email: string;
  phone: string;
  telegram?: string;
  linkedin?: string;
  whatsapp?: string;
  project: ProjectType;
}

export function getSignatureTemplate(props: SignatureTemplateProps) {
  const { avatarLink, name, surname, jobTitle, email, phone, telegram, linkedin, whatsapp, project } = props;
  const BASE_PATH = import.meta.env.VITE_BASE_PATH;

  return `
    <table style="width: 100%; border-spacing: 0; font-family: Arial, Helvetica, sans-serif">
        <tr>
          ${
            avatarLink
              ? `
                <td style="padding: 10px; width: 5%; vertical-align: top">
                  <img
                    src="${avatarLink}"
                    alt="${name} ${surname}"
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
                    ${name} ${surname}
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
                    href="tel:${phone}"
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
                            href="${telegram}"
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
                            href="${linkedin}"
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
                            href="${whatsapp}"
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
                 <a
                    href="${WEBSITE_MAP[project]}"
                    target="_blank"
                  >
                    <img
                      style="padding-top: 10px"
                      width="auto"
                      height="31px"
                      src="${BASE_PATH}/${LOGO_MAP[project]}"
                      alt="${project}"
                    />
                  </a>
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
                    href="${WEBSITE_MAP[project]}"
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
}
