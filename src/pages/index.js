import React, { useState, useEffect } from "react"
import TextLoop from "react-text-loop"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import "../styles/global.scss"
import landingLogo from "../../static/img/pulfy-logo.png"
import whiteLogo from "../../static/img/pulfy-landing-logo.png"

import bigImage from "../../static/img/grey.png"
import mountains from "../../static/img/mountains.png"
import { MdClose, MdSearch } from "react-icons/md"
import {
  Alert28Regular,
  CircleEdit24Regular,
  Heart28Regular,
  List28Regular,
} from "@fluentui/react-icons"
import clouds from "../../static/img/clouds.png"
import technologyImage from "../../static/img/technology.png"
import data from "../../static/img/data.png"

import * as styles from "./landing.module.scss"

export default function Landing() {
  const [auth, setAuth] = useState(false)
  useEffect(() => {
    if (localStorage.getItem("CapacitorStorage.accessToken")) {
      setAuth(true)
    }
  }, [])
  return (
    <div className={styles.page}>
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
      <div className={styles.navbar}>
        <img src={landingLogo} className={styles.logo}></img>
        <div className={styles.mobileLogin}>Login</div>
        <div className={styles.actions}>
          {!auth && (
            <a href="https://pulfy.com/app/login" className={styles.login}>
              Login
            </a>
          )}
          {!auth && (
            <a href="https://pulfy.com/app/signup" className={styles.login}>
              Signup
            </a>
          )}
          {auth && (
            <a href="https://pulfy.com/app/browse" className={styles.login}>
              Go to App
            </a>
          )}

          <div className={styles.login}>Download the App</div>

          <a
            className={styles.login}
            href="https://pulfy.com/pulfy-for-business"
          >
            Pulfy for Business
          </a>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.hero}>
          <div className={styles.motto}>
            <div>Find destinations</div>
            <div>based on</div>
            <div className={styles.highlighted}>
              <TextLoop>
                <span>events</span>
                <span>festivals</span>
                <span>restrictions</span>
                <span>cost of living</span>
                <span>acommodation prices</span>
                <span>safety</span>
                <span>weather</span>
                <span>activities</span>
              </TextLoop>
            </div>
          </div>
          <img
            style={{ opacity: 0.5 }}
            src={bigImage}
            className={styles.plane}
          ></img>
        </div>
        <div className={styles.lower}>
          <img src={mountains} className={styles.mountains}></img>
          <img src={clouds} className={styles.clouds}></img>
          <a href="https://pulfy.com/app/browse" className={styles.start}>
            <MdSearch className={styles.searchIcon} />
            <div className={styles.startText}>Start your search</div>
          </a>
        </div>
      </div>
      <div className={styles.headerMobile}>
        <div className={styles.headerRow}>
          <div className={styles.mottoMobile}>
            <div>Find destinations</div>
            <div>based on</div>
            <div className={styles.highlighted}>
              <TextLoop>
                <span>events</span>
                <span>festivals</span>
                <span>restrictions</span>
                <span>cost of living</span>
                <span>acommodation prices</span>
                <span>safety</span>
                <span>weather</span>
                <span>activities</span>
              </TextLoop>
            </div>
          </div>
          <div className={styles.right}>
            {" "}
            <img src={mountains} className={styles.mountainsMobile}></img>
            <img src={clouds} className={styles.cloudsMobile}></img>
          </div>
        </div>
        <button className={styles.startMobile}>
          <MdSearch className={styles.searchIcon} />
          <div className={styles.startText}>Start your search</div>
        </button>
      </div>
      <div className={styles.featured}>
        <div className={styles.content}>
          <div className={styles.title}>Featured</div>
          <div className={styles.horizontal}>
            <a
              href="https://www.pulfy.com/app/recommendations/date?filters%5B0%5D%5Bid%5D=a&filters%5B0%5D%5Bvariables%5D%5BareaSids%5D%5B0%5D=amsterdam&filters%5B0%5D%5Bvariables%5D%5BareaSids%5D%5B1%5D=santorini&show=hotel-prices&complete=true"
              className={styles.horizontalItem}
            >
              <img
                src={"https://m.pulfy.com/1080/tags/carnivaling.jpeg"}
                className={styles.horizontalImage}
              ></img>
              <div className={styles.imageTitle}>
                Carnival destinations to visit in March, April, June
              </div>
            </a>
            <a
              href="https://www.pulfy.com/app/recommendations?months[0]=1&months[1]=2&months[2]=3&months[3]=4&months[4]=5&filters[0][id]=124&complete=true"
              className={styles.horizontalItem}
            >
              <img
                src={"https://m.pulfy.com/1080/browse/bars.jpeg"}
                className={styles.horizontalImage}
              ></img>
              <div className={styles.imageTitle}>
                Destinations where bars are open right now
              </div>
            </a>
            <a
              href="https://www.pulfy.com/app/recommendations/date?filters%5B0%5D%5Bid%5D=a&filters%5B0%5D%5Bvariables%5D%5BareaSids%5D%5B0%5D=amsterdam&filters%5B0%5D%5Bvariables%5D%5BareaSids%5D%5B1%5D=santorini&show=hotel-prices&complete=true"
              className={styles.horizontalItem}
            >
              <img
                src={
                  "https://m.pulfy.com/1080/browse/9d40d0e2c0d65a70a3da3f79ff24f2d6"
                }
                className={styles.horizontalImage}
              ></img>
              <div className={styles.imageTitle}>
                Compare Hotel prices of Amsterdam and Santorini within your
                available times
              </div>
            </a>
          </div>
          <a
            href="https://pulfy.com/app/browse"
            className={styles.hwitemTitle3}
          >
            Show more
          </a>
        </div>
      </div>
      <div className={styles.featuredMobile}>
        <div className={styles.content}>
          <div className={styles.title}>Featured</div>
          <div className={styles.horizontal}>
            <a
              href="https://www.pulfy.com/app/recommendations/date?filters%5B0%5D%5Bid%5D=a&filters%5B0%5D%5Bvariables%5D%5BareaSids%5D%5B0%5D=amsterdam&filters%5B0%5D%5Bvariables%5D%5BareaSids%5D%5B1%5D=santorini&show=hotel-prices&complete=true"
              className={styles.horizontalItemMobile}
            >
              <img
                src={
                  "https://m.pulfy.com/1080/browse/9d40d0e2c0d65a70a3da3f79ff24f2d6"
                }
                className={styles.horizontalImage}
              ></img>
              <div className={styles.imageTitle}>
                Compare Hotel prices of Amsterdam and Santorini within your
                available times
              </div>
            </a>
          </div>
          <a
            href="https://pulfy.com/app/browse"
            className={styles.hwitemTitle3}
          >
            Show more
          </a>
        </div>
      </div>
      <div className={styles.howItWorks}>
        <div className={styles.content2}>
          <div className={styles.title2}>How it works</div>
          <div className={styles.innerContent}>
            <div className={styles.hwitem}>
              <div className={styles.hwitemIndex}>1</div>
              <div className={styles.hwitemTitle}>Select your dates</div>
              <div className={styles.hwitemSubtitle}>
                Select the dates you want to travel or choose one of the
                flexible week, weekend and whole month options.
              </div>
            </div>
            <div className={styles.hwitem}>
              <div className={styles.hwitemIndex}>2</div>
              <div className={styles.hwitemTitle}>Select your passports</div>
              <div className={styles.hwitemSubtitle}>
                We need your passport/passports to provide you with accurate
                visa information and to show visa free destinations for you. You
                can skip this step if you want.
              </div>
            </div>
            <div className={styles.hwitem}>
              <div className={styles.hwitemIndex}>3</div>
              <div className={styles.hwitemTitle}>Select your filters</div>
              <div className={styles.hwitemSubtitle}>
                You could add some filters to specify your search. Activities,
                Regions, Restrictions, you name it. You can select multiple
                filters.
              </div>
            </div>
            <div className={styles.hwitem}>
              <div className={styles.hwitemIndex}>4</div>
              <div className={styles.hwitemTitle}>
                Get your trip recommendations
              </div>
              <div className={styles.hwitemSubtitle}>
                Pulfy AI finds you destinations based on criteria such as
                restrictions, events, festivals, status, safety, weather, and
                activities.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.technology}>
        <div className={styles.content}>
          <div className={styles.title}>Technology</div>
          <img src={technologyImage} className={styles.technologyImage}></img>
          <div className={styles.description}>
            Pulfy AI analyzes requirements, restrictions and updates of
            thousands of destinations from hundreds of sources to gather
            up-to-date confirmed travel information.
          </div>
        </div>
      </div>

      <div className={styles.data}>
        <div className={styles.content}>
          <div className={styles.title2}>Data</div>
          <div className={styles.sided}>
            <div className={styles.dataText}>
              We deliver the most comprehensive travel data on the market.
            </div>
            <img src={data} className={styles.dataImage}></img>
          </div>

          <div className={styles.description2}>
            Our data includes events, festivals, acommodation costs,
            attractions, quarantine & vaccination requirments, visa information,
            safety status, activities, weather, cost of living and much more.
          </div>
        </div>
      </div>

      <div className={styles.techAndData}>
        <div className={styles.content}>
          <div className={styles.title}>Technology & Data</div>
          <div className={styles.techSided}>
            <div className={styles.dataText}>
              We deliver the most comprehensive travel data on the market.
            </div>
            <img src={technologyImage} className={styles.technologyImage}></img>
          </div>
          <div className={styles.description3}>
            Pulfy AI analyzes requirements, restrictions and updates of
            thousands of destinations from hundreds of sources to gather
            up-to-date confirmed travel information.
          </div>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.content2}>
          <div className={styles.title3}>Features</div>
          <div className={styles.innerContent}>
            <div className={styles.hwitem}>
              <div className={styles.hwitemTitle2}>
                Search & Get Recommendations
              </div>
              <div className={styles.description4}>
                AI Generated Trip recommendations on your available times and
                based on your filters.
              </div>
            </div>
            <div className={styles.hwitem}>
              <div className={styles.hwitemTitle2}>Wishlist</div>
              <div className={styles.description4}>
                Prioritize the destinations you want to go by adding trip
                recommendations to your wishlist.
              </div>
            </div>
            <div className={styles.hwitem}>
              <div className={styles.hwitemTitle2}>
                Track & Get Notifications
              </div>
              <div className={styles.description4}>
                If you want to get updates from specific destination or muliple
                destinations in your search, you could track them. Updates,
                status changes, cancellations. All the things that matter to
                you.
              </div>
            </div>
            <div className={styles.hwitem}>
              <div className={styles.hwitemTitle2}>Analytics</div>
              <div className={styles.description4}>
                Compare hotel, hostel, vacation rental prices, cost of living,
                temperature and restrictions of recommended destinations.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footer1}>
            <img src={whiteLogo} className={styles.logo}></img>
            <div className={styles.description4}>
              Solving complexities of travel with ❤️
            </div>
            <div className={styles.description4}>26020 Kvk, Eskisehir, TR</div>
          </div>
          <div className={styles.footer2}>
            <div className={styles.footer1}>
              <a
                href="https://www.pulfy.com/privacy-and-terms"
                className={styles.description5}
              >
                Terms of Service
              </a>
              <a
                href="https://www.pulfy.com/privacy-and-terms"
                className={styles.description5}
              >
                Privacy Policy
              </a>
              <a
                href="https://pulfy.com/pulfy-for-business"
                className={styles.description5}
              >
                Pulfy for Business
              </a>
            </div>
            <div className={styles.footer1}>
              <a href="https://pulfy.com" className={styles.description5}>
                About us
              </a>
              <a
                href="https://pulfy.com/app/login"
                className={styles.description5}
              >
                Login
              </a>
              <a
                href="https://pulfy.com/app/signup"
                className={styles.description5}
              >
                Signup
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
