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

var bio = {
	"name" : "Nick Martinez",
	"role" : "Software Engineer",
	"contact" : {
		"mobile" : "415-794-6819", 
		"email" : "23nicholasmartinez@gmail.com",
		"github" : "nmartinez23",
		"linkedin" : "https://www.linkedin.com/in/nicholasamartinez",
		"location" : "SF Bay Area"
	},
	"pic" : "images/nm-photo.jpg",
	"welcome" : "Thanks for checking out my resume.",
	"skills" : [
		"Ruby", "Rails", "Javascript", "Web Development"
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
var formattedLink = HTMLlinkedin.replace("%data%", bio.contact.linkedin);
var formattedGit = HTMLgithub.replace("%data%", bio.contact.github);
$("#header").append(formattedLink);
$("#header").append(formattedGit);
var formattedLoc = HTMLlocation.replace("%data%", bio.contact.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
$("#header").append(formattedLoc);
$("#header").append(formattedPic);
var formattedMes = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#header").append(formattedMes);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);


