/*
* @Author: Charlie Gallentine
* @Date:   2018-10-08 11:50:43
* @Last Modified by:   Charlie Gallentine
* @Last Modified time: 2019-01-21 14:14:54
*/

// var startTime() = (new Date(year, month, day, eventStartTime, eventStartMinutes)).getTime();
// var endTime() = (new Date(year, month, day, eventEndTime)).getTime();
let count = 0;

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


// Object containing boolean key:value pairs concerning event progress
var progress = {
    before: function () {
      return currentTime() < startTime();
    },
    during: function () {
      return startTime() <= currentTime() && currentTime() < endTime();
    },
    after: function () {
      return endTime() <= currentTime();
    }
};

function set_memo()
{
  const memo = document.getElementById("memo");
	if (progress.before())
	{
		memo.innerHTML = "<h1 class='mem_message'><strong>CUhackit is loading...</strong></h1><img id='top_bug' \
          src='./resources/CUhackit_bw_small.svg' \
          alt='CUhackit'/>";
	}
	if (progress.during())
	{
		memo.innerHTML = "<h1 class='mem_message'><strong>Countdown to demos</strong></h1><img id='top_bug' \
          src='./resources/CUhackit_bw_small.svg' \
          alt='CUhackit'/>";
	}
	if (progress.after())
	{
		memo.innerHTML = "";
	}
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function set_events()
{
  const events = document.getElementById("events");
  events.innerHTML = "";
  var html_string = "";

  for (var i = 0; i < schedule.length; i++)
  {
    count = 0;
    if ( count < 4 &&
      currentTime() >= schedule[i].start 
      && currentTime() <= schedule[i].end)
    {
      html_string += 
      `<div class="event"> \
          <h1 class="event_title"><strong>${schedule[i].event}</strong></h1> \
          <p  class="event_time">${(
            schedule[i].start.getHours() > 12 ? schedule[i].start.getHours()%12 : 
            schedule[i].start.getHours() < 1 ? schedule[i].start.getHours()+12 : 
            schedule[i].start.getHours()) 
            +":"+addZero(schedule[i].start.getMinutes()
          )}${schedule[i].end.getHours() == schedule[i].start.getHours() && schedule[i].start.getMinutes() == schedule[i].start.getMinutes() ? "" :
            "-" + (schedule[i].end.getHours() > 12 ? schedule[i].end.getHours()%12 : 
            schedule[i].start.getHours() < 1 ? schedule[i].start.getHours()+12 : 
            schedule[i].end.getHours())
            +":"+addZero(schedule[i].end.getMinutes())}</p> \
        </div>`;

        console.log("Hello");
        console.log(schedule[i].start.getHours());
        count ++;
    }
  }

  document.getElementById("events").innerHTML = html_string;
}

function set_upcoming()
{
  const upcoming = document.getElementById("upcoming");
  upcoming.innerHTML = "";
  var html_string = "";

  if (true)
  {
    for (var i = 0; i < schedule.length; i++)
    {
      if ( count < 4 &&
        // If an event is less than an hour away, update screen
        (schedule[i].start - currentTime()) / 3600000 < 1000
        && schedule[i].start - currentTime() > 0) 
      {
        html_string += 
        `<div class="upcoming_event"> \
          <h1 class="event_title"><strong>${schedule[i].event}</strong></h1> \
          <p class="event_time">
            ${(
            schedule[i].start.getHours() > 12 ? schedule[i].start.getHours()%12 : 
            schedule[i].start.getHours() < 1 ? schedule[i].start.getHours()+12 : 
            schedule[i].start.getHours()) 
            +":"+addZero(schedule[i].start.getMinutes()
          )}${schedule[i].end.getHours() == schedule[i].start.getHours() && schedule[i].start.getMinutes() == schedule[i].start.getMinutes() ? "" :
            "-" + (schedule[i].end.getHours() > 12 ? schedule[i].end.getHours()%12 : 
            schedule[i].start.getHours() < 1 ? schedule[i].start.getHours()+12 : 
            schedule[i].end.getHours())
            +":"+addZero(schedule[i].end.getMinutes())}</p> \
        </div>`;
        count++;
      }
    }
  }

  document.getElementById("upcoming").innerHTML = html_string;
}

function main() {
  count = 0;
  set_events();
  set_upcoming();
  columns = get_columns();
  space = get_space();
  digit = get_digit();

  
  if (progress.after()) {
  	ctx.clearRect(-10, -10, width + 10, height + 10);
  	staticDrawEnd();
  } else {
  	if (updateGrid()) {
  	    ctx.clearRect(-10, -10, width + 10, height + 10);
  	    drawNumbers();
  	}
    // drawGrid();
  	setTimeout(function() { main(); }, 200);
  }
  if (startTime() - currentTime() > -1000 && startTime() - currentTime() < 0)
  {
    set_memo();
    window.location.reload(false);
  }

  if (endTime() - currentTime() > -1000 && endTime() - currentTime() < 0)
  {
    set_memo();
    window.location.reload(false);
  }
}

/*
  Runs above code
 */
set_memo();
main();




