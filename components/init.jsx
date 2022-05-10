// Integrations
import { addAmplitude, initGA } from "../config/integrations";
import { initializeFirebase } from "../utils/firebase";
import React, { useEffect } from "react";

const Init = () => {
  useEffect(() => {
    // Firebase
    initializeFirebase();

    // GA
    initGA(process.env.GA_KEY);

    // Amplitude
    addAmplitude();
  }, []);

  return <></>;
};

export default Init;
