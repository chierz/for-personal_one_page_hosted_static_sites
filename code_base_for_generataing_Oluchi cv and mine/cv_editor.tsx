"use client"

import { useState, useRef } from "react"
import { Edit2, Printer, Save } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CVEditor() {
  const [isEditing, setIsEditing] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    window.print()
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleSave = () => {
    setIsEditing(false)
    // In a real app, you would save the content here
    alert("CV saved successfully!")
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-[210mm] mx-auto mb-8 bg-white shadow-md">
        <div className="sticky top-0 z-10 flex justify-end gap-2 p-4 bg-white border-b">
          <Button variant="outline" size="sm" onClick={toggleEdit} className="flex items-center gap-1">
            <Edit2 className="h-4 w-4" />
            {isEditing ? "Cancel Editing" : "Edit"}
          </Button>
          {isEditing && (
            <Button variant="default" size="sm" onClick={handleSave} className="flex items-center gap-1">
              <Save className="h-4 w-4" />
              Save
            </Button>
          )}
          <Button variant="outline" size="sm" onClick={handlePrint} className="flex items-center gap-1">
            <Printer className="h-4 w-4" />
            Print
          </Button>
        </div>

        <div
          ref={contentRef}
          contentEditable={isEditing}
          suppressContentEditableWarning={true}
          className={`cv-content ${isEditing ? "editing" : ""}`}
        >
          <div className="a4-page">
            <div className="grid grid-cols-[300px_1fr] gap-5">
              {/* Sidebar (Left Column) */}
              <div className="bg-[#3c2a56] text-white p-5">
                <div className="text-center mb-5">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-25%20at%2018.47.05_f0aa1cc0.jpg-F0jfvIzMtIVPApmrZrCqrfjiduRjjx.jpeg"
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover inline-block"
                  />
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">ABOUT ME</h3>
                  <p className="text-sm leading-relaxed">
                    Qualified and dynamic registered accident and emergency nurse with 10 years of experience in
                    high-turnover emergency rooms. Specialized in triage and immediate emergency care for trauma
                    patients. Proven track record in delivering quality, individualized care across various units
                    including Accident and Emergency, Adult Surgical, Adult Medical, and Critical Care. Self-motivated,
                    flexible, compassionate, and efficient nurse with excellent communication skills. Experienced in
                    managing challenging situations and making patients feel informed and comfortable. Seeking a
                    position with an organization that rewards hard work and offers opportunities for career
                    development.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">EDUCATION</h3>
                  <ul className="space-y-3">
                    <li>
                      <strong>Bachelor of Science, Nursing Science</strong>
                      <br />
                      Ladoke Akintola University of Technology, Ogbomoso, Oyo State
                      <br />
                      2019 - 2023
                    </li>
                    <li>
                      <strong>Accident and Emergency Nursing</strong>
                      <br />
                      School of Post Basic Accident and Emergency, National Orthopaedic Hospital, Dala Kano State
                      <br />
                      November 2016 - November 2017
                    </li>
                    <li>
                      <strong>Nursing Diploma</strong>
                      <br />
                      School of Nursing, Bishop Shannahan Hospital, Nsukka, Enugu
                      <br />
                      October 2011 - November 2014
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">CERTIFICATIONS</h3>
                  <ul className="space-y-1 text-sm">
                    <li>NHCPS-Save a Life BLS Certification (2024)</li>
                    <li>NHCPS-Save a Life PALS Certification (2024)</li>
                    <li>NHCPS-Save a Life ACLS Certification (2024)</li>
                    <li>NHCPS- CPR, AED, and First Aid Certification (2024)</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">LICENSES &amp; REGISTRATIONS</h3>
                  <ul className="space-y-1 text-sm">
                    <li>Registered Accident and Emergency Nurse (2021)</li>
                    <li>Registered Nurse (2015)</li>
                    <li>BLS, PALS, ACLS, CPR, AED, and First Aid (2024)</li>
                  </ul>
                </div>
              </div>

              {/* Main Content (Right Column) */}
              <div className="p-5">
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-[#3c2a56] mb-1">NEBEOKIKE THERESA OLUCHUKWU</h1>
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    Bachelor of Nursing Science, Registered Accident &amp; Emergency Nurse, Registered Nurse
                  </p>
                  <div className="text-sm text-gray-600 space-y-0.5">
                    <p>No 7 blessed trinity Oduke Obosi, Anambra State, Nigeria</p>
                    <p>08160559010</p>
                    <p>theresaoluchukwu@example.com</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold border-b-2 border-[#3c2a56] pb-1 mb-4">WORK EXPERIENCE</h2>
                  <div className="mb-6">
                    <div className="text-sm text-gray-600 text-right">May 2022 - Present</div>
                    <div>
                      <h3 className="text-base font-bold text-gray-800 mt-1">University Teaching Hospital</h3>
                      <p className="text-sm text-gray-600">Ituku-Ozalla, Enugu State, Nigeria</p>
                      <h4 className="text-base font-bold text-[#3c2a56] mt-2">RN-ACCIDENT AND EMERGENCY NURSE</h4>
                      <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
                        <li>Triage patients during mass casualties and assess risks using vital signs</li>
                        <li>Collaborate with ER professionals to ensure effective patient care</li>
                        <li>Perform focused assessments and monitor patient conditions</li>
                        <li>
                          Administer fluids, stabilize fractures, and perform medical procedures (ECG, cardiac
                          monitoring)
                        </li>
                        <li>Facilitate patient transfers and provide counseling to patients and relatives</li>
                        <li>Educate junior staff and maintain nursing care standards</li>
                        <li>Ensure accurate documentation and accountability in patient care</li>
                        <li>Coordinate with hospital departments for patient transfers and surgeries</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="text-sm text-gray-600 text-right">Sep 2022 - Present</div>
                    <div>
                      <h3 className="text-base font-bold text-gray-800 mt-1">Jesus Care Maternity Home</h3>
                      <p className="text-sm text-gray-600">Maryland, Enugu, Nigeria</p>
                      <h4 className="text-base font-bold text-[#3c2a56] mt-2">ACCIDENT AND EMERGENCY NURSE</h4>
                      <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
                        <li>Admit patients using nursing care plan tools and perform comprehensive assessments</li>
                        <li>Dress wounds using aseptic techniques and remove stitches as prescribed</li>
                        <li>Monitor and document patient vital signs and observations</li>
                        <li>Educate patients on medication compliance and follow-up appointments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional page template - content will flow here if needed */}
          <div className="a4-page">
            <div className="p-5">
              <h2 className="text-xl font-bold border-b-2 border-[#3c2a56] pb-1 mb-4">ADDITIONAL INFORMATION</h2>
              <p className="text-sm text-gray-700">
                Add any additional information, skills, or achievements here. This page will only be visible when
                content overflows from the first page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

