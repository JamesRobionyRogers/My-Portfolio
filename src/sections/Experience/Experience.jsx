import React from 'react';
import { FaGraduationCap, FaRegIdBadge } from 'react-icons/fa'; 
import { HiOutlineCode } from 'react-icons/hi';
import { PiShoppingCartBold } from 'react-icons/pi';

import './Experience.scss'; 
import TimelineEvent from '../../components/TimelineEvent';

// TODO: Implement a better way of adding and removing from the timeline - CMS? 

const experiences = [
	{
		title: "Seeking Experience Through an Internship",
		description: "Motivated to make the most of my summer break, I have been approaching Wellington based companies in the tech industry to see if they would be willing to take me on as an intern.",
		extendedDescription: [
			"I am looking for a company that is willing to take me on for an internship ending mid February, as that is when I will be heading back to university.",
			"Looking back at the work I have done already, approaching people with regards to a job offer was something I was not comfortable with, but have consistently put myself out there and drastically improved my communication skills as a result."
		],
		date: "Currently",
		icon: () => <FaRegIdBadge />
	},
	{
		title: "CodeCamp",
		description: "During my summer break I worked with CodeCamp to provide quality programming education to primary and intermediate aged students. With a focus on student success, I had a key role in facilitating group projects, providing one-on-one teaching, and creating a positive learning environment through our class room sessions and holiday programs. My strong communication skills and ability to help students overcome obstacles, made me a valuable member of the AkoTech team.",
		date: "Nov 2022 - Feb 2023",
		location: "Wellington Region, New Zealand",
		icon: () => <HiOutlineCode />
	}, 
	{
		title: "New World",
		description: "During the summer break I also picked up part time work working in both the Grocery and Produce departments. Through out my time at New World I worked both the opening and closing shifts. I was thus responsible for making sure the department was presentable, merchandise was appropriately stored and the store room was ready for deliveries. Working at New World helped me work on my communication and customer service skills which I have brought with me when working on group project at University.",
		date: "Nov 2022 - Feb 2023",
		location: "Wellington Region, New Zealand",
		icon: () => <PiShoppingCartBold />
	}, 
	{
		title: "University of Otago",
		description: "I am currently a second-year Software Engineering student at the University of Otago studying towards a Bachelor of Applied Science (BASc), Double majoring in Software Engineering & Computer Science. I am currently on track to graduate in December of 2024.",
		date: "2022 - 2024",
		location: "",
		universityInfo: {
			graduationDate: "Dec 2024",
			gpa: "8.4"
		},
		icon: () => <FaGraduationCap />
	},
	{
		title: "Onslow College",
		description: "During my time at Onslow College I was a part of the 1st XI Boys Hockey team for three years.",
		date: "2017 - 2021", 
		icon: () => <FaGraduationCap />
	}
];


const Experience = () => {

	// Create a TimelineExperience component 

	// Iterate over the array of experiences 

	
  	return (
		<div id="eduction" className="mt-5">
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