export const Button = ({ className, title, upperCase, ...rest }) => {
  const classes = () => {
    return [
      upperCase ? "uppercase" : "",
      "w-full px-3.5 py-3 text-md transition-all duration-500 ease-in-out",
      className,
    ].join(" ");
  };

  return (
    <button {...rest} className={classes()}>
      {title}
    </button>
  );
};
