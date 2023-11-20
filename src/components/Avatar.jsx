const Avatar = ({ size }) => {
  const placeholderURL = `https://picsum.photos/${size === "small" ? 64 : 96}`;

  return (
    <img
      src={placeholderURL}
      alt="Avatar"
      className={`rounded-full ${size === "small" ? "w-8 h-8" : "w-12 h-12"}`}
    />
  );
};

export default Avatar;
