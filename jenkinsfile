pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/yourusername/mywebapp.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t blackberry07/mywebapp:v1 .'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push blackberry07/mywebapp:v1'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 blackberry07/mywebapp:v1'
            }
        }
    }
}
