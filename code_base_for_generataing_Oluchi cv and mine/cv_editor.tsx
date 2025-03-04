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
                    src="data:image/webp;base64,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"
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
                  <h1 className="text-3xl font-bold text-[#3c2a56] mb-1">NEBEchukwu onyeafulukwe cyprain</h1>
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    Bachelor of Nursing Science, Registered Accident &amp; Emergency Nurse, Registered Nurse
                  </p>
                  <div className="text-sm text-gray-600 space-y-0.5">
                    <p>No18 awada trinity Oduke Obosi, Lagos State, Nigeria</p>
                    <p>08156293400</p>
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

