import "./Button.css";

const Button = ({ text, icon, action, category }) => {
  const buttonClass = `button-container ${
    category === "block" ? "button-block" : "button"
  } `;

  const isDisabled = category;
  return (
    <button className={buttonClass} disabled={isDisabled} onClick={action}>
      <span className='icon'>{icon}</span>
      <span>{text}</span>
    </button>
  );
};

export default Button;
