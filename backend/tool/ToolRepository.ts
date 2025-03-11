import type { Tool } from './Tool';

export class ToolRepository {
  private tools: Tool[] = [];

  constructor() {
    this.tools = [];
  }

  public getTools(): Tool[] {
    return this.tools;
  }

  public addTool(tool: Tool): void {
    this.tools.push(tool);
  }
}
