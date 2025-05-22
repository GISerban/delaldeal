import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  const breeds = await prisma.breed.findMany({ orderBy: { id: "desc" } });
  return Response.json(breeds); // ✅ important să returnezi JSON valid
}

export async function POST(req) {
  const body = await req.json();

  if (!body.name || !body.description || !body.image) {
    return new Response("Câmpuri lipsă", { status: 400 });
  }

  const slug = body.name.toLowerCase().replace(/\s+/g, "-");

  const newBreed = await prisma.breed.create({
    data: {
      name: body.name,
      description: body.description,
      image: body.image,
      slug,
    },
  });

  return Response.json(newBreed);
}
