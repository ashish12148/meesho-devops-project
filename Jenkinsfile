pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'ashishpokale2207'
        FRONTEND_IMAGE = "${DOCKERHUB_USER}/meesho-frontend"
        BACKEND_IMAGE  = "${DOCKERHUB_USER}/meesho-backend"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t $FRONTEND_IMAGE:latest ./frontend'
            }
        }

        stage('Build Backend Image') {
            steps {
                sh 'docker build -t $BACKEND_IMAGE:latest ./backend'
            }
        }

        stage('Push Docker Images') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-credentials',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push $FRONTEND_IMAGE:latest
                        docker push $BACKEND_IMAGE:latest
                        docker logout
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Meesho CI Pipeline completed successfully!'
        }

        failure {
            echo 'Meesho CI Pipeline failed. Check the Jenkins console output.'
        }
    }
}