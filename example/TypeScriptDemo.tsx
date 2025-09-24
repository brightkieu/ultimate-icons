// TypeScript Demo - Ultimate Icons with Auto-completion
import React from "react";
import {
  Icon,
  type IconName,
  type IconType,
  getIconNames,
  hasIcon,
} from "ultimate-icons";

// Example 1: Type-safe icon rendering
interface IconButtonProps {
  iconName: IconName;
  variant: IconType;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  variant,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={{ display: "flex", alignItems: "center", gap: "8px" }}
    >
      <Icon name={iconName} type={variant} size={20} />
      <span>{iconName}</span>
    </button>
  );
};

// Example 2: Icon validation
function validateAndRenderIcon(iconName: string) {
  if (hasIcon(iconName)) {
    // iconName is now narrowed to IconName type
    return <Icon name={iconName} />;
  }
  return <div>Icon not found: {iconName}</div>;
}

// Example 3: Icon gallery with type safety
const IconGallery: React.FC = () => {
  const iconNames = getIconNames();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "16px",
      }}
    >
      {iconNames.slice(0, 50).map((name: IconName) => (
        <div
          key={name}
          style={{
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <Icon name={name} size={32} style={{ marginBottom: "8px" }} />
          <div style={{ fontSize: "12px", wordBreak: "break-word" }}>
            {name}
          </div>
        </div>
      ))}
    </div>
  );
};

// Example 4: Specific icon usage with full auto-completion
const App: React.FC = () => {
  return (
    <div>
      <h1>Ultimate Icons TypeScript Demo</h1>

      {/* These will have full auto-completion in TypeScript IDEs */}
      <Icon name="ArrowButtonCircleLeft" type="bold" size={24} color="blue" />
      <Icon name="ArrowButtonUp" type="regular" size={32} color="red" />
      <Icon name="ArrowDoubleDown" type="color" width={40} height={20} />

      <IconButton
        iconName="ArrowButtonCircleLeft"
        variant="bold"
        onClick={() => console.log("Clicked!")}
      />

      <IconGallery />

      {validateAndRenderIcon("ArrowButtonCircleLeft")}
      {validateAndRenderIcon("NonExistentIcon")}
    </div>
  );
};

export default App;
