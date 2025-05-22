
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.review.createMany({
    data: [
      {
        name: "Ion Popescu",
        rating: 5,
        message: "Produsele sunt excelente! Am avut o experiență minunată, ouăle sunt proaspete și de calitate superioară. Recomand cu încredere!",
      },
      {
        name: "Maria Ionescu",
        rating: 4.5,
        message: "Serviciul este rapid și eficient. Ouăle au un gust fantastic și sunt livrate mereu la timp. Singura sugestie ar fi ambalajul.",
      }
    ]
  });

  await prisma.breed.createMany({
    data: [
      {
        slug: "rhode-island",
        name: "Rhode Island Red",
        description: "Rhode Island Red este o rasă rezistentă, cunoscută pentru ouăle sale maronii, temperamentul blând și adaptabilitatea la diferite condiții de mediu.",
        image: "/rhode.jpg"
      },
      {
        slug: "leghorn",
        name: "Leghorn",
        description: "Leghorn este o rasă prolifică de ouătoare, apreciată pentru ouăle albe și pentru temperamentul vioi.",
        image: "/leghorn.jpg"
      },
      {
        slug: "plymouth-rock",
        name: "Plymouth Rock",
        description: "Plymouth Rock este o rasă blândă și prietenoasă, excelentă pentru familiile cu copii. Produce ouă maronii.",
        image: "/plymouth.jpg"
      },
      {
        slug: "sussex",
        name: "Sussex",
        description: "Sussex este o rasă veche, versatilă, cunoscută pentru carnea gustoasă și ouăle consistente.",
        image: "/sussex.jpg"
      }
    ]
  });
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
