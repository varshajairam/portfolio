import React, { Component } from 'react';
import { Menu, Segment, Image, Container, Header, Transition, Accordion, Grid, Responsive } from 'semantic-ui-react';
import Project from './projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faMedium, faBitbucket } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faAddressBook, faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faLaptopCode, faCode } from '@fortawesome/free-solid-svg-icons';

export default class MenuExamplePointing extends Component {

  state = { activeItem: 'about', animation: 'pulse', duration: 900, visible: true };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.toggleVisibility();
  }

  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }));

  render() {
    const { activeItem, animation, duration, visible } = this.state;

    const panels = [
      {
        key: 'trainee',
        title: 'Systems Engineer Trainee (2015 - 2016)',
        content: {
          content: (
            <div>
              <p>
                Developed a Java Enterprise Application using JDBC, JPA API, and Hibernate ORM framework for database operations, HTML 5, CSS 3, JavaScript, CSS Bootstrap and AngularJS with a Model – View – Controller design pattern for the user interface, and JUnit for Java unit test cases.
                Built a ticket servicing tool (for live requests raised) within a time limit, with the configuration of Apache Maven for build automation, GIT and SVN repositories for source code control and the Jenkins framework for continuous integration and deployment.
                Also developed a Python-based banking application, with RDBMS connectivity and stored procedures.
              </p>
            </div>
          )
        },
      },
      {
        key: 'se',
        title: 'Systems Engineer (2016 - 2017)',
        content: {
          content: (
            <div>
              <p>
                Developed a Business-to-Business web application for AT&T, that served as a DIY application where users could select and purchase products, as well as initiate maintenance by raising tickets or alarms, with minimal assistance from technicians.
                This was based on the Agile development model, spanning four iterations of about 3 weeks each, followed by a month of intensive testing and speedy defect fixes preceding the release of each Minimum Viable Product. I was part of three releases.
              </p>
              <p>
                In the first release, I contributed to front-end development using AngularJS, HTML 5 and CSS 3. This included enhancing search operations for products in the inventory by designing web pages according to redlines and comps, making API calls to the relevant Java services, and binding the response to the UI controls.
                I then used Adobe Web Analytics to study user actions and patterns, tag pages, links and business-significant actions that were frequently visited by the user, and collect usage statistics for analysis.
                I also had to make the web pages compliant with screen readers in accordance with Corporate Accessibility Technology Office (CATO) rules to aid the visually challenged and the color-blind. I had to ensure that the whole page was keyboard accessible with accurate audio description provided for each user action, and that it followed color contrast ratios for each component on the screen. The tools used for this were NVDA (Google Chrome), WAT (Internet Explorer) and FireEyes (Firefox).
              </p>
              <p>
                In the second release, I worked on the process of creating a ticket for a user in case of issues with the product. The part of the page I designed collected contact details of the user associated with a ticket.
                In the third release, I displayed ticket logs and implemented pagination. I also took part in defect resolution with quick turnaround time as part of Integrated Systems Testing and User Acceptance Testing for multiple releases.
              </p>
            </div>
          )
        }
      },
      {
        key: 'sse',
        title: 'Senior Systems Engineer (2018)',
        content: {
          content: (
            <div>
              <p>
                Developed a web application for Schlumberger, to allow field technicians to plan surface or drilling jobs, add materials and assign personnel to a particular job and invoice all billable resources to the customer. The application aimed to reduce paperwork and take all operations online.
              </p>
              <p>
                The first six months followed the Waterfall model of development with three releases or milestones. My work in the first milestone centered on creating and updating a job by adding the necessary UI components and functionalities with Angular 2, Typescript, HTML 5 and CSS 3 in line with mock screens. Flux architecture was used in the client-side code to maintain a uniform data flow. I had to also create data models for binding the response from .NET APIs to the respective template components.
              </p>
              <p>
                In the second milestone, I worked on creating and updating a quotation and contract for invoicing purposes, and used JQuery and jqxTreeGrid along with the aforementioned technologies in order to display tabular details on the screen.
              </p>
              <p>
                In the third milestone, I worked on filters and search functionality for the Job Dashboard and grouped all the created jobs in a tabular format. I also made the columns sortable based on several job parameters such as Job ID, location, Start Date, End Date etc.
              </p>
            </div>
          ),
        },
      },
      {
        key: 'ta',
        title: 'Technology Analyst (2019)',
        content: {
          content: (
            <div>
              <p>
                I developed new tabs and pages for the application and added enhancements to Job, Quote and Contract functionalities. We used Microsoft Team Foundation Server and Visual Studio Team Services for source code management and scheduled build triggering, along with Serena for continuous deployment to the server. I also fixed critical bugs regularly, which gave me a deeper understanding of the code as well as end-user preferences.
              </p>
            </div>
          ),
        },
      },
    ];

    const getWidth = () => {
      const isSSR = typeof window === 'undefined'

      return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
    };

    return (
      <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
        <Menu pointing>
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='work experience'
            active={activeItem === 'work experience'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='projects'
            active={activeItem === 'projects'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
              color='purple'
            />
          </Menu.Menu>
        </Menu>
        <div style={{ flex: 1, marginBottom: '10px' }}>
          <Transition
            animation={animation}
            duration={duration}
            visible={visible}>
            <div>
              {activeItem === 'about' && <Container>
              <Header as='h2' attached='top' color='purple'><FontAwesomeIcon icon={faAddressCard} style={{ marginRight: '10px' }} />
                  Varsha Jairam
                </Header>
                <Segment attached>
                  <Image src='/profile.jpeg' size='medium' floated='left' />
                  <p>
                    I am a graduate student of Software Engineering at San Jose State University. After working as a software developer for close to four years, I decided to get back to school to gain a solid foundation and deeper understanding of software and its applications. My interest lies in building robust, lightweight applications which can scale well.
                  </p>
                  <p>
                    I worked predominantly as a front-end developer using AngularJS and Angular 2, and have experience in developing fast, responsive and interactive web pages using media-queries, component lifecycle hooks and state management.
                  </p>
                  <p>
                    So far at school, I have worked with JavaScript frameworks like Angular and React, along with server-side languages such as Java, NodeJS, C++, Python and PHP. SQL and MongoDB have allowed me to appreciate the benefits of both relational and NoSQL databases. On the deployment front, Docker and AWS have been my go-tos as they are well-known for flexibility and ease-of-use.
                  </p>
                  <p>
                    I plan to explore other cloud providers and containers such as GCP, Kubernetes, Ansible etc. which will enable me to not only choose the appropriate provider depending on the size and scale of the application, but also leverage the same. In addition, I am interested in Big Data, and much of my second year of school will be devoted to data science and deep-learning. My goal is to be a competent full-stack developer.
                  </p>
                  <p>
                    Aside from work, I like to spend ridiculous amounts of time on streaming
                    platforms until I forget what day it is. Like everyone else, I also enjoy
                    eating good food and have recently been making futile attempts at cooking.
                    I hope to eventually cook a seven-course meal to go with a good binge-watching session.
                  </p>
                </Segment>
              </Container>}
              {activeItem === 'work experience' &&
                <Container>
                  <Header as='h2' color='purple'><FontAwesomeIcon icon={faCode} style={{ marginRight: '10px' }} />
                    Infosys
              {/* <Image centered size = 'massive' src='/infosys.png' /> */}
                  </Header>
                  <Accordion defaultActiveIndex={0} panels={panels} attached />
                </Container>}
            </div></Transition>
          {activeItem === 'projects' &&
            <Container>
              <Header as='h2' color='purple'><FontAwesomeIcon icon={faLaptopCode} style={{ marginRight: '10px' }} />
                Cannot pick a favorite!
            </Header>
              <Project></Project>
            </Container>}
          {activeItem === 'contact' &&
            <Container>
              <Header as='h2' color='purple'><FontAwesomeIcon icon={faAddressBook} style={{ marginRight: '10px' }} />
                Say hello
            </Header>
              
              <Header as='h3' color = 'grey'> Email me here: varshaa.jairam@gmail.com</Header>
              <Header as='h3' color = 'grey'>My social media links are down below. Let's get in touch!</Header>
            
            </Container>}
        </div>
        <Segment inverted vertical>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={20}>
                  <Header as='h4' inverted color='purple' >
                    Follow me!
                  </Header>
                  <a href='https://www.facebook.com/varshajairam.17' rel='noopener noreferrer' target='_blank' style={{ color: 'inherit' }} ><FontAwesomeIcon size='2x' icon={faFacebook} style={{ marginRight: '10px' }} /></a>
                  <a href='https://github.com/varshajairam' rel='noopener noreferrer' target='_blank' style={{ color: 'inherit' }} ><FontAwesomeIcon size='2x' icon={faGithub} style={{ marginRight: '10px' }} /></a>
                  <a href='https://bitbucket.org/varsharp/' rel='noopener noreferrer' target='_blank' style={{ color: 'inherit' }} ><FontAwesomeIcon size='2x' icon={faBitbucket} style={{ marginRight: '10px' }} /></a>
                  <a href='https://www.linkedin.com/in/varsha-jairam/' rel='noopener noreferrer' target='_blank' style={{ color: 'inherit' }} ><FontAwesomeIcon size='2x' icon={faLinkedin} style={{ marginRight: '10px' }} /></a>
                  <a href='https://medium.com/@varshaa.jairam' rel='noopener noreferrer' target='_blank' style={{ color: 'inherit' }} ><FontAwesomeIcon size='2x' icon={faMedium} /></a>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={20}>
                  <Header as='h6' inverted color='purple'>
                    Copyright <FontAwesomeIcon icon={faCopyright} /> 2020 Varsha Jairam
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}