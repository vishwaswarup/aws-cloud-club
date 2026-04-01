import { Event } from './types';

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Localhost to Cloud Host: Build & Deploy',
    date: 'April 1, 2026',
    time: '10:30 AM - 12:30 PM',
    venue: 'LHC 103 AB4',
    shortDescription: 'A hands-on AWS Cloud Club workshop where participants build a backend application using Python and Flask while understanding real-world development workflows.',
    fullDescription: 'The “Localhost to Cloud Host: Build & Deploy” workshop is a hands-on session organized by the AWS Cloud Club at Manipal University Jaipur. The workshop aims to provide participants with a practical understanding of how backend applications are developed and structured using modern technologies. During the session, participants will build a backend application using Python and Flask, gaining insight into how applications are designed, managed, and prepared for deployment. The focus is on understanding the development workflow and the key components involved in taking an application beyond the local environment. This workshop is conducted in a hybrid mode, allowing participants to join both offline and online, ensuring accessibility to a wider audience. The session will be led by Shubham Londhe, who will guide participants through the process with a focus on clarity and practical learning.',

    // 🔥 ADD THIS
    meetupLink: 'https://www.meetup.com/aws-cloud-club-at-manipal-university-jaipur/events/313966432/',

    registrationOpen: true,
    speakers: [
      {
        name: 'Shubham Londhe',
        designation: 'Senior Developer Advocate',
        image: '/images/shubhamlondhe.jpeg',
        bio: 'Senior Developer Advocate focused on helping developers build and ship cloud-native apps on AWS.',
      },
    ],
  },

  {
    id: '2',
    title: 'LAUNCH EVENT',
    date: 'March 12, 2026',
    time: '10:30 AM - 12:30 PM',
    venue: 'LHC 103 AB4',
    shortDescription: 'We are excited to share that the AWS Cloud Club MUJ at Manipal University Jaipur has been officially launched...',
    fullDescription: 'The AWS Cloud Club MUJ was officially launched with an inspiring inaugural event, marking the beginning of a dynamic cloud-focused student community at Manipal University Jaipur. The event brought together enthusiastic students eager to explore cloud computing, AWS technologies, and future career opportunities in this domain. The session was graced by esteemed speakers Mr. Pawan Sharma and Mr. Somil Jain, who shared valuable insights into the world of cloud, industry trends, and practical career guidance. Their experiences and perspectives provided students with a clear understanding of real-world applications of AWS and the growing importance of cloud technologies. The event set a strong foundation for innovation, collaboration, and learning, encouraging students to actively engage, build projects, and grow within the AWS ecosystem.',

    // 🔥 OPTIONAL (since registration closed)
    meetupLink: '',

    registrationOpen: false,
    speakers: [
      {
        name: 'Mr. Pawan Sharma',
        designation: 'AWS Community Builder',
        image: '/images/pawansharma.jpeg',
        bio: 'Delivered an insightful session on AWS fundamentals.',
      },
      {
        name: 'Mr. Somil Jain',
        designation: 'Cloud Engineer at Celebal Technologies',
        image: '/images/somiljain.jpeg',
        bio: 'Shared practical industry experiences.',
      },
    ],

    recap: {
      title: 'Launch Event Recap',
      paragraphs: [
        'We are excited to share that the AWS Cloud Club MUJ has been officially launched at Manipal University Jaipur.',
        'A special thank you to our esteemed speakers, Mr. Pawan Sharma and Mr. Somil Jain, for sharing their valuable insights and experiences.',
        'We would also like to extend our sincere gratitude to our Faculty Coordinator, Ms. Vaishali Chauhan, for helping the club function so seamlessly',
      ],
      photos: [
        '/images/aws-launch-event.jpeg',
        '/images/Pawansharmaspeaking.png',
        '/images/aws-launchevent-members.jpeg',
      ],
    },
  },
];
