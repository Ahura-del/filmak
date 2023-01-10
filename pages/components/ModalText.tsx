interface ModalTextType {
  title: string;
  text: string;
}

const ModalText = ({ title, text }: ModalTextType) => {
  return (
    <p className="text-gray-400 text-sm mb-2">
      <span className="text-gray-100 text-xl">{title}</span>
      {text}
    </p>
  );
};

export default ModalText;
