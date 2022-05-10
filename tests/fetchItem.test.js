require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Teste se `fetchProducts` é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('2. Execute a função `fetchItem` com o argumento do item "MLB1615760527" e teste se `fetch` foi chamada', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();   //corrigir teste
  });
  it('Executa a função `fetchProducts` com o argumento "computador" e testa se `fetch` foi chamada', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');   //corrigir teste
  });
  it('', async () => {
    const fetchItemFunc = await fetchItem('MLB1615760527')
    const itemsApi = Object.keys(item);
    const keysfetchItem = Object.keys(fetchItemFunc);
    expect(
      keysfetchItem.includes(itemsApi[0])
    ).toBeTruthy();
  });
  it('Teste se, ao chamar a função `fetchProducts` sem argumento, retorna um erro com a mensagem: `You must provide an url`', async () => {
    await expect(fetchItem()).rejects.toThrowError(new Error('You must provide an url'))
  });
});
