pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                
                git url: 'https://github.com/nilkanta-dev/html-bootstrap-css-jenkins-project.git', 
                branch: 'master'
            }
        }

        stage('Install Dependencies') {
            steps {
                
                sh 'npm install'
            }
        }

        stage('Lint & Format') {
            steps {
                sh 'npm run lint:html || true'
                sh 'npm run lint:css || true'
                sh 'npm run format'
            }
        }

        stage('Build'){
            steps {
                sh 'npm run build'
            }
        }

        stage('Trigger Netlify Deploy') {
            steps {
                withCredentials([string(credentialsId: 'netlify-hook', variable: 'NETLIFY_HOOK')]) {
                    
                    sh '''
                    echo "Triggering Netlify deploy..."
                    curl -X POST "$NETLIFY_HOOK"
                    echo "Netlify deploy hook triggered."
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "Pipeline finished: deploy hook sent."
        }
        failure {
            echo "Pipeline failed. Check logs."
        }
    }
}
