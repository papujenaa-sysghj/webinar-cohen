// Centralized mock/static configuration for the webinar.
// Update these values to change copy across the whole app without touching components.

export const webinarConfig = {
  institution: "Cohen International School",
  institutionShort: "Cohen International",
  logo: "/logo.png",
  title: "Exclusive Webinar with the Chairman of Cohen International School",
  tagline: "How to Secure 95%+ in 10th Board Exams & Build a Strong Foundation for IIT/Medical",

  chairman: {
    name: "Mr. Jyoti Ranjan Tripathy",
    designation: "Founder & Chairman, Cohen International School",
    education: "Mechanical Engineer — IIT Kharagpur",
    bio:
      "Mr. Jyoti Ranjan Tripathy, Founder & Chairman - Cohen International School. Studied Mechanical Engineering at Indian Institute of Technology (IIT) Kharagpur. After a brief stint in top MNCs, pursued his passion in teaching and founded Vidwan Classes - a premier IIT & Medical entrance institute of Odisha. To further strengthen grassroots education, he founded Cohen International School spread over 10 acres of land near IIT Bhubaneswar.",
    photo: "/chairman.png",
  },

  webinar: {
    date: "Wednesday, 28 October 2026",
    time: "6:00 PM – 7:30 PM IST",
    mode: "Online Webinar",
    note: "Limited Registrations · Parent & Student Orientation",
    video: "/cohen-school-compressed.mp4",
  },

  fee: 49,
  currencySymbol: "₹",
  registrationIdPrefix: "CIS-WEB",

  // Google Apps Script Web App URL
  googleSheetScriptUrl: "https://script.google.com/macros/s/AKfycbxa6koR6h7aAjU6o8DvFrnzHlvw_b-RAhRHO58s9T-mb8Pr5BjbjMkAAPK1Ln0Y4qg5eg/exec",

  payment: {
    upiId: "coheninternationalschoo@iob",
    payeeName: "Cohen International School",
  },

  whatsappCommunityUrl: "https://chat.whatsapp.com/FLm4xUYG8FVIWcAu0rrmlv",

  highlights: [
    {
      title: "Meet the Chairman",
      description: "Hear directly from Mr. Jyoti Ranjan Tripathy, Founder & Chairman.",
      icon: "UserRound",
    },
    {
      title: "Understand Cohen International School",
      description: "Get an overview of the institution and its campus.",
      icon: "Landmark",
    },
    {
      title: "Academic Vision",
      description: "Learn about the school's approach to academics.",
      icon: "BookOpenCheck",
    },
    {
      title: "Student Development",
      description: "Understand the school's focus on holistic student growth.",
      icon: "Sprout",
    },
    {
      title: "Entrance Preparation",
      description: "An overview of entrance-focused preparation at the school.",
      icon: "PenSquare",
    },
    {
      title: "Residential Schooling",
      description: "Learn about the residential facilities offered at the campus.",
      icon: "Building2",
    },
  ],

  odishaDistricts: [
    "Angul",
    "Balangir",
    "Balasore",
    "Bargarh",
    "Bhadrak",
    "Boudh",
    "Cuttack",
    "Deogarh",
    "Dhenkanal",
    "Gajapati",
    "Ganjam",
    "Jagatsinghpur",
    "Jajpur",
    "Jharsuguda",
    "Kalahandi",
    "Kandhamal",
    "Kendrapara",
    "Kendujhar (Keonjhar)",
    "Khordha",
    "Koraput",
    "Malkangiri",
    "Mayurbhanj",
    "Nabarangpur",
    "Nayagarh",
    "Nuapada",
    "Puri",
    "Rayagada",
    "Sambalpur",
    "Subarnapur (Sonepur)",
    "Sundargarh",
    "Other (Outside Odisha)",
  ],

  registrationIdPrefix: "CIS-WEB-2026",
};

export default webinarConfig;
