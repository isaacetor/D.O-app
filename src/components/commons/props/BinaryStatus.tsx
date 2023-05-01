import React from "react";

interface statusProps {
  active: string | boolean;
}

const BinaryStatus: React.FC<statusProps> = ({ active }) => {
  return (
    <div>
      {active ? (
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <div
            style={{
              height: "8px",
              width: "8px",
              borderRadius: "50%",
              backgroundColor: "#00d692",
            }}>
            {""}
          </div>
          <div>On duty</div>
        </div>
      ) : (
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <div
            style={{
              color: "#00d692",
            }}>
            ✔
          </div>
          <div>Free</div>
        </div>
      )}
    </div>
  );
};

export default BinaryStatus;
