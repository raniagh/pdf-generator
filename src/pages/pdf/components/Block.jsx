import { FiImage } from "react-icons/fi";
import { BsTextareaT, BsPlus } from "react-icons/bs";
import "./Block.css";
import Button from "../../../components/UI/Button";

export const Block = ({ type }) => {
  const containerClass = `block-container ${
    type === "Text" ? "blockA" : "blockB"
  } `;
  const iconType = type === "Text" ? <BsTextareaT /> : <FiImage />;
  const blockName = type === "Text" ? "Block A" : "Block B";
  const blockId = type === "Text" ? "block-a" : "block-b";

  return (
    <div className={containerClass}>
      <div className='body-container' id={blockId}>
        <div>
          <span>On click on Button</span>
          <Button text={type} icon={iconType} category='block' />
        </div>
        <div>
          insert Input <span className='type'> {type}</span> into PDF
        </div>
        <div>Image</div>
        <div>
          <BsPlus className='type' />
          Add Field Name to input
        </div>
      </div>
      <div className='block-name'>{blockName} </div>
    </div>
  );
};
