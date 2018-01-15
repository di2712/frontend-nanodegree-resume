var bio = {
	"name": "Paula",
	"role": "Web Devepoler",
	"contacts": {
		"mobile": "123",
		"email": "paula@udacity.com",
		"github": "Paula",
		"twitter": "@Paula",
		"location": "Planet Earth",
	},
	"biopic": ["images/cartoon.jpg"],
	"welcomeMessage": "Welcome to My Project",
	"skills": ["HTML", "CSS", "JavaScript", "PhotoShop", "DreamWeaver" ]
};


var work = {
	"jobs": [
		{
			"employer": "Vogue Magazine",
			"title": "Designer",
			"location": "Brooklyn, NY",
			"dates": "January 2000",
			"description": "Worked as designer for the Vogue Magazine."
		
		},
		{
			"employer": "Glamour Magazine",
			"title": "Web Designer",
			"location": "Manhattan, NY",
			"dates": "1998 - 1999",
			"description": "Worked designing web sites for the Glamour Magazine." 
		},
		
	]
};


var projects = {
	"projects": [
		{
			"title": "Vogue Magazine",
			"dates": "2014",
			"description": "Worked as Graphic Designer for the Vogue Magazine",
			"images": ["images/vogue.jpg"],
			
		},
	]
};



var education = {
	"schools": [
		{ "name": "USP - Art Department",
			"dates": "2001",
			"location": "New York",
			"degree": "Web Design",
			"majors": [ "Web Design" ],
			"url": "https://www.udacity.com"
		}		
		
		
	],
	
		
	
	"onlineCourses": [
		{ "school": "SENAC",
			"title": "PhotoShop",
			"dates": "2015",
			"url": "https://www.udacity.com"
		},
	]
};



bio.display = function() {


    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPic);



    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);



    var contactArray = [];
    contactArray.push(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);



    contactLength = contactArray.length
    for (var i = 0; i < contactLength; i++) {
        $("#topContacts").append(contactArray[i]);
    }


    for (var i = 0; i < contactLength; i++) {
        $("#footerContacts").append(contactArray[i]);
    }
	

	
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
	
	
	
		   var formattedskillsStart = HTMLskillsStart.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedskillsStart);



	if(bio.skills.length > 0 ) {
    $('#header').append(HTMLskillsStart);
    for(var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkills);
        }
}

			
	





   
		
	
};



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

};

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


				
				
				for(var j = 0; j < projects.projects[i].images.length; j++) {
				var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
				$(".project-entry:last").append(formattedprojectImage);
			
	
				
				
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
