import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function DELETE(_, { params }) {
  const id = parseInt(params.id);
  await prisma.review.delete({ where: { id } });
  return new Response(null, { status: 204 });
}

export async function PUT(req, { params }) {
  const id = parseInt(params.id);
  const body = await req.json();

  const updated = await prisma.review.update({
    where: { id },
    data: {
      name: body.name,
      rating: parseFloat(body.rating),
      message: body.message, // 👈 asta era esențial!
    },
  });

  return Response.json(updated);
}
