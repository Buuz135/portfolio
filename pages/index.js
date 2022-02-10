import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import 'animate.css';
import { useInView } from "react-intersection-observer";

var mods = ["Industrial Foregoing", "Industrial Foregoing", "Industrial Foregoing", "Industrial Foregoing", "Portality"]


export default function Home() {
  
  var objectMods = []
  for (let index = 0; index < Math.ceil(mods.length / 2.0); index++) {
    const element = createMod(mods[index * 2], "left_entrance");
    if (index * 2 + 1 < mods.length) {
      objectMods.push(<div className='container_row'>
        {element}{createMod(mods[index * 2 + 1], "right_entrance")}
      </div>)
    } else {
      objectMods.push(<div className='container_row'>
      {element}
    </div>)
    }
  }
  return (
    <div className="container">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet" />
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='scroll_body'>
        <Header></Header>
        {objectMods}
      </div>
    </div>
  )
}

function createMod(modName, entranceAnimation) {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.01
  });
  var element = (<div ref={titleRef} className={'mod_container ' + (titleInView ? 'animate__animated ' + entranceAnimation : '')}>
    {modName}
  </div>)
  return element
}


/*
<main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
      */