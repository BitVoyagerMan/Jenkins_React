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
                    docker.build("my-app")
                }
            }
        }

        stage('Test Docker Image') {
            steps {
                script {
                    def myApp = docker.image("my-app")
                    myApp.inside {
                        sh 'npm test'
                    }
                }
            }
        }


    }
}