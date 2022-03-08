import { ServerRequest } from 'https://deno.land/std@0.105.0/http/server.ts';

export default (req: ServerRequest) =>
  req.respond({ body: JSON.stringify({ success: true }) + '\n' });
