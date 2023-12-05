import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import '../../style/CodeExam.css'

const CodeExam = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 773 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 772, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <div>
      <Carousel responsive={responsive}>
        {/* 각 슬라이드는 4개의 YouTube 비디오를 포함합니다 */}
        <div style={{ display: 'flex' }}>
          <div className="youtube-box">
            {/* 첫 번째 YouTube 비디오 */}
            <iframe
              src="https://www.youtube.com/embed/NQq0dOoEPUM?si=WTVfvZW1gUR-AoKc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="youtube-box">
            {/* 두 번째 YouTube 비디오 */}
            <iframe
              src="https://www.youtube.com/embed/q6fPjQAzll8?si=Z9k9NXomY7z8pGtd"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="youtube-box">
            {/* 세 번째 YouTube 비디오 */}
            <iframe
              src="https://www.youtube.com/embed/kWiCuklohdY?si=6uhkrrylwmtdgN4n"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="youtube-box">
            {/* 네 번째 YouTube 비디오 */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8-4Fm5fl2CM?si=EHWCjRbazQT11PK2"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="youtube-box">
            {/* 네 번째 YouTube 비디오 */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Ujjdn2wMIew?si=m5hwLKwv4Cc3xx2X"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="youtube-box">
            {/* 네 번째 YouTube 비디오 */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/KF6t61yuPCY?si=kHImhmLIITSF8pY4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="youtube-box">
            {/* 네 번째 YouTube 비디오 */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Tt_tKhhhJqY?si=3U5FUbOHgHURvx2a"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="youtube-box">
            {/* 네 번째 YouTube 비디오 */}

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/E-PzX2mKGUQ?si=g0nNVVox0r1S_oUZ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="youtube-box">
            {/* 네 번째 YouTube 비디오 */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rgI930gqdaY?si=h711Dvd60HKwKfhw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="youtube-box">
            {/* 네 번째 YouTube 비디오 */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/mEeZoDGITGw?si=8kHlmTwmFP0XsYpP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="youtube-box">
            {/* 네 번째 YouTube 비디오 */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1t9nKrsdkdw?si=00CJrUTsUhup_0ir"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="youtube-box">
            {/* 네 번째 YouTube 비디오 */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/04lcX_mVD6g?si=ICdDw7fy2XIAzqjY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        {/* 다른 슬라이드에 대한 구조를 반복하세요 */}

        {/* 두 번째 슬라이드 */}
        <div>{/* ... */}</div>

        {/* 세 번째 슬라이드 */}
        <div>{/* ... */}</div>

        {/* 네 번째 슬라이드 */}
        <div>{/* ... */}</div>
      </Carousel>
    </div>
  )
}

export default CodeExam
