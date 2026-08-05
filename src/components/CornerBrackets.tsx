export default function CornerBrackets() {
  return (
    <>
      <span className="pointer-events-none absolute -left-px -top-px h-[18px] w-[18px] border-l-2 border-t-2 border-accent" />
      <span className="pointer-events-none absolute -right-px -top-px h-[18px] w-[18px] border-r-2 border-t-2 border-accent" />
      <span className="pointer-events-none absolute -bottom-px -left-px h-[18px] w-[18px] border-b-2 border-l-2 border-accent" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-[18px] w-[18px] border-b-2 border-r-2 border-accent" />
    </>
  );
}
