import { ExperienceI } from "../models/Experience.interface";
import { ProjectI } from "../models/Project.interface";

export const projects:ProjectI[] = [
    {
        name: 'Todo application',
        description: 'This application is built ReactJS and redux. It is deployed on netlify.',
        source: 'https://github.com/DhanashreeSB/react-redux-todoApp',
        live: 'https://todoapp-dhanashree.netlify.app'
    },
    {
        name: 'Book store web application',
        description: 'This application is built using HTML and CSS and Bootstrap. It is deployed on GitHub Pages.',
        source: 'https://github.com/DhanashreeSB/static-book-store-bootstrap-webapp',
        live: 'https://dhanashreesb.github.io/static-book-store-bootstrap-webapp/'
    },
    {
        name: 'Dashboard using bootstrap',
        description: 'This application is built using HTML and CSS and Bootstrap. It is deployed on GitHub Pages.',
        source: 'https://github.com/DhanashreeSB/static-bootstrap-dashboard',
        live: 'https://dhanashreesb.github.io/static-bootstrap-dashboard/'
    },
    {
        name: 'Book store web application',
        description: 'This application is built using HTML and CSS and Bootstrap. It is deployed on GitHub Pages.',
        source: 'https://github.com/DhanashreeSB/static-book-store-bootstrap-webapp',
        live: 'https://dhanashreesb.github.io/static-book-store-bootstrap-webapp/'
    },
    {
        name: 'PhotoX webapp',
        description: 'This application is built using HTML and CSS and Bootstrap. It is deployed on GitHub Pages.',
        source: 'https://github.com/DhanashreeSB/static-photoX-bootstrap-website',
        live: 'https://dhanashreesb.github.io/static-photoX-bootstrap-website/'
    },
    {
        name: 'Static bootstrap web app',
        description: 'This application is built using HTML and CSS and Bootstrap. It is deployed on GitHub Pages.',
        source: 'https://github.com/DhanashreeSB/static-bootstrap-website',
        live: 'https://dhanashreesb.github.io/static-bootstrap-website/'
    },
    {
        name: 'Omnifood static web application',
        description: 'This application is built using HTML and CSS and is deployed on netlify.',
        source: 'https://github.com/DhanashreeSB/static-omnifood-webapp',
        live: 'https://omnifood-dhanashree.netlify.app/'
    },
    {
        name: 'Hand gesture recognition',
        description: 'Application is built using Python flask framework. It is capable of converting both static and dynamic gestures.',
        source: 'https://github.com/DhanashreeSB/ASL-Gesture-Recognition',
        live: ''
    },
    {
        name: 'Recommendation system',
        description: 'Application is built using Python Django framework. It is capable of recommending tunes based on genre of books using content based filtering. Worked with collaborative filtering as well in the jupyter ntebook.',
        source: 'https://github.com/DhanashreeSB/recommendation-system',
        live: ''
    },
    {
        name: 'Spam filter',
        description: 'Application is built using Java swing. It is capable of filtering spam and ham messages based on Naive Bayes algorithm.',
        source: 'https://github.com/DhanashreeSB/Spam-Filter',
        live: ''
    }
]

export const experiencesTCS: ExperienceI[] = [
    {
        title: 'PWAs',
        experience: 'Created three responsive progressive web apps ground up from scratch in ReactJS, typescript, TailwindCSS, and mobx.'
    },
    {
        title:'Microsoft Graph API',
        experience:`Worked with Microsoft Graph API to add an event to the user's Outlook calendar and to fetch the user's profile image.`
    },
    {
        title: 'Themes',
        experience:'Implemented dark and blue themes along with default light theme in the applications.'
    },
    {
        title: 'Dashboard',
        experience:'Worked with the Highcharts library to plot a gauge chart, bar chart, line chart, and pie chart to display analytics in the dashboard.'
    },
    {
        title: 'Dependancy Injection',
        experience:'Implemented dependency injection in ReactJS using InversifyJS which encouraged the use of best OOP practices in the code and helped to remove redundant mock code inside unit test cases.'
    },
    {
        title: 'API integration',
        experience:'Integrated the APIs using the axios package in ReactJS.'
    },
    {
        title: 'Azure function apps',
        experience:'Worked with Azure function apps and created a back-end API in NodeJS.'
    },
    {
        title: 'Unit testing',
        experience:'Worked with Jest to write unit test cases of ReactJS components.'
    }
]

export const experiencesGetStartedLLP: ExperienceI[] = [
    {
        title: 'Android app development',
        experience: 'Android app developed for IoT application'
    },
    {
        title: 'Hadoop administration',
        experience: 'Studied Hadoop administration and worked with hive, sqoop on cloud platform'
    }
]