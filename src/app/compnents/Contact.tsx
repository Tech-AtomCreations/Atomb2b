"use client"

import React, { useState, useEffect } from 'react'

export default function Contact() {
  const [company, setCompany] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [email, setEmail] = useState('')
  const [fabric, setFabric] = useState('')
  const [sizes, setSizes] = useState('')
  const [quantity, setQuantity] = useState('')
  const [deadline, setDeadline] = useState('')
  const [address, setAddress] = useState('')
  const [budget, setBudget] = useState('')
  const [fileName, setFileName] = useState('')
  const [fileObj, setFileObj] = useState<File | null>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  // auto-hide success/error messages after 5 seconds
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const t = setTimeout(() => {
        setStatus('idle')
        setErrorMsg(null)
      }, 5000)
      return () => clearTimeout(t)
    }
  }, [status])

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files && e.target.files[0]
    setFileName(f ? f.name : '')
    setFileObj(f || null)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    setStatus('sending')

    try {
      const formData = new FormData()
      // Build a single message field that contains the full details
      const message = `Company: ${company || 'N/A'}\nContact Number: ${contactNumber || 'N/A'}\nEmail: ${email || 'N/A'}\nFabric & Print Method: ${fabric || 'N/A'}\nSizes: ${sizes || 'N/A'}\nQuantity: ${quantity || 'N/A'}\nDeadline: ${deadline || 'N/A'}\nAddress: ${address || 'N/A'}\nBudget: ${budget || 'N/A'}\nUploaded file: ${fileName || 'None'}`
      formData.append('company', company)
      formData.append('contactNumber', contactNumber)
      formData.append('email', email)
      formData.append('fabric', fabric)
      formData.append('sizes', sizes)
      formData.append('quantity', quantity)
      formData.append('deadline', deadline)
      formData.append('address', address)
      formData.append('budget', budget)
      formData.append('subject', `Contact form submission from ${company || 'website visitor'}`)
      formData.append('message', message)
      if (fileObj) formData.append('file', fileObj)

      const res = await fetch('https://formbold.com/s/oDRjV', {
        method: 'POST',
        body: formData,
      })

      const json = await res.json().catch(() => null)

      if (res.ok) {
        setStatus('success')
        setErrorMsg(null)
        // optional: clear form
        setCompany('')
        setContactNumber('')
        setEmail('')
        setFabric('')
        setSizes('')
        setQuantity('')
        setDeadline('')
        setAddress('')
        setBudget('')
        setFileName('')
        setFileObj(null)
      } else {
        setStatus('error')
        // try to show server-provided message
        const serverMsg = json && (json.message || json.error || JSON.stringify(json))
  setErrorMsg(serverMsg || 'Submission failed (400)')
  console.error('Formbold error response:', json)
      }
    } catch (err) {
      console.error(err)
      setErrorMsg(String(err))
      setStatus('error')
    }
  }
  return (
    <>
      <style jsx>{`
        /* Contact section responsive styles (mobile-first) */
        .contact-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 20px; /* base for very small screens */
          line-height: 1;
          letter-spacing: 0;
          text-align: center;
          max-width: 300px;
          margin: 0 auto 1.75rem;
          color: #0B0014;
        }

        .contact-form {
          padding: 0 8px;
        }

        .form-input {
          width: 100%;
          height: 40px;
          background: #F8F8F8;
          color: #0B0014;
          border: none;
          border-radius: 6px;
          padding: 0 12px; /* default inner horizontal padding */
          font-size: 13px;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
        }

        .form-input::placeholder {
          color: rgba(11, 0, 20, 0.6);
        }

        .submit-btn {
          width: 120px;
          height: 40px;
          background: black;
          color: white;
          border: none;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .submit-btn:hover {
          background: #333;
        }

        /* 375px and above */
        @media (min-width: 375px) {
          .contact-title {
            font-size: 22px;
            max-width: 360px;
            margin-bottom: 2.25rem;
          }

          .contact-form {
            padding: 0 12px;
          }

          .form-input {
            height: 42px;
            padding: 0 14px;
            font-size: 13.5px;
          }

          .submit-btn {
            width: 130px;
            height: 42px;
            font-size: 15px;
          }
        }

        /* 425px and above */
        @media (min-width: 425px) {
          .contact-title {
            font-size: 28px;
            max-width: 420px;
            margin-bottom: 3rem;
          }

          .contact-form {
            padding: 0 16px;
          }

          .form-input {
            height: 44px;
            padding: 0 16px;
            font-size: 14px;
          }

          .submit-btn {
            width: 140px;
            height: 44px;
            font-size: 15px;
          }
        }

  /* 769px and above (desktop/tablet) */
  @media (min-width: 769px) {
          .contact-title {
            font-size: 36.65px; /* original desktop size */
            max-width: 500px;
            margin-bottom: 3rem;
          }

          .contact-form {
            padding: 0;
          }

          .form-input {
            height: 45px;
            padding: 0 16px;
            font-size: 14px;
          }

          .submit-btn {
            width: 150px;
            height: 45px;
            font-size: 16px;
          }
        }

        /* ---------- Upload label adjustments ---------- */
        /* Reduce left padding specifically for the label on small screens so the text is closer to the left */
        .upload-label {
          padding-left: 8px; /* slightly smaller than default 12px from .form-input */
          justify-content: flex-start;
        }

        /* Style the span inside upload label to match placeholder text exactly */
        .upload-label span {
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(11, 0, 20, 0.6); /* Match placeholder color exactly */
        }

        /* keep label contents vertically centered */
        .upload-label input[type="file"] {
          display: none; /* already hidden via class but keep for safety */
        }

        /* Restore padding on larger screens so layout stays symmetric */
        @media (min-width: 375px) {
          .upload-label span {
            font-size: 13.5px; /* Match form input font size at this breakpoint */
          }
        }

        @media (min-width: 425px) {
          .upload-label {
            padding-left: 12px; /* match other inputs on larger screens */
          }
          
          .upload-label span {
            font-size: 14px; /* Match form input font size at this breakpoint */
          }
        }

  @media (min-width: 769px) {
          .upload-label span {
            font-size: 14px; /* Match form input font size at desktop */
          }
        }

        /* Mobile layout tweaks for <=769px */
        @media (max-width: 769px) {
          .triple-row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
          }

          .triple-row .form-input {
            height: 40px;
            padding: 0 8px;
            font-size: 13px;
          }

          .budget-upload-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }

          .address-input {
             padding-top: 30px;
  padding-bottom: 30px;

            padding-left: 14px;
            padding-right: 14px;
            min-width: 0;
          }
        }
      `}</style>

  <section id="contact" className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-xl mx-auto px-2 sm:px-4 lg:px-8">
          <h2 className="contact-title">Contact Us</h2>

          <form onSubmit={handleSubmit} className="contact-form space-y-4 sm:space-y-6">
            {/* Grid inputs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
              <input
                type="text"
                placeholder="Company Name"
                className="form-input"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="form-input"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
           
            </div>
            
               <input
                type="text"
                placeholder="Email address"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            <input
              type="text"
              placeholder="Fabric & Print Method"
              className="form-input"
              value={fabric}
              onChange={(e) => setFabric(e.target.value)}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 triple-row">
              <input
                type="text"
                placeholder="Sizes"
                className="form-input"
                value={sizes}
                onChange={(e) => setSizes(e.target.value)}
              />
              <input
                type="text"
                placeholder="Quantity"
                className="form-input"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <input
                type="text"
                placeholder="Deadline"
                className="form-input sm:col-span-2 lg:col-span-1"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            <input
              type="text"
              placeholder="Address"
              className="form-input address-input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 budget-upload-row">
              <input
                type="text"
                placeholder="Budget"
                className="form-input"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />

              {/* Applied upload-label and removed ml-2 from span */}
              <label
                htmlFor="file-upload"
                className="form-input flex items-center cursor-pointer upload-label"
              >
                <span>{fileName || 'Upload File'}</span>
                <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} />
              </label>
            </div>

            {/* Submit button */}
            <div className="text-center pt-2">
              <button
                type="submit"
                className="submit-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Submit'}
              </button>
              <div style={{ marginTop: 16 }}>
                {status === 'success' && <span style={{ color: 'black' }}>Message has been sent - We will contact you shortly.</span>}
                {status === 'error' && <span style={{ color: 'red' }}>Submission failed. Please try again.</span>}
                {errorMsg && <div style={{ color: 'red', marginTop: 6, fontSize: 13 }}>{errorMsg}</div>}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}