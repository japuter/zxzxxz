'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Browser name and version
  const browserName = navigator.userAgent.match(/(Firefox|MSIE|Chrome|Safari|Opera)[\/\s](\d+)/);
  document.getElementById('browserName').textContent = `Browser Name and Version: ${browserName[1]}, ${browserName[2]}`;

  // Operating system name
  const osName = navigator.userAgent.match(/(Windows|Mac|Linux)/);
  document.getElementById('osName').textContent = `Operating System Name: ${osName ? osName[0] : 'Not detected'}`;

  // Screen width and height
  document.getElementById('screenWidth').textContent = `Screen Width: ${screen.width}px`;
  document.getElementById('screenHeight').textContent = `Screen Height: ${screen.height}px`;

  // Available screen space for the browser
  document.getElementById('availableWidth').textContent = `Available Screen Width: ${screen.availWidth}px`;
  document.getElementById('availableHeight').textContent = `Available Screen Height: ${screen.availHeight}px`;

  // Current date and time
  const optionsDate = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Europe/Helsinki' };
  const currentDate = new Intl.DateTimeFormat('fi-FI', optionsDate).format(new Date());
  document.getElementById('currentDate').textContent = `Current Date: ${currentDate}`;

  const optionsTime = { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Helsinki' };
  const currentTime = new Intl.DateTimeFormat('fi-FI', optionsTime).format(new Date());
  document.getElementById('currentTime').textContent = `Current Time: ${currentTime}`;
});
