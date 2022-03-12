import React from "react";
import * as emailjs from "emailjs-com";
import { Link } from 'gatsby'
import "../styles/global.scss"
import { isMobile , isIOS, isAndroid } from 'react-device-detect'
import landingLogo from '../../static/img/pulfy-landing-logo.png'
import analyticsLogo from '../../static/img/travel-analytics.png'
import notification from '../../static/img/notification2.png'

import ImageShadow from 'react-image-shadow'
import 'react-image-shadow/assets/index.css'


import * as styles from "./home.module.scss"

//Change it later
const appStoreLink = 'https://apps.apple.com/us/app/slack/id618783545'
const playStoreLink =
  'https://play.google.com/store/apps/details?id=com.Slack&hl=en&gl=US'

const appLink = isIOS ? appStoreLink : isAndroid ? playStoreLink : null

const appDownloader = () => {
  if (appLink !== null) {
    window.open(appLink)
  }
  //else show error : App download is mobile-only.
}


const options = [
  { value: 'pulfy-api', label: 'I would like to integrate my bussiness to Pulfy Api.' },
  { value: 'pulfy-notification', label: 'I would like to get instant updates to notify my customers/users.' },
  { value: 'pulfy-reports', label: 'I would like to get customized weekly/monthly/annually travel reports.' },
  { value: 'pulfy-analytics', label: 'I would like to get advanced travel analytics such as event impacts, event scores, and inferences for my business.' },
  { value: 'customized', label: 'I demand a custom solution.' }
]



export default function Terms () {








  return (
    <div className={styles.outer}>
      <div className={styles.navbar}>
         <div className={styles.logo}>
           <img
             src={landingLogo}
             style={{ width: '150px' }}
             alt=""
           />
         </div>
       </div>

       <div className={styles.wrapper}>
         <div className={styles.row2}>
         <div className={styles.featureTitle5}>Privacy Policy</div>
           <div className={styles.row1Subtitle5}>
          <div> At Pulfy, accessible from pulfy.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Pulfy and how we use it.</div>

<div>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us support@pulfy.com</div>

<div>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Pulfy. This policy is not applicable to any information collected offline or via channels other than this website.</div>

<div className={styles.privacyTitle}>Consent</div>

<div>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</div>

<div className={styles.privacyTitle}>Information we collect</div>

<div>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</div>

<div>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</div>

<div>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</div>

<div className={styles.privacyTitle}>How we use your information</div>


<div>We use the information we collect in various ways, including to:</div>

<ul>
<li>Provide, operate, and maintain our website</li>
<li>Improve, personalize, and expand our website</li>
<li>Understand and analyze how you use our website</li>
<li>Develop new products, services, features, and functionality</li>
<li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
<li>Send you emails</li>
<li>Find and prevent fraud</li>
<li>Log Files</li>
</ul>
<div>Pulfy follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is <div>for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</div>

<div className={styles.privacyTitle}>Cookies and Web Beacons</div>

<div>Like any other website, Pulfy uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</div>

<div>For more general information on cookies, please read the Cookies article on Generate Privacy Policy website.</div>

<div className={styles.privacyTitle}>Advertising Partners Privacy Policies</div>

<div>You may consult this list to find the Privacy Policy for each of the advertising partners of Pulfy.</div>

<div>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Pulfy, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</div>

<div>Note that Pulfy has no access to or control over these cookies that are used by third-party advertisers.</div>

<div className={styles.privacyTitle}>Third Party Privacy Policies</div>

<div>Pulfy's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</div>

<div>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</div>

<div className={styles.privacyTitle}>CCPA Privacy Rights (Do Not Sell My Personal Information)</div>

<div>Under the CCPA, among other rights, California consumers have the right to:</div>

<div>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</div>

<div>Request that a business delete any personal data about the consumer that a business has collected.</div>

<div>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</div>

<div>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</div>

<div className={styles.privacyTitle}>GDPR Data Protection Rights</div>

<div>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</div>

<div>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</div>

<div>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</div>

<div>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</div>

<div>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</div>

<div>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</div>

<div>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</div>

<div>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</div>

<div className={styles.privacyTitle}>Children's Information</div>

<div>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</div>

<div>Pulfy does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</div>
           </div>

</div>

         </div>
       </div>

       <div className={styles.wrapper}>
         <div className={styles.row2}>
         <div className={styles.featureTitle5}>Terms and Conditions of Use</div>
           <div className={styles.row1Subtitle5}>


<h2 className={styles.privacyTitle}>1. Terms</h2>

<p>By accessing this Website, accessible from https://www.pulfy.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>

<h2 className={styles.privacyTitle}>2. Use License</h2>

<p>Permission is granted to temporarily download one copy of the materials on Pulfy's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>

<ul>
<li>modify or copy the materials;</li>
<li>use the materials for any commercial purpose or for any public display;</li>
<li>attempt to reverse engineer any software contained on Pulfy's Website;</li>
<li>remove any copyright or other proprietary notations from the materials; or</li>
<li>transferring the materials to another person or "mirror" the materials on any other server.</li>
</ul>

<p>This will let Pulfy to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. </p>

<h2 className={styles.privacyTitle}>3. Disclaimer</h2>

<p>All the materials on Pulfy’s Website are provided "as is". Pulfy makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Pulfy does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>

<h2 className={styles.privacyTitle}>4. Limitations</h2>

<p>Pulfy or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Pulfy’s Website, even if Pulfy or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.</p>

<h2 className={styles.privacyTitle}>5. Revisions and Errata</h2>

<p>The materials appearing on Pulfy’s Website may include technical, typographical, or photographic errors. Pulfy will not promise that any of the materials in this Website are accurate, complete, or current. Pulfy may change the materials contained on its Website at any time without notice. Pulfy does not make any commitment to update the materials.</p>

<h2 className={styles.privacyTitle}>6. Links</h2>

<p>Pulfy has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Pulfy of the site. The use of any linked website is at the user’s own risk.</p>

<h2 className={styles.privacyTitle}>7. Site Terms of Use Modifications</h2>

<p>Pulfy may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>

<h2 className={styles.privacyTitle}>8. Your Privacy</h2>

<p>Please read our Privacy Policy.</p>

<h2 className={styles.privacyTitle}>9. Governing Law</h2>

<p>Any claim related to Pulfy's Website shall be governed by the laws of af without regards to its conflict of law provisions.</p>
           </div>
         </div>
      </div>




      <div className={styles.staticWrapper}>
        <Link to='/'><button className={styles.elementLink}>Home</button></Link>
        <Link to='/'>  <button onClick={appDownloader} className={styles.elementLink}>
          Download the App
        </button>
        </Link>
      <Link to='/pulfy-for-business'>  <button className={styles.elementLink}>Pulfy for Business</button></Link>

        <Link to='/privacy-and-terms'><button className={styles.elementLink}>Privacy & Terms</button></Link>
      </div>

     </div>
  )
}
