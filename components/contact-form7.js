import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContactForm7 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="contact-form7-contact1 thq-section-padding">
        <div className="contact-form7-max-width thq-section-max-width thq-flex-row">
          <div className="contact-form7-section-title thq-flex-column">
            <span className="thq-body-small">
              {props.content2 ?? (
                <Fragment>
                  <span className="contact-form7-text21">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Cg9m7w'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="contact-form7-content1">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact-form7-text26">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_2DED1W'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small contact-form7-text12">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact-form7-text22">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_br6cNS'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="contact-form7-content2">
              <div className="contact-form7-row1">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="thq-body-small">
                  {props.email ?? (
                    <Fragment>
                      <span className="contact-form7-text23">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_AS1kEl'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="contact-form7-row2">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                </svg>
                <span className="thq-body-small">
                  {props.phone ?? (
                    <Fragment>
                      <span className="contact-form7-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_h4Jj6q'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="contact-form7-row3">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <span className="thq-body-small">
                  {props.address ?? (
                    <Fragment>
                      <span className="contact-form7-text25">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_CWXf40'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <form className="contact-form7-form thq-flex-column">
            <div className="contact-form7-container1">
              <div className="contact-form7-input1">
                <label
                  htmlFor="contact-form-7-first-name"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_0DPApH'),
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
              <div className="contact-form7-input2">
                <label
                  htmlFor="contact-form-7-last-name"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_DZgQ1K'),
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
            <div className="contact-form7-container2">
              <div className="contact-form7-input3">
                <label
                  htmlFor="contact-form-7-email"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_vmnCxh'),
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
              <div className="contact-form7-input4">
                <label
                  htmlFor="contact-form-7-phone"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_3sZtnm'),
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
            <div className="contact-form7-container3">
              <div className="contact-form7-input5">
                <label
                  htmlFor="contact-form-7-options"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_bb5xgg'),
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
                        __html: translate.raw('text_LNudn3'),
                      }}
                    ></span>
                  </option>
                  <option value="Option 1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_NCIRzz'),
                      }}
                    ></span>
                  </option>
                  <option value="Option 1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Zb4m-y'),
                      }}
                    ></span>
                  </option>
                  <option value="Option 2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_f97Wzw'),
                      }}
                    ></span>
                  </option>
                  <option value="Option 2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_fJwiYP'),
                      }}
                    ></span>
                  </option>
                  <option value="Option 2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_7hvN9i'),
                      }}
                    ></span>
                  </option>
                  <option value="Option 3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_todB-1'),
                      }}
                    ></span>
                  </option>
                  <option value="Option 3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_7Fahrm'),
                      }}
                    ></span>
                  </option>
                  <option value="Option 3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_aLpnb1'),
                      }}
                    ></span>
                  </option>
                </select>
              </div>
            </div>
            <div className="contact-form7-container4">
              <div className="contact-form7-input6">
                <label
                  htmlFor="contact-form-7-message"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Vqj4Zu'),
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
            <div className="contact-form7-checkbox1">
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
                    __html: translate.raw('text_WXVzf8'),
                  }}
                ></span>
              </label>
            </div>
            <button
              type="submit"
              className="contact-form7-button thq-button-filled"
            >
              <span className="thq-body-small">
                {props.action ?? (
                  <Fragment>
                    <span className="contact-form7-text24">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_fb2Fbi'),
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
          .contact-form7-contact1 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact-form7-max-width {
            align-items: flex-start;
          }
          .contact-form7-section-title {
            gap: var(--dl-layout-space-unit);
            width: 40%;
            align-items: flex-start;
          }
          .contact-form7-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .contact-form7-content2 {
            gap: 16px;
            display: flex;
            padding: 8px 0;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form7-row1 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .contact-form7-row2 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .contact-form7-row3 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .contact-form7-form {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 60%;
          }
          .contact-form7-container1 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contact-form7-input1 {
            gap: var(--dl-layout-space-halfunit);
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form7-input2 {
            gap: var(--dl-layout-space-halfunit);
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form7-container2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contact-form7-input3 {
            gap: var(--dl-layout-space-halfunit);
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form7-input4 {
            gap: var(--dl-layout-space-halfunit);
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form7-container3 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form7-input5 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form7-container4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form7-input6 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form7-checkbox1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .contact-form7-button {
            align-self: flex-start;
          }
          .contact-form7-text20 {
            display: inline-block;
          }
          .contact-form7-text21 {
            display: inline-block;
          }
          .contact-form7-text22 {
            display: inline-block;
          }
          .contact-form7-text23 {
            display: inline-block;
          }
          .contact-form7-text24 {
            display: inline-block;
          }
          .contact-form7-text25 {
            display: inline-block;
          }
          .contact-form7-text26 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact-form7-max-width {
              align-items: flex-start;
              flex-direction: column;
            }
            .contact-form7-section-title {
              width: 100%;
            }
            .contact-form7-form {
              width: 100%;
            }
            .contact-form7-container1 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .contact-form7-input1 {
              width: 50%;
            }
            .contact-form7-input2 {
              width: 50%;
              flex-direction: column;
            }
            .contact-form7-container2 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .contact-form7-input3 {
              width: 50%;
            }
            .contact-form7-input4 {
              width: 50%;
            }
            .contact-form7-container3 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .contact-form7-input5 {
              gap: var(--dl-layout-space-halfunit);
              width: 50%;
              flex-direction: column;
            }
            .contact-form7-container4 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .contact-form7-checkbox1 {
              align-self: flex-start;
            }
          }
          @media (max-width: 479px) {
            .contact-form7-text12 {
              text-align: center;
            }
            .contact-form7-form {
              padding: var(--dl-layout-space-unit);
            }
            .contact-form7-container1 {
              align-items: stretch;
              flex-direction: column;
            }
            .contact-form7-input1 {
              width: 100%;
            }
            .contact-form7-input2 {
              width: 100%;
            }
            .contact-form7-container2 {
              align-items: stretch;
              flex-direction: column;
            }
            .contact-form7-input3 {
              width: 100%;
            }
            .contact-form7-input4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ContactForm7.defaultProps = {
  phone: undefined,
  content2: undefined,
  content1: undefined,
  email: undefined,
  action: undefined,
  address: undefined,
  heading1: undefined,
}

ContactForm7.propTypes = {
  phone: PropTypes.element,
  content2: PropTypes.element,
  content1: PropTypes.element,
  email: PropTypes.element,
  action: PropTypes.element,
  address: PropTypes.element,
  heading1: PropTypes.element,
}

export default ContactForm7
