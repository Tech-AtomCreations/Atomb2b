"use client"

import React from "react"
import Header from "../compnents/Header"
import Footer from "../compnents/Footer"
import dynamic from 'next/dynamic'
import { Download } from "lucide-react"

const PdfViewer = dynamic(() => import('../compnents/PdfViewer'), { ssr: false })

export default function CatalogueClient() {
  const pdfFileName = "Atom-Creations Catalogue (3).pdf"
  const pdfPath = `/${encodeURIComponent(pdfFileName)}`

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto py-10 px-4 w-full pt-32 max-[769px]:pt-23">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6 flex-wrap max-[769px]:flex-nowrap max-[769px]:gap-2">
          <h1 className="text-2xl font-semibold text-gray-800 max-[769px]:text-xl">
            Catalogue
          </h1>

          <a
            href={pdfPath}
            download
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition max-[769px]:px-3 max-[769px]:py-1.5 max-[769px]:text-sm"
          >
            <Download size={18} className="max-[769px]:w-4 max-[769px]:h-4" />
            <span>Download</span>
          </a>
        </div>

        {/* Full page scroll PDF viewer - pages flow with main page scroll */}
        <div className="w-full">
          <PdfViewer fileUrl={pdfPath} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}