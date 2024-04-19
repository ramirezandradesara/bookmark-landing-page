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
  const borderWidth = isSelected ? "5px" : "2px";
  const borderColor = isSelected ? "red" : "grey";

  return (
    <button key={id} onClick={() => setFeatureSelected(id)}>
      <h4
        className={`text-h4 text-grey px-14 pb-7 border-b-[${borderWidth}] border-solid border-${borderColor} hover:text-red`}
      >
        {feature}
      </h4>
    </button>
  );
};

export default FeatureButton;
