import React from 'react';
import { MdLocationPin } from 'react-icons/md';  // <MdLocationPin style={{ color: "red" }} />


import './TimelineEvent.scss'; 

/**
 * TimelineEvent is a functional component that displays an event in a timeline format.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.event - The event object that contains the following properties: 
 * @param {JSX.Element} props.event.icon - The icon to be displayed.
 * @param {string} props.event.title - The title of the event.
 * @param {string} props.event.date - The date of the event.
 * @param {string} props.event.description - The description of the event.
 * @param {string} props.event.location - The location of the event if applicable.
 * @param {string} props.event.expandedDescription - The expanded description of the event if applicable. 
 *
 * @returns {JSX.Element} - A JSX element that displays the event in a timeline format.
 */
const TimelineEvent = (props) => {

    // Deconstructing the props into constants 
    // const { icon, title, date, description, expandedDescription } = props;

    // The passed object looks like: { event: Object } so we must destructure it 
    const { event } = props;       

    // We can then destructure firther
    const { icon, title, date, description, expandedDescription, location } = event; 

    console.debug(location); 

    return (
        // TODO: Migrate the style and css file to scss 
        // TODO: Rename class timeline-event below
        <div className="timeline ms-1" style={{ color: "white", paddingBottom: "2rem" }}>
            <div className="edu-highschool">

                <div className="d-flex flex-wrap align-items-center justify-content-start" style={{ marginLeft: "-1.2rem" }}>
                    <div className="icon-bubble d-flex flex-wrap align-items-center justify-content-around">
                        { 
                            // Running the icon as a function that returns the JSX component that was stored 
                            icon()
                        }
                    </div>

                    <h5 className="p-3 ps-3 pt-4">{title}</h5>
                    <div class="timeline-location position-absolute">

                        {
                            (location.length > 0) ? (
                                <>
                                    <MdLocationPin className="location-icon"/>
                                    {location}
                                </>
                            ) : (<></>)
                        }

                    </div>
                    <span className="timeline-date position-absolute">{date}</span>

                </div>

                <p className="timeline-text">{description}</p>
                
            </div>

        </div>
    );
}

export default TimelineEvent;

/*
    <div class="edu-highschool">

        <div class="d-flex flex-wrap align-items-center justify-content-start" style="margin-left: -1.2rem">
            <div class="edu-bubble d-flex flex-wrap align-items-center justify-content-around">
                <i class="fa fa-solid fa-id-badge"></i>
            </div>

            <h5 class="p-3 ps-3 pt-4">Seeking Experience Through an Internship</h5>
            <!-- <span class="timeline-location position-absolute">📍 Wellingtion Region, New Zealand</span> -->

            <span class="timeline-date position-absolute">Currrently</span>

        </div>

        <p class="timeline-text">Motivated to make the most of my summer break, I have been approaching Wellington based companies in the tech indestry 
            to see if they would be willing to take me on as an intern. 
            <span class="hidden read-more-text">
                I am looking for a company that is willing to take me on for an internship ending
                mid February, as that is when I will be heading back to university. <br> <br>
                
                Looking back at the work I have done already, approaching people with regards to a job offer was something I was not
                comfortable with, but have consistantly
                put myseld out there and drastricly imporved my communication skills as a result.
            </span>

            <span class="ms-1 mt-1 read-more-btn text-gradient-orange">read more</span>
            
            
        </p>

    </div>
*/