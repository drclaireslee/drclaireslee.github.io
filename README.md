# Dr Claire S. Lee Official Website
This is the official repository for Dr. Claire Lee's website. The other repository is meant for a class project, so you can ignore that. This repository will contain all of the information needed for the website, which is hosted on GitHub Pages and is frontend only.

This website uses React,  Vite, and JavaScript as the framework. You can learn more about it here: https://vite.dev/guide/

Bootstrap and React-Bootstrap are the main CSS libraries used for the website. These libraries can be installed through node modules (more details in the getting started section).

React-Bootstrap: https://react-bootstrap.netlify.app/docs/getting-started/introduction
Bootstrap: https://getbootstrap.com/docs/5.3/getting-started/introduction/

# Website Description Given By Dr. Claire Lee: 
I am planning to update my professional website to better showcase my recent research activities and teaching experiences. The updated site will serve as a comprehensive platform to highlight my academic and professional contributions, while also providing useful information for different audiences.

The website will feature the following sections (with content and categories to be refined and expanded over time):

- About: A professional overview of myself and the lab.
- Research: Current and past research projects, publications, and areas of focus.
- Teaching: Courses taught, teaching philosophy, and experiential learning approaches.
- Grants: Information on funded research projects, collaborations, and funding acknowledgments.
- Members: Profiles of current lab members, collaborators, and alumni.
- Additional Resources: Other relevant content such as news, media features, outreach efforts, or professional activities.

The primary audiences for the website are current and prospective students, as well as academic colleagues and collaborators. My goal is to create a stronger professional presence online that not only reflects my work but also promotes the activities of my research lab. In doing so, I hope the site will serve as both a resource for those interested in my work and a platform to encourage new opportunities for collaboration and engagement.

Thank you!

# Get Started
To edit this website, clone this repository to your machine. Then switch to the client directory and run the following command to install the node modules.
```bash 
npm install
```

To get the dist folder used to compile and deploy the webpage to Github Pages, run the following command
```bash 
npm run build
```

# Committing Changes
This website is hosted on GitHub Pages. Any changes you make on the main branch are committed to the main branch or a branch that can merge commits into the main branch.

After committing to main (directly or via another dev branch), run the following command
```bash
npm run deploy
```
This will deploy any changes to the gh-pages branch, which will display the changes on the website.
<b>DO NOT MODIFY THE GH-PAGES BRANCH DIRECTLY</b>, as this can cause errors with deployment.

<b>NOTE</b>: It will take a few minutes for your build to complete after deploying. Changes to the site will not come immediately.

# Client Folder Documentation
This is where all of the front-end work is stored (i.e. React, CSS, etc.) using Vite.
* public / assets: Contains all of the images used on the website
    * Lab Members: Contains images of all of the lab members
* src: Source code for the entire project
    * Components: This folder contains reusable pieces of code for other pages
    * JSON Files: 
        This folder conatains information for lab members and research grants
    
    * Pages
        * App.jsx: The home page
        * Research.jsx: The research page
        * Teaching.jsx: The teaching page
        * Grants.jsx: The grants page
        * Team.jsx: The members/team page
        * Activities.jsx: The activities page
        * Contact.jsx: The contact page

* Misc. files: 
    * App.css: CSS for the entire website provided by Vite (DO NOT TOUCH)
    * index.css: CSS for certain HTML elements provided by Vite (DO NOT TOUCH)
    * Custom.css: Any CSS rules added to override Bootstrap CSS and Vite components; this can be edited
    * main.jsx: Routing for pages using react-router-dom (Only HashRouter works for Github Pages)


# Contributors
This website was made by the following people with love and care:
* Anton Kovalev
* Kriston Theng
* Rohan Mallu
* Russell Jones
* Zuriel Pagan



