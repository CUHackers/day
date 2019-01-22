/*
* @Author: Charlie Gallentine
* @Date:   2019-01-22 13:32:01
* @Last Modified by:   Charlie Gallentine
* @Last Modified time: 2019-01-22 13:35:21
*/

function get_schedule() {
	const schedule = [
	  {
	    event: "Mentor orientation",
	    start: new Date(year, month, day, 8, 30),
	    end: new Date(year, month, day, 9),
	  },
	  {
	    event: "Participant check-in",
	    start: new Date(year, month, day, 9),
	    end: new Date(year, month, day, 10, 30),
	  },
	  {
	    event: "Opening Ceremony",
	    start: new Date(year, month, day, 10, 30),
	    end: new Date(year, month, day, 11),
	  },
	  {
	    event: "HACKING BEGINS!",
	    start: new Date(year, month, day, 11),
	    end: new Date(year, month, day, 11),
	  },
	  {
	    event: "Workshops begin",
	    start: new Date(year, month, day, 11),
	    end: new Date(year, month, day, 11),
	  },
	  {
	    event: "Lunch",
	    start: new Date(year, month, day, 12),
	    end: new Date(year, month, day, 13),
	  },
	  {
	    event: "Smash Bros",
	    start: new Date(year, month, day, 13),
	    end: new Date(year, month, day, 14),
	  },
	  {
	    event: "Headshots",
	    start: new Date(year, month, day, 13),
	    end: new Date(year, month, day, 15),
	  },
	  {
	    event: "Immersive Space opens",
	    start: new Date(year, month, day, 14),
	    end: new Date(year, month, day, 14),
	  },
	  {
	    event: "King of Pops",
	    start: new Date(year, month, day, 16),
	    end: new Date(year, month, day, 17),
	  },
	  {
	    event: "Lightning Pops",
	    start: new Date(year, month, day, 16),
	    end: new Date(year, month, day, 17),
	  },
	  {
	    event: "Dinner",
	    start: new Date(year, month, day, 18),
	    end: new Date(year, month, day, 19),
	  },
	  {
	    event: "Snake",
	    start: new Date(year, month, day, 19),
	    end: new Date(year, month, day, 20),
	  },
	  {
	    event: "Cup Stacking",
	    start: new Date(year, month, day, 20),
	    end: new Date(year, month, day, 20, 30),
	  },
	  {
	    event: "Sleep rooms",
	    start: new Date(year, month, day, 22),
	    end: new Date(year, month, day, 22),
	  },
	  {
	    event: "Mid-way hype",
	    start: new Date(year, month, day, 23),
	    end: new Date(year, month, day, 23),
	  },
	  {
	    event: "Midnight Snack",
	    start: new Date(year, month, endDay, 0, 0),
	    end: new Date(year, month, endDay, 0, 30),
	  },
	  {
	    event: "Yoga",
	    start: new Date(year, month, endDay, 1),
	    end: new Date(year, month, endDay, 1, 30),
	  },
	  {
	    event: "Breakfast",
	    start: new Date(year, month, endDay, 6),
	    end: new Date(year, month, endDay, 7),
	  },
	  {
	    event: "Hacking ends",
	    start: new Date(year, month, endDay, 11),
	    end: new Date(year, month, endDay, 11),
	  },
	  {
	    event: "DevPost closes",
	    start: new Date(year, month, endDay, 11, 30),
	    end: new Date(year, month, endDay, 11, 30),
	  },
	  {
	    event: "Demos and Judging",
	    start: new Date(year, month, endDay, 12),
	    end: new Date(year, month, endDay, 13, 45),
	  },
	  {
	    event: "Closing Ceremony",
	    start: new Date(year, month, endDay, 14),
	    end: new Date(year, month, endDay, 15),
	  },
	];

	return schedule;
}