import { DateToObjectPipe } from './date-to-object.pipe';

describe('DateToObjectPipe', () => {
  it('create an instance', () => {
    const pipe = new DateToObjectPipe();
    expect(pipe).toBeTruthy();
  });
});
