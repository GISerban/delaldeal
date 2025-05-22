import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function PUT(req, { params }) {
  const id = parseInt(params.id);
  const body = await req.json();

  const slug = body.name.toLowerCase().replace(/\s+/g, "-");

  const updated = await prisma.breed.update({
    where: { id },
    data: {
      name: body.name,
      description: body.description,
      image: body.image,
      slug,
    },
  });

  return Response.json(updated);
}

export async function DELETE(_, { params }) {
  const id = parseInt(params.id);
  await prisma.breed.delete({ where: { id } });
  return new Response(null, { status: 204 });
}
