import React, { useState } from 'react';

import './ReadMore.scss';


const ReadMore = (props) => {

    // Deconstructing the props to use in the component 
    const { extendedDescription } = props; 

    const [ isExpanded, setIsExpanded ] = useState(false);
    const paragraphs = extendedDescription;
    const refinedParagraphs = [...paragraphs].slice(0, -1);          // removing last paragraph 

    /* CHECK:

        1. What if there is only 1 paragraph in the extended text - slicing will through an error 
        2. What if theres 2 paragraphs - slicing will return a string, which is what im working on below 
        3. What if theres more than one paragraph - slicing will return an array of strings

        *  Last paragraph must not have <br> tags 

    */

    /* TODO:

        - Could just make extendedDescription: [] an array with paragraphs as an element - removing line 12

        - Animate the expanded text - slide down into the page, such as in jquery 

        Here is a solution from ChatGPT using Framer Motion: 
        import { motion } from "framer-motion";

        function ReadMore({ text }) {
            const [isExpanded, setIsExpanded] = useState(false);

            return (
                <>
                <button onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? "Read less" : "Read more"}
                </button>
                <motion.div
                    initial={{ height: 0, overflow: "hidden" }}
                    animate={{ height: isExpanded ? "auto" : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {text}
                </motion.div>
                </>
            );
        }
    */

    return (
        <>
            { 
                // If it is expanded disyplay the read more text 
                (isExpanded) ? (
                    <span className="read-more-text">
                    {
                        // Adding the all paragraphs but the last 
                        refinedParagraphs.map( (paragraph, index) => ( 
                        <span key={index}>
                            {` ${paragraph}`}
                            <br/> <br/>
                        </span>
                    ))}
                        
                    {
                        // Adding the last paragraph
                        paragraphs[ paragraphs.length - 1 ]
                    }

                    </span>
                ) : (<> </>)
            }

            {
                // Displaying the button - changing between states read more/less
                <span
                    className="ms-1 mt-1 read-more-btn text-gradient-orange"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? "read less" : "read more"}
                </span>
            }
        </>
    );
}

export default ReadMore;