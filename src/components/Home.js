import React, { useState, useRef } from 'react'
import 'bulma'

const Home = () => {

  const mobilenav = useRef()
  const [navbar, setNavBar] = useState(null)

  function ToggleNav() {
    setNavBar(!navbar)
    if (navbar === false) {
      mobilenav.current.style.animation = 'mobile-nav-disappear linear forwards 1s'
    } else if (navbar === true) {
      mobilenav.current.style.animation = 'mobile-nav-appear linear forwards 1s'
    }
  }

  console.log(mobilenav)

  return <main>
    <header>
      <div className='nav'>
        <div className="logo">
          <h1>EO</h1>
        </div>
        <div className="nav-links">
          <ul>
            <li>HOME</li>
            <li>PORTFOLIO</li>
            <li>PRICES</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div onClick={ToggleNav} className="hamburger-container">
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>
      </div>
    </header>
    <section className='main-body'>
      <div className="picture-container">
        <div className="picture-one">
          <img src="https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/90209720_670136640470654_4040126654505536505_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=102&_nc_ohc=H--hfir9xz4AX8X9bI4&oh=2e73425ec99431f0c16f91faad2b65b9&oe=5F078EBA" alt="" />
        </div>
        <div className="picture-two">
          <img src="https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/91861301_157851625489617_6246982046164126306_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=109&_nc_ohc=duoVbhJN9LYAX9iTQ4I&oh=57efe4b5b5260d4ff337cca422962cbb&oe=5F020B7E" alt="" />
        </div>
        <div className="picture-three">
          <video controls autoPlay loop src="https://scontent-lhr8-1.cdninstagram.com/v/t50.2886-16/90375375_136972631081522_7357913167073231576_n.mp4?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=102&_nc_ohc=YMUur4e5vGgAX_ZyC4X&oe=5EE1B506&oh=273d11eb5b53e58323ba434fba0208ad"></video>
        </div>
        <div className="picture-four">
          <img src="https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/90089511_2519396844940463_8351231358990256729_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=111&_nc_ohc=x9eEN09aKvoAX8ZiwQw&oh=81b14662200349a9a73bfb8cd17dd6db&oe=5F085F8B" alt="" />
        </div>

      </div>
      <div className="name">
        <div ref={mobilenav} className="mobile-nav">
          <ul>
            <li>HOME</li>
            <li>PORTFOLIO</li>
            <li>PRICES</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <h1>Edward Ovens.</h1>
      </div>
    </section>
    <footer>
      <span className="icon">
        <i className="fab fa-instagram"></i>
      </span>
      <span className="icon">
        <i className="fas fa-envelope"></i>
      </span>
    </footer>
  </main>
}

export default Home 