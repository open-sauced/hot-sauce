const Hero = () => (
  <section aria-labelledby="hero-heading" className="flex flex-col py-24 items-center mx-2.5">
    <div>
      <h1
        id="hero-heading"
        className="font-Lexend text-4xl md:text-5xl text-center text-lightSlate leading-tight tracking-tight"
      >
        {`Find `}
        <span
          className="bg-gradient-to-r from-gradFirst via-gradMiddle to-gradLast bg-clip-text text-transparent"
          aria-label="Open-Source Repositories"
        >
          Open-Source Repositories
        </span>
        <br />
        trending today.
      </h1>
    </div>
  </section>
);

export default Hero;
