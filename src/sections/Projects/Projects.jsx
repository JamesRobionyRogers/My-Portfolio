import { useState, useEffect } from 'react'; 
import React from 'react';

import GithubProjectCard from '../../components/GithubProjectCard'; 
import '../../App.css';

const Projects = () => {

	// eslint-disable-next-line no-unused-vars
	const [pinnedRepos, setPinnedRepos] = useState({}); 

	// Setting up the API to recieve from Github
	const API_URL = "https://api.github.com/graphql"; 

	const getPinnedRepos = async () => {
		// Setting up request 
		const accessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN; 
		const headers = { 
			Authorization: `Bearer ${accessToken}`,
			"Content-Type": "application/json"
		}

		// RepositoryOwner query is used to get the repository information 
		// Then retrieving first 100 repositories, ordering them by updated_at, filtering by isFork, isLocked
		// https://docs.github.com/en/graphql/reference/objects#repository 
		const query = `{
      		user(login: "JamesRobionyRogers") {
        		pinnedItems(first: 6) {
          			totalCount
          			edges {
            			node {
              				... on Repository {
								id
                				name
								description
								homepageUrl
								url

								primaryLanguage {
									color
									name
								}
								languages(first: 100) {
									edges {
										node {
											color
											name
										}
									}
								}
                				updatedAt
								createdAt
              				}
            			}
          			}
        		}
      		}
    	}`

		// Sending the responce to Github API 
		const responce = await fetch(API_URL, {
			method: "POST", 
			headers: headers, 
			body: JSON.stringify({ query })
		});

		const data = await responce.json(); 
		
		console.log(data.data.user.pinnedItems); 
		setPinnedRepos(data.data.user.pinnedItems); 

	}

	useEffect(() => {
		getPinnedRepos(); 
	}, [])
	

	return (
		<div id="projects" className="mt-5">
			<div className="position-relative">


				<div className="container ">

					<h4 className="card-title mb-4">
						<span className="text-gradient">Projects</span>
					</h4>

					<div className="container d-flex flex-wrap justify-content-around">
						{ 
							// If this number is not equal to 0, it means that the object is not empty and the following code is executed:
							Object.keys(pinnedRepos).length !== 0 && pinnedRepos.edges.map((repoNode) => {
								// All details are stored within an object under the key node 
								repoNode = repoNode.node;
								// console.debug(repoNode);

								// Returning a Project card for every repo in the responce from the API 
								return (
									<GithubProjectCard
										key={repoNode.id}
										projectTitle={repoNode.name}
										description={repoNode.description}
										url={repoNode.url}
										homepageUrl={repoNode.homepageUrl}
										primaryLanguage={repoNode.primaryLanguage}
									/>
								)
							})
						}


					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;