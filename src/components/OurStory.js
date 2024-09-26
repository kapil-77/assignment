import React from 'react'
import '../styles/OurStory.css'

const OurStory = () => {
  return (
    <section className="our-story">
      <div className="header">
        <h2>Our Story</h2>
        <h1>
          We know how everything works and why your business is failing over and
          over again.
        </h1>
      </div>
      <div className="content">
        <div className="left-section">
          <div className="image-large">
            <img
              src="https://s3-alpha-sig.figma.com/img/daa9/dcc2/afe209ef235db21bfa91b9ffa3b9bb78?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J3blBdZfp1ZB1OROH4Gyx8~d-AerNDGsh7lzF7dbzYhR93xx~2vZAL2F0Y11432gJ3GVXmSFvIpTEr7Ae4QzD-Ar0WhTE2gLa1Zxx5qi2FkAsDalc6mO-q4RbvDS22XLwWjaKu~i-C-3mFeAuWDZV~l7m5DcVR5XGorTjtLfqo0vBGezUlPfzEl0CqCBhwa2v5fkrl3UkJGVlX4BDNFScR80woUmxfOg7jzkJatXdQLHdm3XJ~clu6yvF7mP681uGYK17HSsw8Uk2IVr6h3qnQM1Q2RsNrcMb-UADPOHVaoaSAqSz-sB6YxSXn~95TfJkAwF~4x1jkiZyx19Ko3nsQ__"
              alt="man"
            />
          </div>
        </div>
        <div className="right-section">
          <div className="images-right">
            <div className="image-medium">
              <img
                src="https://s3-alpha-sig.figma.com/img/c585/7948/c927c703e09aec43fcf381f0659f1882?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qjj3M4jPBBmIQ3oY3yWcxZl0jEgmRl3T83C3ScTaPS1lw1KbSkv~apfvr4TahN1fwBOQhBthAVS8qRhXf~icKoM8NHp9jGp6ougKiHqiFIwV50Nx5Z7nG-K21xzcgQ8Sf-A~5p4CtUov48H4JEBZ8XKyl82i~stVMF4dghxU66c6paYAGt37VhlCJBYXMp2MXsoZNpPRLaGIiNsjfH28wBGY2WwKtzwn7D0kHqi-0I93Z0-i1ujWJbbRL-imHETPGzwe4jOQdrfe3W8v9uPZOMFPSjXVrTUbbhBUYTjRg5Z6sWFzR0dWulu4R6cF0umo-gIcNyAsJro72mf16jBFOQ__"
                alt="Medium woman"
              />
            </div>
            <div className="image-small">
              <img
                src="https://s3-alpha-sig.figma.com/img/054d/5318/57a4f4cd4d8b5959cddb0a7bfa472706?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gdHeA6mIutI3l7mWbioGKRyU3LijezWVJuh6dHayC1DZmiVvj-zMNtnj3pHMbYKitrJzQVT1Cu4uQaQ5eAwaNUedMJqRP2X0GMX8ofk0cQ6V3XcgWQH-H3XVqPtAJbxM18rBOu2m-CQ7g13rUUfTRZ5Porcpndy2AQist32BV9HMUuJvgB2RgFTAdP-hMcLfIoucZDQcanObtXJOqqf4Zkz4TmnXI0P-GoqwUOnAkrCCB4CmIyKJZdtVJ6EhUGjWe7NGkz0MsnWrvnRqvfaL3urRJO2l2ahgBo5~4fWk9rxu1wYF2ZMBBB5U~5147ZwQid6LygclPLGmC0FJD6Y0UA__"
                alt="Small woman"
              />
            </div>
          </div>
          <div className="text-below">
            <p>
              We share common trends and strategies for improving your rental
              income and making sure you stay in high demand. With lots of
              unique blocks, you can easily build a page without coding. Build
              your next landing page.
            </p>
          </div>
        </div>
      </div>
      <div className="stats">
        <div className="stat-item">
          <h3>1M+</h3>
          <p>Customers visit Omega every month to get their service done.</p>
        </div>
        <div className="stat-item">
          <h3>92%</h3>
          <p>Satisfaction rate comes from our awesome customers.</p>
        </div>
        <div className="stat-item">
          <h3>4.9/5.0</h3>
          <p>Average customer ratings we have got all over internet.</p>
        </div>
      </div>
    </section>
  )
}

export default OurStory
