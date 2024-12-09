export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          {title}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl mt-6 text-center">
        {eyebrow}
      </h2>
      <p className="text-center text-white/60 md:text-lg mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
