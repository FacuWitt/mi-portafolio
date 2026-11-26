const featuredQuote = {
  text: "La mejor forma de predecir el futuro es inventarlo.",
  author: "Alan Kay",
};

const Quote = () => {
  return (
    <section id="quote" className="pb-20 sm:pb-24">
      <div className="section-container">
        <figure className="mx-auto max-w-3xl -rotate-1 text-center">
          <blockquote className="font-hand text-4xl leading-tight sm:text-5xl">“{featuredQuote.text}”</blockquote>
          <figcaption className="mt-4 text-sm font-semibold text-inkSoft">{featuredQuote.author}</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Quote;
