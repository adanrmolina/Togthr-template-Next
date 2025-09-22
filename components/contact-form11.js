import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContactForm11 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="contact-form11-contact11 thq-section-padding">
        <div className="contact-form11-max-width thq-section-max-width">
          <div className="contact-form11-row thq-card thq-flex-row">
            <div className="contact-form11-content1">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-form11-icon1 thq-icon-small"
              >
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact-form11-contact-info1">
                <h3 className="thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_g4CEBh'),
                    }}
                  ></span>
                </h3>
                <span className="contact-form11-email thq-body-small">
                  {props.email ?? (
                    <Fragment>
                      <span className="contact-form11-text18">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_uNX1Um'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact-form11-content2">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-form11-icon3 thq-icon-small"
              >
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact-form11-contact-info2">
                <h3 className="thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_0P7rk3'),
                    }}
                  ></span>
                </h3>
                <span className="contact-form11-phone thq-body-small">
                  {props.phone ?? (
                    <Fragment>
                      <span className="contact-form11-text17">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_U-D0Pp'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact-form11-content3">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-form11-icon5 thq-icon-small"
              >
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact-form11-contact-info3">
                <h3 className="thq-heading-3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_xzkzia'),
                    }}
                  ></span>
                </h3>
                <span className="contact-form11-address thq-body-small">
                  {props.address ?? (
                    <Fragment>
                      <span className="contact-form11-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_oN1Uvj'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="contact-form11-content4">
            <form className="contact-form11-form thq-card">
              <div className="contact-form11-container">
                <div className="contact-form11-input1">
                  <label
                    htmlFor="contact-form-11-first-name"
                    className="thq-body-small"
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_TLqWZE'),
                      }}
                    ></span>
                  </label>
                  <input
                    type="text"
                    id="contact-form-11-first-name"
                    placeholder="First Name"
                    className="thq-input"
                  />
                </div>
                <div className="contact-form11-input2">
                  <label
                    htmlFor="contact-form-11-last-name"
                    className="thq-body-small"
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_T9Qflp'),
                      }}
                    ></span>
                  </label>
                  <input
                    type="text"
                    id="contact-form-11-last-name"
                    placeholder="Last Name"
                    className="thq-input"
                  />
                </div>
              </div>
              <div className="contact-form11-input3">
                <label
                  htmlFor="contact-form-11-email"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_4wcwVj'),
                    }}
                  ></span>
                </label>
                <input
                  type="text"
                  id="contact-form-11-email"
                  required="true"
                  placeholder="Email"
                  className="contact-form11-text-input3 thq-input"
                />
              </div>
              <div className="contact-form11-input4">
                <label
                  htmlFor="contact-form-11-message"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_tWtQm2'),
                    }}
                  ></span>
                </label>
                <textarea
                  id="contact-form-11-message"
                  rows="3"
                  placeholder="Enter your message"
                  className="thq-input"
                ></textarea>
              </div>
              <button type="submit" className="thq-button-filled">
                <span className="thq-body-small">
                  {props.submitAction ?? (
                    <Fragment>
                      <span className="contact-form11-text19">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_0XOVfy'),
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
      </div>
      <style jsx>
        {`
          .contact-form11-contact11 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-direction: column;
            background-color: rgba(217, 217, 217, 0.44);
          }
          .contact-form11-max-width {
            display: flex;
            flex-direction: column;
          }
          .contact-form11-row {
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-form11-content1 {
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
          }
          .contact-form11-icon1 {
            width: 32px;
            height: 32px;
          }
          .contact-form11-contact-info1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-form11-email {
            text-align: center;
          }
          .contact-form11-content2 {
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
          }
          .contact-form11-icon3 {
            width: 32px;
            height: 32px;
          }
          .contact-form11-contact-info2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-form11-phone {
            text-align: center;
          }
          .contact-form11-content3 {
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
          }
          .contact-form11-icon5 {
            width: 32px;
            height: 32px;
          }
          .contact-form11-contact-info3 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-form11-address {
            text-align: center;
          }
          .contact-form11-content4 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .contact-form11-form {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact-form11-container {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contact-form11-input1 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form11-input2 {
            gap: var(--dl-layout-space-halfunit);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form11-input3 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form11-text-input3 {
            background-color: var(--dl-color-theme-neutral-light);
          }
          .contact-form11-input4 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form11-text17 {
            display: inline-block;
          }
          .contact-form11-text18 {
            display: inline-block;
          }
          .contact-form11-text19 {
            display: inline-block;
          }
          .contact-form11-text20 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact-form11-content1 {
              width: 50%;
            }
            .contact-form11-content2 {
              width: 50%;
            }
            .contact-form11-content3 {
              width: 50%;
            }
            .contact-form11-form {
              width: 50%;
            }
          }
          @media (max-width: 767px) {
            .contact-form11-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .contact-form11-row {
              flex-direction: column;
            }
            .contact-form11-content1 {
              width: 100%;
            }
            .contact-form11-content2 {
              width: 100%;
            }
            .contact-form11-content3 {
              width: 100%;
            }
            .contact-form11-content4 {
              flex-direction: column;
            }
            .contact-form11-form {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ContactForm11.defaultProps = {
  phone: undefined,
  email: undefined,
  submitAction: undefined,
  address: undefined,
}

ContactForm11.propTypes = {
  phone: PropTypes.element,
  email: PropTypes.element,
  submitAction: PropTypes.element,
  address: PropTypes.element,
}

export default ContactForm11
