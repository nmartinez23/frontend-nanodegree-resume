
var bio = {
  "name": "Nick Martinez",
  "role": "Software Engineer",
  "contacts": {
    "mobile": "415-794-6819",
    "email": "23nicholasmartinez@gmail.com",
    "github": "nmartinez23",
    "linkedin": "linkedin.com/in/nicholasamartinez",
    "location": "SF Bay Area"
  },
  "biopic": "images/nm-photo.jpg",
  "welcomeMessage": "Thanks for checking out my resume. I have been learning about front-end and back-end software engineering since September 2015. Since February 2016, I am now studying and building apps full-time. I am very excited to soon become a Full Stack Developer.",
  "skills": ["Ruby", "Rails", "Javascript", "Web Development",
    "Version Control", "JQuery"
  ]
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGit);
  var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLoc);
  var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedImage);
  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedMessage);
  $("#header").append(HTMLskillsStart);
  var formattedLinkedin = HTMLcontactGeneric.replace("%contact%", "linkedin")
    .replace("%data%", bio.contacts.linkedin);
  $("#footerContacts").append(formattedLinkedin);
  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  for (var skill in bio.skills) {
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#header").append(formattedSkills);
  }
};

var work = {
  "jobs": [{
    "employer": "Property Tax Assistance(PTA)",
    "title": "Sales and Marketing Manager",
    "location": "Walnut Creek, CA",
    "dates": "March 2014 - February 2016",
    "description": "Created and distributed marketing content online including social media marketing. Researched prospects to find the right leads to contact. Contacted leads to qualify if they needed our service. Set up conference calls with potential clients and follow up on contract proposals."
  }, {
    "employer": "ADT Security",
    "title": "Sales Associate",
    "location": "Concord, CA",
    "dates": "April 2012 - March 2014",
    "description": "Responsible for turning company generated appointments into closed sales. Daily prospecting activities including cold and warm calls to develop self generated leads and close additional sales. Follow up with existing customers to confirm successful installations and ask for referrals. Daily account management using Salesforce CRM to keep track of prospective customers for follow up and to contact existing customers for referral opportunities."
  }, {
    "employer": "Future Ford of Concord",
    "title": "Salesperson",
    "location": "Concord, CA",
    "dates": "August 2011 - March 2012",
    "description": "Responsible for greeting and assisting potential customers to find the right vehicle for their needs and budget. Answered customer objections with product knowledge and sold them on the benefits of the overall deal. Developed follow up techniques to call and encourage any unsold customers to come back for another visit."
  }]
};

work.display = function() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job]
      .employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[
      job].description);
    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
};

var projects = {
  "projects": [{
    "title": "Splurty",
    "dates": "February 2016",
    "description": "Web app that generates random inspirational quotes.",
    "images": ["images/splurty.png"]
  }, {
    "title": "Nomster",
    "dates": "February 2016",
    "description": "Web app that is Yelp-like for pizza places.",
    "images": ["images/nomster.png"]
  }]
};

projects.display = function() {
  for (var proj in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[
      proj].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[
      proj].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",
      projects.projects[proj].description);
    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);
    for (var image in projects.projects[proj].images) {
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[
        proj].images[image]);
      $(".project-entry:last").append(formattedImage);
    }
  }
};

var education = {
  "schools": [{
    "name": "Udacity",
    "location": "Online",
    "degree": "Front End Nanodegree",
    "majors": "Front End Web Development",
    "dates": "2016",
    "url": "http://udacity.com"
  }, {
    "name": "The Firehose Project",
    "location": "Online",
    "degree": "Full Stack Web Development",
    "majors": ["Ruby", " Rails", " Javascript"],
    "dates": "2016",
    "url": "http://thefirehoseproject.com"
  }, {
    "name": "New Mexico State University",
    "location": "Las Cruces, NM",
    "degree": " ",
    "majors": ["Computer Technology"],
    "dates": "1998 - 2002",
    "url": "http://nmsu.edu"
  }]
};

education.display = function() {
  for (var school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[
      school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[
      school].degree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[
      school].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[
      school].location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[
      school].majors);
    $(".education-entry:last").append(formattedName + formattedDegree);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedLocation);
    $(".education-entry:last").append(formattedMajor);
  }
};

$("#mapDiv").append(googleMap);


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});

function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  var intername = name[0] + " " + name[1];
  return intername;
}

$("#main").append(internationalizeButton);

bio.display();
work.display();
projects.display();
education.display();