# Migrating my Static Portfolio to a Dynamic one with React 

## Introduction
I have always wanted my own website and as an up and coming developer I thought that it would be a good opertunity to not only progress my skills with a personal project but also to make something that I can use to present my past and future projects through.  

One way of doing this was to create a personal web portfolio. In this blog post I will share my experience migrating my portfolio from my static prototype - made with HTML - to my now new dynamic portfolio that uses React. I will also speak about my experience using Github's GraphQL API to retrieve and display my pinned repositories on my portfolio and how OpenAI's ChatGPT has been a great problem solving tool along the way. I will then comment on some of the things I would like to imporve on for my third iteration of this project. 

As a developer, it's important to keep your portfolio website up-to-date and reflective of your current skills and projects. One way to do this is by migrating your portfolio from a static HTML website to a dynamic one using a JavaScript framework like React. Not only does this make it easier to update and maintain your portfolio, but it also allows you to add interactive features and dynamic content.

The main purpose of writing this is to document my experience through the project. 

## Motivation for Migrating to React 
Making the move to React was an easy decision. During 2022 I had been following React tutorials on YouTube and started to get a feel for how powerful it is and realised why it's so popular. 

I also wanted to be able to display the repositories I had pinned on my Github account and have a system that would make for eaiser update and maintainability. 


## Migrating to React
After setting up a new projetct using `create-react-app` I began tranfering the content and layout from my static HTML prototype to React components. I was able to reuse many of the styles and design elements from my prototype, saving me a lot of time. 

## Retrieving Pinned Repositories from GitHub
In addition to migrating my portfolio to React, I also wanted to display my pinned repositories from Github. With the increase in populatity of OpenAI's ChatGPT I thought I would give it a go and see how well it performs. 

After a bit of reasearch I landed on the fact I needed to use Github's GraphQL API to retrieve the data for my pinned repositories. From here I asked ChatGPT how a GraphQL query works and how I would implement it into my React application. 

Surprised with the result, ChatGPT gave me some really helpful information regarding the structure of a GraphQL query and even went as far as to provide me an example of how I would implement it. Given the query was not quite right and it took some fine tuning I was blown away at how accurate it actually was. So, thank you OpenAI and ChatGPT. 

In regards to how I went about inplementing this, the process went as follows: 

The first step was to creare a perosnal access token on Github, allowing me to authenticate my API requests. I then used the GraphQL query language to retrieve data from all my pinned repositories - this included the repository name, description, url and some other details.

Finally, I created a component to display the information of each of the repositories. The data was passed in through a series of props that was then deconstructed and passed into the vairous elements within the card. I chose to style each of these components seperately using SCSS. 

## The Flaw with Publishing my Portfolio using Github Pages
As development came firther towards a deployable version, I was researching some ways I would be able to publish my site for other people to see. For some of my previous projects I have used Github Pages, which is a very conveniant solution as you don't need to worry about sourcing a domain name or anything else. Github handles everything for you. 


I came accross a an npm package called `gh-pages` that seemed to do exactly what I wanted. So I used npm to install it, ran the build command and went to go view my newly deployed pesonal portfolio... only to realise that it publishes static version of the site rendering my dynamic projects useless. I knew it was too good to be true.


## Conclusion
Migrating my portfolio website from a static HTML website to a dynamic using React has been a great decision. Not only has it been a great learning experience but it has also made it  eaiser to upgrade and maintain in the future. I think implemnting Github's GraphQL API to display my pinned repositories was a great addition to my portfolio, allowing me to showcase my best work and make it easily accessable for visitors and eaiserly changed. 