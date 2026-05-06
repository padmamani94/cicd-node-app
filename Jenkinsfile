pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/padmamani94/cicd-demo-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cicd-demo-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop cicd-container || true'
                sh 'docker rm cicd-container || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 80:3000 --name cicd-container cicd-demo-app'
            }
        }
    }
}
