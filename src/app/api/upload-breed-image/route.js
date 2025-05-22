
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get('image');
  const slug = formData.get('slug') || 'breed';

  if (!file || typeof file === 'string') {
    return new Response(JSON.stringify({ error: 'Imagine invalidă' }), { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const fileExt = file.name.split('.').pop();
  const filename = `${slug.replace(/[^a-z0-9-_]/gi, '')}.${fileExt}`;
  const filePath = path.join(process.cwd(), 'public', 'rase', filename);

  await writeFile(filePath, buffer);
  return Response.json({ path: `/rase/${filename}` });
}
