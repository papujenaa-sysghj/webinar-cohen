// Centralized mock/static configuration for the webinar.
// Update these values to change copy across the whole app without touching components.

export const webinarConfig = {
  institution: "Cohen International School",
  institutionShort: "Cohen International",
  title: "Exclusive Webinar with the Chairman of Cohen International School",
  tagline: "An exclusive online session for parents and students",

  chairman: {
    name: "Mr. Jyoti Ranjan Tripathy",
    designation: "Founder & Chairman, Cohen International School",
    education: "Mechanical Engineering — IIT Kharagpur",
    bio:
      "Mr. Jyoti Ranjan Tripathy, Founder & Chairman - Cohen International School. Studied Mechanical Engineering at Indian Institute of Technology (IIT) Kharagpur. After a brief stint in top MNCs, pursued his passion in teaching and founded Vidwan Classes - a premier IIT & Medical entrance institute of Odisha. To further strengthen grassroots education, he founded Cohen International School spread over 10 acres of land near IIT Bhubaneswar.",
    photo: null, // placeholder — replace with real image path when available
  },

  webinar: {
    date: "Wednesday, 28 October 2026",
    time: "6:00 PM – 7:00 PM IST",
    mode: "Online Webinar",
    note: "Limited Registrations · Parent & Student Orientation",
  },

  fee: 49,
  currencySymbol: "₹",

  payment: {
    upiId: "coheninternationalschoo@iob",
    payeeName: "Cohen International School",
  },

  whatsappCommunityUrl: "https://chat.whatsapp.com/REPLACE_WITH_REAL_LINK",

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

  registrationIdPrefix: "CIS-WEB-2026",
};

export default webinarConfig;
