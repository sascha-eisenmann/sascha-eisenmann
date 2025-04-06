import profileImage from './profile.jpg'
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { faXing } from '@fortawesome/free-brands-svg-icons'

export const contact = {
  phone: '0162 3092194',
  email: 'consulting@eisenmann.it',
  xing: 'xing.com/profile/Sascha_Eisenmann3',
  address: {
    line1: 'Building A2 IFZA Business Park',
    line2: 'Dubai Silicon Oasis',
    line3: 'United Arab Emirates',
  },
}

export const profile = {
  personal: {
    name: 'Sascha Eisenmann',
    jobTitle: 'IT Consultant & Software Engineer',
    image: profileImage,
    company: 'Eisenmann IT Consulting - FZCO',
    insurance: {
      name: 'Hiscox SA',
      address: { street: ' Arnulfstraße 31', city: '80636 München' },
      scope: 'Germany',
    },
    vatId: undefined,
  },
  contact: [
    { icon: faPhone, value: contact.phone },
    { icon: faEnvelope, value: contact.email },
    { icon: faXing, value: contact.xing, type: 'link' },
    { icon: faLocationDot, value: 'Dubai' },
  ],
  competencies: {
    Backend: [
      { title: 'Java', level: 90 },
      { title: 'Spring Boot', level: 85 },
      { title: 'Camunda', level: 80 },
    ],
    Frontend: [
      { title: 'Javascript', level: 70 },
      { title: 'React', level: 80 },
      { title: 'Angular', level: 70 },
      { title: 'Vue.js', level: 70 },
    ],
    DevOps: [
      { title: 'Terraform', level: 80 },
      { title: 'Kubernetes', level: 70 },
      { title: 'Github Actions', level: 60 },
      { title: 'AWS', level: 50 },
    ],
  },
  education: [
    {
      title: 'IT-Specialist in Systems Integration',
      subtitle: 'it.schule Stuttgart',
      from: '2009',
      to: '2012',
    },
  ],
  certifications: [
    {
      title: 'Professional Scrum Master',
      subtitle: 'PSM I',
      authority: 'scrum.org',
      date: '03/2018',
    },
  ],
}
