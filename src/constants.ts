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
      image: '/images/shubhamlondhe.jpeg',
    },
  },
];
