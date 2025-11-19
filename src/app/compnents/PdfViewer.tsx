"use client"

import React, { useEffect } from "react"
import { Worker, Viewer, SpecialZoomLevel, ScrollMode } from "@react-pdf-viewer/core"
import "@react-pdf-viewer/core/lib/styles/index.css"
import "../pdf-viewer.css"

export default function PdfViewer({ fileUrl }: { fileUrl: string }) {
  console.log('PdfViewer loading with fileUrl:', fileUrl)
  
  useEffect(() => {
    // Force override styles after component mounts (for production environment)
    const timer = setTimeout(() => {
      const styles = document.createElement('style')
      styles.innerHTML = `
        .rpv-core__viewer {
          height: auto !important;
          min-height: auto !important;
          overflow: visible !important;
        }
        .rpv-core__viewer-inner {
          height: auto !important;
          overflow: visible !important;
        }
        .rpv-core__pages-container {
          height: auto !important;
          overflow: visible !important;
        }
        .rpv-core__inner-pages {
          height: auto !important;
          overflow: visible !important;
        }
        .rpv-core__page-layer {
          margin-bottom: 30px !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border-radius: 8px;
          overflow: visible !important;
        }
        .rpv-core__inner-page {
          margin-bottom: 30px !important;
          overflow: visible !important;
        }
        .rpv-scroll-mode__toolbar,
        .rpv-toolbar,
        .rpv-core__toolbar {
          display: none !important;
        }
        canvas {
          display: block !important;
          margin: 0 auto 30px auto !important;
        }
      `
      document.head.appendChild(styles)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div className="w-full pdf-viewer-container">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer 
          fileUrl={fileUrl} 
          defaultScale={SpecialZoomLevel.PageWidth}
          scrollMode={ScrollMode.Vertical}
          theme="light"
        />
      </Worker>
    </div>
  )
}
