import reactLogo from '../../images/logos/logo-react.svg';
import webpackLogo from '../../images/logos/logo-webpack.svg';
import reduxLogo from '../../images/logos/logo-redux.svg';
import backboneLogo from '../../images/logos/logo-backbone.svg';
import nodeLogo from '../../images/logos/logo-node.png';
import mysqlLogo from '../../images/logos/logo-mysql.png';
import materialLogo from '../../images/logos/logo-material.svg';
import railsLogo from '../../images/logos/logo-rails.png';
import merakiLogo from '../../images/logos/logo-meraki.jpg';
import jqueryLogo from '../../images/logos/logo-jquery.png';
import mailgunLogo from '../../images/logos/logo-mailgun.png';
import expressLogo from '../../images/logos/logo-express.png';
import awsLogo from '../../images/logos/logo-aws.png';
import codeshipLogo from '../../images/logos/logo-codeship.png';
import htmlLogo from '../../images/logos/logo-html.png';
import cssLogo from '../../images/logos/logo-css.png';
import bootstrapLogo from '../../images/logos/logo-bootstrap.png';
import ldapLogo from '../../images/logos/logo-ldap.png';
import reactReduxMaterialLogo from '../../images/logos/logo-react-redux-material.png';
import s3Logo from '../../images/logos/logo-s3.png';
import knexLogo from '../../images/logos/logo-knex.png';
import mongoLogo from '../../images/logos/logo-mongo.png';
import herokuLogo from '../../images/logos/logo-heroku.png';
import firebaseLogo from '../../images/logos/logo-firebase.svg';

import tbtrakProject from '../../images/screenshots/screenshots-tbtrak-projects.png';
import tbtrakTime from '../../images/screenshots/screenshots-tbtrak-time.png';
import tbtrakReports from '../../images/screenshots/screenshots-tbtrak-reports.png';
import tbtrakInvoice from '../../images/screenshots/screenshots-tbtrak-invoice.png';
import tbtrakInvoices from '../../images/screenshots/screenshots-tbtrak-invoices.png';
import hobblitImage from '../../images/screenshots/screenshots-hobblit-image.png';
import hobblitCities from '../../images/screenshots/screenshots-hobblit-cities.png';
import pawprintLogoImage from '../../images/screenshots/screenshots-pawprint-login.png';
import pawprintStaffListImage from '../../images/screenshots/screenshots-pawprint-stafflist.png';
import pawprintUserImage from '../../images/screenshots/screenshots-pawprint-user.png';
import pawprintUnsubscribe from '../../images/screenshots/screenshots-pawprint-unsubscribe.png';
import faxerLogoImage from '../../images/screenshots/screenshots-faxer-login.png';
import faxerSendImage from '../../images/screenshots/screenshots-faxer-send.png';
import faxerFaxesImage from '../../images/screenshots/screenshots-faxer-faxes.png';
import goofOffChat from '../../images/screenshots/screenshots-goofoff-firebase.png';
import goofOffSketch from '../../images/screenshots/screenshots-goofoff-sketch.png';
import goofOffAndroid from '../../images/screenshots/screenshots-goofoff-android.png';
import railsLogin from '../../images/screenshots/screenshots-rails-login.png';

const projectData = [
  {      
    id: 9,
    title: 'Meraki CLI GUI', 
    logos: [merakiLogo, htmlLogo, cssLogo], 
    colors: {
      text: 'white',   
      background: '#1E1F26',
    },
    image: 'http://placekitten.com/g/300/150',   
    screenshots: [], 
    details: [`Our team manages the networks of nearly 90 locations. In order to 
      calculate subnets for each site a small tool was used to interact with a Meraki 
      API to calculate the information needed for each subnet.`,
      
      `This was an application built using an LDAP authenticated Express API to handle 
      the calls to Meraki and a simple HTML form on the front end. This was hosted on 
      AWS.`],
    techStack: ['HTML', 'CSS', 'Node', 'Meraki Dashboard API'],
  },
  {      
    id: 8,
    title: 'Faxer', 
    logos: [reactReduxMaterialLogo, s3Logo, expressLogo, nodeLogo], 
    colors: {
      text: 'white',   
      background: '#283655',
    },
    image: 'http://placekitten.com/g/300/150',    
    screenshots: [faxerLogoImage, faxerSendImage, faxerFaxesImage], 
    details: [`Since faxing refuses to die, we figured we’d may hay while the sun 
    shines and create an online faxing solution. Using Faxer, users can manage 
    individual faxing accounts with a dedicated fax number. Organizations can 
    also manage a group of fax number for their employees or departments. 
    Customers send and receive faxes and are billed monthly based on their plan.`,

      `The original app was built using PHP. Version 2 was built using a Laravel API. 
    The fax images are stored on AWS S3 and Phaxio is used as the fax API. 
    On the client side, React, Redux, Axios and Webpack are used to communicate 
    with the API. I built the client side code.`],
    techStack: ['React', 'Redux', 'Axios', 'AWS S3', 'Phaxio API'],
    
  },
  {      
    id: 7,
    title: 'Orca', 
    logos: [expressLogo, webpackLogo, reactLogo, mongoLogo, herokuLogo], 
    colors: {
      text: 'white',   
      background: '#1E1F26',
    },
    image: 'http://placekitten.com/g/300/150',   
    techStack: ['React', 'Redux', 'Axios', 'AWS S3', 'Phaxio API'],
    details: [`According to Public Health Agency of Canada roughly 2,500 people in Canada
    died in 2016 due to opioid overdoses. Drugs like Naloxone are used to counter the 
    effects of an opioid overdose but many people are unaware of its existence or 
    available locations. This mobile app help by showing users in real time where the 
    nearest Naloxone kit can be found based on their location.`,

      `The mobile app itself is 
    built using Ionic framework and will be available on the Apple and Google Play App 
    stores this month. The backend is a simple Express app using a MongoLabs hosted 
    mongoDB database. There is also a dashboard for administrative updates and 
    reporting built using a React front end and an Express backend. The user can 
    upload a csv of site information and the server will, convert the file to JSON, 
    update each location with GPS locations via Google API and publish to the database.`],    
    screenshots: [], 
    projectLink: 'http://getorca.co/',
  },
  {      
    id: 6,
    title: 'CASL Project', 
    logos: [mailgunLogo, webpackLogo, reactLogo, reduxLogo, codeshipLogo], 
    colors: {
      text: 'white',   
      background: '#283655',
    },
    image: 'http://placekitten.com/g/300/150',  
    details: [`Because a client didn’t want to use a mail subscription service like
     Mailchip, I built a mailing list subscription manager for 80+ company sites 
     Canada wide. Customers could update their subscription status via email link. 
     Sure, it was reinventing the wheel, but that’s what we were paid to do.`,  
    
      `This consisted of an API that pulled info from a separate internal company API
     to find user and site information. Via Mailgun the app then emailed the parties 
     notifying them of subscription status change and removed them from a mailing 
     list. The front end was built using a custom HTML page. The backend was an 
     Express app launched on AWS behind a load balancer.`],
    screenshots: [pawprintUnsubscribe], 
    techStack: ['React', 'Redux', 'Webpack', 'Mailgun', 'Codeship'],    
  },
  {
    id: 1,
    title: 'TbTrak', 
    logos: [backboneLogo, nodeLogo, mysqlLogo, awsLogo, knexLogo],   
    colors: {
      text: 'white',   
      background: '#1E1F26',
    },
    details: [`TbTrak tracks employee time, active projects and clients, manage 
    expenses/expense reports and generating invoices based on those items.  Custom 
    reporting of all billable and non-billable activity can be generated by admin 
    staff. Due to the custom needs of the company, an out of the box solution 
    wouldn’t cut it.`,
    
      `The client is built using Backbone.js and jQuery.  The app manages user 
    permissions and has token based authentication built into the API. The 
    server-side code is an Express based API using MySQL, Knex.js for schema 
    building and Bookshelf.js ORM for simple queries.  The more complicated queries 
    are all custom SQL queries.`],
    image: 'http://placekitten.com/g/300/150',
    screenshots: [tbtrakProject, tbtrakTime, tbtrakReports, tbtrakInvoice, tbtrakInvoices],
    techStack: ['Backbone', 'jQuery', 'MySQL', 'Knex', 'Bookshelf', 'JWT', 'AWS EC2'],    
    sections: [
      {
        title: 'Description',
        details: [`An SPA built to track billable and non billable expenditures for an insurance investigation firm.
            The company's use cases and needed features required a custom software solution. They tracked clients by company, location
            and personnel. Invoices were generated from captured employee time and expenditures. Custom reports could be generated
            from a number of given inputs. TbTrak was designed to replace a legacy MS Access database that would only run on Windows XP.
            We were happy to oblige. `,
          
          `The client is built using Backbone.js and jQuery.  The app manages user permissions and has token based 
            authentication built into the API. The server-side code is an Express based API using MySQL, Knex.js for 
            schema building and Bookshelf.js ORM for simple queries.  The more complicated queries are all custom 
            SQL queries.`,
        ],
      },
      {
        title: 'Front end',
        sections: [
          {
            title: 'Backbone',
            details: 'Front end modeling, routing and view handling.',
          },
          {
            title: 'Underscore',
            details: 'Templating & Helper functions',
          },
        ],
      },
      {
        title: 'Back end',
        sections: [
          {
            title: 'API',
            details: 'Built on Node.js with express.js routing component.',
          },
          {
            title: 'Database',
            details: `The application sits a top a mySQL database that uses a Bookshelf ORM for relationship
                            and query managment.  Custom queries were created to handle use cases Bookshelf
                            was not designed for. For creating the database schema I used Knex.js.`,
          },
          {
            title: 'Authentication',
            details: 'JWT for stateless authentication and login system.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Pawprint',   
    logos: [reactReduxMaterialLogo, awsLogo, webpackLogo, mysqlLogo, ldapLogo],   
    colors: {
      text: 'white',   
      background: '#283655',
    },
    details: [`Using LDAP user authentication, Pawprint is a web app used for managing
    our client’s active company sites, management personnel and employee contact 
    information. This was created to replace a bunch of giant Excel spreadsheets.`, 
    
      `The app consisted of a Node.js Express API with a MySQL database load balanced and 
    deployed on AWS. Client-side code was built using React/Redux with ES6 and 
    transpiled with Webpack. I was the sole developer on this project. All commits and 
    production updates were tested through Codeship.`],
    image: 'http://placekitten.com/g/300/150',
    screenshots: [pawprintLogoImage, pawprintStaffListImage, pawprintUserImage], 
    techStack: ['React', 'Redux', 'Axios', 'Webpack', 'MySQL', 'Express', 'JWT', 'EC2', 'ELB'],        
    sections: [
      {
        title: 'Description',
        details: `An SPA that manages a companies contacts and allows various deaprtments to update and add contacts.
            Each department is a seperate entity under the company entity. Department heads and regional leads are managed as well.
            With integration into Active Directory, this application is working toward becoming the master company directory. In addition,
            this application manages email subscribers to each department.`,
      },
      {
        title: 'Front end',
        sections: [
          {
            title: 'React & Redux',
            details: 'Application view and data-layer.  Client side search and sorting are also provided.',
          },
        ],
      },
      {
        title: 'Back end',
        sections: [
          {
            title: 'API',
            details: 'Built on Node.js with express.js routing component.',
          },
          {
            title: 'Database',
            details: `The application sits a top a mySQL database that uses a Bookshelf ORM for relationship
                            and query managment.  Custom queries were created to handle use cases Bookshelf
                            was not designed for. For creating the database schema I used Knex.js.`,
          },
          {
            title: 'Authentication',
            details: 'JWT for stateless authentication and login system.',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Hobblit', 
    logos: [htmlLogo, cssLogo, jqueryLogo, bootstrapLogo],   
    colors: {
      text: 'white',   
      background: '#1E1F26',
    },
    details: [`Hobblit was a startup aimed at pairing people with interesting skills with
     those who wanted to learn and meet people.  Think Etsy for hobbies. Our small team 
     of 3 developers created the app from scratch. We had payment portals, user login 
     and permissions, scheduling and hosted content for users.  Sadly, due to a lack of 
     funding, Hobblit shut down in early 2017.`,
    
      `The web application was built using Ruby on Rails with a custom-built theme.  I did 
    client-side work in the user sign up, event and login sections of the application.`],
    image: 'http://placekitten.com/g/300/150',
    screenshots: [hobblitCities, hobblitImage],
    projectLink: 'http://makemoves.work/pages/hobblit_landing_page/html/index.html', 
    techStack: ['Ruby on Rails', 'HTML', 'CSS', 'PostgreSQL'],        
    sections: [
      {
        title: 'Description',
        details: `Hobblit was designed for as a place for hobby enthusiasts to share their passion and knowledge with
            people in ther community. Do you have a skill or talent you can show people? Post a class and let people sign up.`,
      },
      {
        title: 'Front end',
        sections: [
          {
            title: 'Ruby on Rails w/ HTML templates',
            details: 'Front end modeling, routing and view handling.',
          },
        ],
      },
      {
        title: 'Back end',
        sections: [
          {
            title: 'API',
            details: 'A RESTful API built on Rails and allowed for user, event, location and participant CRUD.',
          },
          {
            title: 'Database',
            details: 'The application is built on a PostgreSQL database.',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Rails Twitter Clone',    
    logos: [railsLogo, mailgunLogo, bootstrapLogo, herokuLogo],   
    colors: {
      text: 'white',   
      background: '#283655',
    },
    details: [`One of my early dives into Ruby on Rails.  This application is a 
    Twitter-esque clone. A user can sign up for an account, make posts, follow other users,
    and reset their password via email if forgotten.`,
    
      `The app is built on Ruby on Rails with a PostgreSQL DB and hosted on Heroku.  It takes
    a bit to load as it is on the free plan. Patience is a virtue. Pardon the lack of styling.`],
    image: 'http://placekitten.com/g/300/150',
    screenshots: [railsLogin], 
    projectLink: 'https://dry-caverns-8224.herokuapp.com/',
    techStack: ['Ruby on Rails', 'Mailgun', 'PostgreSQL', 'Heroku'],        
    sections: [
      {
        title: 'Description',
        details: `An application built with user sign up and authentication. Once signed up the user receives an email allowing them to
            verify their accoun. Once a user is verified they can create posts and follow others.`,
      },
      {
        title: 'Front end',
        sections: [
          {
            title: 'HTML & Rails',
            details: 'Front end modeling, form validation, routing and view handling.',
          },
        ],
      },
      {
        title: 'Back end',
        sections: [
          {
            title: 'API',
            details: 'Built on Node.js with express.js routing component.',
          },
          {
            title: 'Database',
            details: 'PostgreSQL database.',
          },
          {
            title: 'Authentication',
            details: 'JWT for stateless authentication and login system paired with sendgrid for user email verification.',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Goof off website',  
    logos: [firebaseLogo, htmlLogo, cssLogo, herokuLogo],    
    colors: {
      text: 'white',   
      background: '#1E1F26',
    },
    details: [`Built a long time ago and in galaxy far far away, this website is a
    mix of various widgets and doodads. I kept it around for the chat style bulletin board
    widget. It's the chat app you never knew you wanted.`,
      `The site is custom HTML/CSS/Javascript.  The chat widget is built using firebase
    and the client updates whenever the database changes. At the bottom you can meet a
    cute Android.  He is very friendly and built using CSS.`],
    image: 'http://placekitten.com/g/300/150',
    screenshots: [goofOffChat, goofOffSketch, goofOffAndroid],     
    projectLink: 'http://makemoves.work/pages/make-moves/make-moves-index.html',
    techStack: ['HTML', 'CSS', 'jQuery', 'FIrebase'],    
    sections: [
      {
        title: 'Chat App',
        details: `Learning to use Firebase I've added a (very) basic chat app.
            User enters their name and their message and it lives on forever in this website.  It's the chat app you never knew you wanted. `,
      },
      {
            
        title: 'CSS Android',
        details: 'Can you make an interactive android without Javacript? Yes, you can.',
      },
      {
        title: 'Doodle with jQuery',
        details: `A small drawing app made with jQuery.  It is like an Etch A Sketch. Not because it's really fun,
            but because you can't save your work. :)`,
      },
                
    ],
  },
];

export default projectData;
