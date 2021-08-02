import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Slider from '../common/slider.js'

export default function Home() {

  const slides = [
    {src:"/1.png", alt:"Image 1", text:"A brand new technology increasing your sales."},
    {src:"/2.png", alt:"Image 2", text:"Developed by dozens of people."},
    {src:"/3.png", alt:"Image 3", text:"A worldwide used software."},
    {src:"/4.png", alt:"Image 4", text:"Contact now to get in touch with us."}
  ]
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slider width="320px" height="270px" imgHeight="180px" slides={slides}/>
    </div>
  )
}