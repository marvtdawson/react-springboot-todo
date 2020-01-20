import axios from 'axios';

class HelloWorldService {
    executeHelloWorldService() {
        console.log('Execute Service');
        axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldBeanService() {
        console.log('Execute Service');
        axios.get('http://localhost:8080/hello-world-bean');
    }
}

export default new HelloWorldService()
