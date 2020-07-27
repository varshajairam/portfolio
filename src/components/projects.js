import React from 'react';
import { Item, Image, Segment, Button, Modal, Icon, Grid, Header } from 'semantic-ui-react';

let projectDetails = [{
  "name": "Zipcar Prototype", "techStack": ["Java, ", "Hibernate, ", "Spring Boot, ", "React, ", "MySQL, ", "Apache Maven, ", "AWS, ", "Docker"],
  "description": "A car rental application for users to book vehicles at fixed rates based on duration. Vehicles can be found by location or zipcode. Admin functionality is also built-in.",
  "role": "Implemented Java APIs for registration, feedback, admin and membership modules. Dockerized and deployed the JAR file to an auto-scaled EC2 cluster with a load balancer.", "images": [{"name": "zipcar1.png", "description": "Home Page"}, {"name": "zipcar2.png", "description": "Admin Dashboard"}],
  "link": "https://github.com/varshajairam/hire-n-hop"
},
{
  "name": "Amazon Prototype", "techStack": ["React + Redux, ", "Node.js, ", "Express.js, ", "Kafka, ", "MongoDB, ", "AWS, ", "Docker"],
  "description": "3-tier distributed application hosted on AWS EC2 with Confluent Cloud for Kafka. Includes customer, seller and admin modules along with analytics.",
  "role": "Implemented end-to-end functionality for Shopping Cart, Save for Later and Checkout features.", "images": [{"name": "amazon1.png", "description": "Architecture"}, {"name": "amazon2.png", "description": "View Products"}, {"name": "amazon3.png", "description": "View Product Details"}, {"name": "amazon4.png", "description": "Shopping Cart"}, {"name": "amazon5.png", "description": "Order Details"}],
  "link": "https://github.com/varshajairam/Amazon-Prototype"
},
{
  "name": "Handshake Prototype", "techStack": ["React + Redux, ", "Node.js, ", "Express.js, ", "MongoDB, ", "GraphQL, ", "AWS, ", "Docker"], "description": "Job search portal for students and recruiters.",
  "demo": "https://youtu.be/WLBFtFOFcHM", "role": "Developed a 3-tier application with JWT and Passport.js for user authentication. Used Kafka clusters for horizontal scalability. Containerized and deployed the application to an EC2 instance.",
  "images": [{"name": "handshake1.png", "description": "Architecture"}, {"name": "handshake2.png", "description": "Login"}, {"name": "handshake3.png", "description": "Student Profile"}, {"name": "handshake4.png", "description": "Create Job (Company)"}, {"name": "handshake5.png", "description": "Job Dashboard (Company)"}, {"name": "handshake6.png", "description": "Message Inbox"}, {"name": "handshake7.png", "description": "View Resume"}], "link": "https://bitbucket.org/varsharp/handshake/src/master/"
},
{
  "name": "Play Along", "techStack": ["Angular + Ionic, ", "Node.js, ", "MySQL, ", "Cordova"], "description": "A hybrid mobile application to connect players for sporting events and coaching in and around the user’s location.",
  "role": "Implemented the home page displaying all games and the create game feature. Also implemented a wallet integrated with Stripe to handle payments.", "images": [{"name": "playalong.png", "description": "Architecture"}, {"name": "playalong1.png", "description": "Login"}, {"name":"playalong2.png", "description": "View Games"}, {"name": "playalong3.png", "description": "View Classes"}, {"name": "playalong4.png", "description": "Wallet"}, {"name": "playalong5.png", "description": "Create Complaint"}, {"name": "playalong6.png", "description": "Admin Dashboard"}, {"name": "playalong7.png", "description": "View Complaints (Admin)"}],
  "link": "https://github.com/varshajairam/Play-Along"
},
{
  "name": "Backpackers United", "techStack": ["PHP, ", "MySQL, ", "HTML, ", "CSS, ", "Bootstrap"], "description": "Travel-based application with hiking trail information, user reviews and search functionality.",
  "role": "Built a website with user registration and search. Included cookies for tracking most-visited pages and CURL to access other websites. Hosted using Apache 2.0.", "images": [{"name": "backpackers1.png", "description": "Home Page"}, {"name": "backpackers2.png", "description": "About"}, {"name": "backpackers3.png", "description": "Select Trail"}, {"name": "backpackers4.png", "description": "View Trail Details"}, {"name": "backpackers5.png", "description": "News Board and Customer Reviews"}, {"name": "backpackers6.png", "description": "User Registration and Search"}],
  "link": "https://github.com/varshajairam/BackpackersUnited"
},
{
  "name": "Marketplace", "techStack": ["PHP, ", "CSS Bootstrap, ", "MySQL, ", "DigitalOcean"], "description": "Cross-Domain enterprise online marketplace of five member companies having user registration, user action tracking, reviews/ratings for products and services offered, top five products/services in each member company as well as the whole marketplace.",
  "demo": "https://youtu.be/t0VxVwhww6Y", "role": "Integrated services offered by Backpackers United by making the relevant GET and POST calls. Designed the DB schema.", "images": [{"name": "marketplace1.png", "description": "Login"}, {"name": "marketplace2.png", "description": "View Products"}, {"name": "marketplace3.png", "description": "View Product Details"}, {"name": "marketplace4.png", "description": "Load Wallet Balance"}, {"name": "marketplace5.png", "description": "Buy Product"}, {"name": "marketplace6.png", "description": "Order Confirmation"}],
  "link": "https://github.com/varshajairam/Marketplace"
},
{
  "name": "Stock Portfolio Suggestion Engine", "techStack": ["Python, ", "React, ", "JavaScript, ", "AWS"], "description": "User can enter the amount to invest and pick upto two investment strategies. Based on the input data, the application suggests how the amount could be divided among different stocks or ETFs using each strategy so as to maximize profit.",
  "demo": "https://youtu.be/CcbEgTyCg18", "role": "Displayed a stock indices carousel on the home page by fetching the latest data for major indices. Also hosted the application on AWS.", "images": [{"name": "stockengine1.png", "description": "Home Page"}, {"name": "stockengine2.png", "description": "Enter Investment Amount"}, {"name": "stockengine3.png", "description": "Select Strategy"}, {"name": "stockengine4.png", "description": "Review Stock Selection"}, {"name": "stockengine5.png", "description": "Complete Purchase"}, {"name": "stockengine6.png", "description": "Review Portfolio"}, {"name": "stockengine7.png", "description": "Weekly Trend of Portfolio"}, {"name": "stockengine8.png", "description": "Chatbot"}],
  "link": "https://github.com/varshajairam/285-term-project-portfolio-suggestion"
},
{
  "name": "Credit Card Validation Using Java Design Patterns", "techStack": ["Java, ", "JSON, ", "CSV, ", "XML, ", "Apache Maven"], "description": "Given a list of credit card details in CSV, JSON and XML format, the Java program verifies the credit card number, classifies the type of credit card and writes the result to an output file of the same format.",
  "role": "Used Template Method, Factory and Chain of Responsibility design patterns to parse the input file, determine credit card number validity and type, and finally generate an output file with the results for each card.", "images": [{"name": "creditcard.png", "description": "XML Output"}],
  "link": "https://github.com/varshajairam/credit-card-validation"
},
{
  "name": "SpeechTexter Testing", "techStack": ["Java"], "tools": ["Appium, ", "Selenium, ", "IntelliJ, ", "Vysor"], "description": "SpeechTexter is a speech-to-text converter, which takes audio input from several different languages and converts it into text in the corresponding language script. Testing of the application was carried out using manual, AI and automation testing approaches. The quality and performance of each approach were analyzed.",
  "role": "Performed complete automation testing by writing test scripts and using device drivers.", "images": [{"name": "testing.png", "description": ""}], "link": "https://github.com/varshajairam/speech-texter-automation", "demo": "https://youtu.be/6sCb3gM2G6w"
},
{
  "name": "Sudoku Solution Validator", "techStack": ["C++"], "description": "A solved 9x9 sudoku puzzle was sent to a C++ program which determined the validity of the solution using multi-threading. Validation was performed with 11, 15 and 27 threads for each row, column and 3x3 subgrid. The runtime for each thread count was analyzed.",
  "role": "Implemented multi-threading validation using 11 and 15 threads respectively.", "images": [{"name": "sudoku.png", "description": "Validation Output"}], "link": "https://github.com/varshajairam/Sudoku_Solution_Validator"
}];

const projects = projectDetails.map(project => {
  return (<Item>
    <Item.Content>
      <Item.Header>{project.name}</Item.Header>
      <Segment raised color='purple'><Item.Meta>
        <span className='price'><strong>Tech Stack: </strong>{project.techStack}</span>
        {project.tools && <span className='price'><strong>Tools: </strong>{project.tools}</span>}
      </Item.Meta>
      <Item.Description><strong>Description: </strong>{project.description} {project.demo && <a href = {project.demo} target = '_blank' rel = 'noopener noreferrer'>Watch the demo here.</a>}</Item.Description>
      <Item.Description><strong>Role: </strong>{project.role}</Item.Description>
      <Item.Extra>
        <Modal size = 'fullscreen' trigger={<Button basic color = 'purple' floated='right'>View image(s)</Button>}>
          <Modal.Header>{project.name}</Modal.Header>
          <Modal.Content>
          <Grid padded divided='vertically'>
            {project.images.map(image => {
              return <Grid.Row>
                <Grid.Column width={3}>
                  <Header size='medium'>{image.description}</Header>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Image size = {project.name === 'Play Along' ? 'large' : 'massive'} centered bordered src={image.name} />
                </Grid.Column>               
                </Grid.Row>
            })}
            </Grid>
          </Modal.Content>
        </Modal>
        {project.link && <Button color={project.name === 'Handshake Prototype' ? 'bitbucket' : 'github'} floated = 'right' onClick = {() => window.open(project.link, '_blank')} >
          <Icon name={project.name === 'Handshake Prototype' ? 'bitbucket' : 'github'} /> View source code
        </Button>}
      </Item.Extra>
      </Segment>
    </Item.Content>
  </Item>)
});

const Project = (props) => (

  <Item.Group>
    {
      projects
    }
  </Item.Group>
)

export default Project;