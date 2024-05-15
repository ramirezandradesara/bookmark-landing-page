type FeatureButton = {
  id: number;
  featureSelected: number;
  setFeatureSelected: any;
  feature: string;
};

const FeatureButton = ({
  id,
  featureSelected,
  setFeatureSelected,
  feature,
}: FeatureButton) => {
  const isSelected = id === featureSelected;
  const borderWidth = isSelected ? "border-b-[5px] " : "border-b-[3px] ";
  const borderColor = isSelected ? "border-red" : "border-grey";

  return (
    <button key={id} onClick={() => setFeatureSelected(id)}>
      <h4
        className={`text-h4 text-grey px-14 pt-5 lg:pt-0 pb-5 lg:pb-7 ${borderWidth} border-solid ${borderColor} hover:text-red`}
      >
        {feature}
      </h4>
    </button>
  );
};

export default FeatureButton;
