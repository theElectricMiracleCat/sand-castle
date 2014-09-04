var html = "<div class='content'>\n  <h1>So, <div id='animation-1' class='inline'>what is this?</div></h1>\n  <div class='spacer'></div>\n  <p class='fade-in 8'>with this app, you can...</p>\n  <h3 class='fade-in 11'>collaborate with others to brainstorm simple front-end code</h3>\n  <p class='fade-in 16'>by</p>\n  <div class='fade-in 17'>\n    <h2 class='clickable'>creating and maintaining projects,</h2>\n    <div id='description-1' class='description border'>Start a new project by changing the path of the URL (http://sand-castle.herokuapp.com/[some_project_name]).  If the project name hasn't already been taken, Sand Castle will create a new project for you.  If it has, it'll load whatever project was there before, with its most recent changes.</div>\n  </div>\n  <div class='fade-in 20'>\n    <h2 class='clickable'>editing code,</h2>\n    <div id='description-2' class='description border'>Move your mouse cursor near the bottom of the window and three edit fields for HTML, CSS, and Javascript will appear.  Edit these fields to change the code of your project.  Press [shift]-[enter] to submit and save code (and see the changes made in real time).</div>\n  </div>\n  <div class='fade-in 23'>\n    <h2 class='clickable'>collaborating with others, &nbsp</h2>\n    <div id='description-3' class='description border'>Collaborate with friends by visiting the same URL path.  Changes to the edit fields can be seen in real time.  Code changes submitted with [shift]-[enter] will be immediately seen by anyone else also viewing the same project.</div>\n  </div>\n  <div class='inline fade-in 26'>\n    <h2 class='light'>and</h2>\n  </div>\n  <div class='fade-in 27'>\n    <h2 class='clickable'>communicating through chat,</h2>\n    <div id='description-4' class='description border'>Chat with other Sand Castle users by clicking on the project and pressing [enter].  Type your message and press [enter] again to send your message.  You can also change your alias by pressing '/' instead of [enter].  Type 'alias [any_name] to change your name.</div>\n  </div>\n  <div class='fade-in 33'>\n    <h2 class='light'>all in real-time, with web sockets.</h2>\n  </div>\n</div>\n";
var css = "body {\n  background: #E6E6BC;\n}\n\n.content {\n  text-align: center;\n  font: 400 14px/1.6 'Open Sans', sans-serif;\n  padding: 30px;\n}\n\n.spacer {\n  padding: 5px;\n}\n\n.inline {\n  vertical-align: top;\n  display: inline-block;\n}\n\n.light {\n  font-weight: 200;\n}\n\n\n#animation-1 {\n  width: 0px;\n  height: 44px;\n  opacity: 0;\n  transition: all 1s;\n  overflow-y: hidden;\n}\n\n.fade-in {\n  opacity: 0;\n  transition: opacity 1s;\n}\n\n.clickable {\n  color: #2929CC;\n  cursor: pointer;\n}\n\n.border {\n  border: 1px solid #FFD685;\n}\n\n.description {\n  overflow: hidden;\n  padding: 0px;\n  opacity: 0;\n  height: 0px;\n  background-color: rgba(255, 255, 255, 0.4);\n  width: 300px;\n  margin: 0 auto;\n  transition: all 1s;\n}\n\n.description.shown {\n  padding: 10px;\n}\n\n.description.expanded {\n  height: auto;\n}\n";
var javascript = "setTimeout(animation1, 1000);\nassignFadeIns(33);\nbindDescriptionEvents();\n\nfunction animation1() {\n  $('#animation-1').css('width', '278px');\n  delayTransition($('#animation-1'), 1000, 'opacity', '1');\n};\n\nfunction bindDescriptionEvents() {\n  bindDescriptionEvent('#description-1', 176);\n  bindDescriptionEvent('#description-2', 154);\n  bindDescriptionEvent('#description-3', 132);\n  bindDescriptionEvent('#description-4', 154);\n};\n\nfunction bindDescriptionEvent(selector, height) {\n  var $el = $(selector);\n  $el.siblings('.clickable').click(function() {\n    ($el.hasClass('shown')) ? hideDescription($el) : showDescription($el, height);\n  });\n};\n\nfunction showDescription($el, height) {\n  $el.addClass('shown');\n  $el.css('height', height + 'px');\n  delayTransition($el, 1000, 'opacity', '1');\n};\n\nfunction hideDescription($el) {\n  $el.removeClass('shown');\n  $el.css('opacity', '0');\n  delayTransition($el, 1000, 'height', '0px');\n};\n\nfunction delayTransition($el, time, property, value) {\n   setTimeout(function() {\n    $el.css(property,'1')\n  }, time);\n};\n\nfunction assignFadeIns(num) {\n  for(var i=1; i <= num; i++) {\n    delayTransition($('.fade-in.' + i), i * 500, 'opacity', '1')\n  };\n};\n";

var exampleProject = {
  html: html,
  css: css,
  javascript: javascript
};

exports.exampleProject = exampleProject;
