var bio = {
	"name": "David",
	"role": "Front-End Web Devepoler",
	"contacts": {
		"email": "di2712@att.com",
		"github": "David Iman",
		"twitter": "@quadatic20",
		"location": "Illinois",
	},
	"biopic": ["images/Iman_ID_pic.png"],
	"welcomeMessage": "Welcome to My Project",
	"skills": ["HTML", "CSS", "JavaScript", "jQuery"]
};

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Senior – Technical Process/Quality",
			"location": "Cary, IL",
			"dates": "2000 - Present",
			"description": "Worked as a WFE-IEFS Flow Developer."

		},
		{
			"employer": "US Navy",
			"title": "Communications",
			"location": "San Diego, CA",
			"dates": "1983 - 2000",
			"description": "Worked various jobs in Communications field."
		},

	]
};


var projects = {
	"projects": [
		{
			"title": "IEFS WFE Devepoler",
			"dates": "2014-Present",
			"description": "Worked as IEFS WFE flow Developer for AT&T",
			"images": ["images/ATT_Globe.jpg"],

		},
	]
};

var education = {
	"schools": [
		{ "name": "WFE Development",
			"dates": "2012",
			"location": "Illinois",
			"degree": "WF Flow Developer",
		}
	],

	"onlineCourses": [
		{ "school": "Code School",
			"title": "Try jQuery",
			"dates": "2017",
			"url": "http://try.jquery.com/."
		},
	]
};



var biopic = "images/Iman_ID_pic.png";
var formattedbioPic = HTMLbioPic.replace("%data%", biopic);


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

for( var i = 0; i < bio.skills.length; i++ ) {
  $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
}

}



for(var i = 0; i < formattedContactInfo.length; i++) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}



work.display = function() {

	if(work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for(var i = 0; i < work.jobs.length; i++) {


			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

work.display();

projects.display = function() {
	if(projects.projects.length > 0) {
		for(var i = 0; i < projects.projects.length; i++) {



			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);



			for(var img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);




			}


		}
	}
};

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(var i = 0; i < education.schools.length; i++) {
			$("#education").append(HTMLschoolStart);



			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
			var formattedschoolURL = HTMLschoolURL.replace("%data%", education.schools[i].url);





			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedschoolURL);

		}







		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);









			for(var i = 0; i < education.onlineCourses.length; i++) {
				$("#education").append(HTMLschoolStart);

				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}

	}
};

education.display();


$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();
