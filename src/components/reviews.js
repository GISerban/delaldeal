import React from "react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Ion Popescu",
      rating: 5,
      message:
        "Produsele sunt excelente! Am avut o experiență minunată, ouăle sunt proaspete și de calitate superioară. Recomand cu încredere!",
    },
    {
      id: 2,
      name: "Maria Ionescu",
      rating: 4.5,
      message:
        "Serviciul este rapid și eficient. Ouăle au un gust fantastic și sunt livrate mereu la timp. Singura sugestie ar fi mai multe opțiuni pentru ambalaj.",
    },
    {
      id: 3,
      name: "Alexandru Vasilescu",
      rating: 4,
      message:
        "Oferă produse de calitate, dar ar putea îmbunătăți comunicarea. În rest, sunt mulțumit de serviciile oferite și de gustul produselor.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Păreri ale clienților
      </h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-[var(--sage)] p-6 rounded-lg shadow-md border border-[var(--sage)]"
          >
            <div className="flex items-center mb-3">
              {/* Stars */}
              <div className="flex space-x-1 text-yellow-400">
                {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                  <span key={i} className="text-xl">
                    ★
                  </span>
                ))}
                {/* Half Star if Rating is .5 */}
                {review.rating % 1 !== 0 && <span className="text-xl">★</span>}
              </div>
              <span className="ml-4 font-semibold text-white">
                {review.name}
              </span>
            </div>
            <p className="text-white leading-relaxed">{review.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
