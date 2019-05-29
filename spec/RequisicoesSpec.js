describe('Requisicoes Ajax', () => {

    beforeEach(() => {
        requisicoes = new Requisicoes();
    });

    describe("Metodo get", () => {

        it('Deve haver o metodo', () => {
            expect(typeof requisicoes.get).toEqual(typeof function () { });
        });

        it('Deve retornar um objeto', (done) => {
            requisicoes.get().then(result=>{
                const response = JSON.parse(result.target.response);
                expect(response.url).toEqual('https://httpbin.org/get');
                done();
            })
        });

    });


});