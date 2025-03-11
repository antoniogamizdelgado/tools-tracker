import { ToolRepository } from './ToolRepository';
import { v7 as uuidv7 } from 'uuid';
import type { Tool } from './Tool';

describe('ToolRepository', () => {
  it('should add a tool', () => {
    const toolRepository = new ToolRepository();
    const tool: Tool = { id: uuidv7(), name: 'Tool 1' };

    toolRepository.addTool(tool);

    expect(toolRepository.getTools()).toEqual([tool]);
  });

  it('should get all tools', () => {
    const toolRepository = new ToolRepository();
    const tool: Tool = { id: uuidv7(), name: 'Tool 1' };

    toolRepository.addTool(tool);

    expect(toolRepository.getTools()).toEqual([tool]);
  });
});
