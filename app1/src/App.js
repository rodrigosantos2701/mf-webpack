import React, { Suspense } from "react";
const RemoteApp = React.lazy(() => import("remote_webpack_mf_second/App"));

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: "10px",
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#4CAF50",
          color: "white",
        }}
      >
        <h1>HOST APP</h1>
      </div>

      <div
        style={{
          margin: "10px",
          padding: "15px",
          border: "2px dashed #FF9800",
          borderRadius: "8px",
          backgroundColor: "#FFF3E0",
        }}
      >
        <Suspense
          fallback={
            <div
              style={{ padding: "20px", textAlign: "center", color: "#666" }}
            >
              Loading remote module...
            </div>
          }
        >
          <RemoteApp />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
