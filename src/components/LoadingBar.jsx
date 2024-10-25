import { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar"; // Assuming you're using this library
import { useNavigation } from "react-router-dom";

const LoadingProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "loading") {
      setProgress(30); // Start the loading bar when navigation starts
    } else if (navigation.state === "idle") {
      setProgress(100); // Complete the loading bar when navigation ends
    }
  }, [navigation.state]);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)} // Optional: Reset progress after loader finishes
        shadow={true}
      />
    </>
  );
};

export default LoadingProgressBar;
