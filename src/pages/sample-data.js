import React from 'react'

import { Link } from 'gatsby'
import '../styles/global.scss'
import { isIOS, isAndroid } from 'react-device-detect'
import landingLogo from '../../static/img/pulfy-landing-logo.png'


import * as styles from './home.module.scss'

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

var sample = { name:'London',month:'January', pulfy_id: 'london_0', wkd_id:'Q84',fb_id:'LDNgov',freebase_id:'/m/04jpl',fb_places_id:'106078429431815',geoname_id:'2643743',instagram_id:'ldn_gov',tripadvisor_id:'186338',mid:'/m/04jpl',kayak_ctid:'28501',predicthq_id:'2643743',twitter_id:'ldn_gov',website:'https://www.london.gov.uk/',wikipedia:'https://en.wikipedia.org/wiki/London',timezone:'Europe/London',
"mapbox_id": "place.8780954591631530",
           "sygic_id": "city:7042", "description_de": "Hauptstadt des Vereinigten Königreichs",
        "description_en": "capital and largest city of the United Kingdom",
        "description_es": "capital de Inglaterra y del Reino Unido",
        "description_fr": "capitale du Royaume-Uni",
        "description_it": "capitale del Regno Unito e dell’Inghilterra",
        "description_tr": "İngiltere'nin ve Birleşik Krallık'ın başkenti",
        "description_zh": "英国以及英格兰的首都",
        "name_de": "London",
        "name_en": "London",
        "name_es": "Londres",
        "name_fr": "Londres",
        "name_it": "Londra",
        "name_ru": "Лондон",
        "name_tr": "Londra",
        "name_zh": "倫敦" ,lng: -0.12525865742190945,lat: 51.49916450106749, "bbox": [-0.35167, 51.384598, 0.152641, 51.669993], walkScore: 85,events:['...'],activities:["Walking", "Mountain Bike", "Trail Running", "Hiking", "Running", "Road Bike"],
        attractions:[ {"poi_image_hash": "eed2db141456f1c9924f7b6fa95ffa40",
            "location": {
                "lat": 51.5098738,
                "lng": -0.1342613
            },
            "name": "Piccadilly Circus",
            "price": null,
            "duration": 1800,
            "address": "20 Coventry Street, London W1J 9, United Kingdom",
            "admission": null,
            "email": null,
            "opening_hours": null,
            "phone": null
          }
        ],avg_hotel_price:'65$',avg_airbnb_price: '45$',avg_hostel_price:'20$',humidity:83.3,min_temp:1.6,max_temp:7.1,rainy_days:13,"climate_label": {
            "temperature_avg_label": "warm",
            "rainy_days_label": "medium_rainfall",
            "humidity_label": "moderate_humidity"
        }, "safety_score": 7,
        "overall_score": 8,
        "foodie_score": 8,
        "budget_score": 4,
        "walk_score": 10,
        "social_score": 9,
        "health_score": 9,
        "freedom_score": 9,
        "camper_score": 7,
        "family_score": 8,
        "sustainability_score": 8,
        "culture_score": 10,
        "arrival_score": 10,
        "forest_score": 8,
        "luxury_score": 10,
        "general_popularity_score": 10,
        "montly_popular":1,
        "tags": ["edm", "nightlife", "nightlife", "places of worship", "churches", "finance", "startups", "gambling", "non-schengen", "hiking", "street food", "vegan", "adult nightlife", "no-beach", "airport", "airport", "airport", "airport", "airport", "airport", "warm now", "warm", "hot", "fast internet", "high cost of living", "high humidity", "freedom of press", "democracy", "freedom", "many women", "friendly people", "adult nightlife", "activities", "city break", "events", "famous cities", "sightseeing"],
        nearest_airport:{
          "distance": 12547.43456352696,
       "location": {
           "type": "Point",
           "coordinates": [0.055278, 51.505278]
       },
       "iata": "LCY",
       "names": ["London City Airport"],
       "unit": "meters"
     },
     uv_index:4,
     traffic_index:25,
     avg_trip_length: 8,
     min_trip_length: 2,
     max_trip_length: 17,costs: {
     "meal_cheap_restaurant_cost_label": "$15 - $20",
         "meal_mid_range_restaurant_cost_label": "$60 - $70",
         "mcmeal_at_mcdonalds_cost_label": "$5 - $10",
         "beer_at_restaurant_cost_label": "$5 - $6",
         "water_cost_label": "$1 - $1.5",
         "beer_from_market_label": "$2.5 - $3",
         "public_transport_cost_label": "$3.0 - $3.5",
         "montly_transport_pass_label": "$80 - $90",
         "gasoline_1_liter_cost_label": "$1.8 +",
         "prepaid_card_cost_label": "$0 - $0.2",
         "internet_cost_label": "$0 - $50",
         "cinema_ticket_cost_label": "$10 - $15",
         "taxi_1km_cost_label": "$1.5 - $2"}
      };

export default function SampleData () {
  return (
    <div className={styles.outer}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={landingLogo} style={{ width: '150px' }} alt='' />
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.row2}>
          <div className={styles.featureTitle5}>Sample Data</div>
              <div className={styles.row1Subtitle5}>
                  <pre>{JSON.stringify(sample, null, 2) }</pre>
                </div>
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
