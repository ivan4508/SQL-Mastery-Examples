export const operators = [
  { 
    id: "pg_op_concat", 
    name: "||", 
    category: "Операторы", 
    description: "Конкатенация строк или массивов.", 
    syntax: "string || string",
    arguments: [
      { name: "left", description: "Левый операнд (строка или массив).", example: "'Hello ' || 'World'" },
      { name: "right", description: "Правый операнд (строка или массив).", example: "ARRAY[1] || ARRAY[2]" }
    ],
    example: "SELECT 'Postgre' || 'SQL';" 
  }
];
