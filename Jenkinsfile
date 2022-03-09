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
    post {
        always {
            mail to: 'gisselle.reynolds0@ethereal.email',
                subject: "status of pipleline ${currentBuild.fullDisplayName}",
                body: "${env.BUILD_URL} has result ${currentBuild.result}"
        }
    }
}