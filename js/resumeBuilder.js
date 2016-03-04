var bio = {
	"name" : "Nick Martinez",
	"role" : "Software Engineer",
	"contacts" : {
		"mobile" : "415-794-6819", 
		"email" : "23nicholasmartinez@gmail.com",
		"github" : "nmartinez23",
		"linkedin" : "https://www.linkedin.com/in/nicholasamartinez",
		"location" : "SF Bay Area"
	},
	"bioPic" : "images/nm-photo.jpg",
	"welcomeMessage" : "Thanks for checking out my resume.",
	"skills" : [
		"Ruby", "Rails", "Javascript", "Web Development"
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Property Tax Assistance(PTA)",
			"title" : "Sales and Marketing Manager",
			"location" : "Walnut Creek, CA",
			"dates" : "March 2014 - February 2016",
			"description" : "Created and distributed marketing content online including social media marketing. Researched prospects to find the right leads to contact. Contacted leads to qualify if they needed our service. Set up conference calls with potential clients and follow up on contract proposals."
		},
		{
			"employer" : "ADT Security",
			"title" : "Sales Associate",
			"location" : "Concord, CA",
			"dates" : "April 2012 - March 2014",
			"description" : "Responsible for turning company generated appointments into closed sales. Daily prospecting activities including cold and warm calls to develop self generated leads and close additional sales. Follow up with existing customers to confirm successful installations and ask for referrals. Daily account management using Salesforce CRM to keep track of prospective customers for follow up and to contact existing customers for referral opportunities."
		},
		{
			"employer" : "Future Ford of Concord",
			"title" : "Salesperson",
			"location" : "Concord, CA",
			"dates" : "August 2011 - March 2012",
			"description" : "Responsible for greeting and assisting potential customers to find the right vehicle for their needs and budget. Answered customer objections with product knowledge and sold them on the benefits of the overall deal. Developed follow up techniques to call and encourage any unsold customers to come back for another visit."
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Splurty",
			"dates" : "February 2016",
			"description" : "Web app that generates random inspirational quotes.",
			"images" : ["images/fake.jpg", "images/fake1.jpg"]
		},
		{
			"title" : "Nomster",
			"dates" : "February 2016",
			"description" : "Web app that is Yelp-like for pizza places.",
			"images" : ["images/fake2.jpg", "images/fake3.jpg"]
		}
	]
}

var education = {
	"schools" : [
		{
			"name" : "Udacity",
			"location" : "Online",
			"degree" : "Front End Nanodegree",
			"majors" : ["Web Development", "Javascript"],
			"dates" : "2016",
			"url" : "http://udacity.com"
		},
		{
			"name" : "The Firehose Project",
			"location" : "Online",
			"degree" : "Full Stack Web Development",
			"majors" : ["Ruby", "Rails", "Javascript"],
			"dates" : "2016",
			"url" : "http://thefirehoseproject.com"
		},
		{
			"name" : "New Mexico State University",
			"location" : "Las Cruces, NM",
			"degree" : "did not complete",
			"majors" : ["Computer Technology"],
			"dates" : "1998 - 2002",
			"url" : "http://nmsu.edu"
		}
	]
}
var displayWork = function() {
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	}
	for(job in work.jobs) {
		// new div for work experience
		$("#workExperience").append(HTMLworkStart);
		// concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();

$("#mapDiv").append(googleMap);

// $("#main").append("Nick Martinez");
// var email = "nm@live.com";
// var newEmail = email.replace("live", "gmail");
 // var awesomeThoughts = "I am Nick and I am awesome";
 // var funThoughts = awesomeThoughts.replace("awesome", "fun");
 // $("#main").append(funThoughts);

// var name = "Nick Martinez";
// var formattedName = HTMLheaderName.replace("%data%", name);
// var role = "Software Engineer";
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
var formattedLink = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").append(formattedLink);
$("#header").append(formattedGit);
var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedLoc);
$("#header").append(formattedPic);
var formattedMes = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#header").append(formattedMes);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);
var formattedPos = HTMLworkTitle.replace("%data%", work["position"]);
var formattedSchool = HTMLschoolName.replace("%data%", education.name);
$("#main").append(formattedPos);
$("#main").append(formattedSchool);

