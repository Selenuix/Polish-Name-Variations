interface NameVariations {
  formal: string;
  diminutives: string[];
}

export const polishNames: Record<string, NameVariations> = {
  "Aleksandra": {
    formal: "Aleksandra", diminutives: ["Ola", "Oleńka", "Olka"]
  }, "Katarzyna": {
    formal: "Katarzyna", diminutives: ["Kasia", "Kaśka", "Katia"]
  }, "Małgorzata": {
    formal: "Małgorzata", diminutives: ["Gosia", "Małgosia", "Gośka"]
  }, "Magdalena": {
    formal: "Magdalena", diminutives: ["Magda", "Madzia", "Magdusia"]
  }, "Piotr": {
    formal: "Piotr", diminutives: ["Piotrek", "Piotuś", "Pietrek"]
  }, "Krzysztof": {
    formal: "Krzysztof", diminutives: ["Krzysiek", "Krzyś", "Krzysiu"]
  }
};
