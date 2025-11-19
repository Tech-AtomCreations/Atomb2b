
"use client"

import Image from 'next/image'

// Video URLs for past works
const pastWorkVideos = [
  "https://res.cloudinary.com/dctkdlow2/video/upload/v1762024884/Looking_to_place_a_bulk_order_DM_us_for_exclusive_deals_and_personalized_service_%EF%B8%8F_Check_out_ftdbap.mp4",
  "https://res.cloudinary.com/dctkdlow2/video/upload/v1762024999/Level_up_your_style_with_cool_varsity_jackets_from_Atom_Creations...For_any_bulk_order_or_query_udg2jg.mp4",
  "https://res.cloudinary.com/dctkdlow2/video/upload/v1762025097/Dive_into_style_with_ATOM_CREATIONS_Where_champions_wear_excellence_sports_swimming_fashion_dvp8tc.mp4",
  "https://res.cloudinary.com/dctkdlow2/video/upload/v1762025199/Introducing_atomcreations.co_as_our_official_merchandise_sponsor_utsaaha_abesec24_for_the_spec_ioskdj.mp4",
  "https://res.cloudinary.com/dctkdlow2/video/upload/v1762025255/Let_s_kick_it_%EF%B8%8F_%EF%B8%8F_viral_trending_trendingtshirts_trendingtshirtsdesign_LimitlessFashion_ato_x5vwqc.mp4",
  "https://res.cloudinary.com/dctkdlow2/video/upload/v1762025320/Representing_passion_embracing_unity-_Creative_U_Club_T-Shirt_-Elevate_Your_Style_with_Atom_Cre_uhbtcy.mp4"
];

// Instagram reel URLs corresponding to each video
const instagramLinks = [
  "https://www.instagram.com/reel/C7uOib9ShWv/?igsh=ZGUyYXVnajV0ZmFx",
  "https://www.instagram.com/reel/C7j2GiSyZKm/?igsh=MWc5NWlrbGQ1YXFxdg%3D%3D",
  "https://www.instagram.com/reel/C7rHpE9SHNj/?igsh=anRtaTJ0Y3M0ZWc0",
  "https://www.instagram.com/reel/C6wjNYCyLEd/?igsh=ZnBnc3Qwbmk5ZmVn",
  "https://www.instagram.com/reel/C5_f5ImSYn6/?igsh=MTkxbGtsaTEwdG03bQ%3D%3D",
  "https://www.instagram.com/reel/C38QpduSzV6/?igsh=cmVrZXhrMXF5Yzlo"
];

export default function PastWorks() {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');
        
        /* Mobile-first responsive styles */
        .pastworks-container {
          background: white;
          font-family: "DM Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          padding: 32px 0;
        }

        .pastworks-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 24px;
          line-height: 1.1;
          letter-spacing: 0;
          text-align: center;
          margin: 0 auto 2rem;
          color: #0B0014;
          max-width: 300px;
        }

        /* Mobile layout - alternating rows design */
        .mobile-layout {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 0 16px;
        }

        /* Row with two images side by side - each covering exactly half */
        .mobile-row-two-images {
          display: flex;
          gap: 12px;
        }

        .mobile-row-two-images .mobile-image-container {
          /* use flex to allow gap without wrapping */
          flex: 1 1 0;
          min-width: 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
          height: 280px;
          position: relative; /* ensure Image with fill has a positioned parent */
        }

        .mobile-row-two-images .mobile-image {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover;
        }

        /* Special styling for first image with description above */
        .mobile-row-two-images .first-image-with-description {
          display: flex;
          flex-direction: column;
          height: 400px;
          /* allow this column to flex so gap doesn't force wrapping */
          flex: 1 1 0;
          min-width: 0;
          gap: 8px;
        }

        .mobile-row-two-images .first-image-description {
          height: 25%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
        }

        .mobile-row-two-images .first-image-description .mobile-description-pill {
          border-radius: 12px;
          border: 1px solid #d9d9d9;
          padding: 8px;
          background: transparent;
          width: 100%;
        }

        .mobile-row-two-images .first-image-description .mobile-description-inner {
          border-radius: 8px;
          background: #E6E6E6;
          border: 1px solid #d9d9d9;
          padding: 15px 3px;
          font-size: 12px;
          line-height: 1.3;
          color: #333333;
          margin: 0;
          font-weight: 500;
          
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        /* Ensure mobile description pills and inner content are always centered */
        .mobile-row-two-images .mobile-description-pill,
        .pastworks-container .mobile-row-two-images .third-row-description .mobile-description-pill,
        .pastworks-container .mobile-row-full-image .mobile-description-pill {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-row-two-images .mobile-description-inner,
        .pastworks-container .mobile-row-two-images .third-row-description .mobile-description-inner,
        .pastworks-container .mobile-row-full-image .mobile-description-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .mobile-row-two-images .first-image-container {
          position: relative;
          height: 100%;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
        }

        .mobile-row-two-images .first-image-reduced {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Special styling for third row with descriptions */
        .mobile-row-two-images .third-row-first-image {
          display: flex;
          flex-direction: column;
          /* match first-row height so third-row images are equally tall */
          height: 400px;
          flex: 1 1 0;
          min-width: 0;
          gap: 8px;
        }

        .mobile-row-two-images .third-row-second-image {
          display: flex;
          flex-direction: column;
          /* match first-row height so third-row images are equally tall */
          height: 400px;
          flex: 1 1 0;
          min-width: 0;
          gap: 8px;
        }

        .mobile-row-two-images .third-row-description {
          height: 25%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
        }

        .pastworks-container .mobile-row-two-images .third-row-description .mobile-description-pill {
          border-radius: 2px !important;
          border: 1px solid #d9d9d9 !important;
          padding: 8px !important;
          background: transparent !important;
          width: 100% !important;
          margin: 0 !important;
          box-sizing: border-box !important;
          height: 78 !important;  
        }

        .pastworks-container .mobile-row-two-images .third-row-description .mobile-description-inner {
          border-radius: 1px !important;
          background: #E6E6E6 !important;
          border: 1px solid #d9d9d9 !important;
          padding: 2 2px !important;
          font-size: 12px !important;
          line-height: 1.1 !important;
          color: #333333 !important;
          margin: 0 !important;
          font-weight: 500 !important;
          text-align: center !important;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;
          height: 60 !important;
        }

        .mobile-row-two-images .third-row-image-container {
          position: relative;
          height: 100%;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
        }

        .mobile-row-two-images .third-row-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Row with full width image and description below */
        .mobile-row-full-image {
          display: flex;
          flex-direction: column;
          gap: 0px;
        }

        .mobile-row-full-image .mobile-image-container {
          width: 100% !important;
          height: 300px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
          margin: 0 !important;
          padding: 0 !important;
        }

        .mobile-row-full-image .mobile-image {
          width: 100% !important;
          height: 300px;
          object-fit: cover;
          display: block;
          margin: 0 !important;
          padding: 0 !important;
        }

        .pastworks-container .mobile-row-full-image .mobile-description-container {
          display: flex !important;
          justify-content: center !important;
          padding: 0 !important;
          margin: 0 !important;
        }

        .pastworks-container .mobile-row-full-image .mobile-description-pill {
          border-radius: 12px !important;
          border: 1px solid #d9d9d9 !important;
          padding: 12px !important;
          background: transparent !important;
          max-width: none !important;
          width: 95% !important;
          margin: 0 !important;
          box-sizing: border-box !important;
          text-align: center !important;
        }

        .pastworks-container .mobile-row-full-image .mobile-description-inner {
          border-radius: 8px !important;
          background: #E6E6E6 !important;
          border: 1px solid #e9e9e9 !important;
          padding: 16px px !important;
          font-size: 12px !important;
          line-height: 1.4;
          color: #333333;
          margin: 0;
          font-weight: 500;
          text-align: center;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        /* Hide desktop layout on mobile */
        .desktop-layout {
          display: none;
        }
          

        /* 375px and above */
        @media (min-width: 375px) {
          .pastworks-container {
            padding: 36px 0;
            
          }

          .pastworks-title {
            font-size: 26px;
            max-width: 340px;
            margin-bottom: 2.5rem;
          }

          .mobile-layout {
            gap: 28px;
            padding: 0 20px;
          }

          .mobile-row-two-images {
            gap: 16px;
          }

          .mobile-row-two-images .mobile-image-container {
            height: 350px !important;
          }

          .mobile-row-full-image .mobile-image-container {
            height: 320px !important;
          }

          .mobile-row-full-image .mobile-image {
            height: 320px !important;
          }

          .mobile-row-two-images .mobile-image {
            height: 100% !important;
          }

          .mobile-row-two-images .first-image-with-description {
            height: 420px;
            gap: 10px;
          }

          .mobile-row-two-images .first-image-description .mobile-description-pill {
            border: 1px solid #d9d9d9 !important;
            text-align: center !important;
          }

          .mobile-row-two-images .first-image-description .mobile-description-inner {
            font-size: 12px;
            padding: 14px 18px;
            background: #E6E6E6 !important;
          }

          .mobile-row-two-images .third-row-first-image {
            height: 420px;
            gap: 10px;
          }

          .mobile-row-two-images .third-row-second-image {
            height: 420px;
            gap: 10px;
          }

          .pastworks-container .mobile-row-two-images .third-row-description .mobile-description-pill {
            border: 1px solid #d9d9d9 !important;
            text-align: center !important;
          }

          .pastworks-container .mobile-row-two-images .third-row-description .mobile-description-inner {
            font-size: 15px;
            padding: 14px 18px;
            background: #E6E6E6 !important;
          }

          .mobile-row-full-image .mobile-image {
            height: 45px;
          }

          .pastworks-container .mobile-row-full-image .mobile-description-container {
            padding: 0 !important;
          }

          .pastworks-container .mobile-row-full-image .mobile-description-pill {
            max-width: none !important;
            width: 98% !important;
            border: 1px solid #d9d9d9 !important;
            text-align: center !important;
          }

          .pastworks-container .mobile-row-full-image .mobile-description-inner {
            font-size: 16px;
            padding: 18px 22px;
            background: #E6E6E6 !important;
          }
        }

        /* 425px and above */
        @media (min-width: 425px) {
          .pastworks-container {
            padding: 40px 0;
          }

          .pastworks-title {
            font-size: 28px;
            max-width: 380px;
            margin-bottom: 3rem;
          }

          .mobile-layout {
            gap: 40px;
            padding: 0 24px;
          }

          .mobile-row-two-images {
            gap: 16px;
          }

          .mobile-row-two-images .mobile-image-container {
            height: 440px !important;
          }

          .mobile-row-two-images .mobile-image {
            height: 100% !important;
          }

          .mobile-row-two-images .first-image-with-description {
            height: 440px;
            gap: 12px;
          }

          .mobile-row-two-images .first-image-description .mobile-description-pill {
            border: 1px solid #d9d9d9 !important;
            text-align: center !important;
          }

          .mobile-row-two-images .first-image-description .mobile-description-inner {
            font-size: 12px;
            padding: 16px 20px;
            background: #E6E6E6 !important;
          }

          .mobile-row-two-images .third-row-first-image {
            height: 440px;
            gap: 12px;
          }

          .mobile-row-two-images .third-row-second-image {
            height: 440px;
            gap: 12px;
          }

          .pastworks-container .mobile-row-two-images .third-row-description .mobile-description-pill {
            border: 1px solid #d9d9d9 !important;
            text-align: center !important;
          }

          .pastworks-container .mobile-row-two-images .third-row-description .mobile-description-inner {
            font-size: 16px;
            padding: 16px 20px;
            background: #E6E6E6 !important;
          }

          .mobile-row-full-image .mobile-image {
            height: 50px;
          }

          .pastworks-container .mobile-row-full-image .mobile-description-container {
            padding: 0 !important;
          }

          .pastworks-container .mobile-row-full-image .mobile-description-pill {
            max-width: none !important;
            width: 98% !important;
            border: 1px solid #d9d9d9 !important;
            text-align: center !important;
          }

          .pastworks-container .mobile-row-full-image .mobile-description-inner {
            font-size: 15px;
            line-height: 1.5;
            padding: 16px 20px;
            background: #E6E6E6 !important;
          }
        }

  /* Hide mobile layout and show desktop layout for 769px+ */
  @media (min-width: 769px) {
          .mobile-layout {
            display: none;
          }

          .desktop-layout {
            display: block;
          }

          .pastworks-title {
            display: none;
          }

          .desktop-title {
            font-family: 'DM Sans', sans-serif;
            font-weight: 500;
            font-size: 36.65px;
            line-height: 100%;
            letter-spacing: 0;
            text-align: center;
            width: 500px;
            height: 48px;
            opacity: 1;
            color: #0B0014;
            margin: 0 auto 3rem;
          }
        }
      `}</style>

      <section className="pastworks-container">
        <div className="max-w-7xl mx-auto">
          {/* Mobile title */}
          <h2 className="pastworks-title">
            Past Works
          </h2>

          {/* Mobile Layout - Alternating Rows Design (below 769px) */}
          <div className="mobile-layout">
            {/* Row 1 - First image with description above, second image normal */}
            <div className="mobile-row-two-images">
              <div className="mobile-image-container">
                <a href={instagramLinks[0]} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <video
                    src={pastWorkVideos[0]}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </a>
              </div>
              <div className="mobile-image-container">
                <a href={instagramLinks[1]} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <video
                    src={pastWorkVideos[1]}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </a>
              </div>
            </div>

            {/* Row 2 - Full width image */}
            <div className="mobile-row-full-image">
              <div className="mobile-image-container">
                <a href={instagramLinks[2]} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <video
                    src={pastWorkVideos[2]}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="mobile-image w-full h-full object-cover cursor-pointer"
                  />
                </a>
              </div>
            </div>

            {/* Row 3 - Two images side by side */}
            <div className="mobile-row-two-images">
              <div className="mobile-image-container">
                <a href={instagramLinks[3]} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <video
                    src={pastWorkVideos[3]}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </a>
              </div>
              <div className="mobile-image-container">
                <a href={instagramLinks[4]} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <video
                    src={pastWorkVideos[4]}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </a>
              </div>
            </div>

            {/* Row 4 - Full width image */}
            <div className="mobile-row-full-image">
              <div className="mobile-image-container">
                <a href={instagramLinks[5]} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  <video
                    src={pastWorkVideos[5]}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="mobile-image w-full h-full object-cover cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Original Design (769px and above) */}
          <div className="desktop-layout">
            <div className="px-6 lg:px-8">
              {/* Desktop title */}
              <h2 className="desktop-title">
                Past Works
              </h2>

              {/* Single Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-8">
                {/* ---------- LEFT COLUMN (Videos 1 & 4) ---------- */}
                <div className="flex flex-col gap-6">
                  <a href={instagramLinks[0]} target="_blank" rel="noopener noreferrer" className="block">
                    <video
                      src={pastWorkVideos[0]}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full rounded-[16px] object-cover h-[400px] cursor-pointer"
                    />
                  </a>
                  <a href={instagramLinks[3]} target="_blank" rel="noopener noreferrer" className="block">
                    <video
                      src={pastWorkVideos[3]}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full rounded-[16px] object-cover h-[400px] cursor-pointer"
                    />
                  </a>
                </div>

                {/* ---------- MIDDLE COLUMN (Videos 2 & 5) ---------- */}
                <div className="flex flex-col gap-6">
                  <a href={instagramLinks[1]} target="_blank" rel="noopener noreferrer" className="block">
                    <video
                      src={pastWorkVideos[1]}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full rounded-[16px] object-cover h-[450px] cursor-pointer"
                    />
                  </a>
                  <a href={instagramLinks[4]} target="_blank" rel="noopener noreferrer" className="block">
                    <video
                      src={pastWorkVideos[4]}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full rounded-[16px] object-cover h-[450px] cursor-pointer"
                    />
                  </a>
                </div>

                {/* ---------- RIGHT COLUMN (Videos 3 & 6) ---------- */}
                <div className="flex flex-col gap-6">
                  <a href={instagramLinks[2]} target="_blank" rel="noopener noreferrer" className="block">
                    <video
                      src={pastWorkVideos[2]}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full rounded-[16px] object-cover h-[400px] cursor-pointer"
                    />
                  </a>
                  <a href={instagramLinks[5]} target="_blank" rel="noopener noreferrer" className="block">
                    <video
                      src={pastWorkVideos[5]}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full rounded-[16px] object-cover h-[400px] cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}