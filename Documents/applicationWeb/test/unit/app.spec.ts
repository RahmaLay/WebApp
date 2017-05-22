import {App} from '../../src/app';

describe('the app', () => {
	it('should have ', () => {
		expect(new App().usersList).not.toBeNull();
	});
});

/*
describe('the app', () => {
  it('says hello', () => {
    expect(new App().message).toBe('Hello World!');
  });
});*/