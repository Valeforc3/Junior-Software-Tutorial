import React from 'react';
export const tasks = [
  {
    title: 'GitHub Fundamentals',
    description: 'Learn version control and collaboration',
    subtasks: [
      'Understand why GitHub is important for team development',
      'Master branching strategies for parallel work',
      'Explore CI/CD pipelines for automated testing'
    ]
  },
  {
    title: 'UI & Infrastructure',
    description: 'Build the foundation',
    subtasks: [
      'Create UI layout and document design choices',
      'Choose and set up hosting provider',
      'Create sitemap for navigation structure'
    ]
  },
  {
    title: 'Authentication & Security',
    description: 'Secure your application',
    subtasks: [
      'Implement native authentication provider',
      'Add multiple auth methods for flexibility',
      'Set up logging and alerting systems'
    ]
  },
  {
    title: 'Backend & Features',
    description: 'Implement core functionality',
    subtasks: [
      'Implement SQL component for data management',
      'Integrate web analytics tracking',
      'Create web application framework'
    ]
  }
];

export default function Tasks() {
  return null; // or render UI if needed
}