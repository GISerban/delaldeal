import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", rating: 0, message: "" });
  const [showForm, setShowForm] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const itemsPerSlide = 3;

  useEffect(() => {
    fetch("/api/recenzii")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        const maxIndex = Math.max(
          0,
          Math.ceil(data.length / itemsPerSlide) - 1,
        );
        setCurrentIndex((prev) => Math.min(prev, maxIndex));
      });
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, Math.ceil(reviews.length / itemsPerSlide) - 1);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [reviews]);

  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);
  const start = currentIndex * itemsPerSlide;
  const currentSlide = reviews.slice(start, start + itemsPerSlide);

  const next = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/recenzii", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    setForm({ name: "", rating: 0, message: "" });
    setShowForm(false);
    const updated = await fetch("/api/recenzii").then((res) => res.json());
    setReviews(updated);
  };

  const handleStarClick = (value) => {
    setForm({ ...form, rating: value });
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  if (!reviews.length) return null;

  return (
    <section className="py-12 px-4 sm:px-8 bg-[var(--off-white-background)] relative z-0 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold my-font text-center mb-6 text-[var(--primary-text)]">
          Ce spun clienții
        </h2>

        <div className="relative w-full">
          <div
            key={`${currentIndex}-${direction}`}
            {...swipeHandlers}
            className={`transition-transform duration-500 ${
              direction === "right"
                ? "animate-slide-in-right"
                : "animate-slide-in-left"
            }`}
          >
            <div className="space-y-6">
              {currentSlide.map((review) => (
                <div
                  key={review.id}
                  className="p-4 sm:p-6 bg-[var(--primary-background)] rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-3">
                    <div className="flex space-x-1 text-yellow-400">
                      {Array.from(
                        { length: Math.floor(review.rating) },
                        (_, i) => (
                          <span key={i} className="text-lg sm:text-xl">
                            ★
                          </span>
                        ),
                      )}
                      {review.rating % 1 !== 0 && (
                        <span className="text-lg sm:text-xl">★</span>
                      )}
                    </div>
                    <span className="ml-3 font-semibold text-base sm:text-lg text-white">
                      {review.name}
                    </span>
                  </div>
                  <p className="text-white text-sm sm:text-base">
                    {review.message}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {reviews.length > itemsPerSlide && (
            <>
              <button
                onClick={prev}
                className="hidden sm:block absolute left-2 sm:-left-12 top-1/2 transform -translate-y-1/2 bg-[var(--sage)] text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full shadow hover:brightness-110 transition"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="hidden sm:block absolute right-2 sm:-right-12 top-1/2 transform -translate-y-1/2 bg-[var(--sage)] text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full shadow hover:brightness-110 transition"
              >
                ›
              </button>
            </>
          )}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setShowForm(true)}
            className="bg-[var(--sage)] text-white px-6 py-2 rounded hover:brightness-110 transition"
          >
            Lasă o recenzie
          </button>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-[var(--offwhite)] text-white p-6 rounded-xl shadow-xl w-full max-w-md relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-4 text-white text-xl font-bold hover:text-red-400"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center my-font">
              Lasă o recenzie
            </h3>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="flex items-center justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    onClick={() => handleStarClick(value)}
                    className={`cursor-pointer text-2xl ${
                      form.rating >= value ? "text-yellow-400" : "text-gray-400"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <input
                type="text"
                placeholder="Nume"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="p-2 rounded border border-black text-black"
                required
              />
              <textarea
                placeholder="Mesaj"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="p-2 rounded border border-black text-black"
                required
              />
              <button
                type="submit"
                className="text-white py-2 rounded bg-[var(--sage)]"
              >
                Trimite
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;
