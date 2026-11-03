import {
  BookOpen, HeartPulse, Recycle, Droplets, HandHeart, GraduationCap,
  Sprout, Users, Home, BriefcaseBusiness
} from 'lucide-react'

export const trust = {
  name: 'Jan Kalyan Samarpan Trust',
  hindiName: 'जन कल्याण समर्पण ट्रस्ट',
  tagline: 'सेवा से संस्कार और समर्पण से समाज निर्माण',
  address: 'Khasra No. 193/23, Main Delhi Road, Bawana, Delhi – 110039',
  phone: '', // Add the official public contact number before launch.
  email: '', // Add the official public email address before launch.
  settlor: 'Shri Shalender Kumar',
  trustees: [
    { name: 'Shri Vikas Yadav', role: 'Trustee' },
    { name: 'Shri Dinesh Singh', role: 'Trustee' }
  ],
  establishmentYear: '2026'
}

// These are focus areas derived from the trust deed's stated aims and objects.
// They should not be read as confirmation that every programme is currently running.
export const focusAreas = [
  {
    icon: BookOpen,
    title: 'Education & scholarships',
    description: 'Supporting educational opportunities through schools, learning institutions, libraries, reading rooms, student assistance and scholarships.'
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & medical assistance',
    description: 'Advancing medical relief, health institutions, dispensaries, hospitals and information that supports disease prevention and wellbeing.'
  },
  {
    icon: Recycle,
    title: 'Cleanliness & sanitation',
    description: 'Promoting cleaner rural and urban communities through hygiene awareness, waste collection and responsible waste disposal.'
  },
  {
    icon: Droplets,
    title: 'Water conservation',
    description: 'Encouraging efficient water use and supporting the cleanliness and upkeep of water bodies such as tanks and wells.'
  },
  {
    icon: HandHeart,
    title: 'Support for those in need',
    description: 'Providing or supporting charitable assistance for economically weaker and deserving people without discrimination.'
  },
  {
    icon: GraduationCap,
    title: 'Skills & vocational learning',
    description: 'Encouraging technical, industrial, commercial and vocational learning that can help people develop skills and livelihoods.'
  },
  {
    icon: Sprout,
    title: 'Environment & pollution control',
    description: 'Supporting environmental awareness, pollution control and responsible care for natural resources.'
  },
  {
    icon: Home,
    title: 'Community welfare facilities',
    description: 'The deed includes objectives relating to community institutions and facilities such as dharamshalas and public-benefit spaces.'
  },
  {
    icon: Users,
    title: 'Child & women welfare',
    description: 'Promoting awareness and charitable support relating to child welfare, female welfare and access to helpful information.'
  },
  {
    icon: BriefcaseBusiness,
    title: 'Institutional support',
    description: 'Supporting charitable institutions and organisations working towards similar or allied public-benefit objectives.'
  }
]
