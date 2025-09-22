import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ContactForm9 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="contact-form9-contact11 thq-section-padding">
        <div className="contact-form9-max-width thq-section-max-width">
          <div className="contact-form9-section-title thq-card">
            <span className="thq-body-small">
              {props.content2 ?? (
                <Fragment>
                  <span className="contact-form9-text22">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_dLkP3J'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <div className="contact-form9-content1">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact-form9-text25">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_8c4FoC'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact-form9-text23">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Q-5rQY'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="contact-form9-content2">
            <form className="contact-form9-form thq-card">
              <div className="contact-form9-input1">
                <label htmlFor="contact-form-9-name" className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_8qmxRX'),
                    }}
                  ></span>
                </label>
                <input
                  type="text"
                  id="contact-form-9-name"
                  placeholder="Full Name"
                  className="thq-input"
                />
              </div>
              <div className="contact-form9-input2">
                <label
                  htmlFor="contact-form-9-email"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_giaFqZ'),
                    }}
                  ></span>
                </label>
                <input
                  type="text"
                  id="contact-form-9-email"
                  required="true"
                  placeholder="Email"
                  className="thq-input"
                />
              </div>
              <div className="contact-form9-container">
                <div className="contact-form9-input3">
                  <label
                    htmlFor="contact-form-9-options"
                    className="thq-body-small"
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_vG8mW_'),
                      }}
                    ></span>
                  </label>
                  <select
                    id="contact-form-9-options"
                    placeholder="Select one"
                    className="thq-select"
                  >
                    <option value="Option 1">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_gUWhyp'),
                        }}
                      ></span>
                    </option>
                    <option value="Option 1">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_k5h56I'),
                        }}
                      ></span>
                    </option>
                    <option value="Option 1">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_-knUJw'),
                        }}
                      ></span>
                    </option>
                    <option value="Option 2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ewyzpx'),
                        }}
                      ></span>
                    </option>
                    <option value="Option 3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Mzhhxp'),
                        }}
                      ></span>
                    </option>
                  </select>
                </div>
              </div>
              <div className="contact-form9-input4">
                <label
                  htmlFor="contact-form-9-message"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_cMSR6t'),
                    }}
                  ></span>
                </label>
                <textarea
                  id="contact-form-9-message"
                  rows="3"
                  placeholder="Enter your message"
                  className="thq-input"
                ></textarea>
              </div>
              <div className="contact-form9-checkbox1">
                <input
                  type="checkbox"
                  id="contact-form-9-check"
                  checked="true"
                  required="true"
                  className="thq-checkbox"
                />
                <label
                  htmlFor="contact-form-9-check"
                  className="thq-body-small"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_3Xxtyn'),
                    }}
                  ></span>
                </label>
              </div>
              <button type="submit" className="thq-button-filled">
                <span className="thq-body-small">
                  {props.action ?? (
                    <Fragment>
                      <span className="contact-form9-text24">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_PVpaB7'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </form>
            <div className="contact-form9-content3 thq-card">
              <div className="contact-form9-row1 thq-flex-row">
                <div className="contact-form9-content4">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="contact-form9-icon1 thq-icon-small"
                  >
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <div className="contact-form9-contact-info1">
                    <h3 className="thq-heading-3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_P5kVoV'),
                        }}
                      ></span>
                    </h3>
                    <span className="thq-body-small">
                      {props.email ?? (
                        <Fragment>
                          <span className="contact-form9-text27">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_My5DCL'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="contact-form9-content5">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="contact-form9-icon3 thq-icon-small"
                  >
                    <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                  </svg>
                  <div className="contact-form9-contact-info2">
                    <h3 className="thq-heading-3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_w1iclx'),
                        }}
                      ></span>
                    </h3>
                    <span className="thq-body-small">
                      {props.phone ?? (
                        <Fragment>
                          <span className="contact-form9-text26">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_sqaYi6'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="thq-flex-row contact-form9-row2">
                <div className="contact-form9-content6">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="contact-form9-icon5 thq-icon-small"
                  >
                    <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                  </svg>
                  <div className="contact-form9-contact-info3">
                    <h3 className="thq-heading-3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_KVkiRC'),
                        }}
                      ></span>
                    </h3>
                    <span className="thq-body-small">
                      {props.address ?? (
                        <Fragment>
                          <span className="contact-form9-text21">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_XHIcNZ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <img
                  alt={props.imageAlt}
                  src={props.imageSrc}
                  className="contact-form9-image thq-img-ratio-1-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-form9-contact11 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-direction: column;
          }
          .contact-form9-max-width {
            display: flex;
            flex-direction: column;
          }
          .contact-form9-section-title {
            gap: var(--dl-layout-space-unit);
            display: flex;
            flex-direction: column;
          }
          .contact-form9-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form9-content2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .contact-form9-form {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact-form9-input1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form9-input2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form9-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form9-input3 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form9-input4 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form9-checkbox1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .contact-form9-content3 {
            flex: 1;
            align-items: stretch;
          }
          .contact-form9-row1 {
            align-items: flex-start;
          }
          .contact-form9-content4 {
            flex: 1;
          }
          .contact-form9-icon1 {
            width: 32px;
            height: 32px;
          }
          .contact-form9-contact-info1 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form9-content5 {
            flex: 1;
          }
          .contact-form9-icon3 {
            width: 32px;
            height: 32px;
          }
          .contact-form9-contact-info2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form9-content6 {
            flex: 1;
          }
          .contact-form9-icon5 {
            width: 32px;
            height: 32px;
          }
          .contact-form9-contact-info3 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form9-image {
            flex: 1;
            width: 50%;
          }
          .contact-form9-text21 {
            display: inline-block;
          }
          .contact-form9-text22 {
            display: inline-block;
          }
          .contact-form9-text23 {
            display: inline-block;
          }
          .contact-form9-text24 {
            display: inline-block;
          }
          .contact-form9-text25 {
            display: inline-block;
          }
          .contact-form9-text26 {
            display: inline-block;
          }
          .contact-form9-text27 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact-form9-form {
              width: 50%;
            }
            .contact-form9-container {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .contact-form9-input3 {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
              flex-direction: column;
            }
            .contact-form9-content3 {
              width: 50%;
            }
            .contact-form9-content4 {
              width: 50%;
            }
            .contact-form9-contact-info1 {
              width: 50%;
            }
            .contact-form9-content5 {
              width: 50%;
            }
            .contact-form9-row2 {
              width: 100%;
              align-items: flex-start;
            }
          }
          @media (max-width: 767px) {
            .contact-form9-input3 {
              width: 100%;
            }
            .contact-form9-row2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .contact-form9-content2 {
              flex-direction: column;
            }
            .contact-form9-form {
              width: 100%;
            }
            .contact-form9-input3 {
              width: 100%;
            }
            .contact-form9-content3 {
              width: 100%;
            }
            .contact-form9-row1 {
              flex-direction: column;
            }
            .contact-form9-content4 {
              width: 100%;
            }
            .contact-form9-content5 {
              width: 100%;
            }
            .contact-form9-row2 {
              width: 100%;
              flex-direction: column;
            }
            .contact-form9-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ContactForm9.defaultProps = {
  address: undefined,
  content2: undefined,
  content1: undefined,
  action: undefined,
  heading1: undefined,
  phone: undefined,
  email: undefined,
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
}

ContactForm9.propTypes = {
  address: PropTypes.element,
  content2: PropTypes.element,
  content1: PropTypes.element,
  action: PropTypes.element,
  heading1: PropTypes.element,
  phone: PropTypes.element,
  email: PropTypes.element,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default ContactForm9
