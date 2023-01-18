import React from 'react';
import { SiGithub } from 'react-icons/si';

import './GithubProjectCard.scss'; 


const GithubProjectCard = (props) => {
	// Deconstruct the props - , languages, updatedAt, createdAt
	const { projectTitle, description, url, homepageUrl, primaryLanguage} = props; 

	// projectTitle = projectTitle.replace("(-|_)", " "); 

  return (
	  	<div className="card project-card p-3 mb-5 text-bg-gray border border-light">

		  <div className="card-title mb-4 d-flex flex-wrap align-items-center justify-content-between vertical-align-center">

			  	<div className="d-flex flex-wrap align-items-center">
				  	<SiGithub className="github-icon me-2" style={{ color: "white" }} />

					{/* Replacing the - and _ chars with spaces */}
				  	<p className="card-title mb-0 me-2 mw-50">{projectTitle.replace(/[-_]/g, " ")}</p>

			  	</div>

			  	<span className="prog-lang" style={{ background: primaryLanguage.color }}>{primaryLanguage.name}</span>

		  	</div>

		  	<div className="card-body p-0">
				<p className="card-text">{description}</p>
		  	</div>

		  	<div className="card-buttons">
				<a className="card-btn-link card-link" href={url}>View on Github</a>
				{/* {console.debug(projectTitle, description, url, homepageUrl, primaryLanguage)} */}
				{
					(homepageUrl.length > 0) ? (
					  	<a className="card-btn-link card-link" href={homepageUrl}>View Website</a>
				  	) : (
						// TODO: Add a loading repos component while awaitng api responce
						<></>
				  )
				}
				
		  	</div>
	  	</div>
  );
}

export default GithubProjectCard;