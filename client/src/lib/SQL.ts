export const SQL =[
    // DQL (Data Query Language)
    {
      id: "select",
      name: "SELECT",
      category: "DQL (Data Query Language)",
      description: "Выбирает данные из базы данных.",
      syntax: "SELECT column1, column2, ... FROM table_name;",
      example: "SELECT * FROM employees;",
      arguments: [
        { name: "column1, column2, ...", description: "Имена столбцов, данные из которых нужно извлечь.", example: "SELECT first_name, last_name FROM employees;" },
        { name: "*", description: "Выбирает все столбцы из таблицы.", example: "SELECT * FROM products;" },
        { name: "expression", description: "Выражение или расчетное поле.", example: "SELECT name, price * 1.1 AS new_price FROM products;" }
      ]
    },
    {
      id: "from",
      name: "FROM",
      category: "DQL (Data Query Language)",
      description: "Указывает таблицу, из которой извлекаются данные.",
      syntax: "SELECT columns FROM table_name;",
      example: "SELECT name FROM departments;",
      arguments: [
        { name: "table_name", description: "Имя таблицы в базе данных.", example: "SELECT * FROM sales;" },
        { name: "alias", description: "Псевдоним таблицы для краткости или при объединении.", example: "SELECT e.name FROM employees AS e;" },
        { name: "subquery", description: "Подзапрос, результат которого используется как временная таблица.", example: "SELECT * FROM (SELECT id FROM users) AS t;" }
      ]
    },
    {
      id: "where",
      name: "WHERE",
      category: "DQL (Data Query Language)",
      description: "Фильтрует записи на основе заданного условия.",
      syntax: "SELECT columns FROM table WHERE condition;",
      example: "SELECT * FROM users WHERE age > 18;",
      arguments: [
        { name: "condition", description: "Логическое выражение для фильтрации.", example: "WHERE status = 'active'" },
        { name: "AND / OR", description: "Логические операторы для комбинирования условий.", example: "WHERE price > 100 AND stock < 10" },
        { name: "BETWEEN", description: "Фильтр по диапазону значений.", example: "WHERE salary BETWEEN 30000 AND 50000" }
      ]
    },
    {
      id: "group_by",
      name: "GROUP BY",
      category: "DQL (Data Query Language)",
      description: "Группирует строки, имеющие одинаковые значения в указанных столбцах.",
      syntax: "SELECT column, aggregate_function(column) FROM table GROUP BY column;",
      example: "SELECT department, COUNT(*) FROM employees GROUP BY department;",
      arguments: [
        { name: "column", description: "Столбец, по которому производится группировка.", example: "GROUP BY category" },
        { name: "expression", description: "Выражение для группировки.", example: "GROUP BY EXTRACT(YEAR FROM order_date)" },
        { name: "multiple columns", description: "Группировка по нескольким полям.", example: "GROUP BY region, city" }
      ]
    },
    {
      id: "having",
      name: "HAVING",
      category: "DQL (Data Query Language)",
      description: "Фильтрует сгруппированные данные (используется вместе с GROUP BY).",
      syntax: "SELECT column, aggregate FROM table GROUP BY column HAVING condition;",
      example: "SELECT dept, AVG(salary) FROM emp GROUP BY dept HAVING AVG(salary) > 5000;",
      arguments: [
        { name: "condition", description: "Условие, применяемое к результату агрегации.", example: "HAVING COUNT(*) > 1" },
        { name: "aggregate function", description: "Использование функций в условии.", example: "HAVING SUM(total) > 1000" },
        { name: "combined conditions", description: "Несколько условий для групп.", example: "HAVING MIN(price) > 10 AND MAX(price) < 100" }
      ]
    },
    {
      id: "distinct",
      name: "DISTINCT",
      category: "DQL (Data Query Language)",
      description: "Возвращает только уникальные значения из столбца.",
      syntax: "SELECT DISTINCT column FROM table;",
      example: "SELECT DISTINCT city FROM customers;",
      arguments: [
        { name: "column", description: "Столбец, для которого нужны уникальные значения.", example: "SELECT DISTINCT category FROM products;" },
        { name: "multiple columns", description: "Уникальные комбинации значений нескольких столбцов.", example: "SELECT DISTINCT city, country FROM users;" },
        { name: "with count", description: "Подсчет количества уникальных записей.", example: "SELECT COUNT(DISTINCT role) FROM accounts;" }
      ]
    },
    {
      id: "order_by",
      name: "ORDER BY",
      category: "DQL (Data Query Language)",
      description: "Сортирует результирующий набор данных.",
      syntax: "SELECT columns FROM table ORDER BY column [ASC | DESC];",
      example: "SELECT * FROM products ORDER BY price DESC;",
      arguments: [
        { name: "ASC", description: "Сортировка по возрастанию (по умолчанию).", example: "ORDER BY name ASC" },
        { name: "DESC", description: "Сортировка по убыванию.", example: "ORDER BY created_at DESC" },
        { name: "multiple columns", description: "Сортировка по нескольким столбцам последовательно.", example: "ORDER BY category ASC, price DESC" }
      ]
    },
    {
      id: "limit",
      name: "LIMIT",
      category: "DQL (Data Query Language)",
      description: "Ограничивает количество возвращаемых строк.",
      syntax: "SELECT columns FROM table LIMIT count;",
      example: "SELECT * FROM articles LIMIT 5;",
      arguments: [
        { name: "count", description: "Максимальное количество строк для вывода.", example: "LIMIT 10" },
        { name: "with offset", description: "Пропуск первых строк (в некоторых СУБД).", example: "LIMIT 10 OFFSET 20" },
        { name: "expression", description: "Выражение, возвращающее число (в расширенных диалектах).", example: "LIMIT (SELECT page_size FROM settings)" }
      ]
    },
    {
      id: "offset",
      name: "OFFSET",
      category: "DQL (Data Query Language)",
      description: "Пропускает указанное количество строк перед выводом результата.",
      syntax: "SELECT columns FROM table LIMIT count OFFSET offset_count;",
      example: "SELECT * FROM logs OFFSET 100;",
      arguments: [
        { name: "offset_count", description: "Количество пропускаемых строк.", example: "OFFSET 50" },
        { name: "with limit", description: "Используется для пагинации.", example: "LIMIT 20 OFFSET 40" },
        { name: "FETCH NEXT", description: "Стандарт SQL (ISO) для смещения.", example: "OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY" }
      ]
    },
    // DML (Data Manipulation Language)
    {
      id: "insert",
      name: "INSERT",
      category: "DML (Data Manipulation Language)",
      description: "Добавляет новые строки в таблицу.",
      syntax: "INSERT INTO table_name (column1, column2) VALUES (value1, value2);",
      example: "INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');",
      arguments: [
        { name: "INTO table_name", description: "Имя таблицы для вставки данных.", example: "INSERT INTO products ..." },
        { name: "(columns)", description: "Список столбцов (необязательно, если заполняются все).", example: "INSERT INTO tags (name) ..." },
        { name: "VALUES", description: "Набор значений для вставки.", example: "VALUES ('Red'), ('Green'), ('Blue')" }
      ]
    },
    {
      id: "update",
      name: "UPDATE",
      category: "DML (Data Manipulation Language)",
      description: "Изменяет существующие данные в таблице.",
      syntax: "UPDATE table_name SET column1 = value1 WHERE condition;",
      example: "UPDATE users SET status = 'active' WHERE id = 1;",
      arguments: [
        { name: "SET", description: "Указывает столбцы и их новые значения.", example: "SET price = price * 1.05" },
        { name: "WHERE", description: "Условие для выбора обновляемых строк (ВАЖНО: без него обновятся все строки).", example: "WHERE category = 'Sale'" },
        { name: "multiple columns", description: "Обновление нескольких полей сразу.", example: "SET city = 'Omsk', region = 'Omsk Region'" }
      ]
    },
    {
      id: "delete",
      name: "DELETE",
      category: "DML (Data Manipulation Language)",
      description: "Удаляет строки из таблицы.",
      syntax: "DELETE FROM table_name WHERE condition;",
      example: "DELETE FROM users WHERE last_login < '2023-01-01';",
      arguments: [
        { name: "FROM table_name", description: "Имя таблицы, из которой удаляются данные.", example: "DELETE FROM temporary_logs" },
        { name: "WHERE", description: "Условие для удаления конкретных строк.", example: "WHERE id = 105" },
        { name: "TRUNCATE", description: "Альтернатива для полной очистки таблицы (быстрее DELETE).", example: "TRUNCATE TABLE logs;" }
      ]
    },
    {
      id: "lock",
      name: "LOCK",
      category: "DML (Data Manipulation Language)",
      description: "Ограничивает доступ к таблице для других транзакций.",
      syntax: "LOCK TABLE table_name IN lock_mode MODE;",
      example: "LOCK TABLE employees IN EXCLUSIVE MODE;",
      arguments: [
        { name: "table_name", description: "Имя таблицы для блокировки.", example: "LOCK TABLE inventory" },
        { name: "lock_mode", description: "Тип блокировки (ACCESS SHARE, EXCLUSIVE и др.).", example: "IN SHARE MODE" },
        { name: "NOWAIT", description: "Ошибка, если блокировка не может быть получена немедленно.", example: "LOCK TABLE orders NOWAIT" }
      ]
    },
    {
      id: "call",
      name: "CALL",
      category: "DML (Data Manipulation Language)",
      description: "Выполняет хранимую процедуру.",
      syntax: "CALL procedure_name(arguments);",
      example: "CALL process_orders('2024-01-01');",
      arguments: [
        { name: "procedure_name", description: "Имя вызываемой процедуры.", example: "CALL update_statistics()" },
        { name: "arguments", description: "Параметры, передаваемые в процедуру.", example: "CALL calculate_bonus(101, 500)" },
        { name: "IN/OUT", description: "Типы параметров в процедуре.", example: "CALL get_user_count(count_variable)" }
      ]
    },
    {
      id: "merge",
      name: "MERGE",
      category: "DML (Data Manipulation Language)",
      description: "Выполняет вставку, обновление или удаление в зависимости от условия соответствия (UPSERT).",
      syntax: "MERGE INTO target USING source ON condition WHEN MATCHED THEN UPDATE ... WHEN NOT MATCHED THEN INSERT ...",
      example: "MERGE INTO active_users a USING daily_login d ON (a.id = d.id) WHEN MATCHED THEN UPDATE SET last_login = d.login_time WHEN NOT MATCHED THEN INSERT (id, last_login) VALUES (d.id, d.login_time);",
      arguments: [
        { name: "USING", description: "Источник данных для сопоставления.", example: "USING updates_table" },
        { name: "WHEN MATCHED", description: "Действие, если запись найдена.", example: "THEN UPDATE SET status = 'updated'" },
        { name: "WHEN NOT MATCHED", description: "Действие, если запись не найдена.", example: "THEN INSERT VALUES (...)" }
      ]
    },
    // DCL (Data Control Language)
    {
      id: "grant",
      name: "GRANT",
      category: "DCL (Data Control Language)",
      description: "Предоставляет пользователям разрешения на доступ к базе данных или ее объектам.",
      syntax: "GRANT privilege_name ON object_name TO user_name;",
      example: "GRANT SELECT, INSERT ON employees TO analyst_user;",
      arguments: [
        { name: "privilege_name", description: "Тип разрешения (SELECT, UPDATE, ALL PRIVILEGES и т.д.).", example: "GRANT ALL ON products ..." },
        { name: "object_name", description: "Имя таблицы, представления или другого объекта.", example: "GRANT UPDATE ON prices ..." },
        { name: "TO user_name", description: "Имя пользователя или роль, которой дается доступ.", example: "TO sales_manager" }
      ]
    },
    {
      id: "revoke",
      name: "REVOKE",
      category: "DCL (Data Control Language)",
      description: "Озывает ранее предоставленные разрешения у пользователей.",
      syntax: "REVOKE privilege_name ON object_name FROM user_name;",
      example: "REVOKE DELETE ON customers FROM clerk_user;",
      arguments: [
        { name: "privilege_name", description: "Разрешение, которое нужно отозвать.", example: "REVOKE INSERT ON orders ..." },
        { name: "object_name", description: "Объект, доступ к которому ограничивается.", example: "REVOKE ALL ON secrets ..." },
        { name: "FROM user_name", description: "Пользователь или роль, у которой отбирается доступ.", example: "FROM guest_role" }
      ]
    },
    // TCL (Transaction Control Language)
    {
      id: "begin_transaction",
      name: "BEGIN TRANSACTION",
      category: "TCL (Transaction Control Language)",
      description: "Открывает новую транзакцию. Все последующие изменения будут временными до завершения.",
      syntax: "BEGIN TRANSACTION; -- или просто BEGIN;",
      example: "BEGIN; UPDATE accounts SET balance = balance - 100 WHERE id = 1;",
      arguments: [
        { name: "ISOLATION LEVEL", description: "Уровень изоляции транзакции.", example: "BEGIN ISOLATION LEVEL SERIALIZABLE;" },
        { name: "READ ONLY / WRITE", description: "Режим доступа транзакции.", example: "BEGIN READ ONLY;" },
        { name: "NAME", description: "Имя транзакции (в некоторых СУБД).", example: "BEGIN TRANSACTION TransferMoney;" }
      ]
    },
    {
      id: "commit",
      name: "COMMIT",
      category: "TCL (Transaction Control Language)",
      description: "Сохраняет все изменения, сделанные в текущей транзакции, и завершает ее.",
      syntax: "COMMIT; -- или COMMIT TRANSACTION;",
      example: "UPDATE orders SET status = 'Paid' WHERE id = 50; COMMIT;",
      arguments: [
        { name: "WORK", description: "Необязательное ключевое слово для совместимости.", example: "COMMIT WORK;" },
        { name: "AND CHAIN", description: "Сразу начинает новую транзакцию с теми же параметрами.", example: "COMMIT AND CHAIN;" },
        { name: "TRANSACTION name", description: "Завершение именованной транзакции.", example: "COMMIT TRANSACTION T1;" }
      ]
    },
    {
      id: "rollback",
      name: "ROLLBACK",
      category: "TCL (Transaction Control Language)",
      description: "Отменяет все изменения текущей транзакции и завершает ее.",
      syntax: "ROLLBACK; -- или ROLLBACK TRANSACTION;",
      example: "DELETE FROM users; -- Ошибка! ROLLBACK; -- Все пользователи восстановлены.",
      arguments: [
        { name: "WORK", description: "Ключевое слово для синтаксического соответствия стандарту.", example: "ROLLBACK WORK;" },
        { name: "AND CHAIN", description: "Отмена и мгновенное открытие новой транзакции.", example: "ROLLBACK AND CHAIN;" },
        { name: "FORCE", description: "Принудительный откат (в некоторых корпоративных СУБД).", example: "ROLLBACK FORCE '2.15.34';" }
      ]
    },
    {
      id: "savepoint",
      name: "SAVEPOINT",
      category: "TCL (Transaction Control Language)",
      description: "Создает точку сохранения внутри транзакции, к которой можно будет откатиться.",
      syntax: "SAVEPOINT savepoint_name;",
      example: "INSERT INTO logs VALUES ('Step 1'); SAVEPOINT sp1; INSERT INTO logs VALUES ('Step 2');",
      arguments: [
        { name: "savepoint_name", description: "Произвольное имя для точки сохранения.", example: "SAVEPOINT after_header" },
        { name: "RELEASE", description: "Удаляет точку сохранения (без отката изменений).", example: "RELEASE SAVEPOINT sp1;" },
        { name: "re-use", description: "Использование того же имени перезаписывает старую точку.", example: "SAVEPOINT check_point; -- позже -- SAVEPOINT check_point;" }
      ]
    },
    {
      id: "rollback_to",
      name: "ROLLBACK TO",
      category: "TCL (Transaction Control Language)",
      description: "Откатывает изменения только до указанной точки сохранения (SAVEPOINT).",
      syntax: "ROLLBACK TO SAVEPOINT savepoint_name;",
      example: "ROLLBACK TO sp1;",
      arguments: [
        { name: "SAVEPOINT name", description: "Имя точки, до которой нужно вернуться.", example: "ROLLBACK TO SAVEPOINT before_update" },
        { name: "transaction state", description: "Транзакция остается открытой после выполнения.", example: "ROLLBACK TO sp1; -- Продолжаем работу" },
        { name: "partial revert", description: "Отменяет только часть команд после точки.", example: "ROLLBACK TO last_good_state;" }
      ]
    },
    // Логические операторы
    {
      id: "and",
      name: "AND",
      category: "Логические операторы",
      description: "Возвращает записи, если все условия, разделенные этим оператором, истинны.",
      syntax: "condition1 AND condition2;",
      example: "SELECT * FROM users WHERE status = 'active' AND age > 21;",
      arguments: [
        { name: "multiple", description: "Можно объединять любое количество условий.", example: "WHERE a=1 AND b=2 AND c=3" },
        { name: "precedence", description: "Имеет более высокий приоритет, чем OR.", example: "WHERE (a=1 OR b=2) AND c=3" },
        { name: "nulls", description: "Если одно из условий NULL, результат может быть NULL или FALSE.", example: "WHERE is_verified AND email_confirmed" }
      ]
    },
    {
      id: "or",
      name: "OR",
      category: "Логические операторы",
      description: "Возвращает записи, если хотя бы одно из условий истинно.",
      syntax: "condition1 OR condition2;",
      example: "SELECT * FROM products WHERE category = 'Toys' OR price < 10;",
      arguments: [
        { name: "alternative", description: "Используется для поиска по нескольким вариантам.", example: "WHERE city = 'Moscow' OR city = 'London'" },
        { name: "grouping", description: "Рекомендуется использовать скобки при сочетании с AND.", example: "WHERE (stock > 0 OR backorder = true) AND price < 50" },
        { name: "in comparison", description: "Часто может быть заменен оператором IN.", example: "WHERE id=1 OR id=2 -- тоже самое что WHERE id IN (1,2)" }
      ]
    },
    {
      id: "not",
      name: "NOT",
      category: "Логические операторы",
      description: "Инвертирует результат логического выражения.",
      syntax: "NOT condition;",
      example: "SELECT * FROM orders WHERE NOT status = 'cancelled';",
      arguments: [
        { name: "with operators", description: "Часто используется с LIKE, IN, BETWEEN.", example: "WHERE name NOT LIKE 'A%'" },
        { name: "with null", description: "NOT NULL проверяет наличие значения.", example: "WHERE phone_number IS NOT NULL" },
        { name: "negation", description: "Отрицает все выражение после себя.", example: "WHERE NOT (age < 18 OR parent_id IS NULL)" }
      ]
    },
    {
      id: "in",
      name: "IN",
      category: "Логические операторы",
      description: "Проверяет, соответствует ли значение любому значению в списке или подзапросе.",
      syntax: "column IN (value1, value2, ...);",
      example: "SELECT * FROM users WHERE country IN ('Russia', 'Belarus', 'Kazakhstan');",
      arguments: [
        { name: "list", description: "Список фиксированных значений.", example: "WHERE code IN (100, 200, 300)" },
        { name: "subquery", description: "Результат другого SELECT запроса.", example: "WHERE user_id IN (SELECT id FROM admins)" },
        { name: "not in", description: "Выбирает значения, которых нет в списке.", example: "WHERE id NOT IN (1, 2, 3)" }
      ]
    },
    {
      id: "between",
      name: "BETWEEN",
      category: "Логические операторы",
      description: "Выбирает значения в заданном диапазоне (включая границы).",
      syntax: "column BETWEEN value1 AND value2;",
      example: "SELECT * FROM sales WHERE amount BETWEEN 500 AND 1000;",
      arguments: [
        { name: "dates", description: "Очень удобно для фильтрации по датам.", example: "WHERE date BETWEEN '2023-01-01' AND '2023-12-31'" },
        { name: "strings", description: "Работает и с текстовыми диапазонами (по алфавиту).", example: "WHERE name BETWEEN 'A' AND 'M'" },
        { name: "inclusive", description: "Значения границ всегда включены в результат.", example: "WHERE age BETWEEN 18 AND 65 -- 18 и 65 тоже попадут" }
      ]
    },
    {
      id: "like",
      name: "LIKE",
      category: "Логические операторы",
      description: "Поиск по шаблону с использованием подстановочных знаков.",
      syntax: "column LIKE 'pattern';",
      example: "SELECT * FROM customers WHERE name LIKE 'Ivan%';",
      arguments: [
        { name: "%", description: "Заменяет любое количество символов (включая ноль).", example: "WHERE name LIKE 'A%' -- начинается на A" },
        { name: "_", description: "Заменяет ровно один символ.", example: "WHERE name LIKE '_b%' -- второй символ b" },
        { name: "ESCAPE", description: "Позволяет искать сами символы % и _.", example: "WHERE note LIKE '10!%%' ESCAPE '!'" }
      ]
    },
    {
      id: "is_null",
      name: "IS NULL",
      category: "Логические операторы",
      description: "Проверяет, является ли значение пустым (NULL).",
      syntax: "column IS NULL;",
      example: "SELECT * FROM users WHERE phone IS NULL;",
      arguments: [
        { name: "IS NOT NULL", description: "Проверка на наличие любого значения.", example: "WHERE email IS NOT NULL" },
        { name: "with functions", description: "Используется для обработки отсутствующих данных.", example: "WHERE COALESCE(bonus, 0) IS NULL" }
      ]
    },
    {
      id: "exists",
      name: "EXISTS",
      category: "Логические операторы",
      description: "Проверяет наличие записей, возвращаемых подзапросом.",
      syntax: "EXISTS (subquery);",
      example: "SELECT name FROM departments d WHERE EXISTS (SELECT 1 FROM employees e WHERE e.dept_id = d.id);",
      arguments: [
        { name: "subquery", description: "Обычно коррелированный подзапрос.", example: "EXISTS (SELECT * FROM orders o WHERE o.user_id = u.id)" },
        { name: "performance", description: "Останавливает поиск сразу после нахождения первой подходящей строки.", example: "SELECT 1 FROM table LIMIT 1" },
        { name: "NOT EXISTS", description: "Истинно, если подзапрос не вернул ни одной строки.", example: "WHERE NOT EXISTS (SELECT * FROM bans WHERE user_id = u.id)" }
      ]
    },
    // ТИПЫ ДАННЫХ
    {
      id: "bigint_sql",
      name: "BIGINT",
      category: "Типы данных",
      description: "Целое число со знаком. Диапазон: от -2^63 до 2^63-1.",
      syntax: "BIGINT",
      example: "CREATE TABLE logs (\n  id BIGINT PRIMARY KEY,\n  message TEXT\n);"
    },
    {
      id: "bit_sql",
      name: "BIT",
      category: "Типы данных",
      description: "Битовая строка фиксированной длины.",
      syntax: "BIT(n)",
      example: "CREATE TABLE settings (\n  flags BIT(8)\n);",
      arguments: [
        { name: "n", description: "Количество бит.", example: "BIT(1)" }
      ]
    },
    {
      id: "decimal_sql",
      name: "DECIMAL",
      category: "Типы данных",
      description: "Точное числовое значение с фиксированной запятой. Аналог NUMERIC.",
      syntax: "DECIMAL(p, s)",
      example: "CREATE TABLE products (\n  price DECIMAL(10, 2)\n);",
      arguments: [
        { name: "p", description: "Точность (precision) — общее количество цифр.", example: "10" },
        { name: "s", description: "Масштаб (scale) — количество цифр после запятой.", example: "2" }
      ]
    },
    {
      id: "numeric_sql",
      name: "NUMERIC",
      category: "Типы данных",
      description: "Точное числовое значение с настраиваемой точностью.",
      syntax: "NUMERIC(p, s)",
      example: "CREATE TABLE financial_data (\n  amount NUMERIC(15, 4)\n);",
      arguments: [
        { name: "p", description: "Общее количество значащих цифр.", example: "15" },
        { name: "s", description: "Количество цифр после десятичной точки.", example: "4" }
      ]
    },
    {
      id: "smallint_sql",
      name: "SMALLINT",
      category: "Типы данных",
      description: "Целое число со знаком. Диапазон: от -32768 до 32767.",
      syntax: "SMALLINT",
      example: "CREATE TABLE students (\n  age SMALLINT,\n  grade_level SMALLINT\n);"
    },
    {
      id: "float_sql",
      name: "FLOAT",
      category: "Типы данных",
      description: "Число с плавающей точкой (приблизительное значение).",
      syntax: "FLOAT(p)",
      example: "CREATE TABLE measurements (\n  value FLOAT(24)\n);",
      arguments: [
        { name: "p", description: "Точность в битах (определяет использование REAL или DOUBLE PRECISION).", example: "FLOAT(53)" }
      ]
    },
    {
      id: "real_sql",
      name: "REAL",
      category: "Типы данных",
      description: "Число с плавающей точкой одинарной точности (4 байта).",
      syntax: "REAL",
      example: "CREATE TABLE sensors (\n  temperature REAL\n);"
    },
    {
      id: "double_precision_sql",
      name: "DOUBLE PRECISION",
      category: "Типы данных",
      description: "Число с плавающей точкой двойной точности (8 байт).",
      syntax: "DOUBLE PRECISION",
      example: "CREATE TABLE physics_data (\n  velocity DOUBLE PRECISION\n);"
    },
    {
      id: "char_sql",
      name: "CHAR",
      category: "Типы данных",
      description: "Строка фиксированной длины. Дополняется пробелами до n.",
      syntax: "CHAR(n)",
      example: "CREATE TABLE iso_codes (\n  country_code CHAR(3)\n);",
      arguments: [
        { name: "n", description: "Длина строки в символах.", example: "CHAR(10)" }
      ]
    },
    {
      id: "character_sql",
      name: "CHARACTER",
      category: "Типы данных",
      description: "Полное название типа CHAR. Строка фиксированной длины.",
      syntax: "CHARACTER(n)",
      example: "CREATE TABLE users (\n  gender CHARACTER(1)\n);"
    },
    {
      id: "varchar_sql",
      name: "VARCHAR",
      category: "Типы данных",
      description: "Строка переменной длины с ограничением n символов.",
      syntax: "VARCHAR(n)",
      example: "CREATE TABLE profiles (\n  bio VARCHAR(255)\n);",
      arguments: [
        { name: "n", description: "Максимальное количество символов.", example: "VARCHAR(100)" }
      ]
    },
    {
      id: "char_varying_sql",
      name: "CHARACTER VARYING",
      category: "Типы данных",
      description: "Полное название типа VARCHAR. Строка переменной длины.",
      syntax: "CHARACTER VARYING(n)",
      example: "CREATE TABLE documents (\n  title CHARACTER VARYING(200)\n);"
    },
    {
      id: "date_sql",
      name: "DATE",
      category: "Типы данных",
      description: "Календарная дата (год, месяц, день).",
      syntax: "DATE",
      example: "CREATE TABLE events (\n  event_date DATE\n);"
    },
    {
      id: "time_sql",
      name: "TIME",
      category: "Типы данных",
      description: "Время суток без даты.",
      syntax: "TIME [ (p) ] [ WITHOUT TIME ZONE | WITH TIME ZONE ]",
      example: "CREATE TABLE schedule (\n  start_time TIME\n);",
      arguments: [
        { name: "p", description: "Точность дробной части секунд.", example: "TIME(6)" }
      ]
    },
    {
      id: "timestamp_sql",
      name: "TIMESTAMP",
      category: "Типы данных",
      description: "Дата и время.",
      syntax: "TIMESTAMP [ (p) ] [ WITHOUT TIME ZONE | WITH TIME ZONE ]",
      example: "CREATE TABLE posts (\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);"
    },
    {
      id: "interval_sql",
      name: "INTERVAL",
      category: "Типы данных",
      description: "Временной интервал (промежуток времени).",
      syntax: "INTERVAL [ fields ] [ (p) ]",
      example: "SELECT NOW() + INTERVAL '1 day';",
      arguments: [
        { name: "fields", description: "Компоненты интервала (YEAR, MONTH, DAY, HOUR и т.д.).", example: "INTERVAL '2 hours'" }
      ]
    },
    {
      id: "boolean_sql",
      name: "BOOLEAN",
      category: "Типы данных",
      description: "Логический тип данных (TRUE, FALSE, NULL).",
      syntax: "BOOLEAN",
      example: "CREATE TABLE tasks (\n  is_completed BOOLEAN DEFAULT FALSE\n);"
    },
    {
      id: "array_sql",
      name: "ARRAY",
      category: "Типы данных",
      description: "Коллекция элементов одного типа.",
      syntax: "type ARRAY [size] или type[]",
      example: "CREATE TABLE matrix (\n  coordinates INTEGER ARRAY[3]\n);",
      arguments: [
        { name: "type", description: "Тип данных элементов массива.", example: "TEXT[]" }
      ]
    },
    {
      id: "multiset_sql",
      name: "MULTISET",
      category: "Типы данных",
      description: "Неупорядоченная коллекция элементов (аналог Bag в математике). В отличие от SET, допускает дубликаты.",
      syntax: "type MULTISET",
      example: "CREATE TABLE collections (\n  tags TEXT MULTISET\n);"
    },
    {
      id: "row_sql",
      name: "ROW",
      category: "Типы данных",
      description: "Составной тип данных, представляющий структуру строки (кортеж).",
      syntax: "ROW(field1 type, field2 type, ...)",
      example: "SELECT ROW(1, 'apple', true);"
    },
    {
      id: "ref_sql",
      name: "REF",
      category: "Типы данных",
      description: "Ссылка на объект в объектно-ориентированных расширениях SQL.",
      syntax: "REF(type)",
      example: "CREATE TABLE person_refs (\n  p_ref REF(person_type)\n);"
    },
    // DDL (Data Definition Language)
    {
      id: "create_sql",
      name: "CREATE",
      category: "DDL (Data Definition Language)",
      description: "Создает новые объекты в базе данных (таблицы, индексы, представления и т.д.).",
      syntax: "CREATE {TABLE | INDEX | VIEW | DATABASE} object_name (...)",
      example: "-- Пример 1: Создание таблицы\nCREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  username VARCHAR(50) NOT NULL\n);\n\n-- Пример 2: Создание индекса\nCREATE INDEX idx_username ON users(username);\n\n-- Пример 3: Создание представления\nCREATE VIEW active_users AS \nSELECT * FROM users WHERE last_login > NOW() - INTERVAL '1 month';"
    },
    {
      id: "drop_sql",
      name: "DROP",
      category: "DDL (Data Definition Language)",
      description: "Удаляет существующие объекты из базы данных.",
      syntax: "DROP {TABLE | INDEX | VIEW | DATABASE} [IF EXISTS] object_name",
      example: "-- Пример 1: Удаление таблицы\nDROP TABLE temp_data;\n\n-- Пример 2: Удаление индекса\nDROP INDEX idx_username;\n\n-- Пример 3: Удаление с проверкой существования\nDROP VIEW IF EXISTS report_summary;"
    },
    {
      id: "alter_sql",
      name: "ALTER",
      category: "DDL (Data Definition Language)",
      description: "Изменяет структуру существующих объектов (добавление/удаление колонок, смена типов и т.д.).",
      syntax: "ALTER {TABLE | VIEW} object_name action",
      example: "-- Пример 1: Добавление новой колонки\nALTER TABLE users ADD COLUMN email VARCHAR(100);\n\n-- Пример 2: Изменение типа данных колонки\nALTER TABLE products ALTER COLUMN price TYPE DECIMAL(12,2);\n\n-- Пример 3: Переименование таблицы\nALTER TABLE old_name RENAME TO new_name;"
    },
    {
      id: "truncate_sql",
      name: "TRUNCATE",
      category: "DDL (Data Definition Language)",
      description: "Удаляет все записи из таблицы, сохраняя её структуру. Работает быстрее чем DELETE.",
      syntax: "TRUNCATE TABLE table_name [RESTART IDENTITY] [CASCADE]",
      example: "-- Пример 1: Очистка таблицы логов\nTRUNCATE TABLE logs;\n\n-- Пример 2: Очистка со сбросом счетчика ID\nTRUNCATE TABLE sessions RESTART IDENTITY;\n\n-- Пример 3: Каскадная очистка зависимых таблиц\nTRUNCATE TABLE categories CASCADE;"
    },
    {
      id: "comment_sql",
      name: "COMMENT",
      category: "DDL (Data Definition Language)",
      description: "Добавляет описание (комментарий) к объектам базы данных.",
      syntax: "COMMENT ON {TABLE | COLUMN | DATABASE} object_name IS 'comment_text'",
      example: "-- Пример 1: Комментарий к таблице\nCOMMENT ON TABLE users IS 'Информация о пользователях системы';\n\n-- Пример 2: Комментарий к колонке\nCOMMENT ON COLUMN users.email IS 'Основной email адрес для уведомлений';\n\n-- Пример 3: Удаление комментария\nCOMMENT ON TABLE users IS NULL;"
    },
    {
      id: "rename_sql",
      name: "RENAME",
      category: "DDL (Data Definition Language)",
      description: "Переименовывает существующий объект базы данных.",
      syntax: "ALTER {TABLE | COLUMN | INDEX} object_name RENAME [TO | AS] new_name",
      example: "-- Пример 1: Переименование таблицы\nALTER TABLE staff RENAME TO employees;\n\n-- Пример 2: Переименование колонки\nALTER TABLE users RENAME COLUMN user_name TO username;\n\n-- Пример 3: Переименование индекса\nALTER INDEX old_idx_name RENAME TO new_idx_name;"
    }
  ];