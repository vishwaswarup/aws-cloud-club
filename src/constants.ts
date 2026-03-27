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
    shortDescription: 'We are excited to share that the AWS Cloud Club MUJ at Manipal University Jaipur has been officially launched, bringing together students passionate about cloud computing, innovation, and emerging technologies.',
    fullDescription: 'The AWS Cloud Club MUJ was officially launched with an inspiring inaugural event, bringing together students eager to explore cloud computing, AWS technologies, and future career opportunities in the cloud domain. The session featured valuable insights from industry experts like Pawan Sharma and Somil Jain, making it a strong start to building a vibrant and innovative cloud community on campus.',
    registrationOpen: false,
    speakers: [
      {
        name: 'Mr. Pawan Sharma',
        designation: 'AWS Community Builder',
        image: '/images/pawansharma.jpeg',
        bio: 'Delivered an insightful session on AWS fundamentals, cloud opportunities, and student growth paths.',
      },
      {
        name: 'Mr. Somil Jain',
        designation: 'Cloud Engineer at Celebal Technologies',
        image: '/images/somiljain.jpeg',
        bio: 'Joined virtually to share practical industry experiences and guidance for students entering cloud roles.',
      },
    ],
    recap: {
      title: 'Launch Event Recap',
      paragraphs: [
        'We are excited to share that the AWS Cloud Club MUJ at Manipal University Jaipur has been officially launched, bringing together students passionate about cloud computing, innovation, and emerging technologies. The inaugural event marked the beginning of a vibrant cloud community on campus where students explored AWS, cloud technologies, and career pathways in the cloud industry.',
        'A special thank you to our esteemed speaker Mr. Pawan Sharma, AWS Community Builder, for delivering an insightful session on AWS, cloud computing, and opportunities in the cloud ecosystem. We were also delighted to have Mr. Somil Jain, Cloud Engineer at Celebal Technologies who joined us virtually and shared valuable insights on industry experiences and guidance for students entering the cloud domain. We sincerely thank Dr. Satyabrata Roy Sir for kindly joining us today on such a special day that marks the beginning of this club. We would also like to express our gratitude to Professor Dr. C. S. Lamba, our Head of Department, Dr. Neha Chaudhary, along with our Faculty Coordinator Vaishali Chauhan and Co-Faculty Coordinator Dr. Divya Thakur for their constant support and encouragement in making this initiative possible',
        'We would also like to extend our sincere gratitude to the AWS Cloud Clubs team Lisa Bagley, CPACC, Tracy Wang, Arkodyuti Saha, Nayoung Miller Won and Ridhima Kapoor for creating and supporting this incredible platform that empowers student communities to explore cloud technologies and innovation. Heartfelt thanks to all organizers, volunteers and attendees who made this AWS Cloud Club MUJ event successful.',
      ],
      photos: [
        '/images/aws-launch-event.jpeg',
        '/images/Pawansharmaspeaking.png',
        '/images/aws-launchevent-members.jpeg',
      ],
    },
  },
];
