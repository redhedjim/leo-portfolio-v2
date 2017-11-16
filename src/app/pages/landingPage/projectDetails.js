const projectData = [{
  id: 1,
  title: 'TbTrak',    
  details: `A single page application built on MySQL and Backbone for tracking time and expenses, 
    creating invoices and managing company contacts.`,
  image: 'http://placekitten.com/g/200/200',
  sections: [
    {
      title: 'Description',
      details: `An SPA built to track billable and non billable expenditures for an insurance investigation firm.
            The comapny's use cases and needed features required a custom software solution. They tracked clients by company, location
            and personnel. Invoices were generated from captured employee time and expenditures. Custom reports could be generated
            from a number of given inputs. TbTrak was designed to replace a legacy MS Access database that would only run on Windows XP.
            We were happy to oblige. `,
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
  details: `Does working with too many spreadsheets throughout too many departments make your head spin? Mine too. This application
    is the answer to managing a company's multitude of data sources.`,
  image: 'http://placekitten.com/g/200/200',
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
  details: `A hobby enthusiast website built with the sharing economy in mind. The website is no more but 
    the landing page lives on.`,
  image: 'http://placekitten.com/g/200/200',
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
  title: 'Rails App',    
  details: 'One of my early dives into Ruby on Rails.  This application is a Twitter clone of sorts.  Pardon the lack of styling.',
  image: 'http://placekitten.com/g/200/200',
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
  details: `A mix of various widgets and doodads. Once day I'll consolidate them into a single site. Today is not that day.
    Most of the app is built with HTML & CSS.  Some Javascript is thrown in for good measure here and there.  
    My first website built without a template.`,
  image: 'http://placekitten.com/g/200/200',
  sections: [
    {
      title: 'Chat App',
      details: `Learning to use Firebase I've added a (very) basic chat app.
            User entres their name and their message and it lives on forever in this website.  It's the chat app you never knew you wanted. `,
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
