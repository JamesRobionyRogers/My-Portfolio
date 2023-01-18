import React from 'react';
import { FaGraduationCap, FaRegIdBadge } from 'react-icons/fa'; 
import { HiOutlineCode } from 'react-icons/hi';

import './Experience.scss'; 
import TimelineEvent from '../../components/TimelineEvent';

// TODO: Inplement a better way of adding and removing from the timeline - CMS? 

const experiences = [
	{
		title: "Onslow College",
		description: "During my time at Onslow College I was a part of the 1st XI Boys Hockey team for three years.",
		extendedDescription: "",
		date: "2017 - 2021", 
		location: "",
		icon: () => <FaGraduationCap /> // "" // may want to do this by passing a component in as a prop 
	},
	{
		title: "University of Otago",
		description: "I am currently studying towards a Bachelor of Applied Science (BASc), Majoring in Software Engineering, Minoring in Computer Science",
		extendedDescription: "",
		date: "2022 - 2024", 
		location: "",
		icon: () => <FaGraduationCap /> // "" // may want to do this by
	},
	{
		title: "CodeCamp",
		description: "While working with CodeCamp I have helped run a range of programming classes targeted towards primary and intermediate aged students. During these classes I am often going round helping and facilitating groups with their projects and providing one on one help with students when they get stuck.",
		extendedDescription: "",
		date: "Nov 2022 - Feb 2023",
		location: "Wellington Region, New Zealand",
		icon: () => <HiOutlineCode />
	}, 
	{
		title: "Seeking Experience Through an Internship", 
		description: "Motivated to make the most of my summer break, I have been approaching Wellington based companies in the tech indestry to see if they would be willing to take me on as an intern.",
		extendedDescription: "I am looking for a company that is willing to take me on for an internship ending mid February, as that is when I will be heading back to university. Looking back at the work I have done already, approaching people with regards to a job offer was something I was not comfortable with, but have consistantly put myseld out there and drastricly imporved my communication skills as a result.",
		date: "Currently", 
		location: "", 
		icon: () => <FaRegIdBadge />
	}
]


const Experience = () => {

	// Create a TimelineExperience component 

	// Iterate over the array of experiences 

	
  	return (
		<div id="eduation" className="mt-5">
			<div className="position-relative">

				<div className="container ">

					<h4 className="card-title mb-4">
						<span className="text-gradient">Education & Experience</span>
					</h4>

					{
						/* Map over the experience array returning TimelineEvent components  */
						experiences.map((experience) => {
							return (
								<TimelineEvent 
									key={experience.title}
									event={experience}	// Passing the object into the component
								/>
							)
						}) 
					}
				</div>
			</div>
		</div>
  	);
}

export default Experience;