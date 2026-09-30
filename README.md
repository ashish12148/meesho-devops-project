🛍️ Meesho DevOps Project

📌 Project Overview

This project is a Meesho-style e-commerce web application deployed using a complete DevOps workflow.

The project demonstrates how application source code can be managed with GitHub, built through Jenkins, containerized using Docker, stored in Docker Hub, and deployed on a Kubernetes cluster.

The application consists of:

Frontend: React + Vite

Web Server: Nginx

Backend: Node.js + Express

Containerization: Docker

Container Registry: Docker Hub

CI/CD: Jenkins

Orchestration: Kubernetes

Source Code Management: GitHub

Note: This project does not use MongoDB or any other database. The frontend displays the available product/application data without a database backend.

🏗️ Architecture Diagram

                         USER / BROWSER
                              |
                              |
                              v
                 +-------------------------+
                 |   Kubernetes NodePort   |
                 |    Frontend Service     |
                 +------------+------------+
                              |
                              v
                 +-------------------------+
                 |  Frontend Deployment    |
                 |     React + Nginx       |
                 |       Pod(s)            |
                 +------------+------------+
                              |
                              | API Request
                              v
                 +-------------------------+
                 |   Backend Service       |
                 |     ClusterIP           |
                 +------------+------------+
                              |
                              v
                 +-------------------------+
                 |  Backend Deployment     |
                 |   Node.js + Express     |
                 |       Pod(s)             |
                 +-------------------------+


                  CI/CD PIPELINE
                  ==============

       Developer
           |
           | git push
           v
     +-------------+
     |   GitHub    |
     +------+------+ 
            |
            | Source Code
            v
     +-------------+
     |   Jenkins   |
     +------+------+ 
            |
            +----------------------+
            |                      |
            v                      v
   Build Frontend           Build Backend
   Docker Image             Docker Image
            |                      |
            +----------+-----------+
                       |
                       v
                +-------------+
                | Docker Hub  |
                +------+------+
                       |
             Docker Images Pulled
                       |
                       v
              +----------------+
              |  Kubernetes    |
              |    Cluster     |
              +-------+--------+
                      |
              +-------+-------+
              |               |
              v               v
         Frontend          Backend
        Deployment        Deployment

🔄 Complete DevOps Flow

Developer
    |
    | Code Changes
    v
GitHub Repository
    |
    | Git Push
    v
Jenkins
    |
    +---- Checkout Code
    |
    +---- Build Frontend Docker Image
    |
    +---- Build Backend Docker Image
    |
    +---- Push Images to Docker Hub
    |
    v
Docker Hub
    |
    | Pull Images
    v
Kubernetes Cluster
    |
    +---- Frontend Deployment
    |          |
    |          v
    |     React + Nginx Pod
    |
    +---- Backend Deployment
               |
               v
          Node.js + Express Pod

🧩 Project Architecture

1. Frontend

The frontend is developed using:

React
Vite
Nginx

The frontend is packaged into a Docker image and deployed inside Kubernetes.

Frontend flow:

User
  |
  v
Frontend NodePort Service
  |
  v
Frontend Pod
  |
  v
Nginx
  |
  v
React Application

2. Backend

The backend is developed using:

Node.js
Express.js

The backend provides API functionality for the frontend.

Backend flow:

Frontend
   |
   v
Backend Kubernetes Service
   |
   v
Backend Pod
   |
   v
Node.js + Express

There is no MongoDB/database layer in this project.

🐳 Docker Architecture

Two separate Docker images are created.

Frontend Image

ashishpokale2207/meesho-frontend:latest

Frontend container:

React + Vite Build
        |
        v
      Nginx
        |
        v
      Port 80

Backend Image

ashishpokale2207/meesho-backend:latest

Backend container:

Node.js + Express
        |
        v
      Port 5000

☸️ Kubernetes Architecture

Kubernetes manages the application containers.

Frontend

Frontend Deployment
        |
        +---- Frontend Pod
        |
        +---- Frontend Pod

The Deployment maintains the required number of Pods.

Backend

Backend Deployment
        |
        +---- Backend Pod
        |
        +---- Backend Pod

The backend is accessed through a Kubernetes Service.

🌐 Kubernetes Services

Frontend Service

The frontend Service exposes the application to the user.

Internet / Browser
        |
        v
Frontend NodePort Service
        |
        v
Frontend Pod

Backend Service

The backend Service provides internal communication between frontend and backend.

Frontend Pod
     |
     v
Backend Service
     |
     v
Backend Pod

🔗 Application Request Flow

When the user opens the application:

1. User opens the application URL
             |
             v
2. Kubernetes Frontend NodePort
             |
             v
3. Frontend Pod
             |
             v
4. Nginx serves React application
             |
             v
5. React application sends API request
             |
             v
6. Backend Kubernetes Service
             |
             v
7. Backend Pod
             |
             v
8. Node.js + Express processes request
             |
             v
9. Response is returned to frontend
             |
             v
10. Frontend displays the result

🔁 CI/CD Pipeline

Jenkins is used to automate the application build and deployment process.

GitHub
   |
   v
Jenkins
   |
   v
Checkout Source Code
   |
   v
Build Docker Images
   |
   +----------------------+
   |                      |
   v                      v
Frontend Image       Backend Image
   |                      |
   +----------+-----------+
              |
              v
          Docker Hub
              |
              v
       Kubernetes Cluster
              |
       +------+------+
       |             |
       v             v
   Frontend        Backend
   Deployment      Deployment

📁 Project Structure

meesho-devops-project/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── Dockerfile
│   └── nginx.conf
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
├── k8s/
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── backend-deployment.yaml
│   └── backend-service.yaml
│
├── Jenkinsfile
└── README.md

🛠️ Technologies Used

Technology

Purpose

Git

Version Control

GitHub

Source Code Management

Jenkins

CI/CD Automation

Docker

Containerization

Docker Hub

Docker Image Registry

Kubernetes

Container Orchestration

React

Frontend

Vite

Frontend Build Tool

Nginx

Web Server

Node.js

Backend Runtime

Express.js

Backend API

☸️ Important Kubernetes Commands

Check Pods

kubectl get pods

Check Deployments

kubectl get deployments

Check Services

kubectl get svc

Check all resources

kubectl get all

Describe a Pod

kubectl describe pod <pod-name>

Check Pod logs

kubectl logs <pod-name>

Check previous container logs

kubectl logs <pod-name> --previous

Check Deployment details

kubectl describe deployment <deployment-name>

Check Service details

kubectl describe svc <service-name>

Check Kubernetes events

kubectl get events --sort-by=.metadata.creationTimestamp

Search errors in logs

kubectl logs <pod-name> | grep -i error

🐳 Important Docker Commands

Build Frontend

docker build -t ashishpokale2207/meesho-frontend:latest ./frontend

Build Backend

docker build -t ashishpokale2207/meesho-backend:latest ./backend

Push Frontend

docker push ashishpokale2207/meesho-frontend:latest

Push Backend

docker push ashishpokale2207/meesho-backend:latest

Check Images

docker images

Check Containers

docker ps

🔍 Troubleshooting

If a Kubernetes Pod is not running:

kubectl get pods

Then check:

kubectl describe pod <pod-name>

Check application logs:

kubectl logs <pod-name>

Check all resources:

kubectl get all

Check events:

kubectl get events --sort-by=.metadata.creationTimestamp

For application/API errors:

kubectl logs <pod-name> | grep -i error
