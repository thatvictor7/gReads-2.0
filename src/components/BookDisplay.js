import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

  const tileData = [
 {
   "ID": 1,
   "Book Title": "Python In A Nutshell",
   "Book Genre": "Python",
   "Book Description": "This book offers Python programmers one place to look when they need help remembering or deciphering the syntax of this open source language and its many powerful but scantily documented modules. This comprehensive reference guide makes it easy to look up the most frequently needed information--not just about the Python language itself, but also the most frequently used parts of the standard library and the most important third-party extensions.",
   img: "https://covers.oreillystatic.com/images/0636920012610/lrg.jpg",
   "Author 1 First Name": "Alex",
   "Author 1 Last Name": "Martelli",
   "Author 1 Biography": "Alex Martelli spent 8 years with IBM Research, winning three Outstanding Technical Achievement Awards.He then spent 13 as a Senior Software Consultant at think3 inc, developing libraries, network protocols, GUI engines, event frameworks, and web access frontends. He has also taught programming languages, development methods, and numerical computing at Ferrara University and other venues. He's a C++ MVP for Brainbench, and a member of the Python Software Foundation. He currently works for AB Strakt, a Python-centered software house in Göteborg, Sweden, mostly by telecommuting from his home in Bologna, Italy. Alex's proudest achievement is the articles that appeared in Bridge World (January/February 2000), which were hailed as giant steps towards solving issues that had haunted contract bridge theoreticians for decades.",
   "Author 1 Portrait URL": "http://cdn.oreillystatic.com/images/people/154/alex_martelli.jpg",
   "Author 2 First Name": "Anna",
   "Author 2 Last Name": "Ravenscroft",
   "Author 2 Biography": "Anna Martelli Ravenscroft is an experienced speaker and trainer, with diverse background developing curricula for church, regional transit, disaster preparedness; developing web applications for therapy, learning, fitness; writing technical books, articles and presentations; active member of Open Source community; skilled at translating between IT professionals and end users.",
   "Author 2 Portrait URL": "https://images-na.ssl-images-amazon.com/images/I/A1ufyxpz++L._UX250_.jpg",
   "Author 3 First Name": "Steve",
   "Author 3 Last Name": "Holden",
   "Author 3 Biography": "Steve Holden Is a consultant, advising clients on system and network architectures and the design and implementation of programmed web systems. He also teaches classes on TCP/IP, network security, database and programming topics, and is the author of \"Python Web Programming\", the O'Reilly School of Technology's \"Certificate series in Python\" and O'Reilly Media's \"Intermediate Python\" video series.",
   "Author 3 Portrait URL": "http://cdn.oreillystatic.com/images/people/154/steve_holden.jpg"
 },
 {
   "ID": 2,
   "Book Title": "Think Python",
   "Book Genre": "Python",
   "Book Description": "If you want to learn how to program, working with Python is an excellent way to start. This hands-on guide takes you through the language a step at a time, beginning with basic programming concepts before moving on to functions, recursion, data structures, and object-oriented design. This second edition and its supporting code have been updated for Python 3.",
   img: "https://covers.oreillystatic.com/images/0636920025696/lrg.jpg",
   "Author 1 First Name": "Allen B.",
   "Author 1 Last Name": "Downey",
   "Author 1 Biography": "Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Master's and Bachelor's degrees from MIT.",
   "Author 1 Portrait URL": "http://cdn.oreillystatic.com/images/people/154/allen_downey.jpg",
   "Author 2 First Name": "",
   "Author 2 Last Name": "",
   "Author 2 Biography": "",
   "Author 2 Portrait URL": "",
   "Author 3 First Name": "",
   "Author 3 Last Name": "",
   "Author 3 Biography": "",
   "Author 3 Portrait URL": ""
 },
 {
   "ID": 3,
   "Book Title": "Learning React Native",
   "Book Genre": "JavaScript",
   "Book Description": "Get a practical introduction to React Native, the JavaScript framework for writing and deploying fully featured mobile apps that look and feel native. With this hands-on guide, you’ll learn how to build applications that target iOS, Android, and other mobile platforms instead of browsers. You’ll also discover how to access platform features such as the camera, user location, and local storage.",
   img: "https://covers.oreillystatic.com/images/0636920085270/lrg.jpg",
   "Author 1 First Name": "Bonnie",
   "Author 1 Last Name": "Eisenman",
   "Author 1 Biography": "Bonnie Eisenman is a software engineer at Codecademy, with previous experience at Fog Creek Software and Google. She has spoken at several conferences on topics ranging from ReactJS to musical programming and Arduinos. In her spare time, she enjoys building electronic musical instruments, tinkering with hardware projects, and laser-cutting chocolate. Find her on Twitter as @brindelle.",
   "Author 1 Portrait URL": "http://cdn.oreillystatic.com/images/people/154/bonnie_eisenman.jpg",
   "Author 2 First Name": "",
   "Author 2 Last Name": "",
   "Author 2 Biography": "",
   "Author 2 Portrait URL": "",
   "Author 3 First Name": "",
   "Author 3 Last Name": "",
   "Author 3 Biography": "",
   "Author 3 Portrait URL": ""
 },
 {
   "ID": 4,
   "Book Title": "You Don't Know JS: ES6 & Beyond",
   "Book Genre": "JavaScript",
   "Book Description": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the \"You Don’t Know JS\" series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
   img: "https://covers.oreillystatic.com/images/0636920033769/lrg.jpg",
   "Author 1 First Name": "Kyle",
   "Author 1 Last Name": "Simpson",
   "Author 1 Biography": "Kyle Simpson is an Open Web Evangelist who's passionate about all things JavaScript. He's an author, workshop trainer, tech speaker, and OSS contributor/leader.",
   "Author 1 Portrait URL": "http://cdn.oreillystatic.com/images/people/154/kyle_simpson.jpg",
   "Author 2 First Name": "",
   "Author 2 Last Name": "",
   "Author 2 Biography": "",
   "Author 2 Portrait URL": "",
   "Author 3 First Name": "",
   "Author 3 Last Name": "",
   "Author 3 Biography": "",
   "Author 3 Portrait URL": ""
 },
 {
   "ID": 5,
   "Book Title": "You Don't Know JS: Scope & Closures",
   "Book Genre": "JavaScript",
   "Book Description": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. You’ll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset.",
   img: "https://covers.oreillystatic.com/images/0636920026327/lrg.jpg",
   "Author 1 First Name": "Kyle",
   "Author 1 Last Name": "Simpson",
   "Author 1 Biography": "Kyle Simpson is an Open Web Evangelist who's passionate about all things JavaScript. He's an author, workshop trainer, tech speaker, and OSS contributor/leader.",
   "Author 1 Portrait URL": "http://cdn.oreillystatic.com/images/people/154/kyle_simpson.jpg",
   "Author 2 First Name": "",
   "Author 2 Last Name": "",
   "Author 2 Biography": "",
   "Author 2 Portrait URL": "",
   "Author 3 First Name": "",
   "Author 3 Last Name": "",
   "Author 3 Biography": "",
   "Author 3 Portrait URL": ""
 },
 {
   "ID": 6,
   "Book Title": "You Don't Know JS: Async & Performance",
   "Book Genre": "JavaScript",
   "Book Description": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the \"You Don’t Know JS\" series, this concise yet in-depth guide focuses on new asynchronous features and performance techniques—including Promises, generators, and Web Workers—that let you create sophisticated single-page web applications and escape callback hell in the process.",
   img: "https://covers.oreillystatic.com/images/0636920033752/lrg.jpg",
   "Author 1 First Name": "Kyle",
   "Author 1 Last Name": "Simpson",
   "Author 1 Biography": "Kyle Simpson is an Open Web Evangelist who's passionate about all things JavaScript. He's an author, workshop trainer, tech speaker, and OSS contributor/leader.",
   "Author 1 Portrait URL": "http://cdn.oreillystatic.com/images/people/154/kyle_simpson.jpg",
   "Author 2 First Name": "",
   "Author 2 Last Name": "",
   "Author 2 Biography": "",
   "Author 2 Portrait URL": "",
   "Author 3 First Name": "",
   "Author 3 Last Name": "",
   "Author 3 Biography": "",
   "Author 3 Portrait URL": ""
 }
]

function BookDisplay(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={280} cols={3} className={classes.gridList}>
        <GridListTile key="Subheader" cols={6} style={{ height: 'auto' }}>
          <ListSubheader component="div">gBooks:</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile["Book Title"]}
              subtitle={<span>by: {tile["Author 1 First Name"]}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

BookDisplay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookDisplay);
