import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  const reviews = await prisma.review.findMany({ orderBy: { id: "desc" } });
  return Response.json(reviews);
}

export async function POST(req) {
  const data = await req.json();
  const review = await prisma.review.create({ data });
  return Response.json(review);
}
