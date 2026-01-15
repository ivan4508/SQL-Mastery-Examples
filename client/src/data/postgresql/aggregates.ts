export const aggregateFunctions = [
  { 
    id: "pg_array_agg", 
    name: "ARRAY_AGG()", 
    category: "Агрегатные функции", 
    description: "Объединяет входные значения в массив.", 
    syntax: "ARRAY_AGG(expression [ORDER BY sort_expression])",
    arguments: [
      { name: "expression", description: "Значение любого типа для включения в массив.", example: "SELECT ARRAY_AGG(name) FROM users;" },
      { name: "ORDER BY", description: "Необязательная сортировка элементов внутри массива.", example: "SELECT ARRAY_AGG(name ORDER BY name) FROM users;" }
    ],
    example: "SELECT ARRAY_AGG(name) FROM users;" 
  }
];
