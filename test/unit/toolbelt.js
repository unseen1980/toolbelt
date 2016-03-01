import toolBelt from '../../src/toolbelt';

describe('toolBelt', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(toolBelt, 'greet');
      toolBelt.greet();
    });

    it('should have been run once', () => {
      expect(toolBelt.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(toolBelt.greet).to.have.always.returned('hello');
    });
  });
});
