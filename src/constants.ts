import { Event } from './types';

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Localhost to Cloud Host: Build & Deploy',
    date: 'April 1, 2026',
    time: '10:30 AM - 12:30 PM',
    venue: 'LHC 103 AB4',
    shortDescription: 'Learn the fundamentals of AWS and how to deploy your first application.',
    fullDescription: 'This workshop is designed for beginners who want to dive into the world of Cloud Computing. We will cover EC2, S3, and Lambda basics, followed by a hands-on session where you will deploy a static website on AWS.',

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
    fullDescription: 'The AWS Cloud Club MUJ was officially launched with an inspiring inaugural event...',

    // 🔥 OPTIONAL (since registration closed)
    meetupLink: '',

    registrationOpen: false,
    speakers: [
      {
        name: 'Mr. Pawan Sharma',
        designation: 'AWS Community Builder',
        image: '/images/pawansharma.jpeg',
        bio: 'Delivered an insightful session on AWS fundamentals...',
      },
      {
        name: 'Mr. Somil Jain',
        designation: 'Cloud Engineer at Celebal Technologies',
        image: '/images/somiljain.jpeg',
        bio: 'Shared practical industry experiences...',
      },
    ],

    recap: {
      title: 'Launch Event Recap',
      paragraphs: [
        'We are excited to share that the AWS Cloud Club MUJ...',
        'A special thank you to our esteemed speaker...',
        'We would also like to extend our sincere gratitude...',
      ],
      photos: [
        '/images/aws-launch-event.jpeg',
        '/images/Pawansharmaspeaking.png',
        '/images/aws-launchevent-members.jpeg',
      ],
    },
  },
];
