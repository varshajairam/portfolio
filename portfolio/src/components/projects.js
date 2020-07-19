import React from 'react';
import { Item, Segment } from 'semantic-ui-react';

let projectDetails = [{
  "name": "Zipcar Prototype", "techStack": ["Java, ", "Hibernate, ", "Spring Boot, ", "React, ", "MySQL, ", "Apache Maven, ", "AWS, ", "Docker"],
  "description": "A car rental application for users to book vehicles at fixed rates based on duration. Vehicles can be found by location or zipcode. Admin functionality is also built-in.",
  "role": "Implemented Java APIs for registration, feedback, admin and membership modules. Dockerized and deployed the JAR file to an auto-scaled EC2 cluster with a load balancer.", "image": "zipcar.png"
},
{
  "name": "Amazon Prototype", "techStack": ["React + Redux, ", "Node.js, ", "Express.js, ", "Kafka, ", "MongoDB, ", "AWS, ", "Docker"],
  "description": "3-tier distributed application hosted on AWS EC2 with Confluent Cloud for Kafka. Includes customer, seller and admin modules along with analytics.",
  "role": "Implemented end-to-end functionality for Shopping Cart, Save for Later and Checkout features.", "image": "amazon.png"
},
{
  "name": "Handshake Prototype", "techStack": ["React + Redux, ", "Node.js, ", "Express.js, ", "MongoDB, ", "GraphQL, ", "AWS, ", "Docker"], "description": "Job search portal for students and recruiters.",
  "link": "https://youtu.be/WLBFtFOFcHM", "role": "Developed a 3-tier application with JWT and Passport.js for user authentication. Used Kafka clusters for horizontal scalability. Containerized and deployed the application to an EC2 instance.",
  "image": "handshake.png"
},
{
  "name": "Play Along", "techStack": ["Angular + Ionic, ", "Node.js, ", "MySQL, ", "Cordova"], "description": "A hybrid mobile application to connect players for sporting events and coaching in and around the user’s location.",
  "role": "Implemented the home page displaying all games and the create game feature. Also implemented a wallet integrated with Stripe to handle payments.", "image": "playalong2.png"
},
{
  "name": "Backpackers United", "techStack": ["PHP, ", "MySQL, ", "HTML, ", "CSS, ", "Bootstrap"], "description": "Travel-based application with hiking trail information, user reviews and search functionality.",
  "role": "Built a website with user registration and search. Included cookies for tracking most-visited pages and CURL to access other websites. Hosted at https://codemode.tech using Apache 2.0.", "image": "backpackers.png"
},
{
  "name": "Marketplace", "techStack": ["PHP, ", "CSS Bootstrap, ", "MySQL, ", "DigitalOcean"], "description": "Cross-Domain enterprise online marketplace of five member companies having user registration, user action tracking, reviews/ratings for products and services offered, top five products/services in each member company as well as the whole marketplace.",
  "link": "https://youtu.be/t0VxVwhww6Y", "role": "Integrated services offered by Backpackers United by making the relevant GET and POST calls. Designed the DB schema.", "image": "marketplace.png"
},
{
  "name": "Stock Portfolio Suggestion Engine", "techStack": ["Python, ", "React, ", "JavaScript, ", "AWS"], "description": "User can enter the amount to invest and pick upto two investment strategies. Based on the input data, the application suggests how the amount could be divided among different stocks or ETFs using each strategy so as to maximize profit.",
  "link": "https://youtu.be/CcbEgTyCg18", "role": "Displayed a stock indices carousel on the home page by fetching the latest data for major indices. Also hosted the application on AWS.", "image": "stockengine.png"
},
{
  "name": "Credit Card Validation Using Java Design Patterns", "techStack": ["Java, ", "JSON, ", "CSV, ", "XML, ", "Apache Maven"], "description": "Given a list of credit card details in CSV, JSON and XML format, the Java program verifies the credit card number, classifies the type of credit card and writes the result to an output file of the same format.",
  "role": "Used Template Method, Factory and Chain of Responsibility design patterns to parse the input file, determine credit card number validity and type, and finally generate an output file with the results for each card.", "image": "creditcard.png"
},
{
  "name": "SpeechTexter Testing", "techStack": ["Java"], "tools": ["Appium, ", "Selenium, ", "IntelliJ, ", "Vysor"], "description": "SpeechTexter is a speech-to-text converter, which takes audio input from several different languages and converts it into text in the corresponding language script. Testing of the application was carried out using manual, AI and automation testing approaches. The quality and performance of each approach were analyzed.",
  "role": "Performed complete automation testing by writing Java scripts and using device drivers.", "image": "testing1.png"
},
{
  "name": "Sudoku Solution Validator", "techStack": ["C++"], "description": "A solved 9x9 sudoku puzzle was sent to a C++ program which determined the validity of the solution using multi-threading. Validation was performed with 11, 15 and 27 threads for each row, column and 3x3 subgrid. The runtime for each thread count was analyzed.",
  "role": "Implemented multi-threading validation using 11 and 15 threads respectively.", "image": "sudoku2.png"
}];

const projects = projectDetails.map(project => {
  return (<Item>
    <Item.Image size='large' bordered src={project.image} />

    <Item.Content>
      <Item.Header>{project.name}</Item.Header>
      <Segment raised color='purple'><Item.Meta>
        <span className='price'><strong>Tech Stack: </strong>{project.techStack}</span>
        {project.tools && <span className='price'><strong>Tools: </strong>{project.tools}</span>}
      </Item.Meta>
  <Item.Description><strong>Description: </strong>{project.description} {project.link && <a href = {project.link} target = '_blank' rel = 'noopener noreferrer'>Watch the demo here.</a>}</Item.Description>
        <Item.Description><strong>Role: </strong>{project.role}</Item.Description></Segment>
    </Item.Content>
  </Item>)
});

const Project = () => (

  <Item.Group>
    {
      projects
    }
  </Item.Group>
)

export default Project;