import React from 'react';
import { FaGraduationCap,  } from 'react-icons/fa'; 
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
		icon: () => <HiOutlineCode />
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