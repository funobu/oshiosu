type Props = {
  imgPath: string;
};

const CircleImg: React.FC<Props> = ({ imgPath }) => {
  return (
    <div className="relative w-full h-full rounded-full overflow-hidden">
      <div style={{ paddingBottom: "100%" }}></div>
      <img
        src={imgPath}
        alt=""
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default CircleImg;
