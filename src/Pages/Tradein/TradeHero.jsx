import React from 'react'

const TradeHero = () => {
  return (
    <>
       <div
        className="bgheroSection mb-5"
        style={{
          height: "800px",
      backgroundImage: `url("/blue-car-speed-motion-stretch-style 1.png")` 

        }}
      >
        <div
          className="w-50 d-flex flex-column mobwteam"
          style={{
            padding: "20em 10em ",
          }}
        >
          <p
            style={{
              fontWeight: "800",
              fontSize: "40px",
              color: "#fff",
            }}
            className="lh-1"
          >
           Looking to sell or upgrade your car?
          </p>
          <h2 className='text-light'>At Car Chaser,</h2>
          <p className='text-light'>
          We've got you covered. Share your needs, and let us assist in finding your next dream car. We're passionate about finding the perfect match.
          </p>
        </div>
      </div>
    </>
  )
}

export default TradeHero
