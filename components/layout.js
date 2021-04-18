import Head from "next/head"
import ProfilePic from "./profile-pic"
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"

const name = "Monica Kay"
export const siteTitle = "Monica Learns Next.js"

export const Layout = ({ children, home }) => {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Monica Learns Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header className={styles.header}>
                {home
                ? (
                    <>
                        <ProfilePic name={name} />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                )
                : (
                    <>
                        <Link href="/">
                            <a>
                                <ProfilePic name={name} />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>
                                    {name}
                                </a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>

            <main>
                {children}
            </main>

            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}

// ? This is the original Layout component.
// import styles from "./layout.module.css"

// export const Layout = ({ children }) => {
//   return <div className={styles.container}>{children}</div>
// }