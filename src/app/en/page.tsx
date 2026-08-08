"use client";

import { useEffect } from "react";
import { useTranslation } from "../../context/LanguageContext";
import HomePage from "../page";

export default function EnglishPage() {
  const { setLanguage } = useTranslation();

  useEffect(() => {
    setLanguage("en");
  }, [setLanguage]);

  return <HomePage />;
}
