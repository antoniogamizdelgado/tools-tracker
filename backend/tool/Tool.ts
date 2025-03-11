import { z } from 'zod';

const ToolSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type Tool = z.infer<typeof ToolSchema>;
