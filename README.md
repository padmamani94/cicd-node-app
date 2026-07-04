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

npm install

4. Build
Builds the application.

npm run build

4. Test (Optional)
Executes application tests.

npm test

5. Build Docker Image
Creates a Docker image from the Dockerfile.

docker build -t node-app .

6. Stop Existing Container
Stops the running container before deploying the new version.

docker stop node-app
docker rm node-app

7. Deploy
Runs the newly built Docker container.

docker run -d \
--name node-app \
-p 3000:3000 \
node-app

Installation:

Clone the repository:     git clone https://github.com/padmamani94/cicd-node-app.git

Move into the project:    cd cicd-node-app

Install dependencies:     npm install

Start the application:    npm start


Docker Commands

Build Image:        docker build -t node-app .

Run Container:      docker run -d -p 3000:3000 --name node-app node-app

Stop Container:     docker stop node-app

Remove Container:   docker rm node-app

Running Containers: docker ps

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
Padmavathi M
DevOps Engineer

GitHub
https://github.com/padmamani94

