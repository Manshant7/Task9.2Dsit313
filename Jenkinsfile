pipeline {
    agent any

    environment {
        EMAIL_RECIPIENT = "jasmeen4783.be23@chitkara.edu.in"
        GIT_REPO = 'https://github.com/Manshant7/Task9.2Dsit313.git'
        BRANCH = 'main'
        SONAR_PROJECT_KEY = 'Manshant7_Task9.2Dsit313'  // Replace with your actual project key
        SONAR_ORG = 'manshant7'  // Replace with your SonarCloud org name
        SONAR_HOST_URL = 'https://sonarcloud.io'
        SONAR_TOKEN = credentials('sonar')
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning the repository...'
                git branch: "${BRANCH}", url: "${GIT_REPO}"
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                bat 'mvn clean package'  // Example for Java using Maven
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                echo 'Running unit and integration tests...'
                bat 'mvn test'  // Example for Java
            }
            post {
                always {
                    script {
                        def logContent = currentBuild.rawBuild.getLog(100).join("\n")
                        emailext(
                            to: "${EMAIL_RECIPIENT}",
                            subject: "Test Stage Result - ${currentBuild.fullDisplayName}",
                            body: "Tests completed: ${currentBuild.currentResult}\n\nLogs:\n${logContent}"
                        )
                    }
                }
            }
        }

        stage('SonarCloud Analysis') {
            steps {
                echo 'Running SonarCloud Analysis...'
                withSonarQubeEnv('Sonarqube') {  // Ensure this matches the configured name
                    sh '''
                    mvn sonar:sonar \
                        -Dsonar.projectKey=${SONAR_PROJECT_KEY} \
                        -Dsonar.organization=${SONAR_ORG} \
                        -Dsonar.host.url=${SONAR_HOST_URL} \
                        -Dsonar.login=${SONAR_TOKEN}
                    '''
                }
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Performing security scan...'
                bat 'trivy fs .'  // Example using Trivy for security scanning
            }
            post {
                always {
                    script {
                        def logContent = currentBuild.rawBuild.getLog(100).join("\n")
                        emailext(
                            to: "${EMAIL_RECIPIENT}",
                            subject: "Security Scan Result - ${currentBuild.fullDisplayName}",
                            body: "Security scan completed: ${currentBuild.currentResult}\n\nLogs:\n${logContent}"
                        )
                    }
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to Staging Server...'
                bat 'scp target/app.jar user@staging-server:/deploy/'  // Example
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                echo 'Running integration tests on Staging...'
                bat 'curl -X GET http://staging-server/health-check'  // Example
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Deploying to Production Server...'
                bat 'scp target/app.jar user@production-server:/deploy/'  // Example
            }
        }
    }
}
