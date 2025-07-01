
import React, { useRef, useState } from "react";
import styles from "./StyledFileInput.module.css";

const StyledFileInput = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };


  return (
    <div>
      <input
        type="file"
        className={styles.inputFile}
        onChange={handleFileChange}
        id="fileInput"
      />

    </div>
  );
};

export default StyledFileInput;



