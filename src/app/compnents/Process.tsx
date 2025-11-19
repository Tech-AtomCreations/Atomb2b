"use client"

import React from "react"
import Image from "next/image"

export default function Process() {

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
        
        /* Process Timeline responsive styles (mobile-first) */
        .process-container {
          background: white;
          font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          padding: 24px 0;
        }

        .process-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 20px;
          line-height: 1;
          letter-spacing: 0;
          text-align: center;
          max-width: 300px;
          margin: 0 auto 2rem;
          color: #0B0014;
        }

        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 16px;
        }

        .process-step {
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.98);
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          position: relative;
        }

        .step-number {
          position: absolute;
          top: 12px;
          left: 12px;
          font-size: 18px;
          font-weight: 600;
          color: #3f3f3f;

          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 32px;
          height: 32px;
        }

        .step-image {
          width: 80px;
          height: 80px;
          margin: 16px auto 16px;
          border-radius: 8px;
          overflow: hidden;
        }

        .step-text {
          font-size: 13px;
          line-height: 1.4;
          color: #414141;
          max-width: 250px;
          margin: 0 auto;
        }

        /* 375px and above */
        @media (min-width: 375px) {
          .process-container {
            padding: 28px 0;
          }

          .process-title {
            font-size: 22px;
            max-width: 360px;
            margin-bottom: 2.5rem;
          }

          .process-steps {
            gap: 24px;
            padding: 0 20px;
          }

          .process-step {
            padding: 24px;
          }

          .step-number {
            font-size: 20px;
            min-width: 36px;
            height: 36px;
          }

          .step-image {
            width: 90px;
            height: 90px;
            margin: 18px auto 18px;
          }

          .step-text {
            font-size: 14px;
          }
        }

        /* 425px and above */
        @media (min-width: 425px) {
          .process-container {
            padding: 32px 0;
          }

          .process-title {
            font-size: 28px;
            max-width: 420px;
            margin-bottom: 3rem;
          }

          .process-steps {
            gap: 28px;
            padding: 0 24px;
          }

          .process-step {
            padding: 28px;
          }

          .step-number {
            font-size: 22px;
            min-width: 40px;
            height: 40px;
          }

          .step-image {
            width: 100px;
            height: 100px;
            margin: 20px auto 20px;
          }

          .step-text {
            font-size: 15px;
            max-width: 280px;
          }
        }

        /* Hide mobile layout on desktop */
  @media (min-width: 769px) {
          .process-steps {
            display: none;
          }
        }

        /* IMPORTANT: hide the mobile title at desktop widths so only the desktop title shows */
  @media (min-width: 769px) {
          .process-title {
            display: none;
          }
        }

        /* Desktop layout - original complex design */
        .desktop-layout {
          display: none;
        }

  @media (min-width: 769px) {
          .desktop-layout {
            display: block;
            position: relative;
            width: 100%;
            max-width: 1200px;
            height: 820px;
            margin: 0 auto;
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
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            margin: 0;
          }

          .step-box {
            border: 2.5px solid #cfc9bf;
            background: rgba(255, 255, 255, 0.98);
            border-radius: 14px;
            position: absolute;
            padding: 12px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .image-wrap {
            position: absolute;
            z-index: 5;
          }

          .text-wrap {
            position: relative;
            z-index: 20;
          }
        }
      `}</style>

      <section className="process-container">
        <div className="w-full max-w-7xl mx-auto">
          {/* Mobile title – hide on desktop via CSS above */}
          <h2 className="process-title" aria-hidden={typeof window !== 'undefined' && window.innerWidth >= 769 ? "true" : "false"}>
            Process Timeline
          </h2>

          {/* Mobile Layout - Clean Cards (below 769px) */}
          <div className="process-steps">
            {/* Step 1: Brief & RFQ */}
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-image">
                <Image 
                  src="/documents.png" 
                  alt="Documents and brief" 
                  width={140} 
                  height={140}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="step-text">
                <strong>Brief & RFQ</strong><br />
                Share your requirements and get a quote
              </p>
            </div>

            {/* Step 2: Design & Mock-up */}
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-image">
                <Image 
                  src="/ccc.png" 
                  alt="Design mockup" 
                  width={140} 
                  height={140}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="step-text">
                <strong>Design & Mock-up</strong><br />
                Free mock up delivered in 24 hours
              </p>
            </div>

            {/* Step 3: Production & QC */}
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-image">
                <Image 
                  src="/bcc.png" 
                  alt="Production machine" 
                  width={140} 
                  height={140}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="step-text">
                <strong>Production & 3 Step QC</strong><br />
                Printing, stitching, and quality finishing
              </p>
            </div>

            {/* Step 4: Dispatch & Tracking */}
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-image">
                <Image 
                  src="/dcc.png" 
                  alt="Delivery tracking" 
                  width={140} 
                  height={140}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="step-text">
                <strong>Dispatch & Tracking</strong><br />
                Pan India logistics with live tracking
              </p>
            </div>
          </div>

          {/* Desktop Layout - Original Complex Design (769px and above) */}
          <div className="desktop-layout">
            {/* Desktop title – only visible on desktop */}
            <h2 className="desktop-title">Process Timeline</h2>

            {/* STEP 1: top-left box, paper image slightly above/right */}
            <div className="step-box" style={{ top: 124, left: 36, width: 360 }}>
              <div className="text-wrap">
                <div style={{ fontSize: 36, lineHeight: 1, color: '#3f3f3f', fontWeight: 600 }}>1</div>
                <p style={{ fontSize: 13, lineHeight: 1.25, color: '#414141', marginTop: 12, maxWidth: 260, paddingRight: 112 }}>
                  Brief & RFQ → <br /> Share your requirement
                </p>
              </div>
            </div>

            {/* Static positioned images (from original coordinates) */}
            <div className="image-wrap" style={{ top: 70, left: 210 }}>
              <Image src="/documents.png" alt="paper" width={160} height={160} />
            </div>

            {/* STEP 2: slightly lower, shifted right; t-shirt overlaps box */}
            <div className="step-box" style={{ top: 314, left: 230, width: 360 }}>
              <div className="text-wrap">
                <div style={{ fontSize: 34, lineHeight: 1, color: '#3f3f3f', fontWeight: 600 }}>2</div>
                <p style={{ fontSize: 13, lineHeight: 1.25, color: '#414141', marginTop: 12, maxWidth: 260, paddingRight: 112 }}>
                  Design & Mock-up → Free mock-up in 24 hours
                </p>
              </div>
            </div>

            <div className="image-wrap" style={{ top: 182, left: 380 }}>
              <Image src="/ccc.png" alt="tshirt" width={220} height={220} />
            </div>

            {/* STEP 3: further down-right, machine image overlaps top-right of box */}
            <div className="step-box" style={{ top: 484, left: 460, width: 420 }}>
              <div className="text-wrap">
                <div style={{ fontSize: 34, lineHeight: 1, color: '#3f3f3f', fontWeight: 600 }}>3</div>
                <p style={{ fontSize: 13, lineHeight: 1.25, color: '#414141', marginTop: 12, maxWidth: 360, paddingRight: 160 }}>
                  Production & 3–Step QC → Printing, stitching, finishing
                </p>
              </div>
            </div>

            <div className="image-wrap" style={{ top: 367, left: 647 }}>
              <Image src="/bcc.png" alt="machine" width={220} height={220} />
            </div>

            {/* STEP 4: bottom-right area, courier figure overlapping left/top of box */}
            <div className="step-box" style={{ top: 654, left: 750, width: 360 }}>
              <div className="text-wrap">
                <div style={{ fontSize: 34, lineHeight: 1, color: '#3f3f3f', fontWeight: 600 }}>4</div>
                <p style={{ fontSize: 13, lineHeight: 1.25, color: '#414141', marginTop: 12, maxWidth: 260, paddingRight: 112 }}>
                  Dispatch & Tracking → Pan-India logistics
                </p>
              </div>
            </div>

            <div className="image-wrap" style={{ top: 518, left: 905 }}>
              <Image src="/dcc.png" alt="courier" width={220} height={220} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
