describe("Maior e menor número.", () => {

  beforeEach(() => {
    maiorMenorNumero = new MaiorMenorNumero([5, 8, 18, 9, 1]);
  });

  describe("Metodo maiorNumero", () => {
    it("deve existir o metodo maiorNumero", () => {
      expect(typeof maiorMenorNumero.maiorNumero).toEqual(typeof function () { });
    });

    it("deve retornar um número no metodo maiorNumero", () => {
      expect(typeof maiorMenorNumero.maiorNumero()).toEqual(typeof 0);
    });

    it("deve retornar o maior número da lista", () => {
      expect(maiorMenorNumero.maiorNumero()).toEqual(18);
    });
  });

  describe("Metodo menorNumero", () => {
    it("deve existir", () => {
      expect(typeof maiorMenorNumero.menorNumero).toEqual(typeof function () { });
    });

    it("deve retornar um númer", () => {
      expect(typeof maiorMenorNumero.menorNumero()).toEqual(typeof 0);
    });

    it("deve retornar o menor número da lista", () => {
      expect(maiorMenorNumero.menorNumero()).toEqual(1);
    });
  });

});
