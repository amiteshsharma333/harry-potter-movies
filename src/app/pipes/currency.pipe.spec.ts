import { DollarCurrencyPipe } from './currency.pipe';

describe('CurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new DollarCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
