pipeline {
    agent any

    environment {
        DOCKERHUB_USERNAME = 'ashishpokale2207'
        FRONTEND_IMAGE = 'ashishpokale2207/meesho-frontend:latest'
        BACKEND_IMAGE = 'ashishpokale2207/meesho-backend:latest'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verify Frontend Files') {
            steps {
                sh '''
                    echo "===== App.jsx ====="
                    tail -10 frontend/src/App.jsx

                    echo "===== main.jsx ====="
                    cat frontend/src/main.jsx
                '''
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh '''
                    docker build -t $FRONTEND_IMAGE ./frontend
                '''
            }
        }

        stage('Build Backend Image') {
            steps {
                sh '''
                    docker build -t $BACKEND_IMAGE ./backend
                '''
            }
        }

        stage('Push Docker Images') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin

                        docker push $FRONTEND_IMAGE
                        docker push $BACKEND_IMAGE

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