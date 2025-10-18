### Static Website CI/CD ###

This repository contains a simple **HTML, CSS, and Bootstrap** website used to **experiment with CI/CD automation** using **GitHub Actions** and **Jenkins**.

The goal of this project is to understand how automated build and deployment pipelines work — from pushing code to auto-deploying a live site on **GitHub Pages** (and optionally via Jenkins).



#### Project Overview ####

- **Frontend Stack:** HTML5, CSS3, Bootstrap  
- **Backend:** None (static website only)  
- **Purpose:** Testing and learning continuous integration & deployment tools  
- **Live Demo:** [View on GitHub Pages](https://nilkanta-dev.github.io/html-bootstrap-css-jenkins-project/)



#### Features ####

- Automated deployment to **GitHub Pages** using **GitHub Actions**
- Optionally deployable through **Jenkins pipelines**
- Lightweight and fully static (no frameworks or build tools required)
- Easily customizable HTML/CSS structure



#### CI/CD Setup ####

##### GitHub Actions #####

The workflow file is located at:  .github/workflows/deploy.yml

 **It performs the following steps**:
- Checks out the repository  
- (If needed) installs dependencies  
- Builds the project (for static projects, this is optional)  
- Deploys to **GitHub Pages** via [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages)

**Trigger**:
Automatically runs whenever a commit is pushed to the `master` branch.



##### Jenkins #####

The workflow is located at /Jenkinsfile

You can use Jenkins to test an alternative CI/CD pipeline.

**It performs the following steps**:
- It checks out the repository
- Installs dependencies
- Lint and Format the code
- Builds the project
- Deploy to Netlify using netlify hook



#### How to Use ####

1. **Clone the repository**

   ```bash

   git clone https://github.com/nilkanta-dev/html-bootstrap-css-jenkins-project.git

   ```
2. **Change directory**

   ```bash
   cd your-repo-name
   ```
3. **Install Dependencies**

   ```bash
   npm install
   ```
4. **Open index.html**

#### License ####

This project is open source under the MIT License

#### Author ####

**Nilkanta@33**
Full-Stack Python Developer