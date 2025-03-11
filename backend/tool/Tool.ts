import { z } from 'zod';
import { v7 as uuidv7 } from 'uuid';

const ToolSchema = z.object({
  id: z
    .string()
    .uuid()
    .default(() => uuidv7()),
  name: z.string(),
});

export type Tool = z.infer<typeof ToolSchema>;
