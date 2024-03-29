import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "../styles/global.scss"
import { isMobile, isIOS, isAndroid } from "react-device-detect"
import landingLogo from "../../static/img/pulfy-landing-logo.png"
import { Helmet } from "react-helmet"

import img from "react-image-shadow"
import "react-image-shadow/assets/index.css"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Welcome from "../components/welcome"

import * as styles from "./home.module.scss"

//Change it later
const appStoreLink = "https://www.pulfy.com/app"
const playStoreLink = "https://www.pulfy.com/app"

const appLink = isIOS ? appStoreLink : isAndroid ? playStoreLink : null

const appDownloader = () => {
  if (appLink !== null) {
    window.open(appLink)
  }
  //else show error : App download is mobile-only.
}

let bucketlist = [
  {
    link: "https://ik.imagekit.io/7zlqc1cmihe/Europe_Popular_Destinations/tr:h-400/France_Marseille_071_Z_zcXbsw6.jpeg",
    title: "Marseille 🇫🇷",
  },
  {
    link: "https://ik.imagekit.io/7zlqc1cmihe/Europe_Popular_Destinations/tr:h-400/Poland_Warsaw_081_hszpzFXzc.jpeg",
    title: "Warsaw 🇵🇱",
  },
  {
    link: "https://ik.imagekit.io/7zlqc1cmihe/Europe_Popular_Destinations/tr:h-400/Belgium_Brussels_043_ywtsNgEVe.jpeg",
    title: "Brussels 🇧🇪",
  },
  {
    link: "https://ik.imagekit.io/7zlqc1cmihe/Europe_Popular_Destinations/tr:h-400/Britain_Oxford_061_CWq5_ZI6V.jpeg",
    title: "Oxford 🇬🇧",
  },
  {
    link: "https://ik.imagekit.io/7zlqc1cmihe/Europe_Popular_Destinations/tr:h-400/Czech_Republic_Prague_014_K3DSjNySSMU.jpeg",
    title: "Prague 🇨🇿",
  },
  {
    link: "https://ik.imagekit.io/7zlqc1cmihe/Europe_Popular_Destinations/tr:h-400/Italy_Taormina_068_0fGbxxOWH.jpeg",
    title: "Taormina 🇮🇹",
  },
  {
    link: "https://ik.imagekit.io/7zlqc1cmihe/Europe_Popular_Destinations/tr:h-400/Britain_Cambridge_067_FMIKN5uSm.jpeg",
    title: "Cambridge 🇬🇧",
  },

  {
    link: "https://ik.imagekit.io/7zlqc1cmihe/Europe_Popular_Destinations/tr:h-400/Italy_Lombardy_073_OdqaupZ6EY.jpeg",
    title: "Lombardy 🇮🇹",
  },

  {
    link: "https://ik.imagekit.io/7zlqc1cmihe/Europe_Popular_Destinations/tr:h-400/Sweden_Stockholm_035_7J-e0AYhX.jpeg",
    title: "Stockholm 🇸🇪",
  },
  {
    link: "https://ik.imagekit.io/7zlqc1cmihe/Europe_Popular_Destinations/tr:h-400/Italy_Milan_009_rcyh_cGrtRoR.jpeg",
    title: "Milan 🇮🇹",
  },
  {
    link: "https://ik.imagekit.io/7zlqc1cmihe/Europe_Popular_Destinations/tr:h-400/Portugal_Azores_078_ZN9sCXr4M.jpeg",
    title: "Azores 🇵🇹",
  },

  {
    link: "https://ik.imagekit.io/7zlqc1cmihe/Europe_Popular_Destinations/tr:h-400/Croatia_Zagreb_069_K6DbU9BV8.jpeg",
    title: "Zagreb 🇭🇷",
  },
]

export default function Home() {
  const [auth, setAuth] = useState(false)
  //CapacitorStorage.accessToken:
  useEffect(() => {
    if (localStorage.getItem("CapacitorStorage.accessToken")) {
      setAuth(true)
    }
  }, [])
  return (
    <div className={styles.outer}>
      <Helmet>
        <title>
          Pulfy - Get personalized travel recommendations, updates, restrictions
          and much more.
        </title>
        <meta
          name="description"
          // eslint-disable-next-line max-len
          content="Get travel updates and recommendations based on restrictions, requirements, events, festivals, costs, weather and much more"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.pulfy.com/logo.png" />
        <meta
          name="twitter:title"
          content="Pulfy - Get personalized travel recommendations, updates, restrictions
        and much more."
        />
        <meta name="twitter:creator" content="@pulfycom" />
        <meta name="twitter:site" content="@pulfycom" />
        <meta
          name="twitter:description"
          // eslint-disable-next-line max-len
          content="Get travel updates and recommendations based on restrictions, requirements, events, festivals, costs, weather and much more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pulfy.com" />
        <meta
          property="og:title"
          content="Pulfy - Get personalized travel recommendations, updates, restrictions
        and much more."
        />
        <meta
          property="og:description"
          content="Get travel updates and recommendations based on restrictions, requirements, events, festivals, costs, weather and much more."
        />
        <meta property="og:image" content="http://www.pulfy.com/logo.png" />
        <meta
          property="og:image:secure_url"
          content="https://www.pulfy.com/logo.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <script type="application/ld+json">
          {`
     {
       '@context': 'https://schema.org',
       '@type': 'Organization',
       name: 'Pulfy',
       legalName: 'Pulfy Technology Llc',
       url: 'http://www.pulfy.com',
       logo: 'https://www.pulfy.com/image.png',
       foundingDate: '2022',
       founders: [
     {
       '@type': 'Person',
       name: 'Fatih Tas'
     },
     {
       '@type': 'Person',
       name: 'Berk Durmus'
     }
       ],
       contactPoint: {
       '@type': 'ContactPoint',
       contactType: 'customer support',
       email: 'support@pulfy.com'
     },
       sameAs: [
       'http://instagram.com/pulfycom',
       'http://www.twitter.com/pulfycom',
       'https://www.tiktok.com/@pulfy.com'
       ]
     }
     ]}`}
        </script>
      </Helmet>
      <Welcome auth={auth} />
      <div className={styles.row1Subtitle2}>Scroll down to learn more.</div>
      <div className={styles.featuresHolder}>
        <div className={styles.featureText}>
          <div className={styles.featureTitle}>Browse.</div>
          <div className={styles.featureSubtitle}>
            Need some inspiration? Discover when and where you want to go by
            choosing what is really important for you.
          </div>
        </div>

        <div className={styles.featureImage}>
          <img
            className={styles.calendar}
            src={
              "https://ik.imagekit.io/stmedia/tags2_RlueUb_65.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1644520753861"
            }
            width={"100%"}
            shadowBlur={20}
            alt="a"
            key="1"
          />
        </div>
      </div>

      <div className={styles.featuresHolder}>
        <div className={styles.featureText}>
          <div className={styles.featureTitle}>Select Dates.</div>
          <div className={styles.featureSubtitle}>
            You can select from a specific dates or you can select options like
            'any weekend in March, June, July' or 'a whole week in February'
            etc.
          </div>
        </div>
        <div className={styles.featureImage}>
          <img
            className={styles.calendar}
            src={
              "https://ik.imagekit.io/7zlqc1cmihe/July_kJ0X3FxmQg.svg?updatedAt=1629801887574"
            }
            width={"70%"}
            shadowBlur={10}
            alt="a"
          />
        </div>
      </div>
      {!isMobile ? (
        <div className={styles.featuresHolder}>
          <div className={styles.featureImage}>
            <img
              className={styles.calendar}
              src={
                "https://ik.imagekit.io/stmedia/Screen_Shot_2022-02-10_at_21.40.31_z2iy-SpdQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644518516014"
              }
              width={"80%"}
              shadowBlur={10}
              alt="a"
            />
          </div>
          <div className={styles.featureText}>
            <div className={styles.featureTitle}>Get Recommendations.</div>
            <div className={styles.featureSubtitle}>
              Your recommendations include information about festivals, major
              events, visa requirements, test and quarantine status, country
              restrictions, hotel hostel vacation rental prices etc.{" "}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.featuresHolder}>
          <div className={styles.featureText}>
            <div className={styles.featureTitle}>Get Recommendations.</div>
            <div className={styles.featureSubtitle}>
              Your recommendations include information about festivals, major
              events, visa requirements, test and quarantine status, country
              restrictions, hotel hostel vacation rental prices etc.{" "}
            </div>
          </div>
          <div className={styles.featureImage}>
            <img
              className={styles.calendar}
              src={
                "https://ik.imagekit.io/stmedia/Screen_Shot_2022-02-10_at_21.40.31_z2iy-SpdQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644518516014"
              }
              width={"80%"}
              shadowBlur={10}
              alt="a"
            />
          </div>
        </div>
      )}
      <div className={styles.featuresHolder}>
        <div className={styles.featureText}>
          <div className={styles.featureTitle}>Your Wishlist.</div>
          <div className={styles.featureSubtitle}>
            Prioritize the destinations you want to go by adding them to your
            wishlist.
          </div>
        </div>

        <div className={styles.featureImage}>
          <div className={styles.arrowHolder}>
            <div className={styles.arrowLeft3}>
              <FaChevronLeft />
            </div>
            <div className={styles.arrowRight3}>
              <FaChevronRight />
            </div>
          </div>
          <div className={styles.slideHolder}>
            {bucketlist.map(spec => (
              <div key={`bl-${spec.link}`}>
                <img
                  src={spec.link}
                  className={styles.slideElement3}
                  shadowBlur={10}
                  alt="a"
                />
                <div className={styles.slideElementTitle2}>{spec.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {!isMobile ? (
        <div className={styles.featuresHolder}>
          <div className={styles.featureImage}>
            <img
              className={styles.calendar}
              src={
                "https://ik.imagekit.io/stmedia/Screen_Shot_2022-02-10_at_22.25.15_kshFhdM4b.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644521145299"
              }
              width={"80%"}
              shadowBlur={10}
              alt="a"
              key="1"
            />
          </div>
          <div className={styles.featureText}>
            <div className={styles.featureTitle}>Get Updates.</div>
            <div className={styles.featureSubtitle}>
              Updates, status changes, cancellations. All the things that matter
              to you.
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.featuresHolder}>
          <div className={styles.featureText}>
            <div className={styles.featureTitle}>Get Updates.</div>
            <div className={styles.featureSubtitle}>
              Updates, status changes, cancellations. All the things that matter
              to you.
            </div>
          </div>
          <div className={styles.featureImage}>
            <img
              className={styles.calendar}
              src={
                "https://ik.imagekit.io/stmedia/Screen_Shot_2022-02-10_at_22.25.15_kshFhdM4b.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644521145299"
              }
              width={"80%"}
              shadowBlur={10}
              alt="a"
              key="1"
            />
          </div>
        </div>
      )}

      <div className={styles.wrapper}>
        <div className={styles.row2}>
          <div className={styles.featureTitle}>Anywhere, anytime.</div>
          <div className={styles.row1Subtitle}>
            Access your recommendations, wishlist and notifications from
            anywhere at anytime. Download Pulfy App for best experience.
          </div>
          <img
            className={styles.featureImage2}
            src={"https://ik.imagekit.io/stmedia/3_Device_Mashup_dSOgSlDgt.png"}
            width={"100%"}
            shadowBlur={100}
            alt="a"
            key="1"
          />

          <Link to="/">
            {" "}
            <button onClick={appDownloader} className={styles.actionButton}>
              Download the App
            </button>
          </Link>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.row2}>
          <div className={styles.featureTitle}>Pulfy for Business</div>
          <div className={styles.row1Subtitle}>
            Are you looking to integrate our solutions for your business? You
            could get access to our api or demand a custom solution.
          </div>

          <Link to="/pulfy-for-business">
            <div className={styles.actionButton}>Learn More</div>
          </Link>
        </div>
      </div>

      <div className={styles.staticWrapper}>
        <Link to="/">
          <button className={styles.elementLink}>Home</button>
        </Link>
        <Link to="/">
          {" "}
          <button onClick={appDownloader} className={styles.elementLink}>
            Download the App
          </button>
        </Link>
        <Link to="/pulfy-for-business">
          {" "}
          <button className={styles.elementLink}>Pulfy for Business</button>
        </Link>
      </div>
    </div>
  )
}
