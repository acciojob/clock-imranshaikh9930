//your JS code here. If required.

const p = document.getElementById("timer");
const newDate = new Date();

const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true, 
};

const formattedDate = newDate.toLocaleString(undefined, options);

p.innerText = formattedDate;
