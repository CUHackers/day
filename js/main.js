/*
* @Author: Charlie Gallentine
* @Date:   2018-10-08 11:50:43
* @Last Modified by:   Charlie Gallentine
* @Last Modified time: 2018-11-09 10:52:07
*/

// var startTime() = (new Date(year, month, day, eventStartTime, eventStartMinutes)).getTime();
// var endTime() = (new Date(year, month, day, eventEndTime)).getTime();
let count = 0;

const schedule = [
  {
    event: "HowToMentor",
    start: new Date(year, month, day, 7, 30),
    end: new Date(year, month, day, 8, 15),
  },
  {
    event: "Breakfast",
    start: new Date(year, month, day, 7, 30),
    end: new Date(year, month, day, 9, 30),
  },
  {
    event: "Registration",
    start: new Date(year, month, day, 8),
    end: new Date(year, month, day, 9),
  },
  {
    event: "Opening",
    start: new Date(year, month, day, 8, 30),
    end: new Date(year, month, day, 9),
  },
  {
    event: "Lunch",
    start: new Date(year, month, day, 12),
    end: new Date(year, month, day, 13, 30),
  },
  {
    event: "Cup Stacking",
    start: new Date(year, month, day, 14),
    end: new Date(year, month, day, 15),
  },
  {
    event: "Virtual Reality",
    start: new Date(year, month, day, 15),
    end: new Date(year, month, day, 17),
  },
  {
    event: "Dinner",
    start: new Date(year, month, day, 17, 30),
    end: new Date(year, month, day, 18, 30),
  },
  {
    event: "Demo Setup",
    start: new Date(year, month, day, 18),
    end: new Date(year, month, day, 18, 30),
  },
  {
    event: "Demos",
    start: new Date(year, month, day, 18, 30),
    end: new Date(year, month, day, 19),
  },
  {
    event: "Closing",
    start: new Date(year, month, day, 19, 30),
    end: new Date(year, month, day, 20),
  },
  {
    event: "Goodbye",
    start: new Date(year, month, day, 20),
    end: new Date(year, month, day, 21),
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
		memo.innerHTML = "<h1 class='mem_message'><strong>HelloWorld is loading...</strong></h1>";
	}
	else if (progress.during())
	{
		memo.innerHTML = "<h1 class='mem_message'><strong>Countdown to demos</strong></h1><img id='top_bug' \
          src='./resources/HelloWorld_bw_logo.svg' \
          alt='HelloWorld'/>";
	}
	else
	{
		memo.innerHTML = "<h1 class='mem_message'><strong>You done good kid.</strong></h1>";
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

  if (false)
  {
    html_string = 
      '<div>  \
        <img  \
          src="./resources/HelloWorld_color_logo.svg" \
          alt="HelloWorld"/>  \
      </div>';
  }
  else
  {
    for (var i = 0; i < schedule.length; i++)
    {
      if ( count < 4 &&
        currentTime() >= schedule[i].start 
        && currentTime() <= schedule[i].end)
      {
        html_string += 
        `<div class="event"> \
            <h1 class="event_title"><strong>${schedule[i].event}</strong></h1> \
            <p  class="event_time">${(schedule[i].start.getHours() > 12 ? schedule[i].start.getHours()%12 : schedule[i].start.getHours()) +":"+addZero(schedule[i].start.getMinutes())}-${(schedule[i].end.getHours() > 12 ? schedule[i].end.getHours()%12 : schedule[i].end.getHours())+":"+addZero(schedule[i].end.getMinutes())}</p> \
          </div>`;
          count ++;
      }
    }
    if (progress.before())
    {
      html_string += 
        '<div>  \
            <img  \
              src="./resources/HelloWorld_color_logo.svg" \
              alt="HelloWorld"/>  \
          </div>';
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
          <p class="event_time">${(schedule[i].start.getHours() > 12 ? schedule[i].start.getHours()%12 : schedule[i].start.getHours())+":"+addZero(schedule[i].start.getMinutes())}-${(schedule[i].end.getHours() > 12 ? schedule[i].end.getHours()%12 : schedule[i].end.getHours())+":"+addZero(schedule[i].end.getMinutes())}</p> \
        </div>`;
        count++;
      }
    }
  }

  document.getElementById("upcoming").innerHTML = html_string;
}

function main() {
  count = 0;
	set_memo();
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
  	setTimeout(function() { main(); }, 300);
  }
  if (startTime() - currentTime() > -1000 && startTime() - currentTime() < 0)
  {
    window.location.reload(false);
  }

  if (endTime() - currentTime() > -1000 && endTime() - currentTime() < 0)
  {
    window.location.reload(false);
  }
}

/*
  Runs above code
 */
main();




