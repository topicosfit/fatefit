export function Loading({ height, width }) {
  return (
    <div className="
      flex
      flex-col
      items-center
      justify-center
      w-full
    ">
      <div
        className="
          animate-spin
          border-2
          border-t-seagreen
          rounded-full
        "
        style={{
          height,
          width,
        }}
      />
    </div>
  );
}
