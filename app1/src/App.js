import React, { Suspense } from "react";
const RemoteApp2 = React.lazy(() => import("remote_webpack_mf_second/App"));
const RemoteApp3 = React.lazy(() => import("remote_webpack_mf_third/App"));

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
              Loading remote module from cloud...
            </div>
          }
        >
          <RemoteApp2 />
        </Suspense>
      </div>

      <div
        style={{
          margin: "10px",
          padding: "15px",
          border: "2px dashed #9C27B0",
          borderRadius: "8px",
          backgroundColor: "#F3E5F5",
        }}
      >
        <Suspense
          fallback={
            <div
              style={{ padding: "20px", textAlign: "center", color: "#666" }}
            >
              Loading remote module from cloud...
            </div>
          }
        >
          <RemoteApp3 />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
