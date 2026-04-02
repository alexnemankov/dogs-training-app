export const plannerLanguages = ["en","pl","ru"];

export const plannerFilters = ["all","today","upcoming","done"];

export const plannerUiText = {
  "en": {
    "appTitle": "Dog Ethology & Behavior",
    "appSubtitle": "Curriculum plan · 114 lessons",
    "progress": "Progress",
    "searchPlaceholder": "Search topics...",
    "filters": {
      "all": "All",
      "today": "Today",
      "upcoming": "Upcoming",
      "done": "Done"
    },
    "todayButton": "Today",
    "currentLesson": "Lesson",
    "from": "of",
    "todayBadge": "Today",
    "keyTopics": "Key lesson topics",
    "complete": "Mark as completed",
    "completed": "Completed",
    "next": "Next",
    "empty": "No lessons match the current search and filter.",
    "language": "Language"
  },
  "pl": {
    "appTitle": "Kynologia i Behawiorystyka",
    "appSubtitle": "Plan nauki · 114 lekcji",
    "progress": "Postep",
    "searchPlaceholder": "Szukaj tematow...",
    "filters": {
      "all": "Wszystkie",
      "today": "Dzis",
      "upcoming": "Dalej",
      "done": "Ukonczone"
    },
    "todayButton": "Dzis",
    "currentLesson": "Lekcja",
    "from": "z",
    "todayBadge": "Dzis",
    "keyTopics": "Kluczowe tematy lekcji",
    "complete": "Oznacz jako ukonczone",
    "completed": "Ukonczone",
    "next": "Nastepna",
    "empty": "Brak lekcji pasujacych do biezacego wyszukiwania i filtra.",
    "language": "Jezyk"
  },
  "ru": {
    "appTitle": "Кинология и Бихевиористика",
    "appSubtitle": "Учебный план · 114 занятий",
    "progress": "Прогресс",
    "searchPlaceholder": "Поиск по темам...",
    "filters": {
      "all": "Все",
      "today": "Сегодня",
      "upcoming": "Впереди",
      "done": "Пройдено"
    },
    "todayButton": "Сегодня",
    "currentLesson": "Занятие",
    "from": "из",
    "todayBadge": "Сегодня",
    "keyTopics": "Ключевые темы занятия",
    "complete": "Отметить как пройденное",
    "completed": "Пройдено",
    "next": "Далее",
    "empty": "Нет занятий, подходящих под текущий поиск и фильтр.",
    "language": "Язык"
  }
};

export const courseData = {
  "startDate": "2026-04-02",
  "modules": [
    {
      "id": "behavior",
      "translations": {
        "en": {
          "label": "Behavior",
          "summary": "Behavior science, observation, communication, stress, and problem analysis."
        },
        "pl": {
          "label": "Zachowanie",
          "summary": "Nauka o zachowaniu, obserwacja, komunikacja, stres i analiza problemow."
        },
        "ru": {
          "label": "Поведение",
          "summary": "Поведение"
        }
      },
      "lessons": [
        {
          "id": "behavior-001",
          "translations": {
            "en": {
              "title": "Basics of working with behavior. Course organization",
              "summary": "Introduction to the course: learning objectives, program structure, key principles of working with dog behavior.",
              "outcomes": [
                "What is behavior from a scientific point of view",
                "How the course program is structured",
                "Goals and expected results",
                "Key concepts of cynology and behavior science"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Podstawy pracy z zachowaniem. Organizacja kursu",
              "summary": "Wprowadzenie do kursu: cele nauczania, struktura programu, najważniejsze zasady pracy z zachowaniem psa.",
              "outcomes": [
                "Czym jest zachowanie z naukowego punktu widzenia",
                "Jak zbudowany jest program kursu",
                "Cele i oczekiwane rezultaty",
                "Kluczowe pojęcia kynologii i nauk behawioralnych"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Основы работы с поведением. Организация курса",
              "summary": "Введение в курс: цели обучения, структура программы, ключевые принципы работы с поведением собак.",
              "outcomes": [
                "Что такое поведение с научной точки зрения",
                "Как устроена программа курса",
                "Цели и ожидаемые результаты",
                "Ключевые понятия кинологии и бихевиористики"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-002",
          "translations": {
            "en": {
              "title": "Origin of dogs, features of evolution",
              "summary": "How wolves became dogs, the key stages of domestication, what distinguishes a dog from other canids.",
              "outcomes": [
                "Theories of the origin of dogs from wolves",
                "Stages of domestication and their consequences",
                "Differences between Canis lupus familiaris and other canids",
                "How evolution shaped behavioral traits"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Pochodzenie psów, cechy ewolucji",
              "summary": "Jak wilki stały się psami, najważniejsze etapy udomowienia, co odróżnia psa od innych psowatych.",
              "outcomes": [
                "Teorie pochodzenia psów od wilków",
                "Etapy udomowienia i ich konsekwencje",
                "Różnice między Canis lupus familis a innymi psowatymi",
                "Jak ewolucja ukształtowała cechy behawioralne"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Происхождение собак, особенности эволюции",
              "summary": "Как волки стали собаками, ключевые этапы доместикации, что отличает собаку от других псовых.",
              "outcomes": [
                "Теории происхождения собак от волка",
                "Этапы доместикации и их последствия",
                "Отличия Canis lupus familiaris от других псовых",
                "Как эволюция сформировала поведенческие черты"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-003",
          "translations": {
            "en": {
              "title": "The role of a dog in a human family",
              "summary": "Functions of a dog in a modern family, expectations of owners vs. needs of a dog, partnerships.",
              "outcomes": [
                "Historical and modern functions of the dog",
                "Owners' expectations and reality",
                "How to build partnerships",
                "Mutual affection: a scientific view"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Rola psa w rodzinie ludzkiej",
              "summary": "Funkcje psa we współczesnej rodzinie, oczekiwania właścicieli a potrzeby psa, partnerstwo.",
              "outcomes": [
                "Historyczne i współczesne funkcje psa",
                "Oczekiwania właścicieli a rzeczywistość",
                "Jak budować partnerstwa",
                "Wzajemne uczucie: pogląd naukowy"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Роль собаки в семье человека",
              "summary": "Функции собаки в современной семье, ожидания владельцев vs потребности собаки, партнёрские отношения.",
              "outcomes": [
                "Исторические и современные функции собаки",
                "Ожидания владельцев и реальность",
                "Как строить партнёрские отношения",
                "Взаимная привязанность: научный взгляд"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-004",
          "translations": {
            "en": {
              "title": "Hierarchy: myths and modern knowledge",
              "summary": "Analysis of the theory of dominance, why the “leader of the pack” is an outdated myth, a modern view of the dog-human relationship.",
              "outcomes": [
                "History of dominance theory and its criticism",
                "Fur Research: Why Pack ≠ Hierarchy",
                "A modern view of the human-dog relationship",
                "Practical consequences of giving up dominance"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Hierarchia: mity i wiedza współczesna",
              "summary": "Analiza teorii dominacji, dlaczego „przywódca stada” to przestarzały mit, współczesne spojrzenie na relację pies-człowiek.",
              "outcomes": [
                "Historia teorii dominacji i jej krytyka",
                "Badania nad futrami: dlaczego opakowanie ≠ Hierarchia",
                "Współczesne spojrzenie na relację człowiek-pies",
                "Praktyczne konsekwencje rezygnacji z dominacji"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Иерархия: мифы и современные знания",
              "summary": "Разбор теории доминирования, почему «вожак стаи» — устаревший миф, современный взгляд на отношения собака–человек.",
              "outcomes": [
                "История теории доминирования и её критика",
                "Исследования Меха: почему стая ≠ иерархия",
                "Современный взгляд на отношения человек–собака",
                "Практические последствия отказа от доминирования"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-005",
          "translations": {
            "en": {
              "title": "Dog Cognitive Abilities",
              "summary": "Memory, problem solving, social cognition, understanding human gestures and emotions.",
              "outcomes": [
                "Working and long-term memory in dogs",
                "Problem solving and insight",
                "Understanding human gestures and gaze",
                "Social Cognition: Research and Findings"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Zdolności poznawcze psa",
              "summary": "Pamięć, rozwiązywanie problemów, poznanie społeczne, rozumienie ludzkich gestów i emocji.",
              "outcomes": [
                "Pamięć robocza i długotrwała u psów",
                "Rozwiązywanie problemów i wgląd",
                "Rozumienie ludzkich gestów i spojrzeń",
                "Poznanie społeczne: badania i ustalenia"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Когнитивные способности собак",
              "summary": "Память, решение задач, социальное познание, понимание жестов и эмоций человека.",
              "outcomes": [
                "Рабочая и долгосрочная память собак",
                "Решение задач и инсайт",
                "Понимание жестов и взгляда человека",
                "Социальные когниции: исследования и выводы"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-006",
          "translations": {
            "en": {
              "title": "Breeds: characteristics and needs",
              "summary": "Classification of breeds, how breeding formed behavioral traits, genetically determined patterns.",
              "outcomes": [
                "Classification by job function",
                "Behavioral genetics: what is inherited",
                "Needs of different breed groups",
                "Mismatch between expectations and breed needs"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Rasy: cechy i potrzeby",
              "summary": "Klasyfikacja ras, jak hodowla kształtuje cechy behawioralne, wzorce zdeterminowane genetycznie.",
              "outcomes": [
                "Klasyfikacja według funkcji zawodowej",
                "Genetyka behawioralna: co jest dziedziczone",
                "Potrzeby różnych grup rasowych",
                "Niedopasowanie oczekiwań i potrzeb rasy"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Породы: особенности и потребности",
              "summary": "Классификация пород, как разведение сформировало поведенческие черты, генетически заложенные паттерны.",
              "outcomes": [
                "Классификация по рабочим функциям",
                "Генетика поведения: что наследуется",
                "Потребности разных породных групп",
                "Несоответствие ожиданий и породных потребностей"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-007",
          "translations": {
            "en": {
              "title": "Rock analysis",
              "summary": "Algorithm for studying the breed for a consultant: history, work functions, typical problems, needs.",
              "outcomes": [
                "Analysis algorithm: 5 steps",
                "History of creation and operating functions",
                "Typical Breed Behavior Problems",
                "Formation of recommendations taking into account the breed"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Analiza skał",
              "summary": "Algorytm badania rasy dla konsultanta: historia, funkcje pracy, typowe problemy, potrzeby.",
              "outcomes": [
                "Algorytm analizy: 5 kroków",
                "Historia powstania i funkcje operacyjne",
                "Typowe problemy z zachowaniem rasy",
                "Tworzenie zaleceń z uwzględnieniem rasy"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Анализ породы",
              "summary": "Алгоритм изучения породы для консультанта: история, рабочие функции, типичные проблемы, потребности.",
              "outcomes": [
                "Алгоритм анализа: 5 шагов",
                "История создания и рабочие функции",
                "Типичные поведенческие проблемы породы",
                "Формирование рекомендаций с учётом породы"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-008",
          "translations": {
            "en": {
              "title": "Dog emotions",
              "summary": "Basic and complex emotions in dogs, scientific evidence about sensory life, how to recognize emotional states.",
              "outcomes": [
                "Basic emotions according to Panksepp",
                "Are dogs conscious?",
                "Neurobiological markers of emotions",
                "How to recognize joy, fear, frustration"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Psie emocje",
              "summary": "Podstawowe i złożone emocje u psów, dowody naukowe na temat życia zmysłowego, rozpoznawanie stanów emocjonalnych.",
              "outcomes": [
                "Podstawowe emocje według Pankseppa",
                "Czy psy s\u0005 [wiadome?",
                "Neurobiologiczne markery emocji",
                "Jak rozpoznać radość, strach, frustrację"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Эмоции собак",
              "summary": "Базовые и сложные эмоции у собак, научные данные о чувственной жизни, как распознавать эмоциональные состояния.",
              "outcomes": [
                "Базовые эмоции по Панксеппу",
                "/2;ONBAO ;8 A>10:8 A>7=0B5;L=K<8?",
                "Нейробиологические маркеры эмоций",
                "Как распознать радость, страх, фрустрацию"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-009",
          "translations": {
            "en": {
              "title": "Dog communication. Rules of interaction",
              "summary": "How dogs communicate with each other: distance, rituals, rules of meeting and conflict resolution.",
              "outcomes": [
                "Comfort zones and personal space",
                "Greeting rituals between dogs",
                "Rules for resolving conflicts",
                "When communication turns into conflict"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Komunikacja psa. Zasady interakcji",
              "summary": "Jak psy komunikują się ze sobą: odległość, rytuały, zasady spotykania się i rozwiązywanie konfliktów.",
              "outcomes": [
                "Strefy komfortu i przestrzeń osobista",
                "Rytuały powitalne między psami",
                "Zasady rozwiązywania konfliktów",
                "Kiedy komunikacja zamienia się w konflikt"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Коммуникация собак. Правила взаимодействия",
              "summary": "Как собаки общаются между собой: дистанция, ритуалы, правила встречи и разрешения конфликтов.",
              "outcomes": [
                "Зоны комфорта и личное пространство",
                "Ритуалы приветствия между собаками",
                "Правила разрешения конфликтов",
                "Когда общение переходит в конфликт"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-010",
          "translations": {
            "en": {
              "title": "Body language in communication with relatives and people",
              "summary": "Postures, movements, facial expressions - what they mean, how to read body language in different contexts.",
              "outcomes": [
                "Body postures: submission, confidence, tension",
                "Signals of tail, ears, fur",
                "Facial expressions: glance, grin, relaxation",
                "Context as a Key to Interpretation"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Język ciała w komunikacji z bliskimi i ludźmi",
              "summary": "Postawy, ruchy, mimika - co oznaczają, jak czytać mowę ciała w różnych kontekstach.",
              "outcomes": [
                "Postawy ciała: uległość, pewność siebie, napięcie",
                "Sygnały ogona, uszu, futra",
                "Wyraz twarzy: spojrzenie, uśmiech, relaks",
                "Kontekst jako klucz do interpretacji"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Язык тела в общении с сородичами и человеком",
              "summary": "Позы, движения, мимика — что они означают, как читать язык тела в разных контекстах.",
              "outcomes": [
                "Позы тела: подчинение, уверенность, напряжение",
                "Сигналы хвоста, ушей, шерсти",
                "Мимика: взгляд, оскал, расслабление",
                "Контекст как ключ к интерпретации"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-011",
          "translations": {
            "en": {
              "title": "Signals of reconciliation. Building a contact",
              "summary": "Calming signals by Turid Rugos, how to properly approach a strange dog, communication norms.",
              "outcomes": [
                "25 signals of reconciliation according to Rugos",
                "How and why a dog “talks” to a person",
                "Rules for approaching someone else's dog",
                "Mistakes people make when meeting a dog"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Sygnały pojednania. Budowanie kontaktu",
              "summary": "Sygnały uspokajające Turid Rugos, jak prawidłowo podejść do obcego psa, normy komunikacji.",
              "outcomes": [
                "25 sygnałów pojednania według Rugosa",
                "Jak i dlaczego pies „rozmawia” z człowiekiem",
                "Zasady zbliżania się do cudzego psa",
                "Błędy, które ludzie popełniają podczas spotkania z psem"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Сигналы примирения. Построение контакта",
              "summary": "Calming signals по Тюрид Ругос, как правильно подходить к чужой собаке, нормы общения.",
              "outcomes": [
                "25 сигналов примирения по Ругос",
                "Как и зачем собака «говорит» человеку",
                "Правила подхода к чужой собаке",
                "Ошибки людей при знакомстве с собакой"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-012",
          "translations": {
            "en": {
              "title": "Barking: types and meaning. Bites: causes and types",
              "summary": "Classification of barking by function, gradation of bites, warning signals before a bite.",
              "outcomes": [
                "Types of barks and their communicative function",
                "Ladder of Aggression by Kendell Shepard",
                "Gradations of bites according to Ian Dunbar",
                "Warning Signs People Ignore"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Szczekanie: rodzaje i znaczenie. Ukąszenia: przyczyny i rodzaje",
              "summary": "Klasyfikacja szczekania ze względu na funkcję, gradację ukąszeń, sygnały ostrzegawcze przed ugryzieniem.",
              "outcomes": [
                "Rodzaje szczekania i ich funkcja komunikacyjna",
                "Drabina agresji Kendell Shepard",
                "Stopniowanie ukąszeń według Iana Dunbara",
                "Znaki ostrzegawcze, które ludzie ignorują"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Лай: виды и значение. Укусы: причины и виды",
              "summary": "Классификация лая по функции, градации укусов, предупреждающие сигналы перед укусом.",
              "outcomes": [
                "Типы лая и их коммуникативная функция",
                "Лестница агрессии по Кенделл Шепард",
                "Градации укусов по Яну Данбару",
                "Предупреждающие сигналы, которые люди игнорируют"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-013",
          "translations": {
            "en": {
              "title": "Observation as a tool of work",
              "summary": "How to systematically observe a dog: what to record, how to interpret behavior without speculation.",
              "outcomes": [
                "Ethology vs anthropomorphism",
                "What and how to record during observation",
                "ABC analysis: antecedent, behavior, consequence",
                "Observation diary: form and examples"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Obserwacja jako narzędzie pracy",
              "summary": "Jak systematycznie obserwować psa: co rejestrować, jak interpretować zachowanie bez spekulacji.",
              "outcomes": [
                "Etologia a antropomorfizm",
                "Co i jak rejestrować podczas obserwacji",
                "Analiza ABC: poprzednik, zachowanie, konsekwencja",
                "Dziennik obserwacji: forma i przykłady"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Наблюдение как инструмент работы",
              "summary": "Как системно наблюдать за собакой: что фиксировать, как интерпретировать поведение без домыслов.",
              "outcomes": [
                "Этология vs антропоморфизм",
                "Что и как фиксировать при наблюдении",
                "ABC-анализ: антецедент, поведение, последствие",
                "Дневник наблюдений: форма и примеры"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-014",
          "translations": {
            "en": {
              "title": "Algorithm for working with dog behavior",
              "summary": "Analysis of lifestyle and stress level, history taking, structure of recommendations for the client.",
              "outcomes": [
                "History taking: key questions",
                "Assessing stress levels and quality of life",
                "Building a work plan",
                "Consultation structure and documentation"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Algorytm pracy z zachowaniem psa",
              "summary": "Analiza stylu życia i poziomu stresu, wywiad, struktura rekomendacji dla klienta.",
              "outcomes": [
                "Historia: pytania kluczowe",
                "Ocena poziomu stresu i jakości życia",
                "Budowanie planu pracy",
                "Struktura konsultacji i dokumentacja"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Алгоритм работы с поведением собаки",
              "summary": "Анализ образа жизни и уровня стресса, сбор анамнеза, структура рекомендаций для клиента.",
              "outcomes": [
                "Сбор анамнеза: ключевые вопросы",
                "Оценка уровня стресса и качества жизни",
                "Построение плана работы",
                "Структура консультации и документация"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-015",
          "translations": {
            "en": {
              "title": "Adaptation of a dog in a new home",
              "summary": "Stages of adaptation, typical mistakes in the first weeks, how to help your dog settle in without stress.",
              "outcomes": [
                "The 3-3-3 rule for new dogs",
                "What happens in the nervous system when moving",
                "Typical mistakes of the first days",
                "Organization of space and regime"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Adaptacja psa w nowym domu",
              "summary": "Etapy adaptacji, typowe błędy pierwszych tygodni, jak pomóc psu zaaklimatyzować się bez stresu.",
              "outcomes": [
                "Zasada 3-3-3 dla nowych psów",
                "Co dzieje się w układzie nerwowym podczas ruchu",
                "Typowe błędy pierwszych dni",
                "Organizacja przestrzeni i reżim"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Адаптация собаки в новом доме",
              "summary": "Этапы адаптации, типичные ошибки первых недель, как помочь собаке освоиться без стресса.",
              "outcomes": [
                "Правило 3–3–3 для новых собак",
                "Что происходит в нервной системе при переезде",
                "Типичные ошибки первых дней",
                "Организация пространства и режима"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-016",
          "translations": {
            "en": {
              "title": "Developing confidence and behavioral flexibility",
              "summary": "What is confidence in a dog, how to build resistance to new situations.",
              "outcomes": [
                "Confidence as a neurobiological phenomenon",
                "Exercises for learning new things",
                "Games that increase adaptability",
                "Mistakes when “hardening” character"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Rozwijanie pewności siebie i elastyczności zachowań",
              "summary": "Czym jest pewność siebie u psa, jak budować odporność na nowe sytuacje.",
              "outcomes": [
                "Zaufanie jako zjawisko neurobiologiczne",
                "Ćwiczenia umożliwiające naukę nowych rzeczy",
                "Gry zwiększające zdolność adaptacji",
                "Błędy przy „hartowaniu” charakteru"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Развитие уверенности и поведенческой гибкости",
              "summary": "Что такое уверенность у собаки, как формировать устойчивость к новым ситуациям.",
              "outcomes": [
                "Уверенность как нейробиологический феномен",
                "Упражнения на изучение нового",
                "Игры, повышающие адаптивность",
                "Ошибки при «закаливании» характера"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-017",
          "translations": {
            "en": {
              "title": "Self-control: mechanisms and development",
              "summary": "Neurobiological basis of self-control, exercises and games for its development in dogs.",
              "outcomes": [
                "The role of the prefrontal cortex in self-control",
                "Why self-control is depleted",
                "Reaction inhibition exercises",
                "Self-control vs suppression"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Samokontrola: mechanizmy i rozwój",
              "summary": "Neurobiologiczne podstawy samokontroli, ćwiczenia i gry dla jej rozwoju u psów.",
              "outcomes": [
                "Rola kory przedczołowej w samokontroli",
                "Dlaczego samokontrola jest wyczerpana",
                "Ćwiczenia hamowania reakcji",
                "Samokontrola a tłumienie"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Самоконтроль: механизмы и развитие",
              "summary": "Нейробиологические основы самоконтроля, упражнения и игры для его развития у собаки.",
              "outcomes": [
                "Роль префронтальной коры в самоконтроле",
                "Почему самоконтроль истощается",
                "Упражнения на торможение реакций",
                "Самоконтроль vs подавление"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-018",
          "translations": {
            "en": {
              "title": "Algorithm for dealing with “problematic behavior”",
              "summary": "The structure of the initial consultation, problem formulation, goal setting, work plan.",
              "outcomes": [
                "What does \u001cproblematic\u001d mean and for whom?",
                "How to reformulate a client's request",
                "Setting realistic goals",
                "Plan structure and timing"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Algorytm radzenia sobie z „problematycznym zachowaniem”",
              "summary": "Struktura konsultacji wstępnej, sformułowanie problemu, ustalenie celu, plan pracy.",
              "outcomes": [
                "Co oznacza \u001eproblematyczny\u001d i dla kogo?",
                "Jak przeformułować prośbę klienta",
                "Wyznaczanie realistycznych celów",
                "Struktura planu i harmonogram"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Алгоритм работы с «проблемным поведением»",
              "summary": "Структура первичной консультации, формулировка проблемы, постановка целей, план работы.",
              "outcomes": [
                "Что значит «проблемное» и для кого",
                "Как переформулировать запрос клиента",
                "Постановка реалистичных целей",
                "Структура плана и сроки"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-019",
          "translations": {
            "en": {
              "title": "Causes of problem behavior",
              "summary": "Needs, stress, pain, life history - how to find the root cause of unwanted behavior.",
              "outcomes": [
                "Triangle: needs, learning, physiology",
                "The role of pain and disease",
                "Life history as a factor",
                "Differential diagnosis of causes"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Przyczyny problematycznych zachowań",
              "summary": "Potrzeby, stres, ból, historia życia – jak znaleźć przyczynę niechcianych zachowań.",
              "outcomes": [
                "Trójkąt: potrzeby, uczenie się, fizjologia",
                "Rola bólu i choroby",
                "Historia życia jako czynnik",
                "Diagnostyka różnicowa przyczyn"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Причины проблемного поведения",
              "summary": "Потребности, стресс, боль, история жизни — как найти первопричину нежелательного поведения.",
              "outcomes": [
                "Треугольник: потребности, обучение, физиология",
                "Роль боли и заболеваний",
                "История жизни как фактор",
                "Дифференциальная диагностика причин"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-020",
          "translations": {
            "en": {
              "title": "Diseases as a cause of unwanted behavior",
              "summary": "The influence of pain and disease on behavior, breed predisposition to disease.",
              "outcomes": [
                "Pain and its behavioral manifestations",
                "Hormonal disorders and behavior",
                "Breed predisposition to diseases",
                "When behavior is a symptom of illness"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Choroby jako przyczyna niepożądanych zachowań",
              "summary": "Wpływ bólu i choroby na zachowanie, predyspozycje rasy do chorób.",
              "outcomes": [
                "Ból i jego objawy behawioralne",
                "Zaburzenia hormonalne i zachowanie",
                "Skłonność rasy do chorób",
                "Kiedy zachowanie jest objawem choroby"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Заболевания как причина нежелательного поведения",
              "summary": "Влияние боли и болезней на поведение, породная предрасположенность к заболеваниям.",
              "outcomes": [
                "Боль и её поведенческие проявления",
                "Гормональные нарушения и поведение",
                "Породная предрасположенность к болезням",
                "Когда поведение — симптом болезни"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-021",
          "translations": {
            "en": {
              "title": "Dog mental health",
              "summary": "Concept of mental well-being, risk factors, signs of mental health disorders.",
              "outcomes": [
                "What is mental well-being in animals",
                "Risk factors for violations",
                "Signs of anxiety, depression, OCD",
                "Prevention of mental disorders"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Zdrowie psychiczne psa",
              "summary": "Pojęcie dobrostanu psychicznego, czynniki ryzyka, oznaki zaburzeń zdrowia psychicznego.",
              "outcomes": [
                "Czym jest dobrostan psychiczny zwierząt",
                "Czynniki ryzyka naruszeń",
                "Objawy lęku, depresji, OCD",
                "Profilaktyka zaburzeń psychicznych"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Ментальное здоровье собак",
              "summary": "Концепция психического благополучия, факторы риска, признаки нарушений ментального здоровья.",
              "outcomes": [
                "Что такое психическое благополучие у животных",
                "Факторы риска нарушений",
                "Признаки тревожности, депрессии, ОКР",
                "Профилактика ментальных расстройств"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-022",
          "translations": {
            "en": {
              "title": "Consultation with a veterinarian",
              "summary": "When to refer to a veterinarian, how to build teamwork, what is important to tell the doctor.",
              "outcomes": [
                "Red flags for referral to a veterinarian",
                "What specialists deal with behavior",
                "How to describe a behavioral problem to a doctor",
                "Pharmacological support in behavior correction"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Konsultacja z lekarzem weterynarii",
              "summary": "Kiedy zgłosić się do lekarza weterynarii, jak budować pracę zespołową, o czym warto rozmawiać z lekarzem.",
              "outcomes": [
                "Czerwone flagi nakazujące skierowanie do lekarza weterynarii",
                "Jacy specjaliści zajmują się zachowaniem",
                "Jak opisać lekarzowi problem behawioralny",
                "Wsparcie farmakologiczne w korekcji zachowania"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Консультация у ветеринарного специалиста",
              "summary": "Когда направлять к ветеринару, как выстроить командную работу, что важно сообщить врачу.",
              "outcomes": [
                "Красные флаги для направления к ветеринару",
                "Какие специалисты занимаются поведением",
                "Как описать поведенческую проблему врачу",
                "Фармакологическая поддержка в коррекции поведения"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-023",
          "translations": {
            "en": {
              "title": "Need satisfaction as a method",
              "summary": "Why meeting needs is the first step, hierarchy of dog needs, practical strategies.",
              "outcomes": [
                "Five freedoms and five domains",
                "Hierarchy of dog needs",
                "How needs auditing changes behavior",
                "Practical enrichment strategies"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Potrzeba satysfakcji jako metoda",
              "summary": "Dlaczego zaspokojenie potrzeb to pierwszy krok, hierarchia potrzeb psa, praktyczne strategie.",
              "outcomes": [
                "Pięć wolności i pięć dziedzin",
                "Hierarchia potrzeb psa",
                "Jak potrzeby audytu zmieniają zachowanie",
                "Praktyczne strategie wzbogacania"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Удовлетворение потребностей как метод",
              "summary": "Почему удовлетворение потребностей — первый шаг, иерархия потребностей собаки, практические стратегии.",
              "outcomes": [
                "Пять свобод и пять доменов",
                "Иерархия потребностей собаки",
                "Как аудит потребностей меняет поведение",
                "Практические стратегии обогащения"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-024",
          "translations": {
            "en": {
              "title": "Relaxation techniques",
              "summary": "Relaxation protocol, massage, breathing signals, use for anxiety and reactivity.",
              "outcomes": [
                "Karen Over's Relaxation Protocol",
                "TTouch massage: basics",
                "Breathing signals for dogs",
                "Application of relaxation in reactivity"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Techniki relaksacyjne",
              "summary": "Protokół relaksacyjny, masaż, sygnały oddechowe, zastosowanie w przypadku niepokoju i reaktywności.",
              "outcomes": [
                "Protokół relaksacyjny Karen Over",
                "Masaż TTouch: podstawy",
                "Sygnały oddechowe dla psów",
                "Zastosowanie relaksacji w reaktywności"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Техники релаксации",
              "summary": "Протокол расслабления, массаж, дыхательные сигналы, применение при тревожности и реактивности.",
              "outcomes": [
                "Протокол расслабления Карен Овер",
                "Массаж TTouch: основы",
                "Дыхательные сигналы для собаки",
                "Применение релаксации при реактивности"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-025",
          "translations": {
            "en": {
              "title": "Rituals as a tool of work",
              "summary": "What are behavioral rituals, why do they reduce anxiety, examples of useful rituals.",
              "outcomes": [
                "Ritual as predictability and security",
                "Morning and evening rituals",
                "Rituals to Reduce Separation Anxiety",
                "Mistakes when introducing rituals"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Rytuały jako narzędzie pracy",
              "summary": "Czym są rytuały behawioralne, dlaczego zmniejszają lęk, przykłady przydatnych rytuałów.",
              "outcomes": [
                "Rytuał jako przewidywalność i bezpieczeństwo",
                "Rytuały poranne i wieczorne",
                "Rytuały zmniejszające lęk separacyjny",
                "Błędy przy wprowadzaniu rytuałów"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Ритуалы как инструмент работы",
              "summary": "Что такое поведенческие ритуалы, почему они снижают тревогу, примеры полезных ритуалов.",
              "outcomes": [
                "Ритуал как предсказуемость и безопасность",
                "Утренние и вечерние ритуалы",
                "Ритуалы для снижения тревоги расставания",
                "Ошибки при введении ритуалов"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-026",
          "translations": {
            "en": {
              "title": "Aggression: definition and causes",
              "summary": "A modern view of aggression as communication, functional types of aggression, triggers.",
              "outcomes": [
                "Aggression as communication, not a defect",
                "Types of aggression by function",
                "Neurobiology of Aggressive Behavior",
                "Provoking factors and conditions"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Agresja: definicja i przyczyny",
              "summary": "Współczesne spojrzenie na agresję jako komunikację, funkcjonalne typy agresji, wyzwalacze.",
              "outcomes": [
                "Agresja jako komunikacja, a nie wada",
                "Rodzaje agresji ze względu na funkcję",
                "Neurobiologia zachowań agresywnych",
                "Czynniki i warunki prowokujące"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Агрессия: определение и причины",
              "summary": "Современный взгляд на агрессию как коммуникацию, функциональные типы агрессии, триггеры.",
              "outcomes": [
                "Агрессия как коммуникация, а не дефект",
                "Типы агрессии по функции",
                "Нейробиология агрессивного поведения",
                "Провоцирующие факторы и условия"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-027",
          "translations": {
            "en": {
              "title": "Aggression: algorithm of work",
              "summary": "Parallel walks, creating a new positive experience, work plan step by step.",
              "outcomes": [
                "Safety assessment: the first step",
                "Parallel walks as a tool",
                "Creating new positive experiences",
                "Long-term plan and progress assessment"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Agresja: algorytm działania",
              "summary": "Spacery równoległe, tworzenie nowego pozytywnego doświadczenia, plan pracy krok po kroku.",
              "outcomes": [
                "Ocena bezpieczeństwa: pierwszy krok",
                "Chodzenie równoległe jako narzędzie",
                "Tworzenie nowych pozytywnych doświadczeń",
                "Plan długoterminowy i ocena postępów"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Агрессия: алгоритм работы",
              "summary": "Параллельные прогулки, создание нового позитивного опыта, план работы шаг за шагом.",
              "outcomes": [
                "Оценка безопасности: первый шаг",
                "Параллельные прогулки как инструмент",
                "Создание нового позитивного опыта",
                "Долгосрочный план и оценка прогресса"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-028",
          "translations": {
            "en": {
              "title": "Organizing walks with a reactive dog",
              "summary": "Selecting routes, controlling the distance to the stimulus, ammunition and equipment.",
              "outcomes": [
                "Selecting routes based on triggers",
                "Managing distance: space = safety",
                "Ammunition for reactive dogs",
                "Communication with others while walking"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Organizowanie spacerów z reaktywnym psem",
              "summary": "Wybór tras, kontrola odległości do bodźca, amunicji i sprzętu.",
              "outcomes": [
                "Wybieranie tras w oparciu o wyzwalacze",
                "Zarządzanie dystansem: przestrzeń = bezpieczeństwo",
                "Amunicja dla psów reaktywnych",
                "Komunikacja z innymi podczas chodzenia"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Организация прогулок с реактивной собакой",
              "summary": "Выбор маршрутов, управление расстоянием до раздражителя, амуниция и снаряжение.",
              "outcomes": [
                "Выбор маршрутов с учётом триггеров",
                "Управление расстоянием: пространство = безопасность",
                "Амуниция для реактивных собак",
                "Коммуникация с окружающими на прогулке"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-029",
          "translations": {
            "en": {
              "title": "Aggression/fearfulness towards passers-by and dogs on the street",
              "summary": "Operating principles, step-by-step diagrams, safety rules when walking.",
              "outcomes": [
                "Differentiation between aggression and fearfulness",
                "Step-by-step diagram of the trigger operation",
                "Distance management in practice",
                "Safety rules for the owner"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Agresja/lęk w stosunku do przechodniów i psów na ulicy",
              "summary": "Zasady działania, schematy krok po kroku, zasady bezpieczeństwa podczas chodzenia.",
              "outcomes": [
                "Różnica między agresją a strachliwością",
                "Schemat krok po kroku działania spustu",
                "Zarządzanie odległością w praktyce",
                "Zasady bezpieczeństwa dla właściciela"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Агрессия/пугливость к прохожим и собакам на улице",
              "summary": "Принципы работы, пошаговые схемы, правила безопасности при выгуле.",
              "outcomes": [
                "Дифференциация агрессии и пугливости",
                "Пошаговая схема работы у триггера",
                "Управление дистанцией на практике",
                "Правила безопасности для владельца"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-030",
          "translations": {
            "en": {
              "title": "Aggression/fearfulness towards guests in the house",
              "summary": "Space management, protocol for meeting guests, gradual habituation scheme.",
              "outcomes": [
                "Space management for guests",
                "Protocol for a secure meeting",
                "Scheme of gradual habituation to guests",
                "Instructions for guests"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Agresja/lęk w stosunku do gości w domu",
              "summary": "Zarządzanie przestrzenią, protokół spotkań z gośćmi, schemat stopniowego przyzwyczajania.",
              "outcomes": [
                "Zarządzanie przestrzenią dla gości",
                "Protokół bezpiecznego spotkania",
                "Schemat stopniowego przyzwyczajania się do gości",
                "Instrukcje dla gości"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Агрессия/пугливость к гостям в доме",
              "summary": "Менеджмент пространства, протокол встречи гостей, схема постепенного привыкания.",
              "outcomes": [
                "Менеджмент пространства при гостях",
                "Протокол безопасной встречи",
                "Схема постепенного привыкания к гостям",
                "Инструкция для гостей"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-031",
          "translations": {
            "en": {
              "title": "Aggression towards family members",
              "summary": "Context analysis, working with triggers, security issues, long-term plan.",
              "outcomes": [
                "Context analysis: when, with whom, why",
                "Dealing with triggers within the family",
                "Security Issues",
                "Long-term plan and working with family"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Agresja wobec członków rodziny",
              "summary": "Analiza kontekstu, praca z wyzwalaczami, kwestie bezpieczeństwa, plan długoterminowy.",
              "outcomes": [
                "Analiza kontekstu: kiedy, z kim, dlaczego",
                "Radzenie sobie z wyzwalaczami w rodzinie",
                "Kwestie bezpieczeństwa",
                "Plan długoterminowy i praca z rodziną"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Агрессия к членам семьи",
              "summary": "Анализ контекста, работа с триггерами, вопросы безопасности, долгосрочный план.",
              "outcomes": [
                "Анализ контекста: когда, с кем, почему",
                "Работа с триггерами внутри семьи",
                "Вопросы безопасности",
                "Долгосрочный план и работа с семьёй"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-032",
          "translations": {
            "en": {
              "title": "Aggression towards relatives",
              "summary": "Interdog aggression: types, causes, methods of work, conflict prevention.",
              "outcomes": [
                "Types of inter-dog aggression",
                "Causes and provoking factors",
                "Methods of working while walking",
                "Preventing conflicts between dogs"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Agresja wobec bliskich",
              "summary": "Agresja międzypsowa: rodzaje, przyczyny, metody pracy, zapobieganie konfliktom.",
              "outcomes": [
                "Rodzaje agresji między psami",
                "Przyczyny i czynniki prowokujące",
                "Metody pracy podczas chodzenia",
                "Zapobieganie konfliktom między psami"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Агрессия к сородичам",
              "summary": "Межсобачная агрессия: виды, причины, методики работы, профилактика конфликтов.",
              "outcomes": [
                "Виды межсобачной агрессии",
                "Причины и провоцирующие факторы",
                "Методики работы на прогулке",
                "Профилактика конфликтов между собаками"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-033",
          "translations": {
            "en": {
              "title": "Resocialization of an adult dog",
              "summary": "Resocialization algorithm, pace of work, independent work of the owner with a fearful dog.",
              "outcomes": [
                "What is resocialization of an adult dog?",
                "Algorithm: stages and transition criteria",
                "Pace of work: why slow = fast",
                "Independent work of the owner"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Resocjalizacja dorosłego psa",
              "summary": "Algorytm resocjalizacji, tempo pracy, samodzielna praca właściciela z bojaźliwym psem.",
              "outcomes": [
                "Na czym polega resocjalizacja dorosBego psa?",
                "Algorytm: etapy i kryteria przejścia",
                "Tempo pracy: dlaczego wolno = szybko",
                "Samodzielna praca właściciela"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Ресоциализация взрослой собаки",
              "summary": "Алгоритм ресоциализации, темп работы, самостоятельная работа владельца с пугливой собакой.",
              "outcomes": [
                "Что такое ресоциализация взрослой собаки",
                "Алгоритм: этапы и критерии перехода",
                "Темп работы: почему медленно = быстро",
                "Самостоятельная работа владельца"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-034",
          "translations": {
            "en": {
              "title": "Uncleanliness: causes and methods of work",
              "summary": "Medical and behavioral reasons, journaling, place training scheme.",
              "outcomes": [
                "Medical causes of uncleanliness",
                "Behavioral and stress causes",
                "Keeping a urine diary",
                "Training scheme and typical mistakes"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Nieczystość: przyczyny i metody pracy",
              "summary": "Względy medyczne i behawioralne, prowadzenie dziennika, plan szkolenia miejsca.",
              "outcomes": [
                "Medyczne przyczyny nieczystości",
                "Przyczyny behawioralne i stresowe",
                "Prowadzenie dziennika moczu",
                "Schemat szkolenia i typowe błędy"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Нечистоплотность: причины и способы работы",
              "summary": "Медицинские и поведенческие причины, ведение дневника, схема приучения к месту.",
              "outcomes": [
                "Медицинские причины нечистоплотности",
                "Поведенческие и стрессовые причины",
                "Ведение дневника мочеиспускания",
                "Схема приучения и типичные ошибки"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-035",
          "translations": {
            "en": {
              "title": "The dog cannot stay at home alone: ​​reasons",
              "summary": "Analysis of separation syndrome, review of studies, differential diagnosis of causes.",
              "outcomes": [
                "Separation syndrome vs other causes",
                "Review of key studies",
                "Differential diagnosis",
                "Video monitoring as a diagnostic tool"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Pies nie może zostać sam w domu: powody",
              "summary": "Analiza zespołu separacji, przegląd badań, diagnostyka różnicowa przyczyn.",
              "outcomes": [
                "Syndrom separacji a inne przyczyny",
                "Przegląd kluczowych badań",
                "Diagnostyka różnicowa",
                "Monitoring wizyjny jako narzędzie diagnostyczne"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Собака не может оставаться дома одна: причины",
              "summary": "Разбор синдрома разлуки, обзор исследований, дифференциальная диагностика причин.",
              "outcomes": [
                "Синдром разлуки vs другие причины",
                "Обзор ключевых исследований",
                "Дифференциальная диагностика",
                "Видеомониторинг как инструмент диагностики"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-036",
          "translations": {
            "en": {
              "title": "The dog cannot stay at home alone: ​​help",
              "summary": "Step-by-step protocol for getting used to loneliness, video monitoring, working with anxiety.",
              "outcomes": [
                "Gradual training protocol",
                "Dealing with separation anxiety",
                "Enrichment of the environment in the absence of the host",
                "When is pharmacological support needed?"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Pies nie może zostać sam w domu: pomóżcie",
              "summary": "Protokół krok po kroku oswajania się z samotnością, monitoringiem wideo, pracą z lękiem.",
              "outcomes": [
                "Stopniowy protokół szkoleniowy",
                "Radzenie sobie z lękiem separacyjnym",
                "Wzbogacanie środowiska pod nieobecność gospodarza",
                "Kiedy potrzebne jest wsparcie farmakologiczne?"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Собака не может оставаться дома одна: помощь",
              "summary": "Пошаговый протокол приучения к одиночеству, видеомониторинг, работа с тревогой.",
              "outcomes": [
                "Протокол постепенного приучения",
                "Работа с тревогой расставания",
                "Обогащение среды в отсутствие хозяина",
                "Когда нужна фармакологическая поддержка"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-037",
          "translations": {
            "en": {
              "title": "Fears: causes and types",
              "summary": "Classification of fears, genetic and environmental factors, the difference between fear and anxiety.",
              "outcomes": [
                "Types of fears: generalized, specific",
                "The genetics of fear: what is transmitted",
                "Fear vs Anxiety: Clinical Difference",
                "Environmental factors in the formation of fears"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Strach: przyczyny i rodzaje",
              "summary": "Klasyfikacja lęków, czynniki genetyczne i środowiskowe, różnica między strachem a lękiem.",
              "outcomes": [
                "Rodzaje lęków: uogólnione, specyficzne",
                "Genetyka strachu: co jest przekazywane",
                "Strach kontra lęk: różnica kliniczna",
                "Czynniki środowiskowe w powstawaniu lęków"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Страхи: причины и виды",
              "summary": "Классификация страхов, генетические и средовые факторы, отличие страха от тревоги.",
              "outcomes": [
                "Виды страхов: генерализованный, специфический",
                "Генетика страха: что передаётся",
                "Страх vs тревога: клиническое различие",
                "Средовые факторы формирования страхов"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-038",
          "translations": {
            "en": {
              "title": "Fears: overview of working methods",
              "summary": "Systematic review of approaches, choice of methodology for a specific case, errors.",
              "outcomes": [
                "Methods of working with fears: an overview",
                "Criteria for choosing a technique",
                "Mistakes when dealing with fears",
                "Assessing progress"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Obawy: przegląd metod pracy",
              "summary": "Systematyczny przegląd podejść, wybór metodologii dla konkretnego przypadku, błędy.",
              "outcomes": [
                "Metody pracy ze strachem: przegląd",
                "Kryteria wyboru techniki",
                "Błędy w radzeniu sobie ze strachem",
                "Ocena postępu"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Страхи: обзор методик работы",
              "summary": "Систематический обзор подходов, выбор методики под конкретный случай, ошибки.",
              "outcomes": [
                "Методики работы со страхами: обзор",
                "Критерии выбора методики",
                "Ошибки при работе со страхами",
                "Оценка прогресса"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-039",
          "translations": {
            "en": {
              "title": "Noise phobia in dogs",
              "summary": "Fear of thunder and fireworks, physiological reactions, practical ways to help your dog.",
              "outcomes": [
                "Physiology of noise phobia",
                "Signs and gradations of severity",
                "Managing the environment during a thunderstorm",
                "Therapeutic protocols and pharmacology"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Fobia hałasu u psów",
              "summary": "Strach przed piorunami i fajerwerkami, reakcje fizjologiczne, praktyczne sposoby pomocy psu.",
              "outcomes": [
                "Fizjologia fobii hałasu",
                "Objawy i stopnie nasilenia",
                "Zarządzanie środowiskiem podczas burzy",
                "Protokoły terapeutyczne i farmakologia"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Шумофобия у собак",
              "summary": "Страх грома и фейерверков, физиологические реакции, практические способы помочь собаке.",
              "outcomes": [
                "Физиология шумофобии",
                "Признаки и градации тяжести",
                "Управление средой во время грозы",
                "Терапевтические протоколы и фармакология"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-040",
          "translations": {
            "en": {
              "title": "Hyperactivity: methods of work",
              "summary": "What is true hyperactivity, arousal control, environmental enrichment, daily routine.",
              "outcomes": [
                "True hyperactivity vs high energy",
                "Excitation level control",
                "Structured daily routine",
                "Sniffing activity as a calming activity"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Nadpobudliwość: metody pracy",
              "summary": "Czym jest prawdziwa nadpobudliwość, kontrola pobudzenia, wzbogacanie środowiska, codzienność.",
              "outcomes": [
                "Prawdziwa nadpobudliwość vs wysoka energia",
                "Kontrola poziomu wzbudzenia",
                "Ustrukturyzowana codzienność",
                "Wąchanie jako czynność uspokajająca"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Гиперактивность: методики работы",
              "summary": "Что такое истинная гиперактивность, управление возбуждением, обогащение среды, режим дня.",
              "outcomes": [
                "Истинная гиперактивность vs высокая энергия",
                "Управление уровнем возбуждения",
                "Структурированный режим дня",
                "Нюхательная активность как успокоение"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-041",
          "translations": {
            "en": {
              "title": "Depression and learned helplessness syndrome",
              "summary": "Signs of depression in dogs, how to help your dog “find its voice”, recovery program.",
              "outcomes": [
                "Signs of Depression in Dogs",
                "Learned helplessness: history and essence",
                "Agency restoration program",
                "Environmental enrichment as therapy"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Depresja i zespół wyuczonej bezradności",
              "summary": "Objawy depresji u psów, jak pomóc psu „odnaleźć głos”, program rekonwalescencji.",
              "outcomes": [
                "Oznaki depresji u psów",
                "Wyuczona bezradność: historia i istota",
                "Program przywracania agencji",
                "Wzbogacanie środowiska jako terapia"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Депрессия и синдром выученной беспомощности",
              "summary": "Признаки депрессии у собак, как помочь собаке «найти голос», программа восстановления.",
              "outcomes": [
                "Признаки депрессии у собак",
                "Выученная беспомощность: история и суть",
                "Программа восстановления агентности",
                "Обогащение среды как терапия"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-042",
          "translations": {
            "en": {
              "title": "Neuroses: scheme of work",
              "summary": "Behavioral neuroses in dogs, diagnosis, treatment and support strategies.",
              "outcomes": [
                "What is neurosis in a dog?",
                "Diagnostic criteria",
                "Behavioral Therapy Strategies",
                "When is medication support needed?"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Nerwice: schemat pracy",
              "summary": "Nerwice behawioralne u psów, diagnostyka, leczenie i strategie wsparcia.",
              "outcomes": [
                "Czym jest nerwica u psa?",
                "Kryteria diagnostyczne",
                "Strategie terapii behawioralnej",
                "Kiedy potrzebne jest wsparcie lekowe?"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Неврозы: схема работы",
              "summary": "Поведенческие неврозы у собак, диагностика, стратегии лечения и поддержки.",
              "outcomes": [
                "Что такое невроз у собаки",
                "Диагностические критерии",
                "Стратегии поведенческой терапии",
                "Когда нужна медикаментозная поддержка"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "behavior-043",
          "translations": {
            "en": {
              "title": "Stress Reduction Program",
              "summary": "Comprehensive depression program: stages, tools, effectiveness assessment.",
              "outcomes": [
                "Stages of a stress reduction program",
                "Tools: mode, sniffing, sleep",
                "Assessing stress levels over time",
                "Working with the owner: his role in the dog’s stress"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Program redukcji stresu",
              "summary": "Kompleksowy program depresyjny: etapy, narzędzia, ocena efektywności.",
              "outcomes": [
                "Etapy programu redukcji stresu",
                "Narzędzia: tryb, wąchanie, sen",
                "Ocena poziomu stresu w czasie",
                "Praca z właścicielem: jego rola w stresie psa"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Программа снижения уровня стресса",
              "summary": "Комплексная программа депрессурации: этапы, инструменты, оценка эффективности.",
              "outcomes": [
                "Этапы программы снижения стресса",
                "Инструменты: режим, нюхание, сон",
                "Оценка уровня стресса в динамике",
                "Работа с владельцем: его роль в стрессе собаки"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "training",
      "translations": {
        "en": {
          "label": "Training",
          "summary": "Learning theory, reinforcement, cues, skill plans, and structured practice."
        },
        "pl": {
          "label": "Trening",
          "summary": "Teoria uczenia, wzmocnienia, sygnaly, plany treningowe i uporzadkowana praktyka."
        },
        "ru": {
          "label": "Обучение",
          "summary": "Обучение"
        }
      },
      "lessons": [
        {
          "id": "training-001",
          "translations": {
            "en": {
              "title": "Teaching Alternative Behaviors",
              "summary": "The principle of replacing unwanted behavior, selecting a suitable alternative, constructing a scheme.",
              "outcomes": [
                "DRI/DRA principle (discrepant behavior)",
                "How to choose a suitable alternative",
                "Building a replacement plan",
                "Common mistakes when replacing behavior"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Nauczanie alternatywnych zachowań",
              "summary": "Zasada zastąpienia niepożądanego zachowania, wyboru odpowiedniej alternatywy, zbudowania schematu.",
              "outcomes": [
                "Zasada DRI/DRA (rozbieżne zachowanie)",
                "Jak wybrać odpowiednią alternatywę",
                "Tworzenie planu zastępczego",
                "Typowe błędy przy zastępowaniu zachowania"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Обучение альтернативному поведению",
              "summary": "Принцип замены нежелательного поведения, подбор подходящей альтернативы, построение схемы.",
              "outcomes": [
                "Принцип DRI/DRA (несовместимое поведение)",
                "Как выбрать подходящую альтернативу",
                "Построение плана замены",
                "Типичные ошибки при замене поведения"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-002",
          "translations": {
            "en": {
              "title": "Working with the query “dog pulls on leash”",
              "summary": "Causes of traction, methods of teaching a loose leash, typical mistakes of owners.",
              "outcomes": [
                "Why does a dog pull (and that's normal)",
                "Distance management and attention",
                "Rugos method: loose leash",
                "Common mistakes and how to avoid them"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Praca z zapytaniem „pies ciągnie na smyczy”",
              "summary": "Przyczyny trakcji, metody nauki luźnej smyczy, typowe błędy właścicieli.",
              "outcomes": [
                "Dlaczego pies ciągnie (i to normalne)",
                "Zarządzanie odległością i uwaga",
                "Metoda Rugos: luźna smycz",
                "Najczęstsze błędy i sposoby ich unikania"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Работа с запросом «собака тянет поводок»",
              "summary": "Причины тяги, методики обучения свободному поводку, типичные ошибки владельцев.",
              "outcomes": [
                "Почему собака тянет (и это нормально)",
                "Управление расстоянием и внимание",
                "Метод Ругос: свободный поводок",
                "Типичные ошибки и как их избежать"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-003",
          "translations": {
            "en": {
              "title": "Working with the request “dog picks up”",
              "summary": "Environmental management, “leave” and “give” training, decreased motivation to pick up.",
              "outcomes": [
                "Why picking up is normal behavior",
                "Environmental management as the first step",
                "Leave training from scratch",
                "\"Dai\" is a safe alternative"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Praca z prośbą „odbiór psa”",
              "summary": "Zarządzanie środowiskiem, szkolenia typu „zostaw” i „daj”, zmniejszona motywacja do podnoszenia.",
              "outcomes": [
                "Dlaczego podnoszenie jest normalnym zachowaniem",
                "Zarządzanie środowiskiem jako pierwszy krok",
                "Zostaw szkolenie od zera",
                "„Dai” jest bezpieczną alternatywą"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Работа с запросом «собака подбирает»",
              "summary": "Управление окружающей средой, обучение «оставь» и «дай», снижение мотивации подбирать.",
              "outcomes": [
                "Почему подбирание — нормальное поведение",
                "Менеджмент среды как первый шаг",
                "Обучение «оставь» с нуля",
                "«Дай» — безопасная альтернатива"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-004",
          "translations": {
            "en": {
              "title": "Counterconditioning and associative transfers",
              "summary": "The mechanism of changing the emotional attitude towards a stimulus, the scheme of work, examples.",
              "outcomes": [
                "Classical Conditioning: Revisited",
                "How a new emotional reaction is formed",
                "Counterconditioning circuit",
                "Case studies"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Kontrwarunkowanie i transfery skojarzeniowe",
              "summary": "Mechanizm zmiany stosunku emocjonalnego do bodźca, schemat pracy, przykłady.",
              "outcomes": [
                "Warunkowanie klasyczne: ponowne spojrzenie",
                "Jak powstaje nowa reakcja emocjonalna",
                "Obwód przeciwkondycjonujący",
                "Studia przypadków"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Контробусловливание и ассоциативные переносы",
              "summary": "Механизм изменения эмоционального отношения к раздражителю, схема работы, примеры.",
              "outcomes": [
                "Классическое обусловливание: пересмотр",
                "Как формируется новая эмоциональная реакция",
                "Схема контробусловливания",
                "Примеры из практики"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-005",
          "translations": {
            "en": {
              "title": "Desensitization: scheme, mistakes. Immersion method",
              "summary": "Gradual habituation vs immersion method: comparison, consequences, rules for safe work.",
              "outcomes": [
                "What is systemic desensitization",
                "Threshold zone: how to work at the threshold",
                "Why is immersion harmful?",
                "Typical mistakes during desensitization"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Odczulanie: schemat, błędy. Metoda zanurzeniowa",
              "summary": "Stopniowe przyzwyczajanie a metoda zanurzenia: porównanie, konsekwencje, zasady bezpiecznej pracy.",
              "outcomes": [
                "Co to jest desensytyzacja ogólnoustrojowa",
                "Strefa progowa: jak pracować na progu",
                "Dlaczego zanurzenie jest szkodliwe?",
                "Typowe błędy podczas odczulania"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Десенсибилизация: схема, ошибки. Метод погружения",
              "summary": "Постепенное привыкание vs метод погружения: сравнение, последствия, правила безопасной работы.",
              "outcomes": [
                "Что такое системная десенсибилизация",
                "Пороговая зона: как работать у порога",
                "Почему погружение вредно",
                "Типичные ошибки при десенсибилизации"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-006",
          "translations": {
            "en": {
              "title": "Analysis of popular protocols",
              "summary": "Review of BAT, CAT, LAT and other protocols: principles, indications, limitations.",
              "outcomes": [
                "BAT 2.0 (Grisha Stewart): principles",
                "CAT: functional reinforcement",
                "LAT (Look at That) by Leslie McDevitt",
                "How to choose a protocol for a specific case"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Analiza popularnych protokołów",
              "summary": "Przegląd protokołów BAT, CAT, LAT i innych: zasady, wskazania, ograniczenia.",
              "outcomes": [
                "BAT 2.0 (Grisha Stewart): zasady",
                "KOT: wzmocnienie funkcjonalne",
                "LAT (Spójrz na to) Leslie McDevitt",
                "Jak wybrać protokół dla konkretnego przypadku"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Разбор популярных протоколов",
              "summary": "Обзор BAT, CAT, LAT и других протоколов: принципы, показания, ограничения.",
              "outcomes": [
                "BAT 2.0 (Grisha Stewart): принципы",
                "CAT: функциональное подкрепление",
                "LAT (Look at That) по Leslie McDevitt",
                "Как выбрать протокол под конкретный случай"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-007",
          "translations": {
            "en": {
              "title": "Ignoring unwanted behavior",
              "summary": "When to use, scheme, typical mistakes, cases when ignoring is harmful.",
              "outcomes": [
                "Extinction: mechanism and explosion before extinction",
                "When Ignoring Works",
                "When ignoring is harmful (fear, pain)",
                "Application diagram and typical errors"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Ignorowanie niepożądanych zachowań",
              "summary": "Kiedy stosować, schemat, typowe błędy, przypadki, gdy ignorowanie szkodzi.",
              "outcomes": [
                "Wymieranie: mechanizm i eksplozja przed wyginięciem",
                "Kiedy ignorowanie działa",
                "Kiedy ignorowanie jest szkodliwe (strach, ból)",
                "Schemat zastosowania i typowe błędy"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Игнорирование нежелательного поведения",
              "summary": "Когда применять, схема, типичные ошибки, случаи когда игнорирование вредит.",
              "outcomes": [
                "Угасание: механизм и взрыв перед угасанием",
                "Когда игнорирование работает",
                "Когда игнорирование вредит (страх, боль)",
                "Схема применения и типичные ошибки"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-008",
          "translations": {
            "en": {
              "title": "Learning theories. Modern theory",
              "summary": "History of the study of learning, classical and modern theories, practical implications.",
              "outcomes": [
                "Pavlov: classical conditioning",
                "Skinner: operant conditioning",
                "Modern learning theory",
                "Practical implications for a trainer"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Uczenie się teorii. Nowoczesna teoria",
              "summary": "Historia nauki o uczeniu się, teorie klasyczne i współczesne, implikacje praktyczne.",
              "outcomes": [
                "Pawłow: warunkowanie klasyczne",
                "Skinner: warunkowanie instrumentalne",
                "Nowoczesna teoria uczenia się",
                "Praktyczne implikacje dla trenera"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Теории научения. Современная теория",
              "summary": "История изучения научения, классические и современные теории, практическое значение.",
              "outcomes": [
                "Павлов: классическое обусловливание",
                "Скиннер: оперантное обусловливание",
                "Современная теория обучения",
                "Практическое значение для тренера"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-009",
          "translations": {
            "en": {
              "title": "A modern view of Skinner's quadrant",
              "summary": "Critical analysis of the operant quadrant, limitations of the model, modern additions.",
              "outcomes": [
                "Four quadrants: analysis on the merits",
                "Why R+ is more effective in practice",
                "Limitations of the quadrant model",
                "Modern additions to the theory"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Nowoczesny widok na kwadrant Skinnera",
              "summary": "Krytyczna analiza ćwiartki operantowej, ograniczenia modelu, nowoczesne uzupełnienia.",
              "outcomes": [
                "Cztery ćwiartki: analiza merytoryczna",
                "Dlaczego R+ jest skuteczniejsze w praktyce",
                "Ograniczenia modelu kwadrantowego",
                "Nowoczesne uzupełnienia teorii"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Современный взгляд на квадрант Скиннера",
              "summary": "Критический разбор оперантного квадранта, ограничения модели, современные дополнения.",
              "outcomes": [
                "Четыре квадранта: разбор по существу",
                "Почему R+ эффективнее на практике",
                "Ограничения квадрантной модели",
                "Современные дополнения к теории"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-010",
          "translations": {
            "en": {
              "title": "Different teaching approaches: comparison",
              "summary": "Traditional, forced, positive reinforcement—a comparison based on science.",
              "outcomes": [
                "Traditional Learning: Risks and Consequences",
                "Why coercion works (short-term)",
                "Why R+ is preferable",
                "Scientific basis of modern education"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Różne podejścia do nauczania: porównanie",
              "summary": "Wzmocnienie tradycyjne, wymuszone, pozytywne – porównanie oparte na nauce.",
              "outcomes": [
                "Tradycyjne uczenie się: ryzyko i konsekwencje",
                "Dlaczego przymus działa (krótkoterminowo)",
                "Dlaczego preferowany jest R+",
                "Naukowe podstawy współczesnej edukacji"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Разные подходы в обучении: сравнение",
              "summary": "Традиционное, принудительное, положительное подкрепление — сравнение на основе науки.",
              "outcomes": [
                "Традиционное обучение: риски и последствия",
                "Почему принуждение работает (краткосрочно)",
                "Почему R+ предпочтительнее",
                "Научная база современного обучения"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-011",
          "translations": {
            "en": {
              "title": "Review of current research on learning",
              "summary": "The most important recent studies on dog training and their practical implications.",
              "outcomes": [
                "Research by Ranga Rogers",
                "Works by Adam Miklosi",
                "Meta-analyses by teaching method",
                "What science says about punishment"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Przegląd aktualnych badań nad uczeniem się",
              "summary": "Najważniejsze najnowsze badania dotyczące szkolenia psów i ich praktyczne implikacje.",
              "outcomes": [
                "Badania Rangi Rogers",
                "Prace Adama Miklosiego",
                "Metaanalizy metodą nauczania",
                "Co nauka mówi o karze"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Обзор актуальных исследований об обучении",
              "summary": "Самые важные исследования последних лет об обучении собак и их практические выводы.",
              "outcomes": [
                "Исследования Ранги Роджерс",
                "Работы Адама Миклоши",
                "Мета-анализы по методам обучения",
                "Что наука говорит о punishment"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-012",
          "translations": {
            "en": {
              "title": "Types of learning: associative and non-associative",
              "summary": "Classical and operant conditioning, habituation, sensitization - the basics.",
              "outcomes": [
                "Classical conditioning: mechanism",
                "Operant conditioning: mechanism",
                "Habituation vs Sensitization",
                "How to apply in practice"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Rodzaje uczenia się: asocjacyjne i nieasocjacyjne",
              "summary": "Warunkowanie klasyczne i instrumentalne, habituacja, uczulenie - podstawy.",
              "outcomes": [
                "Warunkowanie klasyczne: mechanizm",
                "Warunkowanie instrumentalne: mechanizm",
                "Przyzwyczajenie a uczulenie",
                "Jak zastosować w praktyce"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Виды научения: ассоциативное и неассоциативное",
              "summary": "Классическое и оперантное обусловливание, привыкание, сенситизация — основы.",
              "outcomes": [
                "Классическое обусловливание: механизм",
                "Оперантное обусловливание: механизм",
                "Привыкание vs сенситизация",
                "Как применять в практике"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-013",
          "translations": {
            "en": {
              "title": "Types of learning: cognitive and social",
              "summary": "Insight, imitation, observational learning - how to use it in teaching.",
              "outcomes": [
                "Cognitive learning: problem solving",
                "Insight: The “aha moment” in dogs",
                "Imitation learning",
                "Social learning in dogs"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Rodzaje uczenia się: poznawczy i społeczny",
              "summary": "Uczenie się przez wgląd, naśladownictwo, obserwację - jak wykorzystać je w nauczaniu.",
              "outcomes": [
                "Uczenie się poznawcze: rozwiązywanie problemów",
                "Wniosek: „chwila aha” u psów",
                "Uczenie się przez naśladownictwo",
                "Uczenie się społeczne u psów"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Виды научения: когнитивное и социальное",
              "summary": "Инсайт, имитация, наблюдательное научение — как использовать в обучении.",
              "outcomes": [
                "Когнитивное научение: решение задач",
                "Инсайт: «ага-момент» у собак",
                "Имитационное научение",
                "Социальное обучение у собак"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-014",
          "translations": {
            "en": {
              "title": "Associative learning: practice",
              "summary": "How to build training based on classical conditioning, examples of exercises.",
              "outcomes": [
                "Introduction of a conditioned stimulus",
                "Marker as a conditioned stimulus",
                "Building chains of associations",
                "Classical conditioning exercises"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Uczenie się skojarzeniowe: praktyka",
              "summary": "Jak budować trening w oparciu o warunkowanie klasyczne, przykłady ćwiczeń.",
              "outcomes": [
                "Wprowadzenie bodźca warunkowego",
                "Marker jako bodziec warunkowy",
                "Budowanie łańcuchów stowarzyszeń",
                "Klasyczne ćwiczenia kondycyjne"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Ассоциативное обучение: практика",
              "summary": "Как строить тренировки на основе классического обусловливания, примеры упражнений.",
              "outcomes": [
                "Введение условного стимула",
                "Маркер как условный стимул",
                "Построение цепочек ассоциаций",
                "Упражнения на классическое обусловливание"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-015",
          "translations": {
            "en": {
              "title": "Non-associative learning: practice",
              "summary": "Application of habituation and sensitization, protocols for working with reactivity.",
              "outcomes": [
                "Noise Habituation Protocols",
                "Sensitization: how to avoid",
                "Working with reactivity through habituation",
                "Pace of work when getting used to it"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Uczenie się nieasocjacyjne: praktyka",
              "summary": "Zastosowanie habituacji i sensytyzacji, protokoły pracy z reaktywnością.",
              "outcomes": [
                "Protokoły przyzwyczajania do hałasu",
                "Uczulenie: jak unikać",
                "Praca z reaktywnością poprzez przyzwyczajenie",
                "Tempo pracy po przyzwyczajeniu"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Неассоциативное обучение: практика",
              "summary": "Применение привыкания и сенситизации, протоколы для работы с реактивностью.",
              "outcomes": [
                "Протоколы привыкания к шумам",
                "Сенситизация: как избежать",
                "Работа с реактивностью через привыкание",
                "Темп работы при привыкании"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-016",
          "translations": {
            "en": {
              "title": "Cognitive learning: practice",
              "summary": "Problem solving tasks, choice, creative thinking - how to introduce them into training.",
              "outcomes": [
                "Alternative selection tasks",
                "Shaped behavior through free shaping",
                "Creative tasks (method 101 things with a box)",
                "How cognition affects well-being"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Uczenie się poznawcze: praktyka",
              "summary": "Rozwiązywanie problemów, wybór, kreatywne myślenie - jak wprowadzić je do szkolenia.",
              "outcomes": [
                "Alternatywne zadania selekcji",
                "Ukształtowane zachowanie poprzez swobodne kształtowanie",
                "Zadania kreatywne (metoda 101 rzeczy z pudełkiem)",
                "Jak poznanie wpływa na samopoczucie"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Когнитивное обучение: практика",
              "summary": "Задачи на решение проблем, выбор, творческое мышление — как вводить в тренировки.",
              "outcomes": [
                "Задачи на выбор альтернативы",
                "Shaped behaviour через свободное шейпинг",
                "Творческие задания (метод 101 вещь с коробкой)",
                "Как когниция влияет на благополучие"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-017",
          "translations": {
            "en": {
              "title": "Social learning: practice",
              "summary": "Training through demonstration, the “do as I do” method, application features.",
              "outcomes": [
                "Social learning: what dogs can do",
                "Do As I Do method: diagram",
                "Demonstration of behavior by another dog",
                "Limitations of Social Learning"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Uczenie się społeczne: praktyka",
              "summary": "Szkolenie poprzez demonstrację, metodę „rób tak jak ja”, funkcje aplikacji.",
              "outcomes": [
                "Uczenie się społeczne: co potrafią psy",
                "Metoda „rób tak jak ja”: schemat",
                "Demonstracja zachowania przez innego psa",
                "Ograniczenia uczenia się społecznego"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Социальное обучение: практика",
              "summary": "Обучение через демонстрацию, метод «делай как я», особенности применения.",
              "outcomes": [
                "Социальное научение: что умеют собаки",
                "Метод Do As I Do: схема",
                "Демонстрация поведения другой собакой",
                "Ограничения социального обучения"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-018",
          "translations": {
            "en": {
              "title": "Optimal dog condition for training",
              "summary": "Arousal level, stress and training to determine if your dog is ready for exercise.",
              "outcomes": [
                "Yerkes-Dodson Law for Dogs",
                "Signs of Optimal Arousal",
                "How to reduce excess arousal",
                "Signs your dog is not ready to learn"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Optymalna kondycja psa do szkolenia",
              "summary": "Poziom pobudzenia, stres i trening, aby określić, czy Twój pies jest gotowy na ćwiczenia.",
              "outcomes": [
                "Prawo Yerkesa-Dodsona dla psów",
                "Oznaki optymalnego pobudzenia",
                "Jak zmniejszyć nadmierne pobudzenie",
                "Oznaki, że Twój pies nie jest gotowy do nauki"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Оптимальное состояние собаки для тренировки",
              "summary": "Уровень возбуждения, стресс и обучение, как определить готовность собаки к занятию.",
              "outcomes": [
                "Закон Йеркса-Додсона для собак",
                "Признаки оптимального возбуждения",
                "Как снизить избыточное возбуждение",
                "Признаки что собака не готова учиться"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-019",
          "translations": {
            "en": {
              "title": "Motivation and encouragement in learning",
              "summary": "Choice of reinforcers, rating of rewards, how to increase the value of the reward.",
              "outcomes": [
                "Types of reinforcers and their value",
                "How to create a reward rating",
                "Primary and secondary reinforcers",
                "How to increase the value of a reward"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Motywacja i zachęta do nauki",
              "summary": "Wybór wzmocnień, ocena nagród, jak zwiększyć wartość nagrody.",
              "outcomes": [
                "Rodzaje wzmocnień i ich wartość",
                "Jak stworzyć ocenę nagrody",
                "Wzmacniacze pierwotne i wtórne",
                "Jak zwiększyć wartość nagrody"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Мотивация и поощрение в обучении",
              "summary": "Выбор подкрепителей, рейтинг поощрений, как повысить ценность награды.",
              "outcomes": [
                "Виды подкрепителей и их ценность",
                "Как составить рейтинг поощрений",
                "Первичные и вторичные подкрепители",
                "Как повысить ценность награды"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-020",
          "translations": {
            "en": {
              "title": "Formation of initial skills. Marker, clicker",
              "summary": "Introducing a signal, brand rules, working with a clicker - diagram and typical mistakes.",
              "outcomes": [
                "What is a marker and why does it work?",
                "Charging the clicker: diagram",
                "Introducing a signal (command): rules",
                "Typical mistakes of novice trainers"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Kształtowanie umiejętności początkowych. Marker, kliker",
              "summary": "Wprowadzenie do sygnału, zasady marki, praca z klikerem – schemat i typowe błędy.",
              "outcomes": [
                "Co to jest marker i dlaczego dziaBa?",
                "Ładowanie pilota: schemat",
                "Wprowadzenie sygnału (rozkazu): zasady",
                "Typowe błędy początkujących trenerów"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Формирование начального навыка. Маркер, кликер",
              "summary": "Введение сигнала, правила марки, работа с кликером — схема и типичные ошибки.",
              "outcomes": [
                "Что такое маркер и почему он работает",
                "Заряжение кликера: схема",
                "Введение сигнала (команды): правила",
                "Типичные ошибки начинающих тренеров"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-021",
          "translations": {
            "en": {
              "title": "Building a scheme for teaching the “Leave” skill",
              "summary": "Setting criteria, planning progress, mistakes when teaching “Leave.”",
              "outcomes": [
                "“Leave” behavior analysis",
                "Setting criteria and steps",
                "Planned training table",
                "Common mistakes and how to avoid them"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Budowa schematu nauczania umiejętności „Wyjdź”.",
              "summary": "Ustalanie kryteriów, planowanie postępów, błędy w nauczaniu „Odejść”.",
              "outcomes": [
                "Analiza zachowań „wyjdź”.",
                "Ustalanie kryteriów i kroków",
                "Planowany stół treningowy",
                "Najczęstsze błędy i sposoby ich unikania"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Построение схемы обучения навыку «Оставь»",
              "summary": "Постановка критериев, планирование прогресса, ошибки при обучении «Оставь».",
              "outcomes": [
                "Анализ поведения «Оставь»",
                "Установка критериев и шагов",
                "Плановая таблица тренировок",
                "Типичные ошибки и как их избежать"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-022",
          "translations": {
            "en": {
              "title": "Increased criteria and distractions",
              "summary": "3D principles (distance, duration, distraction), how to introduce gradually.",
              "outcomes": [
                "3D Principle: Distance, Duration, Distraction",
                "One variable rule",
                "How to introduce distractions",
                "Rollback and how to work with it"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Zwiększone kryteria i czynniki rozpraszające",
              "summary": "Zasady 3D (odległość, czas trwania, rozproszenie), jak wprowadzać stopniowo.",
              "outcomes": [
                "Zasada 3D: odległość, czas trwania, rozproszenie",
                "Jedna zmienna zasada",
                "Jak wprowadzić zakłócenia",
                "Rollback i jak z nim pracować"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Повышение критериев и отвлекающие факторы",
              "summary": "Принципы 3D (дистанция, длительность, отвлечение), как вводить постепенно.",
              "outcomes": [
                "Принцип 3D: Distance, Duration, Distraction",
                "Правило одной переменной",
                "Как вводить отвлекающие факторы",
                "Откат и как с ним работать"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-023",
          "translations": {
            "en": {
              "title": "A modern view of variable reinforcement",
              "summary": "When and why to use a variable schedule, myths about “thrill” and addiction.",
              "outcomes": [
                "History of Variable Schedule",
                "When it helps and when it hurts",
                "Myths about “addiction” to treats",
                "Modern recommendations"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Nowoczesne spojrzenie na zbrojenie zmienne",
              "summary": "Kiedy i dlaczego stosować zmienny harmonogram, mity o „dreszczeniu” i uzależnieniu.",
              "outcomes": [
                "Historia harmonogramu zmiennego",
                "Kiedy pomaga i kiedy boli",
                "Mity na temat „uzależnienia” od smakołyków",
                "Nowoczesne rekomendacje"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Современный взгляд на вариабельное поощрение",
              "summary": "Когда и зачем применять вариабельное расписание, мифы об «азарте» и зависимости.",
              "outcomes": [
                "История вариабельного расписания",
                "Когда оно помогает, когда вредит",
                "Мифы о «зависимости» от лакомств",
                "Современные рекомендации"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-024",
          "translations": {
            "en": {
              "title": "Difficulties during training",
              "summary": "Diagnosis of problems: the dog does not understand, loses interest, regresses - solutions.",
              "outcomes": [
                "Why does the dog “not understand”",
                "Loss of interest in training",
                "Skill regression: causes and solutions",
                "Stress during training: signs and reactions"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Trudności podczas treningu",
              "summary": "Diagnoza problemów: pies nie rozumie, traci zainteresowanie, cofa się - rozwiązania.",
              "outcomes": [
                "Dlaczego pies „nie rozumie”",
                "Utrata zainteresowania treningami",
                "Regresja umiejętności: przyczyny i rozwiązania",
                "Stres podczas treningu: oznaki i reakcje"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Сложности в процессе тренировки",
              "summary": "Диагностика проблем: собака не понимает, теряет интерес, регрессирует — решения.",
              "outcomes": [
                "Почему собака «не понимает»",
                "Потеря интереса к тренировке",
                "Регресс навыка: причины и решения",
                "Стресс на тренировке: признаки и реакция"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-025",
          "translations": {
            "en": {
              "title": "Coach body language",
              "summary": "How a dog reads a person’s posture and gestures, involuntary signals, and trainer’s mistakes.",
              "outcomes": [
                "What the dog reads from the trainer's body",
                "Involuntary threat signals",
                "Optimal posture for learning",
                "Video analysis of yourself as a growth tool"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Trener mowy ciała",
              "summary": "Jak pies odczytuje postawę i gesty człowieka, mimowolne sygnały i błędy trenera.",
              "outcomes": [
                "Co pies odczytuje z ciała trenera",
                "Mimowolne sygnały zagrożenia",
                "Optymalna postawa do nauki",
                "Analiza wideo siebie jako narzędzia wzrostu"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Язык тела тренера",
              "summary": "Как собака читает позу и жесты человека, непроизвольные сигналы, ошибки тренера.",
              "outcomes": [
                "Что собака считывает с тела тренера",
                "Непроизвольные сигналы угрозы",
                "Оптимальная поза для обучения",
                "Видеоанализ себя как инструмент роста"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-026",
          "translations": {
            "en": {
              "title": "Waiting skill training scheme",
              "summary": "Building a “stay” from 0 to sustainable behavior, criteria and stages.",
              "outcomes": [
                "Stay behavior analysis",
                "Stages: body, distance, duration, distraction",
                "Criteria for moving to the next stage",
                "Common mistakes when teaching to wait"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Program szkolenia umiejętności oczekiwania",
              "summary": "Budowanie „pobytu” od 0 do zrównoważonych zachowań, kryteriów i etapów.",
              "outcomes": [
                "Pozostań w analizie zachowań",
                "Etapy: ciało, dystans, czas trwania, rozproszenie",
                "Kryteria przejścia do kolejnego etapu",
                "Najczęstsze błędy w nauczaniu czekania"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Схема обучения навыку ожидания",
              "summary": "Построение «стэй» от 0 до устойчивого поведения, критерии и этапы.",
              "outcomes": [
                "Анализ поведения «стэй»",
                "Этапы: тело, дистанция, длительность, отвлечение",
                "Критерии перехода на следующий этап",
                "Типичные ошибки при обучении ожиданию"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-027",
          "translations": {
            "en": {
              "title": "Call training scheme",
              "summary": "Recall is the most important skill: building a reliable recall step by step.",
              "outcomes": [
                "Why calling is a safety skill",
                "Stages of construction from game to reality",
                "Mistakes that destroy recall",
                "How to restore a damaged call"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Zadzwoń do programu szkoleniowego",
              "summary": "Przypomnienie to najważniejsza umiejętność: budowanie niezawodnego przypomnienia krok po kroku.",
              "outcomes": [
                "Dlaczego dzwonienie jest umiejętnością związaną z bezpieczeństwem",
                "Etapy budowy od gry do rzeczywistości",
                "Błędy, które niszczą pamięć",
                "Jak przywrócić uszkodzone połączenie"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Схема обучения подзыву",
              "summary": "Отзыв — самый важный навык: построение надёжного подзыва пошагово.",
              "outcomes": [
                "Почему подзыв — навык безопасности",
                "Этапы построения от игры до реальности",
                "Ошибки, разрушающие подзыв",
                "Как восстановить испорченный подзыв"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-028",
          "translations": {
            "en": {
              "title": "\"Do as I do\" method",
              "summary": "Imitation training scheme, Do As I Do research, practical application.",
              "outcomes": [
                "History and research of DoAsIDo",
                "Imitation training scheme",
                "Application in working with reactive dogs",
                "Limitations of the method"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Metoda „rób tak jak ja”.",
              "summary": "Schemat szkolenia w zakresie imitacji, badania typu „rób tak jak ja”, zastosowanie praktyczne.",
              "outcomes": [
                "Historia i badania DoAsIDo",
                "Schemat szkolenia imitacyjnego",
                "Zastosowanie w pracy z psami reaktywnymi",
                "Ograniczenia metody"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Метод «Делай, как я»",
              "summary": "Схема обучения имитации, исследования Do As I Do, практическое применение.",
              "outcomes": [
                "История и исследования DoAsIDo",
                "Схема обучения имитации",
                "Применение в работе с реактивными собаками",
                "Ограничения метода"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "training-029",
          "translations": {
            "en": {
              "title": "Walking on a relaxed leash in Rugos",
              "summary": "The Turid Rugos method in detail: principles, steps, typical questions.",
              "outcomes": [
                "Principles of the Turid Rugos method",
                "Step-by-step training scheme",
                "Typical questions and answers",
                "Combination with other methods"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Chodzenie na luźnej smyczy w Rugos",
              "summary": "Szczegółowo metoda Turida Rugosa: zasady, kroki, typowe pytania.",
              "outcomes": [
                "Zasady metody Turida Rugosa",
                "Schemat szkolenia krok po kroku",
                "Typowe pytania i odpowiedzi",
                "Połączenie z innymi metodami"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Ходьба на расслабленном поводке по Ругос",
              "summary": "Метод Тюрид Ругос в деталях: принципы, шаги, типичные вопросы.",
              "outcomes": [
                "Принципы метода Тюрид Ругос",
                "Пошаговая схема обучения",
                "Типичные вопросы и ответы",
                "Сочетание с другими методами"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "physiology",
      "translations": {
        "en": {
          "label": "Physiology",
          "summary": "Neurobiology, pain, stress physiology, health systems, and body processes."
        },
        "pl": {
          "label": "Fizjologia",
          "summary": "Neurobiologia, bol, fizjologia stresu, uklady zdrowia i procesy organizmu."
        },
        "ru": {
          "label": "Физиология",
          "summary": "Физиология"
        }
      },
      "lessons": [
        {
          "id": "physiology-001",
          "translations": {
            "en": {
              "title": "Anatomy. Choosing walking gear",
              "summary": "The structure of a dog's body, how anatomy affects the choice of harness, collar and leash.",
              "outcomes": [
                "Anatomy of the neck, back, chest",
                "How does the collar affect the trachea and the cervical spine?",
                "Harness selection criteria",
                "Types of ammunition and their impact on movement"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Anatomia. Wybór sprzętu do chodzenia",
              "summary": "Budowa ciała psa, jak anatomia wpływa na dobór szelek, obroży i smyczy.",
              "outcomes": [
                "Anatomia szyi, pleców, klatki piersiowej",
                "Jak koBnierz wpBywa na tchawic\u0019 i kr\u0019gosBup szyjny?",
                "Kryteria wyboru uprzęży",
                "Rodzaje amunicji i ich wpływ na ruch"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Анатомия. Выбор прогулочной амуниции",
              "summary": "Строение тела собаки, как анатомия влияет на выбор шлейки, ошейника и поводка.",
              "outcomes": [
                "Анатомия шеи, спины, грудной клетки",
                "Как ошейник влияет на трахею и ШОП",
                "Критерии выбора шлейки",
                "Виды амуниции и их влияние на движение"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "physiology-002",
          "translations": {
            "en": {
              "title": "Physiology: nervous system and brain",
              "summary": "The structure of the nervous system, the structure of the brain, the connection between physiology and behavior.",
              "outcomes": [
                "CNS and PNS: how the nervous system works",
                "Key brain structures and their functions",
                "Neurotransmitters and behavior",
                "Neuroplasticity: can the brain be changed?"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Fizjologia: układ nerwowy i mózg",
              "summary": "Struktura układu nerwowego, struktura mózgu, związek między fizjologią a zachowaniem.",
              "outcomes": [
                "CNS i PNS: jak działa układ nerwowy",
                "Kluczowe struktury mózgu i ich funkcje",
                "Neuroprzekaźniki i zachowanie",
                "Neuroplastyczno[\u0007: czy m�zg mo|na zmieni\u0007?"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Физиология: нервная система и мозг",
              "summary": "Устройство нервной системы, строение мозга, связь физиологии с поведением.",
              "outcomes": [
                "ЦНС и ПНС: как устроена нервная система",
                "Ключевые структуры мозга и их функции",
                "Нейромедиаторы и поведение",
                "Нейропластичность: можно ли изменить мозг"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "physiology-003",
          "translations": {
            "en": {
              "title": "Sensory systems of dogs",
              "summary": "Smell, hearing, sight, touch - the features of a dog’s perception of the world.",
              "outcomes": [
                "Smell: 300 million receptors",
                "Hearing range and its meaning",
                "Vision: colors, movement, acuity",
                "Vibrissae, thermoreception, vestibular system"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Układy sensoryczne psów",
              "summary": "Węch, słuch, wzrok, dotyk - cechy postrzegania świata przez psa.",
              "outcomes": [
                "Zapach: 300 milionów receptorów",
                "Zasięg słuchu i jego znaczenie",
                "Wizja: kolory, ruch, ostrość",
                "Wibracje, termorecepcja, układ przedsionkowy"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Сенсорные системы собак",
              "summary": "Обоняние, слух, зрение, осязание — особенности восприятия мира собакой.",
              "outcomes": [
                "Обоняние: 300 млн рецепторов",
                "Слуховой диапазон и его значение",
                "Зрение: цвета, движение, острота",
                "Вибриссы, терморецепция, вестибулярная система"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "physiology-004",
          "translations": {
            "en": {
              "title": "Digestion. Nutrition and behavior",
              "summary": "The structure of the gastrointestinal tract, analysis of nutritional patterns, myths about proper feeding, organization of feeding.",
              "outcomes": [
                "Structure of the gastrointestinal tract and features of digestion",
                "Natural vs dry food: a scientific view",
                "The influence of nutrition on behavior",
                "Feeding organization and eating behavior"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Trawienie. Odżywianie i zachowanie",
              "summary": "Budowa przewodu pokarmowego, analiza wzorców żywienia, mity na temat prawidłowego żywienia, organizacja żywienia.",
              "outcomes": [
                "Budowa przewodu żołądkowo-jelitowego i cechy trawienia",
                "Karma naturalna a karma sucha: pogląd naukowy",
                "Wpływ żywienia na zachowanie",
                "Organizacja żywienia i zachowania żywieniowe"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Пищеварение. Питание и поведение",
              "summary": "Строение ЖКТ, разбор схем питания, мифы о правильном кормлении, организация кормления.",
              "outcomes": [
                "Строение ЖКТ и особенности пищеварения",
                "Натуралка vs сухой корм: научный взгляд",
                "Влияние питания на поведение",
                "Организация кормления и пищевое поведение"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "physiology-005",
          "translations": {
            "en": {
              "title": "Musculoskeletal system",
              "summary": "The structure of bones, joints, muscles; typical ODA problems and their impact on behavior.",
              "outcomes": [
                "Structure of the skeleton and joints",
                "Muscular system: features in dogs",
                "Dysplasia, osteochondrosis and behavior",
                "The influence of ODA on motor activity"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Układ mięśniowo-szkieletowy",
              "summary": "Struktura kości, stawów, mięśni; typowe problemy ODA i ich wpływ na zachowanie.",
              "outcomes": [
                "Budowa szkieletu i stawów",
                "Układ mięśniowy: cechy u psów",
                "Dysplazja, osteochondroza i zachowanie",
                "Wpływ ODA na aktywność motoryczną"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Опорно-двигательный аппарат",
              "summary": "Строение костей, суставов, мышц; типичные проблемы ОДА и их влияние на поведение.",
              "outcomes": [
                "Строение скелета и суставов",
                "Мышечная система: особенности у собак",
                "Дисплазия, остеохондроз и поведение",
                "Влияние ОДА на двигательную активность"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "physiology-006",
          "translations": {
            "en": {
              "title": "Primary diagnosis of musculoskeletal problems",
              "summary": "How to recognize pain during movement, neurological and orthopedic examination for a consultant.",
              "outcomes": [
                "Signs of pain when moving",
                "Simple neurological examination",
                "Orthopedic examination: what to check",
                "When to urgently see an orthopedic veterinarian"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Podstawowa diagnostyka schorzeń układu mięśniowo-szkieletowego",
              "summary": "Jak rozpoznać ból podczas ruchu, badanie neurologiczne i ortopedyczne dla konsultanta.",
              "outcomes": [
                "Oznaki bólu podczas poruszania się",
                "Proste badanie neurologiczne",
                "Badanie ortopedyczne: co sprawdzić",
                "Kiedy pilnie udać się do lekarza weterynarii ortopedy"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Первичная диагностика проблем ОДА",
              "summary": "Как распознать боль в движении, неврологический и ортопедический осмотр для консультанта.",
              "outcomes": [
                "Признаки боли в движении",
                "Простой неврологический осмотр",
                "Ортопедический осмотр: что проверить",
                "Когда срочно к ветеринару-ортопеду"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "physiology-007",
          "translations": {
            "en": {
              "title": "Hormonal system and behavior",
              "summary": "The influence of sex hormones, stress hormones and other endocrine factors on behavior.",
              "outcomes": [
                "Testosterone, estrogen and behavior",
                "Cortisol: the stress hormone and its effects",
                "Oxytocin, dopamine, serotonin",
                "Hormonal changes and cycles"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Układ hormonalny i zachowanie",
              "summary": "Wpływ hormonów płciowych, hormonów stresu i innych czynników endokrynologicznych na zachowanie.",
              "outcomes": [
                "Testosteron, estrogen i zachowanie",
                "Kortyzol: hormon stresu i jego skutki",
                "Oksytocyna, dopamina, serotonina",
                "Zmiany i cykle hormonalne"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Гормональная система и поведение",
              "summary": "Влияние половых гормонов, стрессовых гормонов и других эндокринных факторов на поведение.",
              "outcomes": [
                "Тестостерон, эстроген и поведение",
                "Кортизол: стрессовый гормон и его эффекты",
                "Окситоцин, дофамин, серотонин",
                "Гормональные изменения и циклы"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "physiology-008",
          "translations": {
            "en": {
              "title": "Providing first aid to a dog",
              "summary": "Basic first aid skills, what to do in case of injury, burns, poisoning, convulsions.",
              "outcomes": [
                "Condition assessment: ABC (airways, breathing, circulation)",
                "Help with bleeding and trauma",
                "Signs of poisoning and first steps",
                "Seizures, heatstroke, drowning"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Udzielenie pierwszej pomocy psu",
              "summary": "Podstawowe umiejętności udzielania pierwszej pomocy, jak postępować w przypadku urazów, oparzeń, zatruć, drgawek.",
              "outcomes": [
                "Ocena stanu: ABC (drogi oddechowe, oddychanie, krążenie)",
                "Pomoc przy krwawieniach i urazach",
                "Oznaki zatrucia i pierwsze działania",
                "Ataki, udar cieplny, utonięcie"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Оказание первой помощи собаке",
              "summary": "Базовые навыки первой помощи, что делать при травме, ожоге, отравлении, судорогах.",
              "outcomes": [
                "Оценка состояния: ABC (airways, breathing, circulation)",
                "Помощь при кровотечении и травме",
                "Признаки отравления и первые действия",
                "Судороги, тепловой удар, утопление"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "physiology-009",
          "translations": {
            "en": {
              "title": "Dog immune system",
              "summary": "Basics of immunology, vaccination, allergies, connection of immunity with behavior and stress.",
              "outcomes": [
                "Innate and adaptive immunity",
                "Vaccination: how it works and why",
                "Allergies and their behavioral manifestations",
                "Stress and the immune response"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Układ odpornościowy psa",
              "summary": "Podstawy immunologii, szczepienia, alergie, związek odporności z zachowaniem i stresem.",
              "outcomes": [
                "Odporność wrodzona i nabyta",
                "Szczepienia: jak to działa i dlaczego",
                "Alergie i ich objawy behawioralne",
                "Stres i odpowiedź immunologiczna"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Иммунная система собак",
              "summary": "Основы иммунологии, вакцинация, аллергии, связь иммунитета с поведением и стрессом.",
              "outcomes": [
                "Врождённый и адаптивный иммунитет",
                "Вакцинация: как работает и зачем",
                "Аллергии и их поведенческие проявления",
                "Стресс и иммунный ответ"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "physiology-010",
          "translations": {
            "en": {
              "title": "Pain and its perception. Pain Recognition",
              "summary": "How dogs experience pain, behavioral signs of chronic and acute pain.",
              "outcomes": [
                "Physiology of pain",
                "Acute vs chronic pain",
                "Pain Rating Scales (Glasgow, Colorado)",
                "Behavioral markers of chronic pain"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Ból i jego percepcja. Rozpoznawanie bólu",
              "summary": "Jak psy odczuwają ból, objawy behawioralne bólu przewlekłego i ostrego.",
              "outcomes": [
                "Fizjologia bólu",
                "Ból ostry vs przewlekły",
                "Skale oceny bólu (Glasgow, Kolorado)",
                "Behawioralne markery bólu przewlekłego"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Боль и её восприятие. Распознавание боли",
              "summary": "Как собаки переживают боль, поведенческие признаки хронической и острой боли.",
              "outcomes": [
                "Физиология болевых ощущений",
                "Острая vs хроническая боль",
                "Шкалы оценки боли (Glasgow, Colorado)",
                "Поведенческие маркеры хронической боли"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "physiology-011",
          "translations": {
            "en": {
              "title": "Stress: concept and physiology",
              "summary": "What is stress, neuroendocrine mechanisms of stress response, acute and chronic stress.",
              "outcomes": [
                "Stress system: HPA axis",
                "Acute vs chronic stress",
                "Allostatic load",
                "Cumulative stress: what is it?"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Stres: koncepcja i fizjologia",
              "summary": "Czym jest stres, neuroendokrynne mechanizmy reakcji na stres, stres ostry i przewlekły.",
              "outcomes": [
                "Układ naprężeń: oś HPA",
                "Stres ostry vs chroniczny",
                "Obciążenie allostatyczne",
                "Stres skumulowany: co to jest?"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Стресс: понятие и физиология",
              "summary": "Что такое стресс, нейроэндокринные механизмы стрессового ответа, острый и хронический стресс.",
              "outcomes": [
                "Стресс-система: ось ГГН",
                "Острый vs хронический стресс",
                "Аллостатическая нагрузка",
                "Кумулятивный стресс: что это"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "physiology-012",
          "translations": {
            "en": {
              "title": "Stress: causes, symptoms, consequences",
              "summary": "Stressors in dogs, signs of stress in behavior and body, long-term consequences.",
              "outcomes": [
                "Common Stressors in Pet Dogs",
                "Acute signs of stress",
                "Chronic signs and behavior changes",
                "Long-term effects of chronic stress"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Stres: przyczyny, objawy, skutki",
              "summary": "Stresory u psów, oznaki stresu w zachowaniu i organizmie, skutki długoterminowe.",
              "outcomes": [
                "Typowe czynniki stresogenne u psów domowych",
                "Ostre oznaki stresu",
                "Chroniczne objawy i zmiany zachowania",
                "Długoterminowe skutki przewlekłego stresu"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Стресс: причины, симптомы, последствия",
              "summary": "Стрессоры у собак, признаки стресса в поведении и теле, долгосрочные последствия.",
              "outcomes": [
                "Типичные стрессоры у домашних собак",
                "Острые признаки стресса",
                "Хронические признаки и изменения поведения",
                "Долгосрочные последствия хронического стресса"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "physiology-013",
          "translations": {
            "en": {
              "title": "Physiological rationale for a stress reduction program",
              "summary": "How changes in routine affect the neurobiology of stress, the scientific basis of the program.",
              "outcomes": [
                "How sleep reduces cortisol",
                "Sniffing and the parasympathetic system",
                "Rhythm of the day and hormonal regulation",
                "Studies confirming effectiveness"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Fizjologiczne uzasadnienie programu redukcji stresu",
              "summary": "Jak zmiany w rutynie wpływają na neurobiologię stresu, podstawa naukowa programu.",
              "outcomes": [
                "Jak sen zmniejsza kortyzol",
                "Wąchanie i układ przywspółczulny",
                "Rytm dnia i regulacja hormonalna",
                "Badania potwierdzające skuteczność"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Физиологическое обоснование программы снижения стресса",
              "summary": "Как изменения в режиме влияют на нейробиологию стресса, научная база программы.",
              "outcomes": [
                "Как сон снижает кортизол",
                "Нюхание и парасимпатическая система",
                "Ритм дня и гормональная регуляция",
                "Исследования, подтверждающие эффективность"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "physiology-014",
          "translations": {
            "en": {
              "title": "Adolescents, adults, elderly: physiology",
              "summary": "Physiological changes with age, impact on learning and needs.",
              "outcomes": [
                "Physiological changes during adolescence",
                "Adult dog: stabilization of the nervous system",
                "Physiology of aging in dogs",
                "Cognitive dysfunction in the elderly"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Młodzież, dorośli, osoby starsze: fizjologia",
              "summary": "Zmiany fizjologiczne z wiekiem, wpływ na uczenie się i potrzeby.",
              "outcomes": [
                "Zmiany fizjologiczne w okresie dojrzewania",
                "Dorosły pies: stabilizacja układu nerwowego",
                "Fizjologia starzenia się psów",
                "Zaburzenia funkcji poznawczych u osób starszych"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Подростки, взрослые, пожилые: физиология",
              "summary": "Физиологические изменения по возрасту, влияние на обучение и потребности.",
              "outcomes": [
                "Физиологические изменения в подростковом возрасте",
                "Взрослая собака: стабилизация нервной системы",
                "Физиология старения у собак",
                "Когнитивная дисфункция пожилых"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "physiology-015",
          "translations": {
            "en": {
              "title": "Physiology of fears and timidity",
              "summary": "Neurobiological mechanisms of fear, the role of the amygdala, why fears are so persistent.",
              "outcomes": [
                "The role of the amygdala in fear",
                "Conditioned fear reflex: how it is formed",
                "Why fears are difficult to extinguish",
                "Neuroplasticity and fear correction"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Fizjologia lęku i nieśmiałości",
              "summary": "Neurobiologiczne mechanizmy strachu, rola ciała migdałowatego, dlaczego lęki są tak trwałe.",
              "outcomes": [
                "Rola ciała migdałowatego w strachu",
                "Warunkowy odruch strachu: jak powstaje",
                "Dlaczego strach jest trudny do ugaszenia",
                "Neuroplastyczność i korekcja strachu"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Физиология страхов и пугливости",
              "summary": "Нейробиологические механизмы страха, роль миндалины, почему страхи так устойчивы.",
              "outcomes": [
                "Роль миндалины в страхе",
                "Условный рефлекс страха: как формируется",
                "Почему страхи сложно угашаются",
                "Нейропластичность и коррекция страхов"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "physiology-016",
          "translations": {
            "en": {
              "title": "Hyperactivity: physiology",
              "summary": "Neurobiological basis of hyperactivity, ADHD in dogs, the role of mediators.",
              "outcomes": [
                "Dopaminergic system and hyperactivity",
                "ADHD in dogs: does it exist?",
                "Norepinephrine and arousal levels",
                "Physiological triggers of hyperactivity"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Nadpobudliwość: fizjologia",
              "summary": "Neurobiologiczne podstawy nadpobudliwości, ADHD u psów, rola mediatorów.",
              "outcomes": [
                "Układ dopaminergiczny i nadpobudliwość",
                "ADHD u ps�w: czy istnieje?",
                "Norepinefryna i poziom pobudzenia",
                "Fizjologiczne czynniki wyzwalające nadpobudliwość"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Гиперактивность: физиология",
              "summary": "Нейробиологические основы гиперактивности, СДВГ у собак, роль медиаторов.",
              "outcomes": [
                "Дофаминергическая система и гиперактивность",
                "СДВГ у собак: существует ли",
                "Норадреналин и уровень возбуждения",
                "Физиологические триггеры гиперактивности"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "physiology-017",
          "translations": {
            "en": {
              "title": "Depression and helplessness: physiology",
              "summary": "The neurochemistry of depression and learned helplessness in dogs and how it changes the brain.",
              "outcomes": [
                "Serotonin, norepinephrine and depression",
                "Seligman's experiments and their significance",
                "Neurobiology of helplessness",
                "How to restore neurochemistry"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Depresja i bezradność: fizjologia",
              "summary": "Neurochemia depresji i wyuczonej bezradności u psów oraz ich wpływ na mózg.",
              "outcomes": [
                "Serotonina, noradrenalina i depresja",
                "Doświadczenia Seligmana i ich znaczenie",
                "Neurobiologia bezradności",
                "Jak przywrócić neurochemię"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Депрессия и беспомощность: физиология",
              "summary": "Нейрохимия депрессии и выученной беспомощности у собак, как это меняет мозг.",
              "outcomes": [
                "Серотонин, норадреналин и депрессия",
                "Эксперименты Селигмана и их значение",
                "Нейробиология беспомощности",
                "Как восстановить нейрохимию"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "physiology-018",
          "translations": {
            "en": {
              "title": "Neuroses: physiology",
              "summary": "Physiological mechanisms of behavioral neuroses, OCD in dogs.",
              "outcomes": [
                "What happens in the brain during neurosis",
                "OCD in dogs: neurobiology",
                "Tail chasing and other stereotypies",
                "Medication support for neuroses"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Nerwice: fizjologia",
              "summary": "Fizjologiczne mechanizmy nerwic behawioralnych, OCD u psów.",
              "outcomes": [
                "Co dzieje się w mózgu podczas nerwicy",
                "OCD u psów: neurobiologia",
                "Gonienie ogona i inne stereotypy",
                "Wspomaganie lekowe nerwic"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Неврозы: физиология",
              "summary": "Физиологические механизмы поведенческих неврозов, ОКР у собак.",
              "outcomes": [
                "Что происходит в мозге при неврозе",
                "ОКР у собак: нейробиология",
                "Хвостегоня и другие стереотипии",
                "Медикаментозная поддержка при неврозах"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "life",
      "translations": {
        "en": {
          "label": "Life with dogs",
          "summary": "Daily welfare, home life, routines, equipment, and quality of life."
        },
        "pl": {
          "label": "Zycie z psem",
          "summary": "Codzienny dobrostan, dom, rytualy, sprzet i jakosc zycia."
        },
        "ru": {
          "label": "Жизнь с собакой",
          "summary": "Жизнь с собакой"
        }
      },
      "lessons": [
        {
          "id": "life-001",
          "translations": {
            "en": {
              "title": "Selection of special equipment and clothing",
              "summary": "Indications for special harnesses, muzzles, clothing; criteria for correct selection.",
              "outcomes": [
                "Indications for a muzzle",
                "Choosing and training a muzzle",
                "Special harnesses (lameness, rehabilitation)",
                "Clothing: when you need it and how to choose"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Dobór specjalnego sprzętu i odzieży",
              "summary": "Wskazania dotyczące specjalnych uprzęży, kagańców, odzieży; kryteria prawidłowego wyboru.",
              "outcomes": [
                "Wskazania do kagańca",
                "Wybór i trening pyska",
                "Uprzęże specjalne (kulawizny, rehabilitacyjne)",
                "Odzież: kiedy jej potrzebujesz i jak wybrać"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Выбор специальной амуниции и одежды",
              "summary": "Показания для специальных шлеек, намордников, одежды; критерии правильного выбора.",
              "outcomes": [
                "Показания для намордника",
                "Выбор и приучение к наморднику",
                "Специальные шлейки (хромота, реабилитация)",
                "Одежда: когда нужна и как выбрать"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "life-002",
          "translations": {
            "en": {
              "title": "Selection of household items. Hygienic care",
              "summary": "Scratching posts, beds, bowls, hair and teeth care, training in hygiene procedures.",
              "outcomes": [
                "How to choose a bed and bowl",
                "Grooming: brushing, bathing",
                "Dental care: how to teach",
                "Nail clippers and paw care"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Wybór artykułów gospodarstwa domowego. Higieniczna pielęgnacja",
              "summary": "Drapaki, legowiska, miski, pielęgnacja włosów i zębów, szkolenie z procedur higienicznych.",
              "outcomes": [
                "Jak wybrać łóżko i miskę",
                "Pielęgnacja: czesanie, kąpiel",
                "Opieka stomatologiczna: jak uczyć",
                "Obcinacz do paznokci i pielęgnacja łap"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Выбор предметов быта. Гигиенический уход",
              "summary": "Когтеточки, лежаки, миски, уход за шерстью и зубами, приучение к гигиенческим процедурам.",
              "outcomes": [
                "Как выбрать лежак и миску",
                "Уход за шерстью: расчёсывание, купание",
                "Уход за зубами: как приучить",
                "Когтерезки и уход за лапами"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "life-003",
          "translations": {
            "en": {
              "title": "Needs and species-typical behavior",
              "summary": "Hierarchy of dog needs, what species-typical behavior is and why it needs to be provided.",
              "outcomes": [
                "Species-typical behavior: sniffing, chewing, hunting",
                "How suppressing needs leads to problems",
                "Enrichment of the environment as satisfaction of needs",
                "Five Domains of Well-Being"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Potrzeby i zachowania typowe dla gatunku",
              "summary": "Hierarchia potrzeb psa, jakie jest zachowanie typowe dla gatunku i dlaczego należy je zapewnić.",
              "outcomes": [
                "Zachowanie typowe dla gatunku: wąchanie, żucie, polowanie",
                "Jak tłumienie potrzeb prowadzi do problemów",
                "Wzbogacanie środowiska jako zaspokojenie potrzeb",
                "Pięć dziedzin dobrego samopoczucia"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Потребности и видотипичное поведение",
              "summary": "Иерархия потребностей собаки, что такое видотипичное поведение и почему его нужно обеспечивать.",
              "outcomes": [
                "Видотипичное поведение: нюхание, жевание, охота",
                "Как подавление потребностей приводит к проблемам",
                "Обогащение среды как удовлетворение потребностей",
                "Пять доменов благополучия"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "life-004",
          "translations": {
            "en": {
              "title": "Physical activity: benefits and risks",
              "summary": "Beneficial types of exercise, risks of sports for different breeds, myths about a “tired = obedient” dog.",
              "outcomes": [
                "Suitable loads by breed and age",
                "Risks of intense sports",
                "The myth of fatigue as a solution to problems",
                "Balance physical and mental activity"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Aktywność fizyczna: korzyści i ryzyko",
              "summary": "Korzystne rodzaje ruchu, ryzyko uprawiania sportu dla różnych ras, mity na temat psa „zmęczony = posłuszny”.",
              "outcomes": [
                "Odpowiednie ładunki według rasy i wieku",
                "Zagrożenia związane z intensywnym sportem",
                "Mit zmęczenia jako rozwiązania problemów",
                "Zrównoważ aktywność fizyczną i umysłową"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Физические нагрузки: польза и риски",
              "summary": "Полезные виды нагрузок, риски спорта для разных пород, мифы о «усталой = послушной» собаке.",
              "outcomes": [
                "Подходящие нагрузки по породе и возрасту",
                "Риски интенсивного спорта",
                "Миф об усталости как решении проблем",
                "Баланс физической и умственной нагрузки"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "life-005",
          "translations": {
            "en": {
              "title": "Organizing your home space",
              "summary": "Zoning, place to relax, safety, enrichment of the environment in the apartment and house.",
              "outcomes": [
                "Zoning space for a dog",
                "Organizing a place to relax",
                "Home safety: what to remove",
                "Enrichment of the environment in confined spaces"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Organizacja przestrzeni domowej",
              "summary": "Zagospodarowanie przestrzenne, miejsce do wypoczynku, bezpieczeństwo, wzbogacanie środowiska w mieszkaniu i domu.",
              "outcomes": [
                "Zagospodarowanie przestrzenne miejsca dla psa",
                "Zorganizowanie miejsca do wypoczynku",
                "Bezpieczeństwo w domu: co usunąć",
                "Wzbogacanie środowiska w przestrzeniach zamkniętych"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Организация домашнего пространства",
              "summary": "Зонирование, место для отдыха, безопасность, обогащение среды в квартире и доме.",
              "outcomes": [
                "Зонирование пространства для собаки",
                "Организация места для отдыха",
                "Безопасность дома: что убрать",
                "Обогащение среды в ограниченном пространстве"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "life-006",
          "translations": {
            "en": {
              "title": "Games and activities for quality of life",
              "summary": "Enriching the environment, searching for treats, educational games, a sniffing mat - how and why.",
              "outcomes": [
                "Snuffling mat: benefits and principles",
                "Finding treats in the house and on walks",
                "Kongs and feeder puzzles",
                "Playing with the owner: rules for safe play"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Gry i zajęcia na rzecz jakości życia",
              "summary": "Wzbogacanie środowiska, poszukiwanie smakołyków, gry edukacyjne, mata do wąchania – jak i dlaczego.",
              "outcomes": [
                "Mata do węszenia: zalety i zasady",
                "Znajdowanie smakołyków w domu i na spacerach",
                "Kongi i puzzle z podajnikiem",
                "Zabawa z właścicielem: zasady bezpiecznej zabawy"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Игры и занятия для качества жизни",
              "summary": "Обогащение среды, поиск лакомств, развивающие игры, нюхательный коврик — как и зачем.",
              "outcomes": [
                "Нюхательный коврик: польза и принципы",
                "Поиск лакомств в доме и на прогулке",
                "Конги и кормушки-головоломки",
                "Игра с хозяином: правила безопасной игры"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "life-007",
          "translations": {
            "en": {
              "title": "Educational games for dogs",
              "summary": "Cognition games: tasks, puzzles, new activities, introduction rules.",
              "outcomes": [
                "Cognitive games and their benefits",
                "Types of puzzles and puzzles",
                "How to introduce new games",
                "Games for elderly and sick dogs"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Gry edukacyjne dla psów",
              "summary": "Gry poznawcze: zadania, łamigłówki, nowe zajęcia, zasady wprowadzenia.",
              "outcomes": [
                "Gry poznawcze i ich zalety",
                "Rodzaje puzzli i łamigłówek",
                "Jak wprowadzać nowe gry",
                "Gry dla starszych i chorych psów"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Развивающие игры для собак",
              "summary": "Игры на когницию: задачи, головоломки, новые активности, правила введения.",
              "outcomes": [
                "Когнитивные игры и их польза",
                "Виды пазлов и головоломок",
                "Как вводить новые игры",
                "Игры для пожилых и больных собак"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "life-008",
          "translations": {
            "en": {
              "title": "Useful rituals for a comfortable life",
              "summary": "Morning and evening rituals, rituals of farewell and meeting, predictability as protection.",
              "outcomes": [
                "Why rituals reduce anxiety",
                "Morning and evening ritual",
                "Ritual of farewell and return",
                "How to introduce a ritual without coercion"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Przydatne rytuały zapewniające wygodne życie",
              "summary": "Rytuały poranne i wieczorne, rytuały pożegnania i spotkania, przewidywalność jako ochrona.",
              "outcomes": [
                "Dlaczego rytuały zmniejszają lęk",
                "Rytuał poranny i wieczorny",
                "Rytuał pożegnania i powrotu",
                "Jak wprowadzić rytuał bez przymusu"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Полезные ритуалы для комфортной жизни",
              "summary": "Утренние и вечерние ритуалы, ритуалы прощания и встречи, предсказуемость как защита.",
              "outcomes": [
                "Почему ритуалы снижают тревогу",
                "Ритуал утра и вечера",
                "Ритуал прощания и возвращения",
                "Как ввести ритуал без принуждения"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "life-009",
          "translations": {
            "en": {
              "title": "Interacting with your dog at home",
              "summary": "Quality of daily communication: how to touch, play, relax next to each other without conflicts.",
              "outcomes": [
                "Quality interaction vs quantity",
                "How to pet a dog correctly",
                "Play and relaxation: reading the dog's signals",
                "Conflicts in everyday life: prevention"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Interakcja z psem w domu",
              "summary": "Jakość codziennej komunikacji: jak się dotykać, bawić, relaksować obok siebie bez konfliktów.",
              "outcomes": [
                "Interakcja jakość kontra ilość",
                "Jak prawidłowo głaskać psa",
                "Zabawa i relaks: odczytywanie sygnałów psa",
                "Konflikty w życiu codziennym: profilaktyka"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Взаимодействие с собакой дома",
              "summary": "Качество ежедневного общения: как прикасаться, играть, отдыхать рядом без конфликтов.",
              "outcomes": [
                "Качественное взаимодействие vs количество",
                "Как правильно гладить собаку",
                "Игра и отдых: читаем сигналы собаки",
                "Конфликты в быту: предотвращение"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "life-010",
          "translations": {
            "en": {
              "title": "Organization of walks according to needs",
              "summary": "What is a “good walk”, sniffing activity, freedom to choose a route.",
              "outcomes": [
                "What does a dog need on a walk?",
                "Sniffing as the main activity",
                "Free choice of route",
                "How often and for how long to walk"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Organizacja spacerów według potrzeb",
              "summary": "Czym jest „dobry spacer”, wąchanie, swoboda wyboru trasy.",
              "outcomes": [
                "Czego potrzebuje pies na spacerze?",
                "Wąchanie jako główna czynność",
                "Dowolny wybór trasy",
                "Jak często i jak długo chodzić"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Организация прогулок по потребностям",
              "summary": "Что такое «хорошая прогулка», нюхательная активность, свобода выбора маршрута.",
              "outcomes": [
                "Что нужно собаке на прогулке",
                "Нюхание как главная активность",
                "Свободный выбор маршрута",
                "Как часто и сколько гулять"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "life-011",
          "translations": {
            "en": {
              "title": "A modern view of dog welfare",
              "summary": "Five Domains, quality of life indicators, how to assess and improve welfare.",
              "outcomes": [
                "Five Domains Concept (Mellor)",
                "Positive and negative indicators",
                "Assessing quality of life in practice",
                "How to improve the welfare of a specific dog"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Współczesne spojrzenie na dobrostan psów",
              "summary": "Pięć dziedzin, wskaźniki jakości życia, jak oceniać i poprawiać dobrostan.",
              "outcomes": [
                "Koncepcja pięciu domen (Mellor)",
                "Wskaźniki pozytywne i negatywne",
                "Ocena jakości życia w praktyce",
                "Jak poprawić dobrostan konkretnego psa"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Современный взгляд на благополучие собак",
              "summary": "Five Domains, индикаторы качества жизни, как оценивать и улучшать welfare.",
              "outcomes": [
                "Концепция Five Domains (Меллор)",
                "Позитивные и негативные индикаторы",
                "Оценка качества жизни на практике",
                "Как улучшить welfare конкретной собаки"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "life-012",
          "translations": {
            "en": {
              "title": "Dog Breeding: Process and Legislation",
              "summary": "How breeding occurs, temperament forecasts, legal aspects in Russia.",
              "outcomes": [
                "How a pair is selected for mating",
                "Inheritance of temperament and character",
                "What makes a responsible breeder?",
                "Breeding legislation in Russia"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Hodowla psów: proces i ustawodawstwo",
              "summary": "Jak przebiega hodowla, prognozy temperamentu, aspekty prawne w Rosji.",
              "outcomes": [
                "Jak wybiera się parę do krycia",
                "Dziedziczenie temperamentu i charakteru",
                "Co wyr�|nia odpowiedzialnego hodowc\u0019?",
                "Ustawodawstwo hodowlane w Rosji"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Разведение собак: процесс и законодательство",
              "summary": "Как происходит разведение, прогнозы темперамента, правовые аспекты в России.",
              "outcomes": [
                "Как выбирается пара для вязки",
                "Наследование темперамента и характера",
                "Что отличает ответственного заводчика",
                "Законодательство о разведении в России"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "life-013",
          "translations": {
            "en": {
              "title": "Several animals in the house",
              "summary": "Introduction of a new animal, resource management, conflicts between pets.",
              "outcomes": [
                "How to properly introduce animals",
                "Resource management (bowls, beds, toys)",
                "Signs of tension and conflict",
                "Chronic conflicts: when you can’t help"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "W domu kilka zwierząt",
              "summary": "Wprowadzenie nowego zwierzęcia, zarządzanie zasobami, konflikty pomiędzy zwierzakami.",
              "outcomes": [
                "Jak prawidłowo wprowadzać zwierzęta",
                "Zarządzanie zasobami (miski, łóżka, zabawki)",
                "Oznaki napięć i konfliktów",
                "Przewlekłe konflikty: kiedy nie możesz pomóc"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Несколько животных в доме",
              "summary": "Введение нового животного, управление ресурсами, конфликты между питомцами.",
              "outcomes": [
                "Как правильно познакомить животных",
                "Управление ресурсами (миски, лежаки, игрушки)",
                "Признаки напряжения и конфликтов",
                "Хронические конфликты: когда помочь нельзя"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "life-014",
          "translations": {
            "en": {
              "title": "Adult and senior dogs. Seniors",
              "summary": "Special needs of older dogs, cognitive dysfunction, organization of senior life.",
              "outcomes": [
                "Signs of aging and cognitive dysfunction",
                "Special needs of a senior",
                "Home adaptation for an elderly dog",
                "Quality of life in recent years"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Psy dorosłe i starsze. Seniorzy",
              "summary": "Specjalne potrzeby starszych psów, dysfunkcje poznawcze, organizacja życia seniora.",
              "outcomes": [
                "Oznaki starzenia i dysfunkcji poznawczych",
                "Specjalne potrzeby seniora",
                "Adaptacja domu dla starszego psa",
                "Jakość życia w ostatnich latach"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Взрослые и пожилые собаки. Сениоры",
              "summary": "Особые потребности пожилых собак, когнитивная дисфункция, организация жизни сениора.",
              "outcomes": [
                "Признаки старения и когнитивной дисфункции",
                "Особые потребности сениора",
                "Адаптация дома для пожилой собаки",
                "Качество жизни в последние годы"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "search",
      "translations": {
        "en": {
          "label": "Search work",
          "summary": "Scent work, motivation, field search, indication, and progressive search skills."
        },
        "pl": {
          "label": "Praca wechowa",
          "summary": "Praca wechowa, motywacja, przeszukiwanie terenu, sygnalizacja i progresja umiejetnosci."
        },
        "ru": {
          "label": "Поиск",
          "summary": "Поиск"
        }
      },
      "lessons": [
        {
          "id": "search-001",
          "translations": {
            "en": {
              "title": "Physiology of search work. Nose work",
              "summary": "How the sense of smell works during search, the neurobiology of smell activity and its effects.",
              "outcomes": [
                "Neurobiology of Olfaction",
                "How a dog tracks a scent trail",
                "Why sniffing is soothing",
                "Sniffing activity as enrichment"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Fizjologia pracy poszukiwawczej. Praca z nosem",
              "summary": "Jak działa zmysł węchu podczas poszukiwań, neurobiologia działania węchu i jego skutki.",
              "outcomes": [
                "Neurobiologia węchu",
                "Jak pies tropi ślad zapachowy",
                "Dlaczego wąchanie działa kojąco",
                "Wąchanie jako wzbogacenie"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Физиология поисковой работы. Работа носом",
              "summary": "Как работает обоняние при поиске, нейробиология нюхательной активности и её эффекты.",
              "outcomes": [
                "Нейробиология обоняния",
                "Как собака отслеживает запаховый след",
                "Почему нюхание успокаивает",
                "Нюхательная активность как обогащение"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "search-002",
          "translations": {
            "en": {
              "title": "Types of search work for companion and service",
              "summary": "Search as a leisure activity vs official work: goals, methods, requirements.",
              "outcomes": [
                "Finding a motivator as the first game",
                "Sports manhunt and burrow work",
                "Service search: requirements and standards",
                "Selecting a search type for a dog"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Rodzaje poszukiwań towarzysza i usługi",
              "summary": "Poszukiwanie jako rozrywka a praca oficjalna: cele, metody, wymagania.",
              "outcomes": [
                "Znalezienie motywatora jak w pierwszej grze",
                "Polowanie sportowe i praca w norach",
                "Wyszukiwanie usług: wymagania i standardy",
                "Wybór typu wyszukiwania psa"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Виды поисковой работы для компаньона и службы",
              "summary": "Поиск как досуговая активность vs служебная работа: цели, методы, требования.",
              "outcomes": [
                "Поиск мотиватора как первая игра",
                "Спортивный манхант и норная работа",
                "Служебный поиск: требования и стандарты",
                "Выбор вида поиска под собаку"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "search-003",
          "translations": {
            "en": {
              "title": "Competent organization of search training",
              "summary": "Errors when entering a search, requirements for the site, pace of learning, age of start.",
              "outcomes": [
                "Optimal age to start searching",
                "Requirements for the site and conditions",
                "Typical beginner mistakes",
                "Progression Rate: Rules"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Kompetentna organizacja szkoleń poszukiwawczych",
              "summary": "Błędy przy wprowadzaniu wyszukiwania, wymagania dotyczące witryny, tempo nauki, wiek rozpoczęcia.",
              "outcomes": [
                "Optymalny wiek do rozpoczęcia poszukiwań",
                "Wymagania dotyczące miejsca i warunków",
                "Typowe błędy początkujących",
                "Tempo postępu: zasady"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Грамотная организация обучения поиску",
              "summary": "Ошибки при введении поиска, требования к площадке, темп обучения, возраст начала.",
              "outcomes": [
                "Оптимальный возраст начала поиска",
                "Требования к площадке и условиям",
                "Типичные ошибки начинающих",
                "Темп усложнения: правила"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "search-004",
          "translations": {
            "en": {
              "title": "Finding a motivator. Teaching methods. Complication",
              "summary": "Introduction of a toy/treat as a search object, complication scheme, transition to new objects.",
              "outcomes": [
                "Introduction of a motivator as a search goal",
                "Teaching methods: from simple to complex",
                "Complication scheme: 10 steps",
                "Move to a new search item"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Znalezienie motywatora. Metody nauczania. Powikłanie",
              "summary": "Wprowadzenie zabawki/smakołu jako obiektu wyszukiwania, schemat komplikacji, przejście do nowych obiektów.",
              "outcomes": [
                "Wprowadzenie motywatora jako celu poszukiwań",
                "Metody nauczania: od prostych do złożonych",
                "Schemat komplikacji: 10 kroków",
                "Przejdź do nowego elementu wyszukiwania"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Поиск мотиватора. Методы обучения. Усложнение",
              "summary": "Введение игрушки/лакомства как предмета поиска, схема усложнения, переход к новым предметам.",
              "outcomes": [
                "Введение мотиватора как цели поиска",
                "Методы обучения: от простого к сложному",
                "Схема усложнения: 10 шагов",
                "Переход к новому предмету поиска"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "search-005",
          "translations": {
            "en": {
              "title": "Local search and alert signal",
              "summary": "Search in natural conditions, indication training, final complete search scheme.",
              "outcomes": [
                "Features of local search",
                "Types of indication (passive, active)",
                "Alarm training",
                "The final scheme of the full search cycle"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Lokalne wyszukiwanie i sygnał ostrzegawczy",
              "summary": "Poszukiwanie w warunkach naturalnych, szkolenie w zakresie wskazań, końcowy kompletny schemat poszukiwań.",
              "outcomes": [
                "Funkcje wyszukiwania lokalnego",
                "Rodzaje sygnalizacji (pasywne, aktywne)",
                "Szkolenie alarmowe",
                "Ostateczny schemat pełnego cyklu poszukiwań"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Поиск на местности и сигнал оповещения",
              "summary": "Поиск в природных условиях, обучение индикации, финальная схема полного поиска.",
              "outcomes": [
                "Особенности поиска на местности",
                "Виды индикации (пассивная, активная)",
                "Обучение сигналу оповещения",
                "Финальная схема полного цикла поиска"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "puppies",
      "translations": {
        "en": {
          "label": "Puppies and age",
          "summary": "Developmental stages, age periods, socialization, and the growing dog."
        },
        "pl": {
          "label": "Szczenie i wiek",
          "summary": "Etapy rozwoju, okresy wiekowe, socjalizacja i dorastajacy pies."
        },
        "ru": {
          "label": "Щенки и возраст",
          "summary": "Щенки и возраст"
        }
      },
      "lessons": [
        {
          "id": "puppies-001",
          "translations": {
            "en": {
              "title": "Puppies: prenatal and postnatal development",
              "summary": "Sensitive periods, periods of fearfulness, the effect of maternal stress on puppies.",
              "outcomes": [
                "Prenatal stress and its consequences",
                "Sensitive periods according to Scott & Fuller",
                "Primary insurance period (8–10 weeks)",
                "Socialization window: don't miss it"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Szczenięta: rozwój prenatalny i postnatalny",
              "summary": "Okresy wrażliwe, okresy lęku, wpływ stresu matki na szczenięta.",
              "outcomes": [
                "Stres prenatalny i jego skutki",
                "Wrażliwe okresy według Scotta i Fullera",
                "Podstawowy okres ubezpieczenia (8–10 tygodni)",
                "Okno socjalizacji: nie przegap tego"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Щенки: пренатальное и постнатальное развитие",
              "summary": "Сенситивные периоды, периоды пугливости, влияние стресса матери на щенков.",
              "outcomes": [
                "Пренатальный стресс и его последствия",
                "Периоды чувствительности по Scott & Fuller",
                "Первичный страховой период (8–10 недель)",
                "Социализационное окно: не упустить"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "puppies-002",
          "translations": {
            "en": {
              "title": "Puppies: Special Needs Before Moving",
              "summary": "Mother's behavior, socialization in the litter, what the breeder should do before 8 weeks.",
              "outcomes": [
                "The role of the mother in the development of puppies",
                "Early neurostimulation (ENS program)",
                "Socialization in the litter: what to introduce",
                "Signs of a good breeder"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Szczenięta: specjalne potrzeby przed przeprowadzką",
              "summary": "Zachowanie matki, socjalizacja w miocie, co hodowca powinien zrobić przed 8 tygodniem.",
              "outcomes": [
                "Rola matki w rozwoju szczeniąt",
                "Wczesna neurostymulacja (program ENS)",
                "Socjalizacja w miocie: co wprowadzić",
                "Oznaki dobrego hodowcy"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Щенки: особые потребности до переезда",
              "summary": "Поведение матери, социализация в помёте, что должен сделать заводчик до 8 недель.",
              "outcomes": [
                "Роль матери в развитии щенков",
                "Ранняя нейростимуляция (программа ENS)",
                "Социализация в помёте: с чем знакомить",
                "Признаки хорошего заводчика"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "puppies-003",
          "translations": {
            "en": {
              "title": "Puppies: moving and life in a new family",
              "summary": "The first days, learning to be left alone, myths and stop methods for raising puppies.",
              "outcomes": [
                "First 72 hours in a new home",
                "Learning to be alone from day one",
                "Myths about puppies: top 10",
                "Stop methods: what is strictly forbidden"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Szczenięta: przeprowadzka i życie w nowej rodzinie",
              "summary": "Pierwsze dni, nauka zostawania w spokoju, mity i metody zatrzymania wychowania szczeniąt.",
              "outcomes": [
                "Pierwsze 72 godziny w nowym domu",
                "Naucz się być sam od pierwszego dnia",
                "Mity na temat szczeniąt: top 10",
                "Metody zatrzymania: co jest surowo zabronione"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Щенки: переезд и жизнь в новой семье",
              "summary": "Первые дни, приучение оставаться одному, мифы и стоп-методы воспитания щенков.",
              "outcomes": [
                "Первые 72 часа в новом доме",
                "Приучение оставаться одному с первого дня",
                "Мифы о щенках: топ-10",
                "Стоп-методы: что категорически нельзя"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "puppies-004",
          "translations": {
            "en": {
              "title": "Puppies: initial training, walks, classes",
              "summary": "What and how to teach a puppy, safe socialization, age-appropriate stress.",
              "outcomes": [
                "What to learn in the first months",
                "Rules for safe socialization",
                "Loads by age: 5 minute rule",
                "Walking before vaccinations: pros and cons"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Szczenięta: szkolenie wstępne, spacery, zajęcia",
              "summary": "Czego i jak uczyć szczenię, bezpiecznej socjalizacji, stresu odpowiedniego do wieku.",
              "outcomes": [
                "Czego się uczyć w pierwszych miesiącach",
                "Zasady bezpiecznej socjalizacji",
                "Ładunki według wieku: zasada 5 minut",
                "Chodzenie przed szczepieniami: zalety i wady"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Щенки: начальное обучение, прогулки, занятия",
              "summary": "Что и как учить щенка, безопасная социализация, нагрузки по возрасту.",
              "outcomes": [
                "Что учить в первые месяцы",
                "Правила безопасной социализации",
                "Нагрузки по возрасту: правило 5 минут",
                "Прогулки до прививок: за и против"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        },
        {
          "id": "puppies-005",
          "translations": {
            "en": {
              "title": "Teenagers: features of education",
              "summary": "Behavior of teenagers, why an obedient puppy “broke”, how to build interaction.",
              "outcomes": [
                "Why the teenager “forgot everything”",
                "The role of dopamine in adolescent behavior",
                "How to interact without conflicts",
                "Teaching a teenager: features"
              ],
              "materials": [
                "Lecture notes",
                "Slides or diagrams",
                "Practice assignment or worksheet"
              ]
            },
            "pl": {
              "title": "Nastolatki: cechy edukacji",
              "summary": "Zachowania nastolatków, dlaczego posłuszny szczeniak „zepsuł się”, jak budować interakcję.",
              "outcomes": [
                "Dlaczego nastolatek „zapomniał o wszystkim”",
                "Rola dopaminy w zachowaniu nastolatków",
                "Jak współdziałać bez konfliktów",
                "Nauczanie nastolatka: cechy"
              ],
              "materials": [
                "Notatki z lekcji",
                "Slajdy lub diagramy",
                "Zadanie praktyczne lub arkusz pracy"
              ]
            },
            "ru": {
              "title": "Подростки: особенности воспитания",
              "summary": "Поведение подростков, почему «сломался» послушный щенок, как выстраивать взаимодействие.",
              "outcomes": [
                "Почему подросток «забыл всё»",
                "Роль дофамина в подростковом поведении",
                "Как взаимодействовать без конфликтов",
                "Обучение подростка: особенности"
              ],
              "materials": [
                "Конспект лекции",
                "Иллюстрации или слайды по теме",
                "Рабочие заметки или домашнее задание"
              ]
            }
          }
        }
      ]
    }
  ]
};
