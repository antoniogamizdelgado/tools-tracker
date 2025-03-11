import { ToolRepository } from './ToolRepository';

describe('ToolRepository', () => {
  it('should add a tool', () => {
    const toolRepository = new ToolRepository();

    toolRepository.addTool({ id: '1', name: 'Tool 1' });

    expect(toolRepository.getTools()).toEqual([{ id: '1', name: 'Tool 1' }]);
  });

  it('should get all tools', () => {
    const toolRepository = new ToolRepository();

    toolRepository.addTool({ id: '1', name: 'Tool 1' });

    expect(toolRepository.getTools()).toEqual([{ id: '1', name: 'Tool 1' }]);
  });
});
