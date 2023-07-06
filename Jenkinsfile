pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("my-react-app")
                }
            }
        }

        stage('Test Docker Image') {
            steps {
                script {
                    def myApp = docker.image("my-react-app")
                    myApp.inside {
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image("my-react-app").push("latest")
                    }
                }
            }
        }
    }
}