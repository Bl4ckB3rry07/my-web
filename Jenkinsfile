pipeline {
    agent any

    stages {

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

    }
}
