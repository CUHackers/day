/* jshint esversion:6*/

/*
* @Author: Charlie Gallentine
* @Date:   2018-10-08 11:50:43
* @Last Modified by:   Charlie Gallentine
* @Last Modified time: 2019-01-23 12:28:38
*/

// var startTime() = (new Date(year, month, day, eventStartTime, eventStartMinutes)).getTime();
// var endTime() = (new Date(year, month, day, eventEndTime)).getTime();
let event_count = 0;
let session_count = 0;

const MAX_DISPLAY = 30;

const schedule = get_schedule();
const sessions = get_sessions();

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

function set_events(id_str, class_str)
{
  const events = document.getElementById(id_str);
  events.innerHTML = "";
  var html_string = "";
  event_count = 0;

  for (var i = 0; i < schedule.length; i++)
  {
    if ( event_count < MAX_DISPLAY &&
      currentTime() >= schedule[i].start 
      && currentTime() <= schedule[i].end)
    {
      html_string += 
      `<div class="${class_str}"> \
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

        event_count ++;
    }
  }

  document.getElementById(id_str).innerHTML = html_string;
}

function set_upcoming(id_str, class_str)
{
  const upcoming = document.getElementById(id_str);
  upcoming.innerHTML = "";
  var html_string = "";

  for (var i = 0; i < schedule.length; i++)
  {
    if ( event_count < MAX_DISPLAY &&
      // If an event is less than an hour away, update screen
      (schedule[i].start - currentTime()) / 3600000 < 1000
      && schedule[i].start - currentTime() > 0) 
    {
      html_string += 
      `<div class="${class_str}"> \
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
      event_count++;
    }
  }

  document.getElementById(id_str).innerHTML = html_string;
}

function set_sessions(id_str, class_str)
{
  const events = document.getElementById(id_str);
  events.innerHTML = "";
  var html_string = "";
  session_count = 0; 

  for (var i = 0; i < sessions.length; i++)
  {
    if ( session_count < MAX_DISPLAY &&
      currentTime() >= sessions[i].start 
      && currentTime() <= sessions[i].end)
    {
      html_string += 
      `<div class="${class_str}"> \
        <div style="display:inline-block;">
          <h1 style="display:block;" class="session_title"><strong>${sessions[i].session}</strong></h1> \
          <h3 style="display:block;" class="session_leader">${sessions[i].leader}</h3> \
          <p style="display:inline-block;margin-left:30px;" class="session_reqs">${sessions[i].requirements == "" ? "" : "Reqs: " } ${sessions[i].requirements}</p>\
        </div>
        <div>
          <p style="display:inline;" class="event_time">${(
            sessions[i].start.getHours() > 12 ? sessions[i].start.getHours()%12 : 
            sessions[i].start.getHours() < 1 ? sessions[i].start.getHours()+12 : 
            sessions[i].start.getHours()) 
            +":"+addZero(sessions[i].start.getMinutes()
          )}${sessions[i].end.getHours() == sessions[i].start.getHours() && sessions[i].start.getMinutes() == sessions[i].start.getMinutes() ? "" :
            "-" + (sessions[i].end.getHours() > 12 ? sessions[i].end.getHours()%12 : 
            sessions[i].start.getHours() < 1 ? sessions[i].start.getHours()+12 : 
            sessions[i].end.getHours())
            +":"+addZero(sessions[i].end.getMinutes())}</p> \
        </div>
      </div>`;

      session_count++;
      console.log("SESSION COUNT");
      console.log(session_count);
    }
  }

  document.getElementById(id_str).innerHTML = html_string;
}

function set_upcoming_sessions(id_str, class_str)
{
  const upcoming = document.getElementById(id_str);
  upcoming.innerHTML = "";
  var html_string = "";

  for (var i = 0; i < sessions.length; i++)
  {
    if ( session_count < MAX_DISPLAY &&
      // If an event is less than an hour away, update screen
      (sessions[i].start - currentTime()) / 3600000 < 1000
      && sessions[i].start - currentTime() > 0) 
    {
      html_string += 
      `<div class="${class_str}"> \
        <div style="display:inline-block;">
          <h1 style="display:block;" class="session_title"><strong>${sessions[i].session}</strong></h1> \
          <h3 style="display:block;" class="session_leader">${sessions[i].leader}</h3> \
          <p style="display:inline-block;" class="session_reqs">${sessions[i].requirements == "" ? "" : "Reqs: " } ${sessions[i].requirements}</p>\
        </div>
        <div style="display:inline-block;text-align:right;">
          <p style="display:inline-block;" class="event_time">${(
            sessions[i].start.getHours() > 12 ? sessions[i].start.getHours()%12 : 
            sessions[i].start.getHours() < 1 ? sessions[i].start.getHours()+12 : 
            sessions[i].start.getHours()) 
            +":"+addZero(sessions[i].start.getMinutes()
          )}${sessions[i].end.getHours() == sessions[i].start.getHours() && sessions[i].start.getMinutes() == sessions[i].start.getMinutes() ? "" :
            "-" + (sessions[i].end.getHours() > 12 ? sessions[i].end.getHours()%12 : 
            sessions[i].start.getHours() < 1 ? sessions[i].start.getHours()+12 : 
            sessions[i].end.getHours())
            +":"+addZero(sessions[i].end.getMinutes())}</p> \
        </div>
      </div>`;
      session_count++;
    }
  }

  document.getElementById(id_str).innerHTML = html_string;
}

function main() {
  count = 0;
  set_events("events", "event");
  set_upcoming("upcoming_events", "upcoming_event");

  set_sessions("sessions", "session");
  set_upcoming_sessions("upcoming_sessions", "upcoming_session");

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
    // set_memo();
    window.location.reload(false);
  }

  if (endTime() - currentTime() > -1000 && endTime() - currentTime() < 0)
  {
    // set_memo();
    window.location.reload(false);
  }
}

/*
  Runs above code
 */
// set_memo();
main();




