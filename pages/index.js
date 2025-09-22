import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Home = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Commercial Group</title>
          <meta property="og:title" content="Commercial Group" />
        </Head>
        <section className="home-hero">
          <header className="home-header10">
            <header data-thq="thq-navbar" className="home-navbar">
              <img
                alt="image"
                src="/logo1-200h.png"
                className="home-branding"
              />
              <div data-thq="thq-burger-menu" className="home-burger-menu">
                <div className="home-hamburger">
                  <img
                    alt="image"
                    src="/hamburger.svg"
                    className="home-icon10"
                  />
                </div>
              </div>
              <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className="home-nav1"
                >
                  <div className="home-container2">
                    <img alt="image" src="/logo.svg" className="home-image1" />
                    <div data-thq="thq-close-menu" className="home-menu-close">
                      <svg viewBox="0 0 1024 1024" className="home-icon11">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <nav
                    data-thq="thq-mobile-menu-nav-links"
                    data-role="Nav"
                    className="home-nav2"
                  >
                    <span className="home-text10">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_xWmQPY'),
                        }}
                      ></span>
                    </span>
                    <span className="home-text11">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_aA0bdJ'),
                        }}
                      ></span>
                    </span>
                    <span className="home-text12">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_FbYTNJ'),
                        }}
                      ></span>
                    </span>
                    <span className="home-text13">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_hV5a29'),
                        }}
                      ></span>
                    </span>
                    <span className="home-text14">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_7DO_7P'),
                        }}
                      ></span>
                    </span>
                  </nav>
                  <div className="home-container3">
                    <button className="home-login button">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Login_05Z0Xh'),
                        }}
                      ></span>
                    </button>
                    <button className="button">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('Register_6Bdjy4'),
                        }}
                      ></span>
                    </button>
                  </div>
                </div>
                <div className="home-icon-group">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon13"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon15"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon17"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </header>
          </header>
          <video
            src="/video.mp4"
            loop
            muted
            poster="/video_moment-1500h.jpg"
            preload="auto"
            autoPlay
            playsInline
            className="home-video"
          ></video>
          <div className="home-hero-content">
            <div className="home-header-container1">
              <div className="home-header11">
                <h1 className="home-heading1">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Heading_0cqE6X'),
                    }}
                  ></span>
                </h1>
              </div>
              <p className="home-caption1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Caption_jOkXKt'),
                  }}
                ></span>
              </p>
            </div>
            <button className="button home-button">
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Qja_hn'),
                  }}
                ></span>
              </span>
            </button>
          </div>
        </section>
        <section className="home-note">
          <h2 className="home-caption2">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('Caption_tmq2mi'),
              }}
            ></span>
          </h2>
        </section>
        <section className="home-experience">
          <div className="home-images1">
            <div className="home-square1"></div>
            <img
              alt="image"
              src="/digital_twin-1400w.png"
              className="home-image2"
            />
          </div>
          <div className="home-content10">
            <div className="home-header12">
              <div className="home-header-container2">
                <div className="home-header13">
                  <h2 className="home-heading2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Heading_4RBtkf'),
                      }}
                    ></span>
                  </h2>
                </div>
                <p className="home-caption3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Caption_vuUXcg'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="home-checkmarks">
                <div className="home-check1">
                  <div className="home-mark1">
                    <svg viewBox="0 0 1024 1024" className="home-icon19">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                  <span className="home-text16">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_jdN0_S'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="home-check2">
                  <div className="home-mark2">
                    <svg viewBox="0 0 1024 1024" className="home-icon21">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                  <span className="home-text17">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_B4Xz4I'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="home-check3">
                  <div className="home-mark3">
                    <svg viewBox="0 0 1024 1024" className="home-icon23">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                  <span className="home-text18">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_msIFT1'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="home-check4">
                  <div className="home-mark4">
                    <svg viewBox="0 0 1024 1024" className="home-icon25">
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                  <span className="home-text19">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_hunbjZ'),
                      }}
                    ></span>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-testimonial1">
              <div className="home-information"></div>
            </div>
          </div>
        </section>
        <section className="home-statistics">
          <div className="home-content11">
            <div className="home-stat1">
              <h3 className="home-header14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Header_6cMvGP'),
                  }}
                ></span>
              </h3>
              <span className="home-caption4">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Caption_f3Kjy4'),
                  }}
                ></span>
              </span>
            </div>
            <div className="home-stat2">
              <h3 className="home-header15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Header_0ZtWkk'),
                  }}
                ></span>
              </h3>
              <span className="home-caption5">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Caption_v8AgBF'),
                  }}
                ></span>
              </span>
            </div>
            <div className="home-stat3">
              <h3 className="home-header16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Header_o1IrNn'),
                  }}
                ></span>
              </h3>
              <span className="home-caption6">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Caption_V8YEpW'),
                  }}
                ></span>
              </span>
            </div>
          </div>
        </section>
        <section className="home-slider">
          <div className="home-header17">
            <h2 className="home-heading3">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Heading_WcmMJ9'),
                }}
              ></span>
            </h2>
          </div>
          <div className="home-selector">
            <p className="home-caption7">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Caption_7jmznL'),
                }}
              ></span>
            </p>
          </div>
        </section>
        <section className="home-growth">
          <div className="home-content12">
            <div className="home-header18">
              <div className="home-header19">
                <h2 className="home-heading4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Heading_uvH-O6'),
                    }}
                  ></span>
                </h2>
              </div>
              <p className="home-caption8">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Caption_aX7HA2'),
                  }}
                ></span>
              </p>
            </div>
            <div className="home-testimonial2"></div>
          </div>
          <div className="home-images2">
            <div className="home-square2"></div>
            <img
              alt="image"
              src="/vr_training-1400w.png"
              className="home-image3"
            />
          </div>
        </section>
        <section className="home-faq">
          <div className="home-header20">
            <h2 className="home-heading5">
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('Heading_3W4YZy'),
                }}
              ></span>
            </h2>
          </div>
          <div className="home-content13">
            <div className="home-column1">
              <div className="home-element1">
                <h3 className="home-header21">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Header_9FHqEg'),
                    }}
                  ></span>
                </h3>
                <p className="home-content14">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Content_J5PLwA'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="home-element2">
                <h3 className="home-header22">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Header_dAAWQH'),
                    }}
                  ></span>
                </h3>
                <p className="home-content15">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Content_L784qu'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="home-element3">
                <h3 className="home-header23">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Header_5Nlw93'),
                    }}
                  ></span>
                </h3>
                <p className="home-content16">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Content_PQbm3Q'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
            <div className="home-column2">
              <div className="home-element4">
                <h3 className="home-header24">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Header_6VABpN'),
                    }}
                  ></span>
                </h3>
                <p className="home-content17">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Content_DXGh2Y'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="home-element5">
                <h3 className="home-header25">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Header_DevjWP'),
                    }}
                  ></span>
                </h3>
                <p className="home-content18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Content_v-f6oe'),
                    }}
                  ></span>
                </p>
              </div>
              <div className="home-element6">
                <h3 className="home-header26">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Header_cf-7mX'),
                    }}
                  ></span>
                </h3>
                <p className="home-content19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Content_BSUGGJ'),
                    }}
                  ></span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div>
          <div className="home-container5">
            <Script
              html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .home-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header10 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .home-branding {
            width: 120px;
            object-fit: cover;
          }
          .home-burger-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-hamburger {
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-fourunits);
            padding-right: var(--dl-layout-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: space-between;
            background-color: #003eb3;
          }
          .home-hamburger:hover {
            opacity: 0.5;
          }
          .home-icon10 {
            width: 60px;
            object-fit: cover;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            color: var(--dl-color-gray-white);
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-black);
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .home-image1 {
            height: 2rem;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon11 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .home-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text10 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text11 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text12 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text13 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-text14 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .home-container3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-layout-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login {
            margin-right: var(--dl-layout-space-twounits);
          }
          .home-icon-group {
            fill: var(--dl-color-gray-white);
            display: flex;
          }
          .home-icon13 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .home-icon15 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
            margin-right: var(--dl-layout-space-twounits);
          }
          .home-icon17 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .home-video {
            top: 0px;
            left: 0px;
            width: 100%;
            filter: opacity(0.6);
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .home-hero-content {
            gap: var(--dl-layout-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header-container1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header11 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading1 {
            color: rgb(255, 255, 255);
            font-size: 100px;
            max-width: 790px;
            font-style: normal;
            font-weight: 500;
          }
          .home-caption1 {
            color: rgb(255, 255, 255);
            width: auto;
            font-size: 24px;
            max-width: 600px;
            line-height: 36px;
          }
          .home-note {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-end;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: flex-start;
          }
          .home-caption2 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 40px;
            max-width: 800px;
            font-style: normal;
            font-weight: 400;
            line-height: 52px;
          }
          .home-experience {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-end;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
          }
          .home-images1 {
            flex: 1;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-halfunit);
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-square1 {
            left: -35px;
            width: 180px;
            bottom: -35px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            aspect-ratio: 1;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #0000ff;
          }
          .home-image2 {
            width: 575px;
            height: 416px;
            z-index: 100;
            object-fit: cover;
          }
          .home-content10 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header12 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-header-container2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading2 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-caption3 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 24px;
            max-width: 560px;
            line-height: 36px;
          }
          .home-checkmarks {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-check1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-mark1 {
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #0000f5;
          }
          .home-icon19 {
            fill: #ffffff;
            width: 12px;
            height: 12px;
          }
          .home-text16 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-check2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-mark2 {
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #0000f5;
          }
          .home-icon21 {
            fill: #ffffff;
            width: 12px;
            height: 12px;
          }
          .home-text17 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-check3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-mark3 {
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #0000f5;
          }
          .home-icon23 {
            fill: #ffffff;
            width: 12px;
            height: 12px;
          }
          .home-text18 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-check4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-mark4 {
            display: flex;
            padding: var(--dl-layout-space-halfunit);
            align-items: flex-start;
            border-radius: var(--dl-layout-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #0000f5;
          }
          .home-icon25 {
            fill: #ffffff;
            width: 12px;
            height: 12px;
          }
          .home-text19 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-testimonial1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-information {
            gap: var(--dl-layout-space-oneandhalfunits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-statistics {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
          }
          .home-content11 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            border-color: #313133;
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 1px;
            border-bottom-width: 1px;
          }
          .home-stat1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            border-right-width: 1px;
          }
          .home-header14 {
            color: rgb(255, 255, 255);
            font-size: 62px;
            font-style: italic;
            text-align: center;
            font-family: 'Playfair Display';
            font-weight: 500;
            line-height: 73px;
          }
          .home-caption4 {
            color: rgb(124, 124, 128);
            font-size: 16px;
            line-height: 24px;
          }
          .home-stat2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            border-color: #313133;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            border-right-width: 1px;
          }
          .home-header15 {
            color: rgb(255, 255, 255);
            font-size: 62px;
            font-style: italic;
            text-align: center;
            font-family: 'Playfair Display';
            font-weight: 500;
            line-height: 73px;
          }
          .home-caption5 {
            color: rgb(124, 124, 128);
            font-size: 16px;
            line-height: 24px;
          }
          .home-stat3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
          }
          .home-header16 {
            color: rgb(255, 255, 255);
            font-size: 62px;
            font-style: italic;
            text-align: center;
            font-family: 'Playfair Display';
            font-weight: 500;
            line-height: 73px;
          }
          .home-caption6 {
            color: rgb(124, 124, 128);
            font-size: 16px;
            line-height: 24px;
          }
          .home-slider {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: flex-start;
          }
          .home-header17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading3 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            max-width: 900px;
            font-style: normal;
            font-weight: 400;
          }
          .home-selector {
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-caption7 {
            color: rgb(124, 124, 128);
            width: 872px;
            font-size: 24px;
            max-width: 600px;
            line-height: 36px;
          }
          .home-growth {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: space-between;
          }
          .home-content12 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header18 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header19 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading4 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-caption8 {
            color: rgb(124, 124, 128);
            width: 100%;
            font-size: 24px;
            max-width: 560px;
            line-height: 36px;
          }
          .home-testimonial2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-images2 {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-layout-space-fourunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-square2 {
            top: 64px;
            right: -35px;
            width: 180px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            aspect-ratio: 1;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #0000ff;
          }
          .home-image3 {
            width: 640px;
            z-index: 100;
            margin-top: var(--dl-layout-space-sixunits);
            object-fit: cover;
          }
          .home-faq {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-layout-space-fiveunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-header20 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-heading5 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
          }
          .home-content13 {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-column1 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-element1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header21 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content14 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-element2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header22 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content15 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-element3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header23 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content16 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-column2 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-element4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header24 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content17 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-element5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header25 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content18 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-element6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            border-color: #313133;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-threeunits);
            justify-content: flex-start;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-header26 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
          }
          .home-content19 {
            color: rgb(124, 124, 128);
            width: 100%;
            display: flex;
            max-width: 560px;
            line-height: 24px;
          }
          .home-container5 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-hero {
              padding-left: var(--dl-layout-space-oneandhalfunits);
            }
            .home-hero-content {
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-experience {
              align-items: flex-start;
              flex-direction: column-reverse;
            }
            .home-content11 {
              padding-top: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-stat1 {
              width: 100%;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-stat2 {
              width: 100%;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .home-stat3 {
              width: 100%;
              padding-top: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-selector {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-growth {
              flex-direction: column;
            }
            .home-testimonial2 {
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-images2 {
              padding-top: 0px;
            }
            .home-square2 {
              top: -20px;
              right: -20px;
            }
            .home-image3 {
              margin-top: 0px;
            }
            .home-faq {
              padding-bottom: var(--dl-layout-space-fiveunits);
            }
            .home-content13 {
              gap: var(--dl-layout-space-oneandhalfunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-column1 {
              max-width: 100%;
            }
            .home-header21 {
              font-size: 24px;
            }
            .home-content14 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header22 {
              font-size: 24px;
            }
            .home-content15 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header23 {
              font-size: 24px;
            }
            .home-content16 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-column2 {
              max-width: 100%;
            }
            .home-header24 {
              font-size: 24px;
            }
            .home-content17 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header25 {
              font-size: 24px;
            }
            .home-content18 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header26 {
              font-size: 24px;
            }
            .home-content19 {
              font-size: 14px;
              line-height: 21px;
            }
          }
          @media (max-width: 767px) {
            .home-burger-menu {
              display: flex;
            }
            .home-heading1 {
              width: 100%;
              font-size: 24px;
            }
            .home-note {
              align-items: flex-start;
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-caption2 {
              font-size: 18px;
              max-width: 90%;
              line-height: 23px;
              margin-right: 0px;
            }
            .home-experience {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-square1 {
              left: -20px;
              width: 20%;
              bottom: -20px;
            }
            .home-image2 {
              width: 100%;
            }
            .home-content10 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-header12 {
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .home-header-container2 {
              gap: var(--dl-layout-space-unit);
            }
            .home-heading2 {
              font-size: 40px;
            }
            .home-caption3 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text18 {
              color: rgb(255, 255, 255);
              line-height: 24px;
            }
            .home-statistics {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-stat1 {
              gap: var(--dl-layout-space-unit);
            }
            .home-header14 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-caption4 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-stat2 {
              gap: var(--dl-layout-space-unit);
            }
            .home-header15 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-caption5 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-stat3 {
              gap: var(--dl-layout-space-unit);
            }
            .home-header16 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-caption6 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-slider {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-heading3 {
              font-size: 40px;
            }
            .home-caption7 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-growth {
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-content12 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-header18 {
              gap: var(--dl-layout-space-unit);
            }
            .home-heading4 {
              font-size: 40px;
            }
            .home-caption8 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-image3 {
              width: 100%;
            }
            .home-faq {
              gap: var(--dl-layout-space-threeunits);
              padding-top: var(--dl-layout-space-threeunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-header20 {
              gap: var(--dl-layout-space-unit);
              align-items: center;
            }
            .home-heading5 {
              font-size: 36px;
            }
            .home-column1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-element1 {
              gap: var(--dl-layout-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header21 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 20px;
            }
            .home-content14 {
              color: rgb(124, 124, 128);
              font-size: 14px;
              line-height: 21px;
            }
            .home-element2 {
              gap: var(--dl-layout-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header22 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-content15 {
              color: rgb(124, 124, 128);
              font-size: 14px;
              line-height: 21px;
            }
            .home-element3 {
              gap: var(--dl-layout-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header23 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 20px;
            }
            .home-content16 {
              color: rgb(124, 124, 128);
              font-size: 14px;
              line-height: 21px;
            }
            .home-column2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-element4 {
              gap: var(--dl-layout-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header24 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 20px;
            }
            .home-content17 {
              color: rgb(124, 124, 128);
              font-size: 14px;
              line-height: 21px;
            }
            .home-element5 {
              gap: var(--dl-layout-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header25 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-content18 {
              color: rgb(124, 124, 128);
              font-size: 14px;
              line-height: 21px;
            }
            .home-element6 {
              gap: var(--dl-layout-space-halfunit);
              padding-top: 0px;
              padding-right: 00px;
              padding-bottom: var(--dl-layout-space-oneandhalfunits);
              border-right-width: 0px;
            }
            .home-header26 {
              font-size: 16px;
              line-height: 20px;
            }
            .home-content19 {
              color: rgb(124, 124, 128);
              font-size: 14px;
              line-height: 21px;
            }
          }
          @media (max-width: 479px) {
            .home-branding {
              padding-top: var(--dl-layout-space-unit);
            }
            .home-hamburger {
              padding-top: var(--dl-layout-space-unit);
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .home-icon10 {
              width: 30px;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-hero-content {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-heading1 {
              width: auto;
              font-size: 24px;
            }
            .home-caption1 {
              color: rgb(255, 255, 255);
              width: 100%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-button {
              text-align: center;
            }
            .home-caption2 {
              color: rgb(124, 124, 128);
              font-size: 18px;
              font-style: normal;
              font-weight: 400;
              line-height: 23px;
            }
            .home-heading2 {
              color: rgb(255, 255, 255);
              font-size: 60px;
              font-style: normal;
              font-weight: 400;
            }
            .home-caption3 {
              color: rgb(124, 124, 128);
              font-size: 16px;
              line-height: 24px;
            }
            .home-text16 {
              color: rgb(255, 255, 255);
              line-height: 24px;
            }
            .home-text17 {
              color: rgb(255, 255, 255);
              line-height: 24px;
            }
            .home-text18 {
              color: rgb(255, 255, 255);
              line-height: 24px;
            }
            .home-text19 {
              color: rgb(255, 255, 255);
              line-height: 24px;
            }
            .home-heading3 {
              font-size: 36px;
              line-height: 42px;
            }
            .home-caption7 {
              width: 100%;
            }
            .home-heading4 {
              font-size: 36px;
            }
            .home-header20 {
              gap: 0px;
              align-items: flex-start;
              flex-direction: column;
            }
            .home-heading5 {
              font-size: 36px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
