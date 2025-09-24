import React from "react";
import {
  Icon,
  getIconNames,
  getCategories,
  searchIcons,
  type IconName,
} from "ultimate-icons";

function App() {
  const iconNames = getIconNames();
  const categories = getCategories();
  const searchResults = searchIcons("arrow");

  return (
    <div>
      <h1>Ultimate Icons Library</h1>

      {/* Basic usage */}
      <section>
        <h2>Basic Icons</h2>
        <Icon name="ArrowButtonCircleLeft" />
        <Icon name="ArrowButtonCircleLeft" type="bold" />
        <Icon name="ArrowButtonCircleLeft" type="color" />
      </section>

      {/* Size examples */}
      <section>
        <h2>Different Sizes</h2>
        <Icon name="ArrowButtonRight" size={16} />
        <Icon name="ArrowButtonRight" size={24} />
        <Icon name="ArrowButtonRight" size={32} />
        <Icon name="ArrowButtonRight" size={48} />
      </section>

      {/* Color examples */}
      <section>
        <h2>Different Colors</h2>
        <Icon name="ArrowButtonUp" color="red" />
        <Icon name="ArrowButtonUp" color="blue" />
        <Icon name="ArrowButtonUp" color="green" />
        <Icon name="ArrowButtonUp" color="#ff6b00" />
      </section>

      {/* Custom dimensions */}
      <section>
        <h2>Custom Dimensions</h2>
        <Icon name="ArrowDoubleDown" width={100} height={50} />
        <Icon name="ArrowDoubleDown" width={50} height={100} />
      </section>

      {/* Interactive icons */}
      <section>
        <h2>Interactive Icons</h2>
        <Icon
          name="ArrowButtonCircleLeft"
          onClick={() => alert("Icon clicked!")}
          style={{ cursor: "pointer" }}
        />
      </section>

      {/* Icon browser */}
      <section>
        <h2>Available Icons ({iconNames.length})</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "10px",
          }}
        >
          {iconNames.slice(0, 20).map((name) => (
            <div
              key={name}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <Icon name={name} size={20} />
              <span style={{ fontSize: "12px" }}>{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2>Categories ({categories.length})</h2>
        <ul>
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
