pipeline {
    agent any
    stages{
        stage('get code from git') {
            steps {
                git 'https://github.com/zeeemughal/jenkins-nodeapp.git'
            }
        }
        stage('run ansible') {
            steps {
                sh 'echo this is ansible stage'
            }
        }
    }
}