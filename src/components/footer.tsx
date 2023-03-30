import * as React from "react"
import { Link, Script } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
    return (
        <footer className="global-footer">
            <Script src="https://js.hs-scripts.com/8635875.js" async defer id="hs-script-loader" />
            <div className="global-footer-wrapper">
                <div className="global-footer-left">
                    <Link className="global-footer-logo-link" to="/">
                        <StaticImage
                            src="../images/estuary-icon.png"
                            alt="estuary logo"
                            width={27}
                            height={35}
                            style={{
                                margin: "3px 7px 34px 0px",
                            }}
                            layout="fixed"
                            placeholder="none"
                        />
                        <h1 className="global-footer-title">Estuary</h1>
                    </Link>
                    <p className="global-footer-subtext">
                        Managed streaming data pipelines, streaming SQL
                        transformations and turnkey connectivity to clouds,
                        databases, and apps.
                    </p>
                    <div>
                        <p className="global-footer-subtext-title">
                            Don't miss a thing
                        </p>
                        <p className="global-footer-subtext">
                            Subscribe now to get the latest news and updates.
                        </p>
                    </div>
                    <div className="global-footer-subscribe">
                        <form id="newsletter-signup">
                            <input
                                className="global-footer-input-email"
                                placeholder="Email"
                                type="email"
                            ></input>
                            <button
                                type="submit"
                                className="global-footer-input-button-submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <div className="global-footer-right">
                    <div className="global-footer-right-link-wrapper">
                        <p className="global-footer-subtext-title">
                            Quick Links
                        </p>
                        <Link to="/blog" className="global-footer-right-link">
                            Blog
                        </Link>
                        <a
                            target="_blank"
                            href="https://github.com/estuary/flow"
                            className="global-footer-right-link"
                        >
                            Github
                        </a>
                        <Link
                            to="/about/#contact-us"
                            className="global-footer-right-link"
                        >
                            Contact
                        </Link>
                        <a
                            target="_blank"
                            href="https://docs.estuary.dev/"
                            className="global-footer-right-link"
                        >
                            Docs
                        </a>
                    </div>
                    <div className="global-footer-right-link-wrapper">
                        <p className="global-footer-subtext-title">Services</p>
                        <Link
                            to="/product"
                            className="global-footer-right-link"
                        >
                            Product
                        </Link>
                        <Link
                            to="/about/#careers"
                            className="global-footer-right-link"
                        >
                            Careers
                        </Link>
                        <a className="global-footer-right-link">Privacy</a>
                        <a className="global-footer-right-link">Terms</a>
                    </div>
                </div>
            </div>

            <div className="global-footer-bottom">
                <div className="global-footer-divider"></div>
                <div className="global-footer-bottom-wrapper">
                    <div className="global-footer-bottom-copyright">
                        <p className="global-footer-bottom-copyright-text">
                            © {new Date().getFullYear()} All Rights Reserved
                            -&nbsp;
                            {` `}
                        </p>

                        <a
                            className="global-footer-copyright-link"
                            href="https://www.estuary.dev/"
                        >
                            estuary.dev
                        </a>
                    </div>

                    <div className="global-footer-bottom-social">
                        <a
                            target="_blank"
                            href="https://estuary-dev.slack.com/join/shared_invite/zt-86nal6yr-VPbv~YfZE9Q~6Zl~gmZdFQ#/shared-invite/email"
                        >
                            <StaticImage
                                src="../images/slack-outline.svg"
                                alt="slack logo"
                                width={24}
                                height={24}
                                style={{
                                    margin: "0 15px",
                                }}
                                layout="fixed"
                                placeholder="none"
                            />
                        </a>
                        <a
                            target="_blank"
                            href="https://github.com/estuary/flow"
                        >
                            <StaticImage
                                src="../images/github-outline.svg"
                                alt="github logo"
                                width={24}
                                height={24}
                                style={{
                                    margin: "0 15px",
                                }}
                                layout="fixed"
                                placeholder="none"
                            />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/company/65266256/"
                        >
                            <StaticImage
                                src="../images/linkedin-outline.svg"
                                alt="linkedin logo"
                                width={24}
                                height={24}
                                style={{
                                    margin: "0 15px",
                                }}
                                layout="fixed"
                                placeholder="none"
                            />
                        </a>
                        <a
                            target="_blank"
                            href="https://twitter.com/EstuaryDev"
                        >
                            <StaticImage
                                src="../images/twitter-outline.svg"
                                alt="twitter logo"
                                width={24}
                                height={24}
                                style={{
                                    margin: "0 15px",
                                }}
                                layout="fixed"
                                placeholder="none"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
