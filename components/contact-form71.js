import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContactForm71 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="contact-form71-contact1 thq-section-padding">
        <div className="contact-form71-max-width thq-section-max-width thq-flex-row">
          <div className="contact-form71-section-title thq-flex-column">
            <span className="thq-body-small">
              {props.content2 ?? (
                <Fragment>
                  <span className="contact-form71-text24">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_lxRbPn'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="contact-form71-content1">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact-form71-text21">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_SFgLDy'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small contact-form71-text12">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact-form71-text22">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_7y19ck'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="contact-form71-content2">
              <div className="contact-form71-row1">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="thq-body-small">
                  {props.email ?? (
                    <Fragment>
                      <span className="contact-form71-text26">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_RUGDn6'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="contact-form71-row2">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                </svg>
                <span className="thq-body-small">
                  {props.phone ?? (
                    <Fragment>
                      <span className="contact-form71-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_TnGdiQ'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="contact-form71-row3">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <span className="thq-body-small">
                  {props.address ?? (
                    <Fragment>
                      <span className="contact-form71-text25">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_3aGPDe'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <form className="contact-form71-form thq-flex-column">
            <div className="contact-form71-container1">
              <div className="contact-form71-input1">
                <label
                  htmlFor="contact-form-7-first-name"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_MGz_kx'),
                    }}
                  ></span>
                </label>
                <input
                  type="text"
                  id="contact-form-7-first-name"
                  placeholder="First Name"
                  className="thq-input"
                />
              </div>
              <div className="contact-form71-input2">
                <label
                  htmlFor="contact-form-7-last-name"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_-TDHzB'),
                    }}
                  ></span>
                </label>
                <input
                  type="text"
                  id="contact-form-7-last-name"
                  placeholder="Last Name"
                  className="thq-input"
                />
              </div>
            </div>
            <div className="contact-form71-container2">
              <div className="contact-form71-input3">
                <label
                  htmlFor="contact-form-7-email"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_ki9hz8'),
                    }}
                  ></span>
                </label>
                <input
                  type="email"
                  id="contact-form-7-email"
                  required="true"
                  placeholder="Email"
                  className="thq-input"
                />
              </div>
              <div className="contact-form71-input4">
                <label
                  htmlFor="contact-form-7-phone"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_dakSvm'),
                    }}
                  ></span>
                </label>
                <input
                  type="tel"
                  id="contact-form-7-phone"
                  placeholder="Phone Number"
                  className="thq-input"
                />
              </div>
            </div>
            <div className="contact-form71-container3">
              <div className="contact-form71-input5">
                <label
                  htmlFor="contact-form-7-options"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_QNPAPv'),
                    }}
                  ></span>
                </label>
                <select
                  id="contact-form-7-options"
                  placeholder="Select one"
                  className="thq-select"
                >
                  <option value="Option 1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_lU3llw'),
                      }}
                    ></span>
                  </option>
                  <option value="Option 1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_YHrHMC'),
                      }}
                    ></span>
                  </option>
                  <option value="Option 1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_p-L6QG'),
                      }}
                    ></span>
                  </option>
                  <option value="Option 2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_pvMVlj'),
                      }}
                    ></span>
                  </option>
                  <option value="Option 2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ECKPWr'),
                      }}
                    ></span>
                  </option>
                  <option value="Option 2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_RgHS1f'),
                      }}
                    ></span>
                  </option>
                  <option value="Option 3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_j05Wd3'),
                      }}
                    ></span>
                  </option>
                  <option value="Option 3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_weDfLW'),
                      }}
                    ></span>
                  </option>
                  <option value="Option 3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_gYIPom'),
                      }}
                    ></span>
                  </option>
                </select>
              </div>
            </div>
            <div className="contact-form71-container4">
              <div className="contact-form71-input6">
                <label
                  htmlFor="contact-form-7-message"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text__fx-dD'),
                    }}
                  ></span>
                </label>
                <textarea
                  id="contact-form-7-message"
                  rows="3"
                  placeholder="Enter your message"
                  className="thq-input"
                ></textarea>
              </div>
            </div>
            <div className="contact-form71-checkbox1">
              <input
                type="checkbox"
                id="contact-form-7-check"
                checked="true"
                required="true"
                className="thq-checkbox"
              />
              <label htmlFor="contact-form-7-check" className="thq-body-small">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_s5aR1P'),
                  }}
                ></span>
              </label>
            </div>
            <button
              type="submit"
              className="contact-form71-button thq-button-filled"
            >
              <span className="thq-body-small">
                {props.action ?? (
                  <Fragment>
                    <span className="contact-form71-text23">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_R0QBA8'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .contact-form71-contact1 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact-form71-max-width {
            align-items: flex-start;
          }
          .contact-form71-section-title {
            gap: var(--dl-layout-space-unit);
            width: 40%;
            align-items: flex-start;
          }
          .contact-form71-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .contact-form71-content2 {
            gap: 16px;
            display: flex;
            padding: 8px 0;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form71-row1 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .contact-form71-row2 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .contact-form71-row3 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .contact-form71-form {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 60%;
          }
          .contact-form71-container1 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contact-form71-input1 {
            gap: var(--dl-layout-space-halfunit);
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form71-input2 {
            gap: var(--dl-layout-space-halfunit);
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form71-container2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contact-form71-input3 {
            gap: var(--dl-layout-space-halfunit);
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form71-input4 {
            gap: var(--dl-layout-space-halfunit);
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form71-container3 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form71-input5 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form71-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form71-input6 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form71-checkbox1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .contact-form71-button {
            align-self: flex-start;
          }
          .contact-form71-text20 {
            display: inline-block;
          }
          .contact-form71-text21 {
            display: inline-block;
          }
          .contact-form71-text22 {
            display: inline-block;
          }
          .contact-form71-text23 {
            display: inline-block;
          }
          .contact-form71-text24 {
            display: inline-block;
          }
          .contact-form71-text25 {
            display: inline-block;
          }
          .contact-form71-text26 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact-form71-max-width {
              align-items: flex-start;
              flex-direction: column;
            }
            .contact-form71-section-title {
              width: 100%;
            }
            .contact-form71-form {
              width: 100%;
            }
            .contact-form71-container1 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .contact-form71-input1 {
              width: 50%;
            }
            .contact-form71-input2 {
              width: 50%;
              flex-direction: column;
            }
            .contact-form71-container2 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .contact-form71-input3 {
              width: 50%;
            }
            .contact-form71-input4 {
              width: 50%;
            }
            .contact-form71-container3 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .contact-form71-input5 {
              gap: var(--dl-layout-space-halfunit);
              width: 50%;
              flex-direction: column;
            }
            .contact-form71-container4 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .contact-form71-checkbox1 {
              align-self: flex-start;
            }
          }
          @media (max-width: 479px) {
            .contact-form71-text12 {
              text-align: center;
            }
            .contact-form71-form {
              padding: var(--dl-layout-space-unit);
            }
            .contact-form71-container1 {
              align-items: stretch;
              flex-direction: column;
            }
            .contact-form71-input1 {
              width: 100%;
            }
            .contact-form71-input2 {
              width: 100%;
            }
            .contact-form71-container2 {
              align-items: stretch;
              flex-direction: column;
            }
            .contact-form71-input3 {
              width: 100%;
            }
            .contact-form71-input4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ContactForm71.defaultProps = {
  phone: undefined,
  heading1: undefined,
  content1: undefined,
  action: undefined,
  content2: undefined,
  address: undefined,
  email: undefined,
}

ContactForm71.propTypes = {
  phone: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action: PropTypes.element,
  content2: PropTypes.element,
  address: PropTypes.element,
  email: PropTypes.element,
}

export default ContactForm71
