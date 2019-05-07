export default class Config {

    data = {
        BASE_URL: 'http://localhost:3000'
    };

    configure() {
        switch (process.env.NODE_ENV) {
            case 'production':                                
                this.data.BASE_URL = 'http://enderecoproducao.com.br';
                break;
            case 'test':
                this.data.BASE_URL = 'http://enderecoteste.com.br';
                break;
            default:
                break;
        }
        return this.data;
    }

}