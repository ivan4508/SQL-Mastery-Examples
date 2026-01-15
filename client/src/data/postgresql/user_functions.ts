export const userFunctions = [
  { 
    id: "pg_brin_minmax_union", 
    name: "brin_minmax_union", 
    category: "Пользовательские функции", 
    description: "Объединяет два minmax-интервала в BRIN-индексе.", 
    syntax: "brin_minmax_union(internal, internal, internal)",
    arguments: [{ name: "internal", description: "Состояния интервалов.", example: "s1, s2" }],
    example: "-- Используется при агрегации блоков в BRIN" 
  },
  { 
    id: "pg_brin_summarize_new_values", 
    name: "brin_summarize_new_values", 
    category: "Пользовательские функции", 
    description: "Сканирует таблицу и добавляет сводную информацию о новых строках в BRIN-индекс.", 
    syntax: "brin_summarize_new_values(regclass)",
    arguments: [{ name: "index", description: "Имя или OID индекса.", example: "'my_idx'::regclass" }],
    example: "SELECT brin_summarize_new_values('my_table_brin_idx');" 
  },
  { 
    id: "pg_brin_summarize_range", 
    name: "brin_summarize_range", 
    category: "Пользовательские функции", 
    description: "Создает сводную информацию для конкретного диапазона страниц в BRIN-индексе.", 
    syntax: "brin_summarize_range(regclass, bigint)",
    arguments: [
      { name: "index", description: "Имя или OID индекса.", example: "'my_idx'::regclass" },
      { name: "block", description: "Номер блока.", example: "0" }
    ],
    example: "SELECT brin_summarize_range('my_idx', 0);" 
  },
  { 
    id: "pg_brinhandler", 
    name: "brinhandler", 
    category: "Пользовательские функции", 
    description: "Обработчик метода доступа BRIN.", 
    syntax: "brinhandler(internal)",
    arguments: [{ name: "internal", description: "Внутренние параметры.", example: "..." }],
    example: "-- Системная функция для регистрации метода доступа" 
  },
  { 
    id: "pg_broadcast", 
    name: "broadcast", 
    category: "Пользовательские функции", 
    description: "Возвращает широковещательный адрес для сетевого адреса (тип inet).", 
    syntax: "broadcast(inet)",
    arguments: [{ name: "inet", description: "Сетевой адрес/сеть.", example: "'192.168.1.5/24'::inet" }],
    example: "SELECT broadcast('192.168.1.5/24'::inet);" 
  },
  { 
    id: "pg_btarraycmp", 
    name: "btarraycmp", 
    category: "Пользовательские функции", 
    description: "Сравнивает два массива (используется B-деревом).", 
    syntax: "btarraycmp(anyarray, anyarray)",
    arguments: [
      { name: "arr1", description: "Первый массив.", example: "ARRAY[1,2]" },
      { name: "arr2", description: "Второй массив.", example: "ARRAY[1,3]" }
    ],
    example: "SELECT btarraycmp(ARRAY[1,2], ARRAY[1,3]);" 
  },
  { 
    id: "pg_btboolcmp", 
    name: "btboolcmp", 
    category: "Пользовательские функции", 
    description: "Сравнивает два логических значения (используется B-деревом).", 
    syntax: "btboolcmp(boolean, boolean)",
    arguments: [
      { name: "b1", description: "Первое значение.", example: "true" },
      { name: "b2", description: "Второе значение.", example: "false" }
    ],
    example: "SELECT btboolcmp(true, false);" 
  },
  { 
    id: "pg_btboolskipsupport", 
    name: "btboolskipsupport", 
    category: "Пользовательские функции", 
    description: "Поддержка пропуска значений (Index Skip Scan) для типа boolean.", 
    syntax: "btboolskipsupport(internal)",
    arguments: [{ name: "internal", description: "Внутренний контекст.", example: "..." }],
    example: "-- Внутренняя функция оптимизатора" 
  },
  { 
    id: "pg_btbpchar_pattern_cmp", 
    name: "btbpchar_pattern_cmp", 
    category: "Пользовательские функции", 
    description: "Сравнение bpchar по правилам C locale для B-дерева.", 
    syntax: "btbpchar_pattern_cmp(character, character)",
    arguments: [
      { name: "arg1", description: "Первая строка.", example: "'a'" },
      { name: "arg2", description: "Вторая строка.", example: "'b'" }
    ],
    example: "SELECT btbpchar_pattern_cmp('a'::char(1), 'b'::char(1));" 
  },
  { 
    id: "pg_btbpchar_pattern_sortsupport", 
    name: "btbpchar_pattern_sortsupport", 
    category: "Пользовательские функции", 
    description: "Поддержка быстрой сортировки bpchar (C locale) в B-дереве.", 
    syntax: "btbpchar_pattern_sortsupport(internal)",
    arguments: [{ name: "internal", description: "Контекст сортировки.", example: "..." }],
    example: "-- Внутренняя оптимизация B-tree" 
  },
  { 
    id: "pg_btcharcmp", 
    name: "btcharcmp", 
    category: "Пользовательские функции", 
    description: "Сравнение значений типа \"char\" (однобайтовый символ) в B-дереве.", 
    syntax: "btcharcmp(\"char\", \"char\")",
    arguments: [
      { name: "c1", description: "Первый символ.", example: "'a'::\"char\"" },
      { name: "c2", description: "Второй символ.", example: "'b'::\"char\"" }
    ],
    example: "SELECT btcharcmp('a'::\"char\", 'b'::\"char\");" 
  },
  { 
    id: "pg_btcharskipsupport", 
    name: "btcharskipsupport", 
    category: "Пользовательские функции", 
    description: "Поддержка пропуска значений (Index Skip Scan) для типа \"char\".", 
    syntax: "btcharskipsupport(internal)",
    arguments: [{ name: "internal", description: "Контекст.", example: "..." }],
    example: "-- Внутренняя оптимизация B-tree" 
  },
  { 
    id: "pg_btequalimage", 
    name: "btequalimage", 
    category: "Пользовательские функции", 
    description: "Проверяет, является ли тип данных 'equal image' для дедупликации в B-дереве.", 
    syntax: "btequalimage(oid)",
    arguments: [{ name: "type_oid", description: "OID типа.", example: "23" }],
    example: "SELECT btequalimage(23);" 
  },
  { 
    id: "pg_brin_inclusion_add_value", 
    name: "brin_inclusion_add_value", 
    category: "Пользовательские функции", 
    description: "Добавляет значение в BRIN-индекс типа inclusion (для диапазонов).", 
    syntax: "brin_inclusion_add_value(internal, internal, internal, internal)",
    arguments: [{ name: "internal", description: "Внутреннее состояние индекса.", example: "state" }],
    example: "-- Используется механизмом BRIN для включений" 
  },
  { 
    id: "pg_brin_inclusion_consistent", 
    name: "brin_inclusion_consistent", 
    category: "Пользовательские функции", 
    description: "Проверяет соответствие значения диапазону в BRIN-индексе inclusion.", 
    syntax: "brin_inclusion_consistent(internal, internal, internal)",
    arguments: [{ name: "internal", description: "Состояние.", example: "state" }],
    example: "-- Используется при поиске по индексу" 
  },
  { 
    id: "pg_brin_inclusion_opcinfo", 
    name: "brin_inclusion_opcinfo", 
    category: "Пользовательские функции", 
    description: "Информация о классе операторов для BRIN inclusion.", 
    syntax: "brin_inclusion_opcinfo(internal)",
    arguments: [{ name: "internal", description: "Тип.", example: "type" }],
    example: "-- Системная функция" 
  },
  { 
    id: "pg_brin_inclusion_union", 
    name: "brin_inclusion_union", 
    category: "Пользовательские функции", 
    description: "Объединяет два диапазона в BRIN-индексе inclusion.", 
    syntax: "brin_inclusion_union(internal, internal, internal)",
    arguments: [{ name: "internal", description: "Состояния.", example: "s1, s2" }],
    example: "-- Используется при агрегации диапазонов" 
  },
  { 
    id: "pg_brin_minmax_add_value", 
    name: "brin_minmax_add_value", 
    category: "Пользовательские функции", 
    description: "Добавляет значение в стандартный BRIN-индекс minmax.", 
    syntax: "brin_minmax_add_value(internal, internal, internal, internal)",
    arguments: [{ name: "internal", description: "Состояние.", example: "state" }],
    example: "-- Обновляет минимальное и максимальное значения в блоке" 
  },
  { 
    id: "pg_brin_minmax_consistent", 
    name: "brin_minmax_consistent", 
    category: "Пользовательские функции", 
    description: "Проверяет, попадает ли значение в диапазон min/max блока BRIN.", 
    syntax: "brin_minmax_consistent(internal, internal, internal)",
    arguments: [{ name: "internal", description: "Состояние.", example: "state" }],
    example: "-- Используется при фильтрации блоков" 
  },
  { 
    id: "pg_brin_minmax_multi_add_value", 
    name: "brin_minmax_multi_add_value", 
    category: "Пользовательские функции", 
    description: "Добавляет значение в BRIN-индекс minmax-multi (хранит несколько диапазонов).", 
    syntax: "brin_minmax_multi_add_value(internal, internal, internal, internal)",
    arguments: [{ name: "internal", description: "Состояние.", example: "state" }],
    example: "-- Поддерживает более точные границы для разреженных данных" 
  },
  { 
    id: "pg_brin_minmax_multi_consistent", 
    name: "brin_minmax_multi_consistent", 
    category: "Пользовательские функции", 
    description: "Проверяет соответствие значения нескольким диапазонам minmax-multi.", 
    syntax: "brin_minmax_multi_consistent(internal, internal, internal, integer)",
    arguments: [{ name: "internal", description: "Состояние.", example: "state" }],
    example: "-- Используется в расширенных BRIN-индексах" 
  },
  { 
    id: "pg_brin_minmax_multi_distance_date", 
    name: "brin_minmax_multi_distance_date", 
    category: "Пользовательские функции", 
    description: "Вычисляет расстояние между датами для оптимизации minmax-multi.", 
    syntax: "brin_minmax_multi_distance_date(internal, internal)",
    arguments: [{ name: "date", description: "Значения дат.", example: "d1, d2" }],
    example: "-- Оценивает близость значений для группировки в диапазоны" 
  },
  { 
    id: "pg_brin_minmax_multi_distance_float4", 
    name: "brin_minmax_multi_distance_float4", 
    category: "Пользовательские функции", 
    description: "Вычисляет расстояние между float4 для minmax-multi.", 
    syntax: "brin_minmax_multi_distance_float4(internal, internal)",
    arguments: [{ name: "float", description: "Числа.", example: "f1, f2" }],
    example: "-- Используется для построения компактных индексов" 
  },
  { 
    id: "pg_brin_minmax_multi_distance_float8", 
    name: "brin_minmax_multi_distance_float8", 
    category: "Пользовательские функции", 
    description: "Вычисляет расстояние между float8 для minmax-multi.", 
    syntax: "brin_minmax_multi_distance_float8(internal, internal)",
    arguments: [{ name: "float", description: "Числа.", example: "f1, f2" }],
    example: "-- Внутренняя метрика индекса" 
  },
  { 
    id: "pg_brin_minmax_multi_distance_inet", 
    name: "brin_minmax_multi_distance_inet", 
    category: "Пользовательские функции", 
    description: "Вычисляет расстояние между IP-адресами (inet) для minmax-multi.", 
    syntax: "brin_minmax_multi_distance_inet(internal, internal)",
    arguments: [{ name: "inet", description: "IP-адреса.", example: "i1, i2" }],
    example: "-- Помогает индексировать сетевые диапазоны" 
  },
  { 
    id: "pg_brin_minmax_multi_distance_int2", 
    name: "brin_minmax_multi_distance_int2", 
    category: "Пользовательские функции", 
    description: "Вычисляет расстояние между int2 для minmax-multi.", 
    syntax: "brin_minmax_multi_distance_int2(internal, internal)",
    arguments: [{ name: "int", description: "Целые числа.", example: "n1, n2" }],
    example: "-- Используется для малых целых чисел" 
  },
  { 
    id: "pg_brin_minmax_multi_distance_int4", 
    name: "brin_minmax_multi_distance_int4", 
    category: "Пользовательские функции", 
    description: "Вычисляет расстояние между int4 для minmax-multi.", 
    syntax: "brin_minmax_multi_distance_int4(internal, internal)",
    arguments: [{ name: "int", description: "Целые числа.", example: "n1, n2" }],
    example: "-- Стандартная метрика для integer" 
  },
  { 
    id: "pg_brin_minmax_multi_distance_int8", 
    name: "brin_minmax_multi_distance_int8", 
    category: "Пользовательские функции", 
    description: "Вычисляет расстояние между int8 (bigint) для minmax-multi.", 
    syntax: "brin_minmax_multi_distance_int8(internal, internal)",
    arguments: [{ name: "int", description: "Большие целые числа.", example: "n1, n2" }],
    example: "-- Метрика для bigint" 
  },
  { 
    id: "pg_brin_minmax_multi_distance_interval", 
    name: "brin_minmax_multi_distance_interval", 
    category: "Пользовательские функции", 
    description: "Вычисляет расстояние между интервалами времени для minmax-multi.", 
    syntax: "brin_minmax_multi_distance_interval(internal, internal)",
    arguments: [{ name: "interval", description: "Интервалы.", example: "v1, v2" }],
    example: "-- Группировка временных интервалов" 
  },
  { 
    id: "pg_brin_minmax_multi_distance_macaddr", 
    name: "brin_minmax_multi_distance_macaddr", 
    category: "Пользовательские функции", 
    description: "Вычисляет расстояние между MAC-адресами для minmax-multi.", 
    syntax: "brin_minmax_multi_distance_macaddr(internal, internal)",
    arguments: [{ name: "macaddr", description: "MAC-адреса.", example: "m1, m2" }],
    example: "-- Позволяет эффективно индексировать MAC-адреса" 
  },
  { 
    id: "pg_bpcharrecv", 
    name: "bpcharrecv", 
    category: "Пользовательские функции", 
    description: "Функция приема двоичных данных для типа bpchar.", 
    syntax: "bpcharrecv(internal, oid, integer)",
    arguments: [
      { name: "internal", description: "Внутренний буфер.", example: "buf" },
      { name: "oid", description: "OID типа.", example: "1042" },
      { name: "typmod", description: "Модификатор типа.", example: "7" }
    ],
    example: "-- Используется внутренне для бинарного протокола" 
  },
  { 
    id: "pg_bpcharregexeq", 
    name: "bpcharregexeq", 
    category: "Пользовательские функции", 
    description: "Сравнение bpchar с регулярным выражением (POSIX ~).", 
    syntax: "bpcharregexeq(character, text)",
    arguments: [
      { name: "source", description: "Строка character.", example: "'abc'" },
      { name: "regex", description: "Регулярное выражение.", example: "'^a'" }
    ],
    example: "SELECT bpcharregexeq('abc'::char(3), '^a');" 
  },
  { 
    id: "pg_bpcharregexne", 
    name: "bpcharregexne", 
    category: "Пользовательские функции", 
    description: "Сравнение bpchar с регулярным выражением (POSIX !~).", 
    syntax: "bpcharregexne(character, text)",
    arguments: [
      { name: "source", description: "Строка character.", example: "'abc'" },
      { name: "regex", description: "Регулярное выражение.", example: "'^x'" }
    ],
    example: "SELECT bpcharregexne('abc'::char(3), '^x');" 
  },
  { 
    id: "pg_bpcharsend", 
    name: "bpcharsend", 
    category: "Пользовательские функции", 
    description: "Функция отправки двоичных данных для типа bpchar.", 
    syntax: "bpcharsend(character)",
    arguments: [{ name: "character", description: "Строка.", example: "'abc'::char(3)" }],
    example: "SELECT bpcharsend('abc'::char(3));" 
  },
  { 
    id: "pg_bpchartypmodin", 
    name: "bpchartypmodin", 
    category: "Пользовательские функции", 
    description: "Обработка модификаторов типа для character/bpchar.", 
    syntax: "bpchartypmodin(cstring[])",
    arguments: [{ name: "cstring[]", description: "Массив параметров (длина).", example: "ARRAY['10']" }],
    example: "SELECT bpchartypmodin(ARRAY['10']::cstring[]);" 
  },
  { 
    id: "pg_bpchartypmodout", 
    name: "bpchartypmodout", 
    category: "Пользовательские функции", 
    description: "Вывод модификаторов типа для character/bpchar.", 
    syntax: "bpchartypmodout(integer)",
    arguments: [{ name: "integer", description: "Внутренний модификатор.", example: "14" }],
    example: "SELECT bpchartypmodout(14);" 
  },
  { 
    id: "pg_brin_bloom_add_value", 
    name: "brin_bloom_add_value", 
    category: "Пользовательские функции", 
    description: "Добавляет значение в фильтр Блума для индекса BRIN.", 
    syntax: "brin_bloom_add_value(internal, internal, internal, internal)",
    arguments: [
      { name: "state", description: "Внутреннее состояние.", example: "state" },
      { name: "value", description: "Добавляемое значение.", example: "val" }
    ],
    example: "-- Используется внутренне механизмом BRIN Bloom" 
  },
  { 
    id: "pg_brin_bloom_consistent", 
    name: "brin_bloom_consistent", 
    category: "Пользовательские функции", 
    description: "Проверяет соответствие значения фильтру Блума в индексе BRIN.", 
    syntax: "brin_bloom_consistent(internal, internal, internal, integer)",
    arguments: [{ name: "state", description: "Состояние фильтра.", example: "state" }],
    example: "-- Используется при сканировании индексов" 
  },
  { 
    id: "pg_brin_bloom_opcinfo", 
    name: "brin_bloom_opcinfo", 
    category: "Пользовательские функции", 
    description: "Возвращает информацию о классе операторов для BRIN Bloom.", 
    syntax: "brin_bloom_opcinfo(internal)",
    arguments: [{ name: "internal", description: "Внутренний параметр.", example: "type" }],
    example: "-- Системная функция для поддержки индексов" 
  },
  { 
    id: "pg_brin_bloom_options", 
    name: "brin_bloom_options", 
    category: "Пользовательские функции", 
    description: "Обрабатывает параметры (options) для индекса BRIN Bloom.", 
    syntax: "brin_bloom_options(internal)",
    arguments: [{ name: "internal", description: "Указатель на параметры.", example: "reloptions" }],
    example: "-- Вызывается при создании или изменении индекса" 
  },
  { 
    id: "pg_brin_bloom_summary_in", 
    name: "brin_bloom_summary_in", 
    category: "Пользовательские функции", 
    description: "Функция ввода для сводки (summary) BRIN Bloom.", 
    syntax: "brin_bloom_summary_in(cstring)",
    arguments: [{ name: "cstring", description: "Строковое представление.", example: "'summary_data'" }],
    example: "SELECT brin_bloom_summary_in('...');" 
  },
  { 
    id: "pg_brin_bloom_summary_out", 
    name: "brin_bloom_summary_out", 
    category: "Пользовательские функции", 
    description: "Функция вывода для сводки BRIN Bloom.", 
    syntax: "brin_bloom_summary_out(pg_brin_bloom_summary)",
    arguments: [{ name: "summary", description: "Данные сводки.", example: "summary_obj" }],
    example: "SELECT brin_bloom_summary_out(summary);" 
  },
  { 
    id: "pg_brin_bloom_summary_recv", 
    name: "brin_bloom_summary_recv", 
    category: "Пользовательские функции", 
    description: "Прием сводки BRIN Bloom в двоичном формате.", 
    syntax: "brin_bloom_summary_recv(internal)",
    arguments: [{ name: "internal", description: "Двоичный буфер.", example: "buf" }],
    example: "-- Внутреннее использование" 
  },
  { 
    id: "pg_brin_bloom_summary_send", 
    name: "brin_bloom_summary_send", 
    category: "Пользовательские функции", 
    description: "Отправка сводки BRIN Bloom в двоичном формате.", 
    syntax: "brin_bloom_summary_send(pg_brin_bloom_summary)",
    arguments: [{ name: "summary", description: "Сводка.", example: "summary_obj" }],
    example: "SELECT brin_bloom_summary_send(summary);" 
  },
  { 
    id: "pg_brin_bloom_union", 
    name: "brin_bloom_union", 
    category: "Пользовательские функции", 
    description: "Объединяет два фильтра Блума в индексах BRIN.", 
    syntax: "brin_bloom_union(internal, internal, internal)",
    arguments: [
      { name: "state 1", description: "Первый фильтр.", example: "s1" },
      { name: "state 2", description: "Второй фильтр.", example: "s2" }
    ],
    example: "-- Используется при обновлении индексов" 
  },
  { 
    id: "pg_brin_desummarize_range", 
    name: "brin_desummarize_range", 
    category: "Пользовательские функции", 
    description: "Удаляет сводную информацию для конкретного диапазона страниц в индексе BRIN.", 
    syntax: "brin_desummarize_range(regclass, bigint)",
    arguments: [
      { name: "index", description: "Имя или OID индекса.", example: "'my_brin_idx'::regclass" },
      { name: "blockNumber", description: "Номер блока.", example: "0" }
    ],
    example: "SELECT brin_desummarize_range('idx_name', 512);" 
  },
  { 
    id: "pg_bpchar_larger", 
    name: "bpchar_larger", 
    category: "Пользовательские функции", 
    description: "Возвращает большее из двух значений типа bpchar.", 
    syntax: "bpchar_larger(character, character)",
    arguments: [
      { name: "arg1", description: "Первое значение.", example: "'a'::char(1)" },
      { name: "arg2", description: "Второе значение.", example: "'b'::char(1)" }
    ],
    example: "SELECT bpchar_larger('a'::char(1), 'b'::char(1));" 
  },
  { 
    id: "pg_bpchar_pattern_ge", 
    name: "bpchar_pattern_ge", 
    category: "Пользовательские функции", 
    description: "Сравнение 'больше или равно' для типа bpchar с использованием правил сравнения по шаблону (C locale).", 
    syntax: "bpchar_pattern_ge(character, character)",
    arguments: [
      { name: "arg1", description: "Первое значение.", example: "'abc'" },
      { name: "arg2", description: "Второе значение.", example: "'abb'" }
    ],
    example: "SELECT bpchar_pattern_ge('abc'::char(3), 'abb'::char(3));" 
  },
  { 
    id: "pg_bpchar_pattern_gt", 
    name: "bpchar_pattern_gt", 
    category: "Пользовательские функции", 
    description: "Сравнение 'строго больше' для типа bpchar по правилам C locale.", 
    syntax: "bpchar_pattern_gt(character, character)",
    arguments: [
      { name: "arg1", description: "Первое значение.", example: "'b'" },
      { name: "arg2", description: "Второе значение.", example: "'a'" }
    ],
    example: "SELECT bpchar_pattern_gt('b'::char(1), 'a'::char(1));" 
  },
  { 
    id: "pg_bpchar_pattern_le", 
    name: "bpchar_pattern_le", 
    category: "Пользовательские функции", 
    description: "Сравнение 'меньше или равно' для типа bpchar по правилам C locale.", 
    syntax: "bpchar_pattern_le(character, character)",
    arguments: [
      { name: "arg1", description: "Первое значение.", example: "'a'" },
      { name: "arg2", description: "Второе значение.", example: "'b'" }
    ],
    example: "SELECT bpchar_pattern_le('a'::char(1), 'b'::char(1));" 
  },
  { 
    id: "pg_bpchar_pattern_lt", 
    name: "bpchar_pattern_lt", 
    category: "Пользовательские функции", 
    description: "Сравнение 'строго меньше' для типа bpchar по правилам C locale.", 
    syntax: "bpchar_pattern_lt(character, character)",
    arguments: [
      { name: "arg1", description: "Первое значение.", example: "'a'" },
      { name: "arg2", description: "Второе значение.", example: "'b'" }
    ],
    example: "SELECT bpchar_pattern_lt('a'::char(1), 'b'::char(1));" 
  },
  { 
    id: "pg_bpchar_smaller", 
    name: "bpchar_smaller", 
    category: "Пользовательские функции", 
    description: "Возвращает меньшее из двух значений типа bpchar.", 
    syntax: "bpchar_smaller(character, character)",
    arguments: [
      { name: "arg1", description: "Первое значение.", example: "'a'" },
      { name: "arg2", description: "Второе значение.", example: "'b'" }
    ],
    example: "SELECT bpchar_smaller('a'::char(1), 'b'::char(1));" 
  },
  { 
    id: "pg_bpchar_sortsupport", 
    name: "bpchar_sortsupport", 
    category: "Пользовательские функции", 
    description: "Вспомогательная функция для оптимизации сортировки типа bpchar.", 
    syntax: "bpchar_sortsupport(internal)",
    arguments: [{ name: "internal", description: "Внутреннее состояние.", example: "pointer" }],
    example: "-- Используется системой при индексации и сортировке" 
  },
  { 
    id: "pg_bpcharcmp", 
    name: "bpcharcmp", 
    category: "Пользовательские функции", 
    description: "Сравнивает две строки bpchar (возвращает -1, 0 или 1).", 
    syntax: "bpcharcmp(character, character)",
    arguments: [
      { name: "arg1", description: "Первое значение.", example: "'abc'" },
      { name: "arg2", description: "Второе значение.", example: "'abd'" }
    ],
    example: "SELECT bpcharcmp('abc'::char(3), 'abd'::char(3));" 
  },
  { 
    id: "pg_bpchareq", 
    name: "bpchareq", 
    category: "Пользовательские функции", 
    description: "Проверяет равенство двух значений bpchar.", 
    syntax: "bpchareq(character, character)",
    arguments: [
      { name: "arg1", description: "Первое значение.", example: "'abc'" },
      { name: "arg2", description: "Второе значение.", example: "'abc'" }
    ],
    example: "SELECT bpchareq('abc'::char(3), 'abc'::char(3));" 
  },
  { 
    id: "pg_bpcharge", 
    name: "bpcharge", 
    category: "Пользовательские функции", 
    description: "Проверяет, что первое значение больше или равно второму.", 
    syntax: "bpcharge(character, character)",
    arguments: [
      { name: "arg1", description: "Первое значение.", example: "'b'" },
      { name: "arg2", description: "Второе значение.", example: "'a'" }
    ],
    example: "SELECT bpcharge('b'::char(1), 'a'::char(1));" 
  },
  { 
    id: "pg_bpchargt", 
    name: "bpchargt", 
    category: "Пользовательские функции", 
    description: "Проверяет, что первое значение строго больше второго.", 
    syntax: "bpchargt(character, character)",
    arguments: [
      { name: "arg1", description: "Первое значение.", example: "'b'" },
      { name: "arg2", description: "Второе значение.", example: "'a'" }
    ],
    example: "SELECT bpchargt('b'::char(1), 'a'::char(1));" 
  },
  { 
    id: "pg_bpchariclike", 
    name: "bpchariclike", 
    category: "Пользовательские функции", 
    description: "Регистронезависимое сравнение bpchar с шаблоном LIKE (ILIKE).", 
    syntax: "bpchariclike(character, text)",
    arguments: [
      { name: "source", description: "Строка character.", example: "'ABC'" },
      { name: "pattern", description: "Шаблон.", example: "'abc%'" }
    ],
    example: "SELECT bpchariclike('ABC'::char(3), 'abc%');" 
  },
  { 
    id: "pg_bpcharicnlike", 
    name: "bpcharicnlike", 
    category: "Пользовательские функции", 
    description: "Регистронезависимое сравнение bpchar с шаблоном NOT LIKE (NOT ILIKE).", 
    syntax: "bpcharicnlike(character, text)",
    arguments: [
      { name: "source", description: "Строка character.", example: "'ABC'" },
      { name: "pattern", description: "Шаблон.", example: "'xyz%'" }
    ],
    example: "SELECT bpcharicnlike('ABC'::char(3), 'xyz%');" 
  },
  { 
    id: "pg_bpcharicregexeq", 
    name: "bpcharicregexeq", 
    category: "Пользовательские функции", 
    description: "Регистронезависимое сравнение bpchar с регулярным выражением (POSIX ~*).", 
    syntax: "bpcharicregexeq(character, text)",
    arguments: [
      { name: "source", description: "Строка character.", example: "'ABC'" },
      { name: "regex", description: "Регулярное выражение.", example: "'^a'" }
    ],
    example: "SELECT bpcharicregexeq('ABC'::char(3), '^a');" 
  },
  { 
    id: "pg_bpcharicregexne", 
    name: "bpcharicregexne", 
    category: "Пользовательские функции", 
    description: "Регистронезависимое сравнение bpchar с регулярным выражением (POSIX !~*).", 
    syntax: "bpcharicregexne(character, text)",
    arguments: [
      { name: "source", description: "Строка character.", example: "'ABC'" },
      { name: "regex", description: "Регулярное выражение.", example: "'^x'" }
    ],
    example: "SELECT bpcharicregexne('ABC'::char(3), '^x');" 
  },
  { 
    id: "pg_bpcharin", 
    name: "bpcharin", 
    category: "Пользовательские функции", 
    description: "Функция ввода для типа bpchar.", 
    syntax: "bpcharin(cstring, oid, integer)",
    arguments: [
      { name: "cstring", description: "Строка.", example: "'abc'" },
      { name: "oid", description: "OID типа.", example: "1042" },
      { name: "typmod", description: "Модификатор типа.", example: "7" }
    ],
    example: "SELECT bpcharin('abc', 1042, 7);" 
  },
  { 
    id: "pg_bpcharle", 
    name: "bpcharle", 
    category: "Пользовательские функции", 
    description: "Проверяет, что первое значение меньше или равно второму.", 
    syntax: "bpcharle(character, character)",
    arguments: [
      { name: "arg1", description: "Первое значение.", example: "'a'" },
      { name: "arg2", description: "Второе значение.", example: "'b'" }
    ],
    example: "SELECT bpcharle('a'::char(1), 'b'::char(1));" 
  },
  { 
    id: "pg_bpcharlike", 
    name: "bpcharlike", 
    category: "Пользовательские функции", 
    description: "Сравнение bpchar с шаблоном LIKE.", 
    syntax: "bpcharlike(character, text)",
    arguments: [
      { name: "source", description: "Строка character.", example: "'abc'" },
      { name: "pattern", description: "Шаблон.", example: "'a%'" }
    ],
    example: "SELECT bpcharlike('abc'::char(3), 'a%');" 
  },
  { 
    id: "pg_bpcharlt", 
    name: "bpcharlt", 
    category: "Пользовательские функции", 
    description: "Проверяет, что первое значение строго меньше второго.", 
    syntax: "bpcharlt(character, character)",
    arguments: [
      { name: "arg1", description: "Первое значение.", example: "'a'" },
      { name: "arg2", description: "Второе значение.", example: "'b'" }
    ],
    example: "SELECT bpcharlt('a'::char(1), 'b'::char(1));" 
  },
  { 
    id: "pg_bpcharne", 
    name: "pg_bpcharne", 
    category: "Пользовательские функции", 
    description: "Проверяет неравенство двух значений bpchar.", 
    syntax: "bpcharne(character, character)",
    arguments: [
      { name: "arg1", description: "Первое значение.", example: "'a'" },
      { name: "arg2", description: "Второе значение.", example: "'b'" }
    ],
    example: "SELECT bpcharne('a'::char(1), 'b'::char(1));" 
  },
  { 
    id: "pg_bpcharnlike", 
    name: "bpcharnlike", 
    category: "Пользовательские функции", 
    description: "Сравнение bpchar с шаблоном NOT LIKE.", 
    syntax: "bpcharnlike(character, text)",
    arguments: [
      { name: "source", description: "Строка character.", example: "'abc'" },
      { name: "pattern", description: "Шаблон.", example: "'x%'" }
    ],
    example: "SELECT bpcharnlike('abc'::char(3), 'x%');" 
  },
  { 
    id: "pg_bpcharout", 
    name: "bpcharout", 
    category: "Пользовательские функции", 
    description: "Функция вывода для типа bpchar.", 
    syntax: "bpcharout(character)",
    arguments: [{ name: "character", description: "Строка.", example: "'abc'::char(3)" }],
    example: "SELECT bpcharout('abc'::char(3));" 
  },
  { 
    id: "pg_box_div", 
    name: "box_div", 
    category: "Пользовательские функции", 
    description: "Делит координаты прямоугольника на координаты точки (масштабирование).", 
    syntax: "box_div(box, point)",
    arguments: [
      { name: "box", description: "Прямоугольник.", example: "box '(2,2),(4,4)'" },
      { name: "point", description: "Точка-делитель.", example: "point '(2,2)'" }
    ],
    example: "SELECT box_div(box '(2,2),(4,4)', point '(2,2)');" 
  },
  { 
    id: "pg_box_eq", 
    name: "box_eq", 
    category: "Пользовательские функции", 
    description: "Проверяет равенство двух прямоугольников.", 
    syntax: "box_eq(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(0,0),(1,1)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(0,0),(1,1)'" }
    ],
    example: "SELECT box_eq(box '(0,0),(1,1)', box '(0,0),(1,1)');" 
  },
  { 
    id: "pg_box_ge", 
    name: "box_ge", 
    category: "Пользовательские функции", 
    description: "Проверяет, что площадь первого прямоугольника больше или равна площади второго.", 
    syntax: "box_ge(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(0,0),(2,2)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(0,0),(1,1)'" }
    ],
    example: "SELECT box_ge(box '(0,0),(2,2)', box '(0,0),(1,1)');" 
  },
  { 
    id: "pg_box_gt", 
    name: "box_gt", 
    category: "Пользовательские функции", 
    description: "Проверяет, что площадь первого прямоугольника строго больше площади второго.", 
    syntax: "box_gt(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(0,0),(2,2)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(0,0),(1,1)'" }
    ],
    example: "SELECT box_gt(box '(0,0),(2,2)', box '(0,0),(1,1)');" 
  },
  { 
    id: "pg_box_in", 
    name: "box_in", 
    category: "Пользовательские функции", 
    description: "Функция ввода для типа box.", 
    syntax: "box_in(cstring)",
    arguments: [{ name: "cstring", description: "Строковое представление прямоугольника.", example: "'(0,0),(1,1)'" }],
    example: "SELECT box_in('(0,0),(1,1)');" 
  },
  { 
    id: "pg_box_intersect", 
    name: "box_intersect", 
    category: "Пользовательские функции", 
    description: "Возвращает прямоугольник, являющийся пересечением двух данных (если они не пересекаются, результат может быть неопределенным или пустым в зависимости от реализации).", 
    syntax: "box_intersect(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(0,0),(2,2)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(1,1),(3,3)'" }
    ],
    example: "SELECT box_intersect(box '(0,0),(2,2)', box '(1,1),(3,3)');" 
  },
  { 
    id: "pg_box_le", 
    name: "box_le", 
    category: "Пользовательские функции", 
    description: "Проверяет, что площадь первого прямоугольника меньше или равна площади второго.", 
    syntax: "box_le(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(0,0),(1,1)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(0,0),(2,2)'" }
    ],
    example: "SELECT box_le(box '(0,0),(1,1)', box '(0,0),(2,2)');" 
  },
  { 
    id: "pg_box_left", 
    name: "box_left", 
    category: "Пользовательские функции", 
    description: "Проверяет, находится ли первый прямоугольник строго слева от второго.", 
    syntax: "box_left(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(0,0),(1,1)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(2,0),(3,1)'" }
    ],
    example: "SELECT box_left(box '(0,0),(1,1)', box '(2,0),(3,1)');" 
  },
  { 
    id: "pg_box_lt", 
    name: "box_lt", 
    category: "Пользовательские функции", 
    description: "Проверяет, что площадь первого прямоугольника строго меньше площади второго.", 
    syntax: "box_lt(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(0,0),(1,1)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(0,0),(2,2)'" }
    ],
    example: "SELECT box_lt(box '(0,0),(1,1)', box '(0,0),(2,2)');" 
  },
  { 
    id: "pg_box_mul", 
    name: "box_mul", 
    category: "Пользовательские функции", 
    description: "Умножает координаты прямоугольника на координаты точки (масштабирование).", 
    syntax: "box_mul(box, point)",
    arguments: [
      { name: "box", description: "Прямоугольник.", example: "box '(0,0),(1,1)'" },
      { name: "point", description: "Точка-множитель.", example: "point '(2,2)'" }
    ],
    example: "SELECT box_mul(box '(0,0),(1,1)', point '(2,2)');" 
  },
  { 
    id: "pg_box_out", 
    name: "box_out", 
    category: "Пользовательские функции", 
    description: "Функция вывода для типа box.", 
    syntax: "box_out(box)",
    arguments: [{ name: "box", description: "Прямоугольник.", example: "box '(0,0),(1,1)'" }],
    example: "SELECT box_out(box '(0,0),(1,1)');" 
  },
  { 
    id: "pg_box_overabove", 
    name: "box_overabove", 
    category: "Пользовательские функции", 
    description: "Проверяет, не находится ли первый прямоугольник ниже второго (может перекрываться сверху).", 
    syntax: "box_overabove(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(0,2),(1,3)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(0,0),(1,1)'" }
    ],
    example: "SELECT box_overabove(box '(0,2),(1,3)', box '(0,0),(1,1)');" 
  },
  { 
    id: "pg_box_overbelow", 
    name: "box_overbelow", 
    category: "Пользовательские функции", 
    description: "Проверяет, не находится ли первый прямоугольник выше второго.", 
    syntax: "box_overbelow(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(0,-1),(1,0)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(0,0),(1,1)'" }
    ],
    example: "SELECT box_overbelow(box '(0,-1),(1,0)', box '(0,0),(1,1)');" 
  },
  { 
    id: "pg_box_overlap", 
    name: "box_overlap", 
    category: "Пользовательские функции", 
    description: "Проверяет, пересекаются (накладываются) ли два прямоугольника.", 
    syntax: "box_overlap(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(0,0),(2,2)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(1,1),(3,3)'" }
    ],
    example: "SELECT box_overlap(box '(0,0),(2,2)', box '(1,1),(3,3)');" 
  },
  { 
    id: "pg_box_overleft", 
    name: "box_overleft", 
    category: "Пользовательские функции", 
    description: "Проверяет, не находится ли первый прямоугольник справа от второго.", 
    syntax: "box_overleft(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(0,0),(1,1)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(0.5,0),(1.5,1)'" }
    ],
    example: "SELECT box_overleft(box '(0,0),(1,1)', box '(0.5,0),(1.5,1)');" 
  },
  { 
    id: "pg_box_overright", 
    name: "box_overright", 
    category: "Пользовательские функции", 
    description: "Проверяет, не находится ли первый прямоугольник слева от второго.", 
    syntax: "box_overright(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(1,0),(2,1)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(0,0),(1.5,1)'" }
    ],
    example: "SELECT box_overright(box '(1,0),(2,1)', box '(0,0),(1.5,1)');" 
  },
  { 
    id: "pg_box_recv", 
    name: "box_recv", 
    category: "Пользовательские функции", 
    description: "Функция приема двоичных данных для типа box.", 
    syntax: "box_recv(internal)",
    arguments: [{ name: "internal", description: "Внутренний буфер.", example: "buf" }],
    example: "-- Используется внутренне" 
  },
  { 
    id: "pg_box_right", 
    name: "box_right", 
    category: "Пользовательские функции", 
    description: "Проверяет, находится ли первый прямоугольник строго справа от второго.", 
    syntax: "box_right(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(2,0),(3,1)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(0,0),(1,1)'" }
    ],
    example: "SELECT box_right(box '(2,0),(3,1)', box '(0,0),(1,1)');" 
  },
  { 
    id: "pg_box_same", 
    name: "box_same", 
    category: "Пользовательские функции", 
    description: "Проверяет, совпадают ли два прямоугольника.", 
    syntax: "box_same(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(0,0),(1,1)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(1,1),(0,0)'" }
    ],
    example: "SELECT box_same(box '(0,0),(1,1)', box '(1,1),(0,0)');" 
  },
  { 
    id: "pg_box_send", 
    name: "box_send", 
    category: "Пользовательские функции", 
    description: "Функция отправки двоичных данных для типа box.", 
    syntax: "box_send(box)",
    arguments: [{ name: "box", description: "Прямоугольник.", example: "box '(0,0),(1,1)'" }],
    example: "SELECT box_send(box '(0,0),(1,1)');" 
  },
  { 
    id: "pg_box_sub", 
    name: "box_sub", 
    category: "Пользовательские функции", 
    description: "Вычитает координаты точки из координат прямоугольника (смещение).", 
    syntax: "box_sub(box, point)",
    arguments: [
      { name: "box", description: "Прямоугольник.", example: "box '(1,1),(2,2)'" },
      { name: "point", description: "Точка-смещение.", example: "point '(1,1)'" }
    ],
    example: "SELECT box_sub(box '(1,1),(2,2)', point '(1,1)');" 
  },
  { 
    id: "pg_bpchar_char_int_bool", 
    name: "bpchar", 
    category: "Пользовательские функции", 
    description: "Приведение значения к типу character (bpchar) с заданной длиной.", 
    syntax: "bpchar(character, integer, boolean)",
    arguments: [
      { name: "source", description: "Исходная строка.", example: "'abc'::char(5)" },
      { name: "length", description: "Длина.", example: "10" },
      { name: "explicit", description: "Флаг явного приведения.", example: "true" }
    ],
    example: "SELECT bpchar('abc'::char(5), 10, true);" 
  },
  { 
    id: "pg_bpchar_name", 
    name: "bpchar", 
    category: "Пользовательские функции", 
    description: "Преобразует тип name в тип bpchar.", 
    syntax: "bpchar(name)",
    arguments: [{ name: "name", description: "Имя (внутренний тип).", example: "current_user" }],
    example: "SELECT bpchar(current_user);" 
  },
  { 
    id: "pg_bpchar_char", 
    name: "bpchar", 
    category: "Пользовательские функции", 
    description: "Преобразует тип \"char\" (однобайтовый) в тип bpchar.", 
    syntax: "bpchar(\"char\")",
    arguments: [{ name: "\"char\"", description: "Символьное значение.", example: "'A'::\"char\"" }],
    example: "SELECT bpchar('A'::\"char\");" 
  },
  { 
    id: "pg_bit_count_bytea", 
    name: "bit_count", 
    category: "Пользовательские функции", 
    description: "Подсчитывает количество установленных бит (единиц) в значении типа bytea.", 
    syntax: "bit_count(bytea)",
    arguments: [{ name: "bytea", description: "Двоичные данные.", example: "'\\x1234'::bytea" }],
    example: "SELECT bit_count('\\x1234'::bytea);" 
  },
  { 
    id: "pg_bit_count_bit", 
    name: "bit_count", 
    category: "Пользовательские функции", 
    description: "Подсчитывает количество установленных бит (единиц) в битовой строке.", 
    syntax: "bit_count(bit)",
    arguments: [{ name: "bit", description: "Битовая строка.", example: "B'101010'" }],
    example: "SELECT bit_count(B'101010');" 
  },
  { 
    id: "pg_bit_in", 
    name: "bit_in", 
    category: "Пользовательские функции", 
    description: "Функция ввода для типа bit.", 
    syntax: "bit_in(cstring, oid, integer)",
    arguments: [
      { name: "cstring", description: "Строковое представление бит.", example: "'1010'" },
      { name: "oid", description: "OID типа.", example: "1560" },
      { name: "integer", description: "Модификатор типа (длина).", example: "4" }
    ],
    example: "SELECT bit_in('1010', 1560, 4);" 
  },
  { 
    id: "pg_bit_length_bit", 
    name: "bit_length", 
    category: "Пользовательские функции", 
    description: "Возвращает количество бит в битовой строке.", 
    syntax: "bit_length(bit)",
    arguments: [{ name: "bit", description: "Битовая строка.", example: "B'101'" }],
    example: "SELECT bit_length(B'101');" 
  },
  { 
    id: "pg_bit_length_bytea", 
    name: "bit_length", 
    category: "Пользовательские функции", 
    description: "Возвращает количество бит в значении bytea (8 * количество байт).", 
    syntax: "bit_length(bytea)",
    arguments: [{ name: "bytea", description: "Двоичные данные.", example: "'\\x01'::bytea" }],
    example: "SELECT bit_length('\\x01'::bytea);" 
  },
  { 
    id: "pg_bit_length_text", 
    name: "bit_length", 
    category: "Пользовательские функции", 
    description: "Возвращает количество бит в текстовой строке.", 
    syntax: "bit_length(text)",
    arguments: [{ name: "text", description: "Текстовая строка.", example: "'SQL'" }],
    example: "SELECT bit_length('SQL');" 
  },
  { 
    id: "pg_bit_out", 
    name: "bit_out", 
    category: "Пользовательские функции", 
    description: "Функция вывода для типа bit.", 
    syntax: "bit_out(bit)",
    arguments: [{ name: "bit", description: "Битовая строка.", example: "B'1010'" }],
    example: "SELECT bit_out(B'1010');" 
  },
  { 
    id: "pg_bit_recv", 
    name: "bit_recv", 
    category: "Пользовательские функции", 
    description: "Функция приема двоичных данных для типа bit.", 
    syntax: "bit_recv(internal, oid, integer)",
    arguments: [
      { name: "internal", description: "Внутренний буфер.", example: "buf" },
      { name: "oid", description: "OID типа.", example: "1560" },
      { name: "integer", description: "Модификатор.", example: "4" }
    ],
    example: "-- Используется внутренне для бинарного протокола" 
  },
  { 
    id: "pg_bit_send", 
    name: "bit_send", 
    category: "Пользовательские функции", 
    description: "Функция отправки двоичных данных для типа bit.", 
    syntax: "bit_send(bit)",
    arguments: [{ name: "bit", description: "Битовая строка.", example: "B'1010'" }],
    example: "SELECT bit_send(B'1010');" 
  },
  { 
    id: "pg_bitand", 
    name: "bitand", 
    category: "Пользовательские функции", 
    description: "Выполняет побитовое И (AND) над двумя битовыми строками.", 
    syntax: "bitand(bit, bit)",
    arguments: [
      { name: "bit 1", description: "Первая строка.", example: "B'1010'" },
      { name: "bit 2", description: "Вторая строка.", example: "B'1100'" }
    ],
    example: "SELECT bitand(B'1010', B'1100');" 
  },
  { 
    id: "pg_bitcat", 
    name: "bitcat", 
    category: "Пользовательские функции", 
    description: "Объединяет (конкатенирует) две битовые строки переменной длины.", 
    syntax: "bitcat(bit varying, bit varying)",
    arguments: [
      { name: "bit varying 1", description: "Первая строка.", example: "B'10'::varbit" },
      { name: "bit varying 2", description: "Вторая строка.", example: "B'11'::varbit" }
    ],
    example: "SELECT bitcat(B'10'::varbit, B'11'::varbit);" 
  },
  { 
    id: "pg_bitcmp", 
    name: "bitcmp", 
    category: "Пользовательские функции", 
    description: "Сравнивает две битовые строки (возвращает -1, 0 или 1).", 
    syntax: "bitcmp(bit, bit)",
    arguments: [
      { name: "bit 1", description: "Первая строка.", example: "B'10'" },
      { name: "bit 2", description: "Вторая строка.", example: "B'11'" }
    ],
    example: "SELECT bitcmp(B'10', B'11');" 
  },
  { 
    id: "pg_biteq", 
    name: "biteq", 
    category: "Пользовательские функции", 
    description: "Проверяет равенство двух битовых строк.", 
    syntax: "biteq(bit, bit)",
    arguments: [
      { name: "bit 1", description: "Первая строка.", example: "B'10'" },
      { name: "bit 2", description: "Вторая строка.", example: "B'10'" }
    ],
    example: "SELECT biteq(B'10', B'10');" 
  },
  { 
    id: "pg_bitge", 
    name: "bitge", 
    category: "Пользовательские функции", 
    description: "Проверяет, что первая битовая строка больше или равна второй.", 
    syntax: "bitge(bit, bit)",
    arguments: [
      { name: "bit 1", description: "Первая строка.", example: "B'11'" },
      { name: "bit 2", description: "Вторая строка.", example: "B'10'" }
    ],
    example: "SELECT bitge(B'11', B'10');" 
  },
  { 
    id: "pg_bitgt", 
    name: "bitgt", 
    category: "Пользовательские функции", 
    description: "Проверяет, что первая битовая строка больше второй.", 
    syntax: "bitgt(bit, bit)",
    arguments: [
      { name: "bit 1", description: "Первая строка.", example: "B'11'" },
      { name: "bit 2", description: "Вторая строка.", example: "B'10'" }
    ],
    example: "SELECT bitgt(B'11', B'10');" 
  },
  { 
    id: "pg_bitle", 
    name: "bitle", 
    category: "Пользовательские функции", 
    description: "Проверяет, что первая битовая строка меньше или равна второй.", 
    syntax: "bitle(bit, bit)",
    arguments: [
      { name: "bit 1", description: "Первая строка.", example: "B'10'" },
      { name: "bit 2", description: "Вторая строка.", example: "B'11'" }
    ],
    example: "SELECT bitle(B'10', B'11');" 
  },
  { 
    id: "pg_bitlt", 
    name: "bitlt", 
    category: "Пользовательские функции", 
    description: "Проверяет, что первая битовая строка меньше второй.", 
    syntax: "bitlt(bit, bit)",
    arguments: [
      { name: "bit 1", description: "Первая строка.", example: "B'10'" },
      { name: "bit 2", description: "Вторая строка.", example: "B'11'" }
    ],
    example: "SELECT bitlt(B'10', B'11');" 
  },
  { 
    id: "pg_bitne", 
    name: "bitne", 
    category: "Пользовательские функции", 
    description: "Проверяет неравенство двух битовых строк.", 
    syntax: "bitne(bit, bit)",
    arguments: [
      { name: "bit 1", description: "Первая строка.", example: "B'10'" },
      { name: "bit 2", description: "Вторая строка.", example: "B'11'" }
    ],
    example: "SELECT bitne(B'10', B'11');" 
  },
  { 
    id: "pg_bitnot", 
    name: "bitnot", 
    category: "Пользовательские функции", 
    description: "Выполняет побитовую инверсию (NOT).", 
    syntax: "bitnot(bit)",
    arguments: [{ name: "bit", description: "Битовая строка.", example: "B'1010'" }],
    example: "SELECT bitnot(B'1010');" 
  },
  { 
    id: "pg_bitor", 
    name: "bitor", 
    category: "Пользовательские функции", 
    description: "Выполняет побитовое ИЛИ (OR) над двумя битовыми строками.", 
    syntax: "bitor(bit, bit)",
    arguments: [
      { name: "bit 1", description: "Первая строка.", example: "B'1010'" },
      { name: "bit 2", description: "Вторая строка.", example: "B'1100'" }
    ],
    example: "SELECT bitor(B'1010', B'1100');" 
  },
  { 
    id: "pg_bitshiftleft", 
    name: "bitshiftleft", 
    category: "Пользовательские функции", 
    description: "Выполняет побитовый сдвиг влево.", 
    syntax: "bitshiftleft(bit, integer)",
    arguments: [
      { name: "bit", description: "Битовая строка.", example: "B'1010'" },
      { name: "integer", description: "Количество позиций для сдвига.", example: "2" }
    ],
    example: "SELECT bitshiftleft(B'1010', 2);" 
  },
  { 
    id: "pg_bitshiftright", 
    name: "bitshiftright", 
    category: "Пользовательские функции", 
    description: "Выполняет побитовый сдвиг вправо.", 
    syntax: "bitshiftright(bit, integer)",
    arguments: [
      { name: "bit", description: "Битовая строка.", example: "B'1010'" },
      { name: "integer", description: "Количество позиций для сдвига.", example: "2" }
    ],
    example: "SELECT bitshiftright(B'1010', 2);" 
  },
  { 
    id: "pg_bittypmodin", 
    name: "bittypmodin", 
    category: "Пользовательские функции", 
    description: "Функция обработки модификаторов типа для bit.", 
    syntax: "bittypmodin(cstring[])",
    arguments: [{ name: "cstring[]", description: "Массив строковых аргументов.", example: "ARRAY['8']" }],
    example: "SELECT bittypmodin(ARRAY['8']::cstring[]);" 
  },
  { 
    id: "pg_bittypmodout", 
    name: "bittypmodout", 
    category: "Пользовательские функции", 
    description: "Функция вывода модификаторов типа для bit.", 
    syntax: "bittypmodout(integer)",
    arguments: [{ name: "integer", description: "Внутреннее представление модификатора.", example: "8" }],
    example: "SELECT bittypmodout(8);" 
  },
  { 
    id: "pg_bitxor", 
    name: "bitxor", 
    category: "Пользовательские функции", 
    description: "Выполняет побитовое исключающее ИЛИ (XOR) над двумя битовыми строками.", 
    syntax: "bitxor(bit, bit)",
    arguments: [
      { name: "bit 1", description: "Первая строка.", example: "B'1010'" },
      { name: "bit 2", description: "Вторая строка.", example: "B'1100'" }
    ],
    example: "SELECT bitxor(B'1010', B'1100');" 
  },
  { 
    id: "pg_bool_jsonb", 
    name: "bool", 
    category: "Пользовательские функции", 
    description: "Преобразует логическое значение из jsonb в тип boolean.", 
    syntax: "bool(jsonb)",
    arguments: [{ name: "jsonb", description: "JSON-данные.", example: "'true'::jsonb" }],
    example: "SELECT bool('true'::jsonb);" 
  },
  { 
    id: "pg_bool_int", 
    name: "bool", 
    category: "Пользовательские функции", 
    description: "Преобразует целое число в логическое значение (0 -> false, иначе -> true).", 
    syntax: "bool(integer)",
    arguments: [{ name: "integer", description: "Целое число.", example: "1" }],
    example: "SELECT bool(1);" 
  },
  { 
    id: "pg_bool_accum", 
    name: "bool_accum", 
    category: "Пользовательские функции", 
    description: "Функция накопления для логических агрегатов.", 
    syntax: "bool_accum(internal, boolean)",
    arguments: [
      { name: "internal", description: "Внутреннее состояние.", example: "state" },
      { name: "boolean", description: "Новое значение.", example: "true" }
    ],
    example: "-- Используется внутренне агрегатами" 
  },
  { 
    id: "pg_bool_accum_inv", 
    name: "bool_accum_inv", 
    category: "Пользовательские функции", 
    description: "Функция инверсного накопления для скользящих окон агрегатов.", 
    syntax: "bool_accum_inv(internal, boolean)",
    arguments: [
      { name: "internal", description: "Внутреннее состояние.", example: "state" },
      { name: "boolean", description: "Удаляемое значение.", example: "true" }
    ],
    example: "-- Используется в оконных функциях" 
  },
  { 
    id: "pg_bool_alltrue", 
    name: "bool_alltrue", 
    category: "Пользовательские функции", 
    description: "Проверяет, все ли накопленные значения истинны.", 
    syntax: "bool_alltrue(internal)",
    arguments: [{ name: "internal", description: "Внутреннее состояние агрегата.", example: "state" }],
    example: "-- Финальная функция агрегата every/bool_and" 
  },
  { 
    id: "pg_bool_anytrue", 
    name: "bool_anytrue", 
    category: "Пользовательские функции", 
    description: "Проверяет, есть ли хотя бы одно истинное значение в накопленных данных.", 
    syntax: "bool_anytrue(internal)",
    arguments: [{ name: "internal", description: "Внутреннее состояние агрегата.", example: "state" }],
    example: "-- Финальная функция агрегата any/some/bool_or" 
  },
  { 
    id: "pg_booland_statefunc", 
    name: "booland_statefunc", 
    category: "Пользовательские функции", 
    description: "Функция перехода для агрегата bool_and.", 
    syntax: "booland_statefunc(boolean, boolean)",
    arguments: [
      { name: "state", description: "Текущее состояние.", example: "true" },
      { name: "next", description: "Следующее значение.", example: "false" }
    ],
    example: "SELECT booland_statefunc(true, false);" 
  },
  { 
    id: "pg_booleq", 
    name: "booleq", 
    category: "Пользовательские функции", 
    description: "Проверяет равенство двух логических значений.", 
    syntax: "booleq(boolean, boolean)",
    arguments: [
      { name: "bool 1", description: "Первое значение.", example: "true" },
      { name: "bool 2", description: "Второе значение.", example: "true" }
    ],
    example: "SELECT booleq(true, true);" 
  },
  { 
    id: "pg_boolge", 
    name: "boolge", 
    category: "Пользовательские функции", 
    description: "Проверяет, что первое логическое значение больше или равно второму (true > false).", 
    syntax: "boolge(boolean, boolean)",
    arguments: [
      { name: "bool 1", description: "Первое значение.", example: "true" },
      { name: "bool 2", description: "Второе значение.", example: "false" }
    ],
    example: "SELECT boolge(true, false);" 
  },
  { 
    id: "pg_boolgt", 
    name: "boolgt", 
    category: "Пользовательские функции", 
    description: "Проверяет, что первое логическое значение строго больше второго.", 
    syntax: "boolgt(boolean, boolean)",
    arguments: [
      { name: "bool 1", description: "Первое значение.", example: "true" },
      { name: "bool 2", description: "Второе значение.", example: "false" }
    ],
    example: "SELECT boolgt(true, false);" 
  },
  { 
    id: "pg_boolin", 
    name: "boolin", 
    category: "Пользовательские функции", 
    description: "Функция ввода для типа boolean.", 
    syntax: "boolin(cstring)",
    arguments: [{ name: "cstring", description: "Строка ('t', 'f', 'true', 'false', 'y', 'n', '1', '0').", example: "'yes'" }],
    example: "SELECT boolin('yes');" 
  },
  { 
    id: "pg_boolle", 
    name: "boolle", 
    category: "Пользовательские функции", 
    description: "Проверяет, что первое логическое значение меньше или равно второму.", 
    syntax: "boolle(boolean, boolean)",
    arguments: [
      { name: "bool 1", description: "Первое значение.", example: "false" },
      { name: "bool 2", description: "Второе значение.", example: "true" }
    ],
    example: "SELECT boolle(false, true);" 
  },
  { 
    id: "pg_boollt", 
    name: "boollt", 
    category: "Пользовательские функции", 
    description: "Проверяет, что первое логическое значение строго меньше второго.", 
    syntax: "boollt(boolean, boolean)",
    arguments: [
      { name: "bool 1", description: "Первое значение.", example: "false" },
      { name: "bool 2", description: "Второе значение.", example: "true" }
    ],
    example: "SELECT boollt(false, true);" 
  },
  { 
    id: "pg_boolne", 
    name: "boolne", 
    category: "Пользовательские функции", 
    description: "Проверяет неравенство двух логических значений.", 
    syntax: "boolne(boolean, boolean)",
    arguments: [
      { name: "bool 1", description: "Первое значение.", example: "true" },
      { name: "bool 2", description: "Второе значение.", example: "false" }
    ],
    example: "SELECT boolne(true, false);" 
  },
  { 
    id: "pg_boolor_statefunc", 
    name: "boolor_statefunc", 
    category: "Пользовательские функции", 
    description: "Функция перехода для агрегата bool_or.", 
    syntax: "boolor_statefunc(boolean, boolean)",
    arguments: [
      { name: "state", description: "Текущее состояние.", example: "false" },
      { name: "next", description: "Следующее значение.", example: "true" }
    ],
    example: "SELECT boolor_statefunc(false, true);" 
  },
  { 
    id: "pg_boolout", 
    name: "boolout", 
    category: "Пользовательские функции", 
    description: "Функция вывода для типа boolean.", 
    syntax: "boolout(boolean)",
    arguments: [{ name: "boolean", description: "Логическое значение.", example: "true" }],
    example: "SELECT boolout(true);" 
  },
  { 
    id: "pg_boolrecv", 
    name: "boolrecv", 
    category: "Пользовательские функции", 
    description: "Функция приема двоичных данных для типа boolean.", 
    syntax: "boolrecv(internal)",
    arguments: [{ name: "internal", description: "Внутренний буфер.", example: "buf" }],
    example: "-- Используется внутренне" 
  },
  { 
    id: "pg_boolsend", 
    name: "boolsend", 
    category: "Пользовательские функции", 
    description: "Функция отправки двоичных данных для типа boolean.", 
    syntax: "boolsend(boolean)",
    arguments: [{ name: "boolean", description: "Логическое значение.", example: "true" }],
    example: "SELECT boolsend(true);" 
  },
  { 
    id: "pg_bound_box", 
    name: "bound_box", 
    category: "Пользовательские функции", 
    description: "Возвращает ограничивающий прямоугольник (bounding box) для двух прямоугольников.", 
    syntax: "bound_box(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(0,0),(1,1)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(2,2),(3,3)'" }
    ],
    example: "SELECT bound_box(box '(0,0),(1,1)', box '(2,2),(3,3)');" 
  },
  { 
    id: "pg_box_circle", 
    name: "box", 
    category: "Пользовательские функции", 
    description: "Преобразует круг в ограничивающий прямоугольник.", 
    syntax: "box(circle)",
    arguments: [{ name: "circle", description: "Круг.", example: "circle '<(0,0),1>'" }],
    example: "SELECT box(circle '<(0,0),1>');" 
  },
  { 
    id: "pg_box_point", 
    name: "box", 
    category: "Пользовательские функции", 
    description: "Создает пустой прямоугольник из одной точки.", 
    syntax: "box(point)",
    arguments: [{ name: "point", description: "Точка.", example: "point '(1,1)'" }],
    example: "SELECT box(point '(1,1)');" 
  },
  { 
    id: "pg_box_polygon", 
    name: "box", 
    category: "Пользовательские функции", 
    description: "Возвращает ограничивающий прямоугольник для многоугольника.", 
    syntax: "box(polygon)",
    arguments: [{ name: "polygon", description: "Многоугольник.", example: "polygon '((0,0),(1,1),(1,0))'" }],
    example: "SELECT box(polygon '((0,0),(1,1),(1,0))');" 
  },
  { 
    id: "pg_box_points", 
    name: "box", 
    category: "Пользовательские функции", 
    description: "Создает прямоугольник по двум точкам (противоположные углы).", 
    syntax: "box(point, point)",
    arguments: [
      { name: "point 1", description: "Первый угол.", example: "point '(0,0)'" },
      { name: "point 2", description: "Второй угол.", example: "point '(1,1)'" }
    ],
    example: "SELECT box(point '(0,0)', point '(1,1)');" 
  },
  { 
    id: "pg_box_above", 
    name: "box_above", 
    category: "Пользовательские функции", 
    description: "Проверяет, находится ли первый прямоугольник строго выше второго.", 
    syntax: "box_above(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(0,2),(1,3)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(0,0),(1,1)'" }
    ],
    example: "SELECT box_above(box '(0,2),(1,3)', box '(0,0),(1,1)');" 
  },
  { 
    id: "pg_box_above_eq", 
    name: "box_above_eq", 
    category: "Пользовательские функции", 
    description: "Проверяет, находится ли первый прямоугольник выше или на одном уровне со вторым.", 
    syntax: "box_above_eq(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(0,1),(1,2)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(0,0),(1,1)'" }
    ],
    example: "SELECT box_above_eq(box '(0,1),(1,2)', box '(0,0),(1,1)');" 
  },
  { 
    id: "pg_box_add", 
    name: "box_add", 
    category: "Пользовательские функции", 
    description: "Сдвигает прямоугольник на вектор, заданный точкой.", 
    syntax: "box_add(box, point)",
    arguments: [
      { name: "box", description: "Прямоугольник.", example: "box '(0,0),(1,1)'" },
      { name: "point", description: "Вектор сдвига.", example: "point '(1,1)'" }
    ],
    example: "SELECT box_add(box '(0,0),(1,1)', point '(1,1)');" 
  },
  { 
    id: "pg_box_below", 
    name: "box_below", 
    category: "Пользовательские функции", 
    description: "Проверяет, находится ли первый прямоугольник строго ниже второго.", 
    syntax: "box_below(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(0,0),(1,1)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(0,2),(1,3)'" }
    ],
    example: "SELECT box_below(box '(0,0),(1,1)', box '(0,2),(1,3)');" 
  },
  { 
    id: "pg_box_below_eq", 
    name: "box_below_eq", 
    category: "Пользовательские функции", 
    description: "Проверяет, находится ли первый прямоугольник ниже или на одном уровне со вторым.", 
    syntax: "box_below_eq(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(0,0),(1,1)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(0,1),(1,2)'" }
    ],
    example: "SELECT box_below_eq(box '(0,0),(1,1)', box '(0,1),(1,2)');" 
  },
  { 
    id: "pg_box_center", 
    name: "box_center", 
    category: "Пользовательские функции", 
    description: "Возвращает центральную точку прямоугольника.", 
    syntax: "box_center(box)",
    arguments: [{ name: "box", description: "Прямоугольник.", example: "box '(0,0),(2,2)'" }],
    example: "SELECT box_center(box '(0,0),(2,2)');" 
  },
  { 
    id: "pg_box_contain", 
    name: "box_contain", 
    category: "Пользовательские функции", 
    description: "Проверяет, содержит ли первый прямоугольник второй.", 
    syntax: "box_contain(box, box)",
    arguments: [
      { name: "box 1", description: "Контейнер.", example: "box '(0,0),(3,3)'" },
      { name: "box 2", description: "Содержимое.", example: "box '(1,1),(2,2)'" }
    ],
    example: "SELECT box_contain(box '(0,0),(3,3)', box '(1,1),(2,2)');" 
  },
  { 
    id: "pg_box_contain_pt", 
    name: "box_contain_pt", 
    category: "Пользовательские функции", 
    description: "Проверяет, содержит ли прямоугольник указанную точку.", 
    syntax: "box_contain_pt(box, point)",
    arguments: [
      { name: "box", description: "Прямоугольник.", example: "box '(0,0),(2,2)'" },
      { name: "point", description: "Точка.", example: "point '(1,1)'" }
    ],
    example: "SELECT box_contain_pt(box '(0,0),(2,2)', point '(1,1)');" 
  },
  { 
    id: "pg_box_contained", 
    name: "box_contained", 
    category: "Пользовательские функции", 
    description: "Проверяет, содержится ли первый прямоугольник во втором.", 
    syntax: "box_contained(box, box)",
    arguments: [
      { name: "box 1", description: "Содержимое.", example: "box '(1,1),(2,2)'" },
      { name: "box 2", description: "Контейнер.", example: "box '(0,0),(3,3)'" }
    ],
    example: "SELECT box_contained(box '(1,1),(2,2)', box '(0,0),(3,3)');" 
  },
  { 
    id: "pg_box_distance", 
    name: "box_distance", 
    category: "Пользовательские функции", 
    description: "Вычисляет расстояние между ближайшими точками двух прямоугольников.", 
    syntax: "box_distance(box, box)",
    arguments: [
      { name: "box 1", description: "Первый прямоугольник.", example: "box '(0,0),(1,1)'" },
      { name: "box 2", description: "Второй прямоугольник.", example: "box '(2,2),(3,3)'" }
    ],
    example: "SELECT box_distance(box '(0,0),(1,1)', box '(2,2),(3,3)');" 
  },
  { 
    id: "pg_binary_upgrade_logical_slot_has_caught_up", 
    name: "binary_upgrade_logical_slot_has_caught_up", 
    category: "Пользовательские функции", 
    description: "Проверяет, догнал ли логический слот репликации текущее состояние при обновлении.", 
    syntax: "binary_upgrade_logical_slot_has_caught_up(name)",
    arguments: [
      { name: "name", description: "Имя слота репликации.", example: "name => 'my_slot'" }
    ],
    example: "SELECT binary_upgrade_logical_slot_has_caught_up('my_slot');" 
  },
  { 
    id: "pg_binary_upgrade_replorigin_advance", 
    name: "binary_upgrade_replorigin_advance", 
    category: "Пользовательские функции", 
    description: "Продвигает источник репликации до указанного LSN при обновлении.", 
    syntax: "binary_upgrade_replorigin_advance(text, pg_lsn)",
    arguments: [
      { name: "text", description: "Имя источника репликации.", example: "text => 'origin1'" },
      { name: "pg_lsn", description: "Номер позиции в логе (LSN).", example: "pg_lsn => '0/1624080'" }
    ],
    example: "SELECT binary_upgrade_replorigin_advance('origin1', '0/1624080'::pg_lsn);" 
  },
  { 
    id: "pg_binary_upgrade_set_missing_value", 
    name: "binary_upgrade_set_missing_value", 
    category: "Пользовательские функции", 
    description: "Устанавливает отсутствующее значение для колонки при бинарном обновлении.", 
    syntax: "binary_upgrade_set_missing_value(oid, text, text)",
    arguments: [
      { name: "oid", description: "OID таблицы.", example: "oid => 16384" },
      { name: "text (colname)", description: "Имя колонки.", example: "text => 'created_at'" },
      { name: "text (value)", description: "Значение в текстовом представлении.", example: "text => '2023-01-01'" }
    ],
    example: "SELECT binary_upgrade_set_missing_value(16384, 'created_at', '2023-01-01');" 
  },
  { 
    id: "pg_binary_upgrade_set_next_array_pg_type_oid", 
    name: "binary_upgrade_set_next_array_pg_type_oid", 
    category: "Пользовательские функции", 
    description: "Устанавливает OID для следующего создаваемого типа массива.", 
    syntax: "binary_upgrade_set_next_array_pg_type_oid(oid)",
    arguments: [{ name: "oid", description: "Предполагаемый OID.", example: "oid => 2500" }],
    example: "SELECT binary_upgrade_set_next_array_pg_type_oid(2500);" 
  },
  { 
    id: "pg_binary_upgrade_set_next_heap_pg_class_oid", 
    name: "binary_upgrade_set_next_heap_pg_class_oid", 
    category: "Пользовательские функции", 
    description: "Устанавливает OID для следующей создаваемой таблицы (heap).", 
    syntax: "binary_upgrade_set_next_heap_pg_class_oid(oid)",
    arguments: [{ name: "oid", description: "Предполагаемый OID.", example: "oid => 16384" }],
    example: "SELECT binary_upgrade_set_next_heap_pg_class_oid(16384);" 
  },
  { 
    id: "pg_binary_upgrade_set_next_heap_relfilenode", 
    name: "binary_upgrade_set_next_heap_relfilenode", 
    category: "Пользовательские функции", 
    description: "Устанавливает relfilenode для следующей создаваемой таблицы.", 
    syntax: "binary_upgrade_set_next_heap_relfilenode(oid)",
    arguments: [{ name: "oid", description: "Идентификатор файла отношения.", example: "oid => 16385" }],
    example: "SELECT binary_upgrade_set_next_heap_relfilenode(16385);" 
  },
  { 
    id: "pg_binary_upgrade_set_next_index_pg_class_oid", 
    name: "binary_upgrade_set_next_index_pg_class_oid", 
    category: "Пользовательские функции", 
    description: "Устанавливает OID для следующего создаваемого индекса.", 
    syntax: "binary_upgrade_set_next_index_pg_class_oid(oid)",
    arguments: [{ name: "oid", description: "Предполагаемый OID индекса.", example: "oid => 16386" }],
    example: "SELECT binary_upgrade_set_next_index_pg_class_oid(16386);" 
  },
  { 
    id: "pg_binary_upgrade_set_next_index_relfilenode", 
    name: "binary_upgrade_set_next_index_relfilenode", 
    category: "Пользовательские функции", 
    description: "Устанавливает relfilenode для следующего создаваемого индекса.", 
    syntax: "binary_upgrade_set_next_index_relfilenode(oid)",
    arguments: [{ name: "oid", description: "Идентификатор файла индекса.", example: "oid => 16387" }],
    example: "SELECT binary_upgrade_set_next_index_relfilenode(16387);" 
  },
  { 
    id: "pg_binary_upgrade_set_next_multirange_array_pg_type_oid", 
    name: "binary_upgrade_set_next_multirange_array_pg_type_oid", 
    category: "Пользовательские функции", 
    description: "Устанавливает OID для следующего типа массива мультидиапазонов.", 
    syntax: "binary_upgrade_set_next_multirange_array_pg_type_oid(oid)",
    arguments: [{ name: "oid", description: "Предполагаемый OID.", example: "oid => 2600" }],
    example: "SELECT binary_upgrade_set_next_multirange_array_pg_type_oid(2600);" 
  },
  { 
    id: "pg_binary_upgrade_set_next_multirange_pg_type_oid", 
    name: "binary_upgrade_set_next_multirange_pg_type_oid", 
    category: "Пользовательские функции", 
    description: "Устанавливает OID для следующего типа мультидиапазона.", 
    syntax: "binary_upgrade_set_next_multirange_pg_type_oid(oid)",
    arguments: [{ name: "oid", description: "Предполагаемый OID.", example: "oid => 2601" }],
    example: "SELECT binary_upgrade_set_next_multirange_pg_type_oid(2601);" 
  },
  { 
    id: "pg_binary_upgrade_set_next_pg_authid_oid", 
    name: "binary_upgrade_set_next_pg_authid_oid", 
    category: "Пользовательские функции", 
    description: "Устанавливает OID для следующей создаваемой роли (авторизации).", 
    syntax: "binary_upgrade_set_next_pg_authid_oid(oid)",
    arguments: [{ name: "oid", description: "Предполагаемый OID роли.", example: "oid => 16388" }],
    example: "SELECT binary_upgrade_set_next_pg_authid_oid(16388);" 
  },
  { 
    id: "pg_binary_upgrade_set_next_pg_enum_oid", 
    name: "binary_upgrade_set_next_pg_enum_oid", 
    category: "Пользовательские функции", 
    description: "Устанавливает OID для следующего значения перечисления (enum).", 
    syntax: "binary_upgrade_set_next_pg_enum_oid(oid)",
    arguments: [{ name: "oid", description: "Предполагаемый OID значения enum.", example: "oid => 16389" }],
    example: "SELECT binary_upgrade_set_next_pg_enum_oid(16389);" 
  },
  { 
    id: "pg_binary_upgrade_set_next_pg_tablespace_oid", 
    name: "binary_upgrade_set_next_pg_tablespace_oid", 
    category: "Пользовательские функции", 
    description: "Устанавливает OID для следующего создаваемого табличного пространства.", 
    syntax: "binary_upgrade_set_next_pg_tablespace_oid(oid)",
    arguments: [{ name: "oid", description: "Предполагаемый OID табличного пространства.", example: "oid => 16390" }],
    example: "SELECT binary_upgrade_set_next_pg_tablespace_oid(16390);" 
  },
  { 
    id: "pg_binary_upgrade_set_next_pg_type_oid", 
    name: "binary_upgrade_set_next_pg_type_oid", 
    category: "Пользовательские функции", 
    description: "Устанавливает OID для следующего создаваемого типа данных.", 
    syntax: "binary_upgrade_set_next_pg_type_oid(oid)",
    arguments: [{ name: "oid", description: "Предполагаемый OID типа.", example: "oid => 16391" }],
    example: "SELECT binary_upgrade_set_next_pg_type_oid(16391);" 
  },
  { 
    id: "pg_binary_upgrade_set_next_toast_pg_class_oid", 
    name: "binary_upgrade_set_next_toast_pg_class_oid", 
    category: "Пользовательские функции", 
    description: "Устанавливает OID для следующей создаваемой TOAST таблицы.", 
    syntax: "binary_upgrade_set_next_toast_pg_class_oid(oid)",
    arguments: [{ name: "oid", description: "Предполагаемый OID TOAST таблицы.", example: "oid => 16392" }],
    example: "SELECT binary_upgrade_set_next_toast_pg_class_oid(16392);" 
  },
  { 
    id: "pg_binary_upgrade_set_next_toast_relfilenode", 
    name: "binary_upgrade_set_next_toast_relfilenode", 
    category: "Пользовательские функции", 
    description: "Устанавливает relfilenode для следующей создаваемой TOAST таблицы.", 
    syntax: "binary_upgrade_set_next_toast_relfilenode(oid)",
    arguments: [{ name: "oid", description: "Идентификатор файла TOAST таблицы.", example: "oid => 16393" }],
    example: "SELECT binary_upgrade_set_next_toast_relfilenode(16393);" 
  },
  { 
    id: "pg_binary_upgrade_set_record_init_privs", 
    name: "binary_upgrade_set_record_init_privs", 
    category: "Пользовательские функции", 
    description: "Управляет записью начальных привилегий при бинарном обновлении.", 
    syntax: "binary_upgrade_set_record_init_privs(boolean)",
    arguments: [{ name: "boolean", description: "Включить или выключить запись.", example: "true" }],
    example: "SELECT binary_upgrade_set_record_init_privs(true);" 
  },
  { 
    id: "pg_bit_int", 
    name: "bit", 
    category: "Пользовательские функции", 
    description: "Преобразует целое число в битовую строку заданной длины.", 
    syntax: "bit(integer, integer)",
    arguments: [
      { name: "integer (value)", description: "Исходное целое число.", example: "42" },
      { name: "integer (length)", description: "Длина результирующей битовой строки.", example: "8" }
    ],
    example: "SELECT bit(42, 8);" 
  },
  { 
    id: "pg_bit_bigint", 
    name: "bit", 
    category: "Пользовательские функции", 
    description: "Преобразует большое целое число (bigint) в битовую строку заданной длины.", 
    syntax: "bit(bigint, integer)",
    arguments: [
      { name: "bigint (value)", description: "Исходное 64-битное целое число.", example: "1234567890::bigint" },
      { name: "integer (length)", description: "Длина битовой строки.", example: "32" }
    ],
    example: "SELECT bit(1234567890::bigint, 32);" 
  },
  { 
    id: "pg_bit_transform", 
    name: "bit", 
    category: "Пользовательские функции", 
    description: "Трансформирует битовую строку к новой длине.", 
    syntax: "bit(bit, integer, boolean)",
    arguments: [
      { name: "bit", description: "Исходная битовая строка.", example: "B'101010'" },
      { name: "integer", description: "Новая длина.", example: "10" },
      { name: "boolean", description: "Флаг явного приведения.", example: "true" }
    ],
    example: "SELECT bit(B'101010', 10, true);" 
  },
  { 
    id: "pg_ri_fkey_cascade_del", 
    name: "RI_FKey_cascade_del", 
    category: "Пользовательские функции", 
    description: "Внутренняя триггерная функция для реализации каскадного удаления по внешнему ключу.", 
    syntax: "RI_FKey_cascade_del()",
    arguments: [],
    example: "-- Используется внутренне триггерами" 
  },
  { 
    id: "pg_ri_fkey_cascade_upd", 
    name: "RI_FKey_cascade_upd", 
    category: "Пользовательские функции", 
    description: "Внутренняя триггерная функция для реализации каскадного обновления по внешнему ключу.", 
    syntax: "RI_FKey_cascade_upd()",
    arguments: [],
    example: "-- Используется внутренне триггерами" 
  },
  { 
    id: "pg_ri_fkey_check_ins", 
    name: "RI_FKey_check_ins", 
    category: "Пользовательские функции", 
    description: "Внутренняя триггерная функция для проверки внешнего ключа при вставке.", 
    syntax: "RI_FKey_check_ins()",
    arguments: [],
    example: "-- Используется внутренне триггерами" 
  },
  { 
    id: "pg_ri_fkey_check_upd", 
    name: "RI_FKey_check_upd", 
    category: "Пользовательские функции", 
    description: "Внутренняя триггерная функция для проверки внешнего ключа при обновлении.", 
    syntax: "RI_FKey_check_upd()",
    arguments: [],
    example: "-- Используется внутренне триггерами" 
  },
  { 
    id: "pg_ri_fkey_noaction_del", 
    name: "RI_FKey_noaction_del", 
    category: "Пользовательские функции", 
    description: "Внутренняя триггерная функция для реализации действия NO ACTION при удалении.", 
    syntax: "RI_FKey_noaction_del()",
    arguments: [],
    example: "-- Используется внутренне триггерами" 
  },
  { 
    id: "pg_ri_fkey_noaction_upd", 
    name: "RI_FKey_noaction_upd", 
    category: "Пользовательские функции", 
    description: "Внутренняя триггерная функция для реализации действия NO ACTION при обновлении.", 
    syntax: "RI_FKey_noaction_upd()",
    arguments: [],
    example: "-- Используется внутренне триггерами" 
  },
  { 
    id: "pg_ri_fkey_restrict_del", 
    name: "RI_FKey_restrict_del", 
    category: "Пользовательские функции", 
    description: "Внутренняя триггерная функция для реализации действия RESTRICT при удалении.", 
    syntax: "RI_FKey_restrict_del()",
    arguments: [],
    example: "-- Используется внутренне триггерами" 
  },
  { 
    id: "pg_ri_fkey_restrict_upd", 
    name: "RI_FKey_restrict_upd", 
    category: "Пользовательские функции", 
    description: "Внутренняя триггерная функция для реализации действия RESTRICT при обновлении.", 
    syntax: "RI_FKey_restrict_upd()",
    arguments: [],
    example: "-- Используется внутренне триггерами" 
  },
  { 
    id: "pg_ri_fkey_setdefault_del", 
    name: "RI_FKey_setdefault_del", 
    category: "Пользовательские функции", 
    description: "Внутренняя триггерная функция для реализации действия SET DEFAULT при удалении.", 
    syntax: "RI_FKey_setdefault_del()",
    arguments: [],
    example: "-- Используется внутренне триггерами" 
  },
  { 
    id: "pg_ri_fkey_setdefault_upd", 
    name: "RI_FKey_setdefault_upd", 
    category: "Пользовательские функции", 
    description: "Внутренняя триггерная функция для реализации действия SET DEFAULT при обновлении.", 
    syntax: "RI_FKey_setdefault_upd()",
    arguments: [],
    example: "-- Используется внутренне триггерами" 
  },
  { 
    id: "pg_ri_fkey_setnull_del", 
    name: "RI_FKey_setnull_del", 
    category: "Пользовательские функции", 
    description: "Внутренняя триггерная функция для реализации действия SET NULL при удалении.", 
    syntax: "RI_FKey_setnull_del()",
    arguments: [],
    example: "-- Используется внутренне триггерами" 
  },
  { 
    id: "pg_ri_fkey_setnull_upd", 
    name: "RI_FKey_setnull_upd", 
    category: "Пользовательские функции", 
    description: "Внутренняя триггерная функция для реализации действия SET NULL при обновлении.", 
    syntax: "RI_FKey_setnull_upd()",
    arguments: [],
    example: "-- Используется внутренне триггерами" 
  },
  { 
    id: "pg_char_max_length", 
    name: "_pg_char_max_length", 
    category: "Пользовательские функции", 
    description: "Возвращает максимальную длину для символьного типа данных.", 
    syntax: "_pg_char_max_length(typid oid, typmod integer)",
    arguments: [
      { name: "typid", description: "OID типа данных.", example: "typid => 1043" },
      { name: "typmod", description: "Модификатор типа.", example: "typmod => 10" }
    ],
    example: "SELECT _pg_char_max_length(1043, 10);" 
  },
  { 
    id: "pg_char_octet_length", 
    name: "_pg_char_octet_length", 
    category: "Пользовательские функции", 
    description: "Возвращает максимальную длину в октетах (байтах) для символьного типа данных.", 
    syntax: "_pg_char_octet_length(typid oid, typmod integer)",
    arguments: [
      { name: "typid", description: "OID типа данных.", example: "typid => 1043" },
      { name: "typmod", description: "Модификатор типа.", example: "typmod => 10" }
    ],
    example: "SELECT _pg_char_octet_length(1043, 10);" 
  },
  { 
    id: "pg_datetime_precision", 
    name: "_pg_datetime_precision", 
    category: "Пользовательские функции", 
    description: "Возвращает точность для типов даты и времени.", 
    syntax: "_pg_datetime_precision(typid oid, typmod integer)",
    arguments: [
      { name: "typid", description: "OID типа данных.", example: "typid => 1114" },
      { name: "typmod", description: "Модификатор типа.", example: "typmod => 6" }
    ],
    example: "SELECT _pg_datetime_precision(1114, 6);" 
  },
  { 
    id: "pg_expandarray", 
    name: "_pg_expandarray", 
    category: "Пользовательские функции", 
    description: "Разворачивает массив в набор строк с индексами.", 
    syntax: "_pg_expandarray(anyarray, OUT x anyelement, OUT n integer)",
    arguments: [
      { name: "anyarray", description: "Входной массив любого типа.", example: "ARRAY[1,2,3]" },
      { name: "x", description: "Выходной параметр: значение элемента.", example: "OUT x => 1" },
      { name: "n", description: "Выходной параметр: индекс элемента.", example: "OUT n => 1" }
    ],
    example: "SELECT * FROM _pg_expandarray(ARRAY['a', 'b']);" 
  },
  { 
    id: "pg_index_position", 
    name: "_pg_index_position", 
    category: "Пользовательские функции", 
    description: "Возвращает позицию колонки в индексе.", 
    syntax: "_pg_index_position(oid, smallint)",
    arguments: [
      { name: "oid", description: "OID индекса.", example: "oid => 16385" },
      { name: "smallint", description: "Номер атрибута.", example: "attnum => 1" }
    ],
    example: "SELECT _pg_index_position(16385, 1);" 
  },
  { 
    id: "pg_interval_type", 
    name: "_pg_interval_type", 
    category: "Пользовательские функции", 
    description: "Возвращает тип интервала на основе модификатора.", 
    syntax: "_pg_interval_type(typid oid, mod integer)",
    arguments: [
      { name: "typid", description: "OID типа интервала.", example: "typid => 1186" },
      { name: "mod", description: "Модификатор интервала.", example: "mod => 32767" }
    ],
    example: "SELECT _pg_interval_type(1186, 32767);" 
  },
  { 
    id: "pg_numeric_precision", 
    name: "_pg_numeric_precision", 
    category: "Пользовательские функции", 
    description: "Возвращает точность (precision) для числового типа данных.", 
    syntax: "_pg_numeric_precision(typid oid, typmod integer)",
    arguments: [
      { name: "typid", description: "OID типа данных.", example: "typid => 1700" },
      { name: "typmod", description: "Модификатор типа.", example: "typmod => 655364" }
    ],
    example: "SELECT _pg_numeric_precision(1700, 655364);" 
  },
  { 
    id: "pg_numeric_precision_radix", 
    name: "_pg_numeric_precision_radix", 
    category: "Пользовательские функции", 
    description: "Возвращает основание системы счисления точности для числового типа.", 
    syntax: "_pg_numeric_precision_radix(typid oid, typmod integer)",
    arguments: [
      { name: "typid", description: "OID типа данных.", example: "typid => 1700" },
      { name: "typmod", description: "Модификатор типа.", example: "typmod => 655364" }
    ],
    example: "SELECT _pg_numeric_precision_radix(1700, 655364);" 
  },
  { 
    id: "pg_numeric_scale", 
    name: "_pg_numeric_scale", 
    category: "Пользовательские функции", 
    description: "Возвращает масштаб (scale) для числового типа данных.", 
    syntax: "_pg_numeric_scale(typid oid, typmod integer)",
    arguments: [
      { name: "typid", description: "OID типа данных.", example: "typid => 1700" },
      { name: "typmod", description: "Модификатор типа.", example: "typmod => 655364" }
    ],
    example: "SELECT _pg_numeric_scale(1700, 655364);" 
  },
  { 
    id: "pg_truetypid", 
    name: "_pg_truetypid", 
    category: "Пользовательские функции", 
    description: "Возвращает истинный OID типа данных с учетом доменов.", 
    syntax: "_pg_truetypid(pg_attribute, pg_type)",
    arguments: [
      { name: "pg_attribute", description: "Запись из системного каталога pg_attribute.", example: "attr" },
      { name: "pg_type", description: "Запись из системного каталога pg_type.", example: "typ" }
    ],
    example: "SELECT _pg_truetypid(a, t) FROM pg_attribute a, pg_type t WHERE ...;" 
  },
  { 
    id: "pg_truetypmod", 
    name: "_pg_truetypmod", 
    category: "Пользовательские функции", 
    description: "Возвращает истинный модификатор типа с учетом доменов.", 
    syntax: "_pg_truetypmod(pg_attribute, pg_type)",
    arguments: [
      { name: "pg_attribute", description: "Запись из системного каталога pg_attribute.", example: "attr" },
      { name: "pg_type", description: "Запись из системного каталога pg_type.", example: "typ" }
    ],
    example: "SELECT _pg_truetypmod(a, t) FROM pg_attribute a, pg_type t WHERE ...;" 
  },
  { 
    id: "pg_abbrev_cidr", 
    name: "abbrev", 
    category: "Пользовательские функции", 
    description: "Возвращает сокращенное текстовое представление для типа cidr.", 
    syntax: "abbrev(cidr)",
    arguments: [{ name: "cidr", description: "Сеть в формате CIDR.", example: "'10.1.0.0/16'::cidr" }],
    example: "SELECT abbrev('10.1.0.0/16'::cidr);" 
  },
  { 
    id: "pg_abbrev_inet", 
    name: "abbrev", 
    category: "Пользовательские функции", 
    description: "Возвращает сокращенное текстовое представление для типа inet.", 
    syntax: "abbrev(inet)",
    arguments: [{ name: "inet", description: "IP-адрес или сеть.", example: "'192.168.1.1/24'::inet" }],
    example: "SELECT abbrev('192.168.1.1/24'::inet);" 
  },
  { 
    id: "pg_abs_int", 
    name: "abs", 
    category: "Пользовательские функции", 
    description: "Возвращает абсолютное значение целого числа.", 
    syntax: "abs(integer)",
    arguments: [{ name: "integer", description: "Целое число.", example: "-42" }],
    example: "SELECT abs(-42);" 
  }
];
