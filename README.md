                                                    CI/CD Pipeline for Node.js Application using Jenkins & Docker

Project Overview

This project demonstrates a complete Continuous Integration and Continuous Deployment (CI/CD) pipeline for a Node.js application using Jenkins and Docker.

The pipeline automates the software delivery process by building, testing, containerizing, and deploying the application whenever code changes are pushed to the Git repository.

Features

- Automated CI/CD using Jenkins
- Source Code Management with GitHub
- Docker image creation
- Docker container deployment
- Automated build process
- Easy deployment and rollback
- Production-ready Jenkins Pipeline
- Declarative Jenkinsfile

Technologies Used

| Technology | Purpose |
|------------|---------|
| Node.js | Application Development |
| Jenkins | CI/CD Automation |
| Docker | Containerization |
| Git | Version Control |
| GitHub | Source Code Repository |
| Linux | Deployment Environment |

Project Structure

├── Jenkinsfile
├── Dockerfile
├── package.json
├── package-lock.json
├── app.js
├── routes/
├── views/
├── public/
└── README.md

CI/CD Pipeline Flow

Developer
    │
    ▼
Push Code to GitHub
    │
    ▼
Jenkins Pipeline Trigger
    │
    ▼
Checkout Source Code
    │
    ▼
Install Dependencies
    │
    ▼
Build Application
    │
    ▼
Run Tests (Optional)
    │
    ▼
Build Docker Image
    │
    ▼
Stop Existing Container
    │
    ▼
Run New Docker Container
    │
    ▼
Application Deployed Successfully


Jenkins Pipeline Stages

1. Checkout
Pulls the latest source code from GitHub.

2. Install Dependencies
Installs all required Node.js packages.

bash
npm install

3. Build
Builds the application.

bash
npm run build

4. Test (Optional)
Executes application tests.

bash
npm test

5. Build Docker Image
Creates a Docker image from the Dockerfile.

bash
docker build -t node-app .

6. Stop Existing Container
Stops the running container before deploying the new version.

bash
docker stop node-app
docker rm node-app

7. Deploy
Runs the newly built Docker container.

bash
docker run -d \
--name node-app \
-p 3000:3000 \
node-app

Installation:

Clone the repository

bash
git clone https://github.com/padmamani94/cicd-node-app.git


Move into the project

bash
cd cicd-node-app


Install dependencies

bash
npm install

Start the application

bash
npm start

Docker Commands

Build Image

bash
docker build -t node-app .

Run Container

bash
docker run -d -p 3000:3000 --name node-app node-app

Stop Container

bash
docker stop node-app


Remove Container

bash
docker rm node-app

List Running Containers

bash
docker ps

Jenkins Prerequisites

- Jenkins installed
- Docker installed
- Git installed
- Docker daemon running
- Jenkins user added to Docker group
- GitHub repository access

Pipeline Benefits

- Faster deployments
- Automated build process
- Reduced manual effort
- Consistent deployments
- Easy rollback
- Improved software quality
- Continuous Delivery

Future Enhancements

- Integrate SonarQube for code quality
- Add Trivy image scanning
- Push Docker images to Docker Hub
- Kubernetes deployment
- Helm Charts
- Slack/Email Notifications
- Automated rollback
- Multi-stage Docker builds

Learning Outcomes

This project demonstrates:

- Jenkins Declarative Pipeline
- Continuous Integration
- Continuous Deployment
- Docker Containerization
- GitHub Integration
- Linux Commands
- Automated Application Deployment
- DevOps Best Practices

Author
Padmavathi Mani

DevOps Engineer

GitHub
https://github.com/padmamani94

