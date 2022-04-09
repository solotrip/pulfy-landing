import React from 'react'
import * as emailjs from 'emailjs-com'
import { Link } from 'gatsby'
import '../styles/global.scss'
import { isMobile, isIOS, isAndroid } from 'react-device-detect'
import landingLogo from '../../static/img/pulfy-landing-logo.png'
import analyticsLogo from '../../static/img/travel-analytics.png'
import notification from '../../static/img/notification.png'

import ImageShadow from 'react-image-shadow'
import 'react-image-shadow/assets/index.css'

import * as styles from './home.module.scss'

//Change it later
const appStoreLink = 'https://www.pulfy.com/app'
const playStoreLink ='https://www.pulfy.com/app'
const appLink = isIOS ? appStoreLink : isAndroid ? playStoreLink : null

const appDownloader = () => {
  if (appLink !== null) {
    window.open(appLink)
  }
  //else show error : App download is mobile-only.
}

const options = [
  {
    value: 'pulfy-api',
    label: 'I would like to integrate my bussiness to Pulfy Api.'
  },
  {
    value: 'pulfy-notification',
    label: 'I would like to get instant updates to notify my customers/users.'
  },
  {
    value: 'pulfy-datasets',
    label: 'I would like to download single/multiple destinations dataset such as "data of destinations in Europe".'
  },
  {
    value: 'pulfy-reports',
    label:
      'I would like to get customized weekly/monthly/annually travel reports.'
  },
  {
    value: 'pulfy-analytics',
    label:
      'I would like to get advanced travel analytics such as event impacts, event scores, and inferences for my business.'
  },
  { value: 'customized', label: 'I demand a custom solution.' }
]

export default function Business () {
  const contactRef = React.useRef(null)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [subject, setSubject] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [option, setOption] = React.useState(options[0])

  function encode (data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  function sendEmail (e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_22iv8j1',
        'template_rrb4ggi',
        e.target,
        'w04icK-LZTiSvuCds'
      )
      .then(
        result => {
          console.log(result.text)
          alert(
            'Your message sent! Our team will reach you as soon as possible.',
            result.text
          )
        },
        error => {
          console.log(error.text)
          alert('Please fill the neccesary fields.')
        }
      )
  }

  const executeScroll = () =>
    contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <div className={styles.outer}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={landingLogo} style={{ width: '150px' }} alt='' />
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.row2}>
          <div className={styles.featureTitle4}>Integrate our Api</div>
          <div className={styles.row1Subtitle4}>
            Integrate our restrictions, requirements, major events,
            accommodation and flight prices data to your product.
          </div>

          <button onClick={executeScroll} className={styles.actionButton}>
            Request Access to Api
          </button>
        </div>
      </div>

      <div className={styles.featuresHolder}>
        <div className={styles.featureText}>
          <div className={styles.featureTitle}>
            Send Notifications to Your Customers.
          </div>
          <div className={styles.featureSubtitle3}>
            With our instant updates, notify your customers with current status,
            important issues etc.
          </div>
        </div>

        <div className={styles.featureImage}>
          <ImageShadow
            className={styles.calendar}
            src={notification}
            width={'80%'}
            shadowBlur={80}
            alt='a'
            key='1'
          />
        </div>
      </div>

      {!isMobile ? (
        <div className={styles.featuresHolder}>
          <div className={styles.featureImage}>
            <ImageShadow
              className={styles.calendar}
              src={analyticsLogo}
              width={'80%'}
              shadowBlur={80}
              shadowRadius={'10'}
              alt='a'
              key='1'
            />
          </div>
          <div className={styles.featureText}>
            <div className={styles.featureTitle}>
              Advanced Travel Analytics.
            </div>
            <div className={styles.featureSubtitle3}>
              Events and event scores, both global and local. Custom inferences,
              global and local impacts and customized travel reports for your
              business.
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.featuresHolder}>
          <div className={styles.featureText}>
            <div className={styles.featureTitle}>
              Advanced Travel Analytics.
            </div>
            <div className={styles.featureSubtitle3}>
              Events and event scores, both global and local. Custom inferences,
              global and local impacts and customized travel reports for your
              business.
            </div>
          </div>
          <div className={styles.featureImage}>
            <ImageShadow
              className={styles.calendar}
              src={analyticsLogo}
              width={'80%'}
              shadowBlur={80}
              alt='a'
              key='1'
            />
          </div>
        </div>
      )}

      <div className={styles.featuresHolder}>
        <div className={styles.featureText}>
          <div className={styles.featureTitle}>Pulfy Widgets.</div>
          <div className={styles.featureSubtitle3}>
            Add our recommendation widgets to your site to enrich your content.
          </div>
        </div>

        <div className={styles.featureImage}>
          <ImageShadow
            className={styles.calendar}
            src={
              'https://ik.imagekit.io/stmedia/Screen_Shot_2022-02-10_at_21.40.31_z2iy-SpdQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644518516014'
            }
            width={'50%'}
            shadowBlur={90}
            alt='a'
            key='1'
          />
        </div>
      </div>

      {!isMobile ? (
        <div className={styles.featuresHolder}>
          <div className={styles.featureImage}>
            <ImageShadow
              className={styles.calendar}
              src={'https://ik.imagekit.io/stmedia/databindings2_TGONem1ed.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648564111983'}
              width={'80%'}
              shadowBlur={80}
              shadowRadius={'10'}
              alt='a'
              key='1'
            />
          </div>
          <div className={styles.featureText}>
            <div className={styles.featureTitle}>
              Data Bindings.
            </div>
            <div className={styles.featureSubtitle3}>

              Easily merge/migrate/integrate new data to your product with Pulfy data bindings.
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.featuresHolder}>
          <div className={styles.featureText}>
            <div className={styles.featureTitle}>
              Data Bindings.
            </div>
            <div className={styles.featureSubtitle3}>
              Easily merge/migrate/integrate new data to your product with Pulfy data bindings.
            </div>
          </div>
          <div className={styles.featureImage}>
            <ImageShadow
              className={styles.calendar}
              src={'https://ik.imagekit.io/stmedia/databindings2_TGONem1ed.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648564111983'}
              width={'80%'}
              shadowBlur={80}
              alt='a'
              key='1'
            />
          </div>
        </div>
      )}


      <div className={styles.wrapper}>
        <div className={styles.row2}>
          <div className={styles.featureTitle}>Datasets.</div>
          <div className={styles.row1Subtitle}>
            We have covered 3075 unique destinations of the world, you can get single or multiple destinations data in JSON format.
          </div>
          <Link to='/sample-data'>
          <button  className={styles.actionButton}>
            See sample data
          </button>
          </Link>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.row2}>
          <div className={styles.featureTitle}>Custom Solutions</div>
          <div className={styles.row1Subtitle}>
            Not satisfied with our solutions? Talk to us to learn what we can do
            for you.
          </div>

          <button onClick={executeScroll} className={styles.actionButton}>
            Talk to us
          </button>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.row2}>
          <div className={styles.featureTitle}>Become a Partner</div>
          <div className={styles.row1Subtitle}>
            Is your business an OTA, hotel / event / flight provider or any
            travel business? We are open to partnerships.
          </div>

          <button onClick={executeScroll} className={styles.actionButton}>
            Talk to us
          </button>
        </div>
      </div>

      <div ref={contactRef} className={styles.wrapper}>
        <div className={styles.row2}>
          <div className={styles.featureTitle}>Contact us</div>

          <form
            name='contact'
            onSubmit={sendEmail}
            className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'
          >
            <select
              className={styles.formInput2}
              id='option'
              name='option'
              value={option}
              onChange={e => setOption(e.target.value)}
            >
              {options.map(op => (
                <option className={styles.formOption} value={op.value}>
                  {op.label}
                </option>
              ))}
            </select>
            <div className='relative mb-4'>
              <label
                htmlFor='name'
                className='leading-7 text-sm text-gray-400'
              ></label>
              <input
                type='text'
                id='name'
                name='name'
                className={styles.formInput}
                onChange={e => setName(e.target.value)}
                placeHolder='Name'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='email'
                className='leading-7 text-sm text-gray-400'
              ></label>
              <input
                type='email'
                id='email'
                name='email'
                className={styles.formInput}
                onChange={e => setEmail(e.target.value)}
                placeHolder='Company email'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='message'
                className='leading-7 text-sm text-gray-400'
              ></label>
              <textarea
                id='subject'
                name='subject'
                className='w-full bg-gray-800 rounded border border-gray-700 focus:border-gold focus:ring-2 focus:ring-gold h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                onChange={e => setSubject(e.target.value)}
                placeHolder='Subject (optional)'
                className={styles.formInput}
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='message'
                className='leading-7 text-sm text-gray-400'
              ></label>
              <textarea
                id='message'
                name='message'
                className='w-full bg-gray-800 rounded border border-gray-700 focus:border-gold focus:ring-2 focus:ring-gold h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                onChange={e => setMessage(e.target.value)}
                className={styles.formInputArea}
                placeHolder='Please describe how would you like to use our data or solutions. It would be better for us to introduce your company and  specify its size  (how many monthly active users you have, which countries you operate etc.) Even if it is a hobby project, please specify it to help you out.'
              />
            </div>
            <button type='submit' className={styles.actionButton}>
              Send
            </button>
          </form>
        </div>
      </div>

      <div className={styles.staticWrapper}>
        <Link to='/'>
          <button className={styles.elementLink}>Home</button>
        </Link>
        <Link to='/'>
          {' '}
          <button onClick={appDownloader} className={styles.elementLink}>
            Download the App
          </button>
        </Link>
        <Link to='/pulfy-for-business'>
          {' '}
          <button className={styles.elementLink}>Pulfy for Business</button>
        </Link>

        <Link to='/privacy-and-terms'>
          <button className={styles.elementLink}>Privacy & Terms</button>
        </Link>
      </div>
    </div>
  )
}
