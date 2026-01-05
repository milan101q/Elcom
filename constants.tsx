
import { Service } from './types';

export const BUSINESS_INFO = {
  name: "Elcom Remodeling LLC",
  address: "26610 Nimbleton Square, Chantilly, VA 20152",
  location: "Chantilly, VA",
  phone: "(703) 317-7668",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26610+Nimbleton+Square+Chantilly+VA+20152",
  reviewUrl: "https://www.google.com/maps/place/Elcom+Remodeling+LLC/@38.8938795,-77.4941664,17z/data=!4m8!3m7!1s0x89b64f6602aba931:0xc584ee4b906842d4!8m2!3d38.8938795!4d-77.4941664!9m1!1b1!16s%2Fg%2F12cpmw5px?authuser=0&hl=en&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D",
  hours: {
    monFri: "09:00 — 17:00",
    sat: "Closed",
    sun: "Closed"
  },
  facilities: [
    { label: "Licensed & Insured", icon: "🛡️" },
    { label: "Master Electricians", icon: "⚡" },
    { label: "Code Compliant", icon: "📋" },
    { label: "Locally Owned", icon: "📍" },
    { label: "Professional Estimates", icon: "💰" }
  ]
};

export const SERVICES: Service[] = [
  {
    id: 'el1',
    name: "Panel Upgrades",
    description: "Full service panel replacements and capacity upgrades for modern power demands.",
    duration: "Varies",
    category: 'Treatment'
  },
  {
    id: 'el2',
    name: "Smart Integration",
    description: "Intelligent lighting controls, smart panel setups, and home automation systems.",
    duration: "Varies",
    category: 'Treatment'
  },
  {
    id: 'el3',
    name: "Remodeling Wiring",
    description: "Expert wiring for kitchen and bath renovations, ensuring code compliance and safety.",
    duration: "Varies",
    category: 'Treatment'
  },
  {
    id: 'el4',
    name: "EV Charging",
    description: "Professional installation of high-speed Level 2 electric vehicle charging stations.",
    duration: "Varies",
    category: 'Treatment'
  },
  {
    id: 'el5',
    name: "Safety Inspections",
    description: "Comprehensive electrical audits to identify hazards and optimize energy usage.",
    duration: "Varies",
    category: 'Treatment'
  },
  {
    id: 'el6',
    name: "Commercial Fit-outs",
    description: "Architectural lighting and power distribution for professional commercial spaces.",
    duration: "Varies",
    category: 'Treatment'
  },
  {
    id: 'el7',
    name: "AND MORE",
    description: "Inquire for details",
    duration: "Varies",
    category: 'Treatment'
  }
];
