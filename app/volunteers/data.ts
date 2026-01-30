export interface Volunteer {
  id: string;
  name: string;
  role: string;
  image: string;
  email: string;
  phone: string;
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface LeadershipMember {
  id: string;
  name: string;
  position: string;
  image: string;
  email: string;
  phone: string;
  bio: string;
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export const leadership: LeadershipMember[] = [
  {
    id: "cgo-1",
    name: "Ramesh Kumar",
    position: "Chief Green Officer (CGO)",
    image: "/avatar.png",
    email: "ramesh@cleanday.org",
    phone: "+977-1-1234567",
    bio: "Visionary founder and environmental activist with 15+ years of experience in community-led conservation efforts.",
    social: {
      facebook: "https://facebook.com/rameshkumar",
      instagram: "https://instagram.com/rameshkumar",
      linkedin: "https://linkedin.com/in/rameshkumar",
    },
  },
  {
    id: "coord-1",
    name: "Priya Sharma",
    position: "Overall Coordination Head",
    image: "/avatar.png",
    email: "priya@cleanday.org",
    phone: "+977-1-1234568",
    bio: "Experienced program manager coordinating nationwide initiatives and volunteer networks.",
    social: {
      facebook: "https://facebook.com/priyasharma",
      instagram: "https://instagram.com/priyasharma",
      linkedin: "https://linkedin.com/in/priyasharma",
    },
  },
];

export const volunteers: Record<string, Volunteer[]> = {
  "Volunteer Coordinator": [
    {
      id: "vc-1",
      name: "Anup Paudel",
      role: "Volunteer Coordinator",
      image: "/avatar.png",
      email: "anup.paudel@cleanday.org",
      phone: "+977-9841234567",
      social: {
        facebook: "https://facebook.com/anuppaudel",
        instagram: "https://instagram.com/anuppaudel",
        linkedin: "https://linkedin.com/in/anuppaudel",
      },
    },
    {
      id: "vc-2",
      name: "Sunita Rao",
      role: "Volunteer Coordinator",
      image: "/avatar.png",
      email: "sunita.rao@cleanday.org",
      phone: "+977-9842345678",
      social: {
        facebook: "https://facebook.com/sunitarao",
        instagram: "https://instagram.com/sunitarao",
        linkedin: "https://linkedin.com/in/sunitarao",
      },
    },
    {
      id: "vc-3",
      name: "Bikram Singh",
      role: "Volunteer Coordinator",
      image: "/avatar.png",
      email: "bikram.singh@cleanday.org",
      phone: "+977-9843456789",
      social: {
        facebook: "https://facebook.com/bikramsingh",
        instagram: "https://instagram.com/bikramsingh",
        twitter: "https://twitter.com/bikramsingh",
      },
    },
  ],
  "Social Media & Content Creator": [
    {
      id: "sc-1",
      name: "Maya Thapa",
      role: "Social Media & Content Creator",
      image: "/avatar.png",
      email: "maya.thapa@cleanday.org",
      phone: "+977-9844567890",
      social: {
        facebook: "https://facebook.com/mayathapa",
        instagram: "https://instagram.com/mayathapa",
        linkedin: "https://linkedin.com/in/mayathapa",
      },
    },
    {
      id: "sc-2",
      name: "Dev Niroula",
      role: "Social Media & Content Creator",
      image: "/avatar.png",
      email: "dev.niroula@cleanday.org",
      phone: "+977-9845678901",
      social: {
        facebook: "https://facebook.com/devniroula",
        instagram: "https://instagram.com/devniroula",
        twitter: "https://twitter.com/devniroula",
      },
    },
    {
      id: "sc-3",
      name: "Isha Gurung",
      role: "Social Media & Content Creator",
      email: "isha.gurung@cleanday.org",
      image: "/avatar.png",
      phone: "+977-9846789012",
      social: {
        facebook: "https://facebook.com/ishagurung",
        instagram: "https://instagram.com/ishagurung",
        linkedin: "https://linkedin.com/in/ishagurung",
      },
    },
  ],
  "Regional Volunteer (Green Champion)": [
    {
      id: "gc-1",
      name: "Dinesh Magar",
      role: "Regional Volunteer - Kathmandu",
      image: "/avatar.png",
      email: "dinesh.magar@cleanday.org",
      phone: "+977-9847890123",
      social: {
        facebook: "https://facebook.com/dineshmagar",
        instagram: "https://instagram.com/dineshmagar",
        linkedin: "https://linkedin.com/in/dineshmagar",
      },
    },
    {
      id: "gc-2",
      name: "Kavita Lama",
      role: "Regional Volunteer - Pokhara",
      image: "/avatar.png",
      email: "kavita.lama@cleanday.org",
      phone: "+977-9848901234",
      social: {
        facebook: "https://facebook.com/kavitalama",
        instagram: "https://instagram.com/kavitalama",
        twitter: "https://twitter.com/kavitalama",
      },
    },
    {
      id: "gc-3",
      name: "Rajesh Khanal",
      role: "Regional Volunteer - Biratnagar",
      image: "/avatar.png",
      email: "rajesh.khanal@cleanday.org",
      phone: "+977-9849012345",
      social: {
        facebook: "https://facebook.com/rajeshkhanal",
        instagram: "https://instagram.com/rajeshkhanal",
        linkedin: "https://linkedin.com/in/rajeshkhanal",
      },
    },
    {
      id: "gc-4",
      name: "Amisha Singh",
      role: "Regional Volunteer - Lalitpur",
      email: "amisha.singh@cleanday.org",
      image: "/avatar.png",
      phone: "+977-9840123456",
      social: {
        facebook: "https://facebook.com/amishasingh",
        instagram: "https://instagram.com/amishasingh",
        linkedin: "https://linkedin.com/in/amishasingh",
      },
    },
  ],
  "General Member (Green Warrior)": [
    {
      id: "gw-1",
      name: "Arjun Dahal",
      role: "Green Warrior",
      image: "/avatar.png",
      email: "arjun.dahal@cleanday.org",
      phone: "+977-9841234560",
      social: {
        facebook: "https://facebook.com/arjundahal",
        instagram: "https://instagram.com/arjundahal",
      },
    },
    {
      id: "gw-2",
      name: "Neha Pandey",
      role: "Green Warrior",
      email: "neha.pandey@cleanday.org",
      image: "/avatar.png",
      phone: "+977-9842234561",
      social: {
        facebook: "https://facebook.com/nehapandey",
        instagram: "https://instagram.com/nehapandey",
        twitter: "https://twitter.com/nehapandey",
      },
    },
    {
      id: "gw-3",
      name: "Sanjay Tamang",
      role: "Green Warrior",
      image: "/avatar.png",
      email: "sanjay.tamang@cleanday.org",
      phone: "+977-9843234562",
      social: {
        facebook: "https://facebook.com/sanjaytamang",
        instagram: "https://instagram.com/sanjaytamang",
      },
    },
    {
      id: "gw-4",
      name: "Riya Bista",
      role: "Green Warrior",
      image: "/avatar.png",

      email: "riya.bista@cleanday.org",
      phone: "+977-9844234563",
      social: {
        facebook: "https://facebook.com/riyabista",
        instagram: "https://instagram.com/riyabista",
        linkedin: "https://linkedin.com/in/riyabista",
      },
    },
    {
      id: "gw-5",
      name: "Kiran Adhikari",
      role: "Green Warrior",
      image: "/avatar.png",

      email: "kiran.adhikari@cleanday.org",
      phone: "+977-9845234564",
      social: {
        facebook: "https://facebook.com/kiranadhikari",
        instagram: "https://instagram.com/kiranadhikari",
      },
    },
    {
      id: "gw-6",
      name: "Deepa Shakya",
      role: "Green Warrior",
      image: "/avatar.png",

      email: "deepa.shakya@cleanday.org",
      phone: "+977-9846234565",
      social: {
        facebook: "https://facebook.com/deepashakya",
        instagram: "https://instagram.com/deepashakya",
        twitter: "https://twitter.com/deepashakya",
      },
    },
  ],
};
