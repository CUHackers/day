/*
* @Author: Charlie Gallentine
* @Date:   2019-01-22 13:35:44
* @Last Modified by:   Charlie Gallentine
* @Last Modified time: 2019-01-22 13:36:27
*/
function get_sessions() {
	const sessions = [
	  // {
	  //   session: "Dummy Session",
	  //   start: new Date(year, month, day, 12),
	  //   end: new Date(year, month, day, 13, 30),
	  //   leader: "Charlie Gallentine",
	  //   requirements: "Adobe XD",
	  // },
	  {
	    session: "Idea Jam",
	    start: new Date(year, month, day, 11),
	    end: new Date(year, month, day, 11, 30),
	    leader: "Dr. Matt Boyer",
	    requirements: "None",
	  },
	  {
	    session: "Intro to Design Thinking",
	    start: new Date(year, month, day, 11, 30),
	    end: new Date(year, month, day, 12),
	    leader: "Dr. Matt Boyer",
	    requirements: "None",
	  },
	  {
	    session: "Designing the User Experience",
	    start: new Date(year, month, day, 12, 15),
	    end: new Date(year, month, day, 13),
	    leader: "Santiago Gomez",
	    requirements: "Adobe XD/Sketch",
	  },
	  {
	    session: "Intro to Git (Software Version Control)",
	    start: new Date(year, month, day, 12, 15),
	    end: new Date(year, month, day, 13),
	    leader: "Audrey Vincent",
	    requirements: "None",
	  },
	  {
	    session: "Intro to HTML/CSS/JS Web Dev Basics",
	    start: new Date(year, month, day, 13, 15),
	    end: new Date(year, month, day, 14),
	    leader: "Ayush Petigara",
	    requirements: "None",
	  },
	  {
	    session: "Intro to Flask/Python",
	    start: new Date(year, month, day, 14, 15),
	    end: new Date(year, month, day, 15),
	    leader: "Jeff Rubillo",
	    requirements: "None",
	  },
	  {
	    session: "Intro to Arduino",
	    start: new Date(year, month, day, 13, 15),
	    end: new Date(year, month, day, 14),
	    leader: "TBD",
	    requirements: "None",
	  },
	  {
	    session: "Intro to Unity",
	    start: new Date(year, month, day, 14, 15),
	    end: new Date(year, month, day, 15),
	    leader: "Marie Jarrell",
	    requirements: "Unity",
	  },
	  {
	    session: "Intro to Data Science/ML w/Python",
	    start: new Date(year, month, day, 15, 15),
	    end: new Date(year, month, day, 16),
	    leader: "Colin Targonski, Ben Shealy",
	    requirements: "None",
	  },
	  {
	    session: "Intro to Go",
	    start: new Date(year, month, day, 17, 15),
	    end: new Date(year, month, day, 18),
	    leader: "Patrick Gorospe",
	    requirements: "None",
	  },
	  {
	    session: "A Deep Learning Blitz w/ PyTorch",
	    start: new Date(year, month, day, 19, 15),
	    end: new Date(year, month, day, 20),
	    leader: "Ankit Kulshrestha",
	    requirements: "Python",
	  },
	  {
	    session: "Building a Componentized Front-End",
	    start: new Date(year, month, day, 17, 15),
	    end: new Date(year, month, day, 18),
	    leader: "Alex Six",
	    requirements: "Docker",
	  },
	  {
	    session: "Intro to NodeJS &amp; Angular",
	    start: new Date(year, month, day, 18, 15),
	    end: new Date(year, month, day, 19),
	    leader: "Ben Shealy",
	    requirements: "None",
	  },
	  {
	    session: "Data Visualization w/JPL (NASA)",
	    start: new Date(year, month, day, 18, 15),
	    end: new Date(year, month, day, 19),
	    leader: "Elizabeth Hill",
	    requirements: "None",
	  },
	  {
	    session: "Web Scraping w/Python",
	    start: new Date(year, month, day, 15, 15),
	    end: new Date(year, month, day, 16),
	    leader: "Chris Lambert",
	    requirements: "None",
	  },
	  {
	    session: "AWS Artificial Intelligence/Machine Learning",
	    start: new Date(year, month, day, 13, 15),
	    end: new Date(year, month, day, 14),
	    leader: "AWS Team",
	    requirements: "Teammate if competing",
	  },
	  {
	    session: "Intro to Google Cloud Platform",
	    start: new Date(year, month, day, 14, 15),
	    end: new Date(year, month, day, 15),
	    leader: "GCP Team",
	    requirements: "None",
	  },
	  {
	    session: "Hotdog Not Hotdog with AWS",
	    start: new Date(year, month, day, 17, 15),
	    end: new Date(year, month, day, 18),
	    leader: "AWS Team",
	    requirements: "Teammate if competing",
	  },
	  {
	    session: "Big Data &amp; Biology: Cloud Computing",
	    start: new Date(year, month, day, 19, 15),
	    end: new Date(year, month, day, 20),
	    leader: "Dr. Alex Feltus",
	    requirements: "None",
	  },
	];

	return sessions;
}