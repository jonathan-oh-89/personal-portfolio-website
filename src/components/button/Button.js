import "./Button.css";

const Button = ({ text, onClickFunction, icon, size = "l" }) => {
  let buttonSize = "buttonSizeLarge";
  if (size === "m") {
    buttonSize = "buttonSizeMedium";
  }

  return (
    <>
      <div className={`button ${buttonSize}`} onClick={onClickFunction}>
        <p>{text}</p>

        {icon}
      </div>
    </>
  );
};

export default Button;
