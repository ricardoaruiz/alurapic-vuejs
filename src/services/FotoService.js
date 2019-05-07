/**
 * Classe responsável por fazer todos os acessos a API, retornando
 * ao componente os dados ou os erros em alto nível.
 */
export default class FotoService {

    // https://github.com/pagekit/vue-resource/blob/develop/docs/resource.md

    // Injetamos o resource como dependência para isolar toda
    // parte de requisição no serviço
    constructor(resource) {
        this.resource = resource('v1/fotos{/id}')
    }

    buscarFotos() {
        return this.resource.query()
            .then(response => {
                return response.json()
            })
            .catch( error => {
                const msgErro = 'Erro ao buscar as fotos';
                // eslint-disable-next-line
                console.log(msgErro, error);
                throw new Error(msgErro);
            }); 
    }

    buscarFoto(id) {
        return this.resource.get({id})
            .then( response => response.json() )
            .catch( error => {
                const msgErro = `Erro ao buscar a fotos com id ${id}`;
                // eslint-disable-next-line
                console.log(msgErro, error);
                throw new Error(msgErro);
            }) 
    }

    salvar(foto) {
        return this.resource.save(foto)
            .catch( error => {
                const msgErro = 'Erro ao salvar uma foto';
                // eslint-disable-next-line
                console.log(msgErro, error);
                throw new Error(msgErro);
            })
    }

    alterar(foto) {
        return this.resource.update({id : foto._id}, foto)
            .catch( error => {
                const msgErro = `Erro ao altear a foto com id ${id}`;
                // eslint-disable-next-line
                console.log(msgErro, error);
                throw new Error(msgErro);
            })
    }

    remover(id) {
        return this.resource.delete({id})
            .catch( error => {
                const msgErro = 'Erro ao remover uma foto';
                // eslint-disable-next-line
                console.log(msgErro, error);
                throw new Error(msgErro);                
            })
    }
}

