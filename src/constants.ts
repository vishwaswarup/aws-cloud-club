import { Event } from './types';

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Localhost to Cloud Host: Build & Deploy',
    date: 'April 1, 2026',
    time: '10:00 AM - 1:00 PM',
    venue: 'LHC 103 AB4',
    shortDescription: 'Learn the fundamentals of AWS and how to deploy your first application.',
    fullDescription: 'This workshop is designed for beginners who want to dive into the world of Cloud Computing. We will cover EC2, S3, and Lambda basics, followed by a hands-on session where you will deploy a static website on AWS.',
    speaker: {
      name: 'Shubham Londhe',
      designation: 'Senior Developer Advocate',
      image: 'src/images/shubhamlondhe.jpeg',
    },
  },
  {
    id: '2',
    title: 'Serverless Architecture Talk',
    date: 'May 5, 2026',
    time: '2:00 PM - 4:00 PM',
    venue: 'Seminar Hall B',
    shortDescription: 'Explore the power of serverless computing with AWS Lambda and API Gateway.',
    fullDescription: 'Join us for an insightful talk on how serverless architecture is changing the way we build and scale applications. Learn about cost optimization and event-driven designs.',
    speaker: {
      name: 'Jane Smith',
      designation: 'Senior Cloud Engineer at TechCorp',
      image: 'https://picsum.photos/seed/jane/300/300',
    },
  },
];
