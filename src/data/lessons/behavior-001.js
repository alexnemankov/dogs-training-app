export default {
  "id": "behavior-001",
  "translations": {
    "en": {
      "title": "The Philosophy of Behaviourism. How to 'Read' a Dog Through Symptoms",
      "summary": "Lesson 1: the Behaviour Iceberg concept, the difference between observation and interpretation, the S-O-R-C formula, and the LIMA principle with the Five Freedoms.",
      "outcomes": [
        "The Behaviour Iceberg: visible symptoms and their hidden causes",
        "How to separate observation from interpretation — the Camera Rule",
        "The S-O-R-C formula for analysing any behaviour",
        "The LIMA principle and Five Freedoms as the foundation of ethical practice"
      ],
      "article": [
        {
          "type": "section",
          "title": "Introduction: The Dog as a Closed Book",
          "paragraphs": [
            "Imagine arriving in a country whose language you don't know. You see a local waving their arms and shouting loudly. Is it anger, a call for help, or a warning about an approaching storm?",
            "Most dog owners are in exactly that situation. When a dog barks, they see 'bad behaviour'. A behaviourist, on the other hand, sees a message. Our goal on this course is to learn that language."
          ]
        },
        {
          "type": "section",
          "title": "Part 1. The Behaviour Iceberg Concept",
          "paragraphs": [
            "The first thing to understand: behaviour is only the tip of the iceberg. Click each cause below to explore what drives the visible symptoms."
          ]
        },
        {
          "type": "iceberg",
          "aboveLabel": "Above water — visible symptoms",
          "belowLabel": "Below water — hidden causes",
          "above": ["Barking", "Jumping up", "Aggression", "Digging", "Refusing lead"],
          "below": [
            { "label": "Physiology", "color": "#c97b22", "items": ["Pain", "Hunger", "Hormonal state", "Lack of sleep"] },
            { "label": "Emotions", "color": "#3a7d9e", "items": ["Fear", "Frustration", "Joy", "Anxiety"] },
            { "label": "Environment", "color": "#4a8a5c", "items": ["Too noisy", "Too crowded", "Lack of safety"] },
            { "label": "Genetics", "color": "#7a52a8", "items": ["Breed instincts", "Herding drive", "Prey drive"] }
          ]
        },
        {
          "type": "callout",
          "tone": "accent",
          "label": "Key conclusion",
          "paragraphs": [
            "It is pointless to 'cut off' the tip of the iceberg (ban the barking) if we are not working with what lies beneath the surface. If a dog barks from fear and we punish it for that, the fear does not go away — it simply finds another outlet, for example through biting."
          ]
        },
        {
          "type": "section",
          "title": "Part 2. Observation vs Interpretation",
          "paragraphs": [
            "This is the hardest skill for humans. We are social beings prone to anthropomorphism — attributing human qualities to animals. Tap each card below: is it observation or interpretation?"
          ]
        },
        {
          "type": "flipCards",
          "title": "Observation or Interpretation? Tap each card to find out.",
          "tapHint": "Tap to reveal",
          "interpretationLabel": "Interpretation ✗",
          "observationLabel": "Observation ✓",
          "doneMessage": "All done! The Camera Rule in action.",
          "items": [
            { "front": "\"He does this to spite me\"", "isInterpretation": true, "explanation": "Cannot be filmed. 'Spite' is a human motive." },
            { "front": "\"He knows he is guilty\"", "isInterpretation": true, "explanation": "Cannot be measured. Appeasement signals look like guilt but serve a different function." },
            { "front": "Ears pressed flat, tail tucked, body low, lips licking", "isInterpretation": false, "explanation": "Fully observable. Describes body posture and actions." },
            { "front": "\"She's just being stubborn\"", "isInterpretation": true, "explanation": "Cannot be filmed. 'Stubbornness' is an interpretation of unwanted behaviour." },
            { "front": "Dog stepped 1 metre away, turned its back, yawned twice", "isInterpretation": false, "explanation": "Fully observable. Distance, direction, and frequency are all measurable." },
            { "front": "\"He's dominating the family\"", "isInterpretation": true, "explanation": "Outdated concept. Not directly observable or measurable." },
            { "front": "Dog growled and snapped when a hand reached toward its bowl", "isInterpretation": false, "explanation": "Fully observable. Stimulus and response described in factual terms." }
          ]
        },
        {
          "type": "callout",
          "tone": "accent",
          "label": "The Camera Rule",
          "paragraphs": [
            "If what you are describing cannot be filmed and measured — for example 'resentment' cannot be measured, but 'frequency of nose-licking' can — it is your interpretation, not a fact. To help the dog we must operate with facts alone."
          ]
        },
        {
          "type": "numberedList",
          "title": "Part 3. The S-O-R-C Formula: Breaking Behaviour Down to Atoms",
          "intro": "To understand any action of the dog, we use a scientific analysis model.",
          "items": [
            { "title": "S — Stimulus / Signal", "text": "What happened a moment before the action? (Doorbell rang, a cat ran past.)" },
            { "title": "O — Organism", "text": "Who is this dog? Did it sleep well today? Is it young or old? Do its joints hurt? Is it hungry?" },
            { "title": "R — Response", "text": "What exactly did it do? (Jumped at the door, growled.)" },
            { "title": "C — Consequence", "text": "How did it end? (Owner shouted = attention received; cat ran away = victory.)" }
          ]
        },
        {
          "type": "callout",
          "tone": "success",
          "label": "Why this matters",
          "paragraphs": [
            "If the consequence (C) benefits the dog, it will repeat the behaviour again and again. Understanding what the dog gains is the key to changing the pattern."
          ]
        },
        {
          "type": "sorcBuilder",
          "title": "Now apply the formula to your own dog's behaviour",
          "labels": { "S": "Stimulus", "O": "Organism", "R": "Response", "C": "Consequence" },
          "placeholders": {
            "S": "e.g. Doorbell rang",
            "O": "e.g. Dog was alone for 3 hours, slightly hungry",
            "R": "e.g. Jumped at the door, barked 5 times",
            "C": "e.g. Owner shouted — attention received"
          },
          "resultLabel": "Your analysis:",
          "resetLabel": "Reset"
        },
        {
          "type": "section",
          "title": "Part 4. Ethics: The LIMA Principle and Five Freedoms",
          "paragraphs": [
            "We work according to the LIMA system — Least Intrusive, Minimally Aversive — choosing the gentlest and most effective path.",
            "Before teaching a dog anything new, we must verify that its Five Freedoms are being met."
          ]
        },
        {
          "type": "checkList",
          "title": "The Five Freedoms",
          "items": [
            { "title": "Freedom from thirst and hunger", "text": "Constant access to fresh water and adequate nutrition." },
            { "title": "Freedom from discomfort", "text": "A comfortable sleeping place and a safe home environment." },
            { "title": "Freedom from pain and disease", "text": "Timely veterinary care and prevention." },
            { "title": "Freedom to express natural behaviour", "text": "Opportunities to dig, sniff, play, and socialise." },
            { "title": "Freedom from fear and stress", "text": "An environment in which the dog feels safe and in control." }
          ]
        },
        {
          "type": "callout",
          "tone": "accent",
          "label": "Important",
          "paragraphs": [
            "If even one of the Five Freedoms is violated, behaviour will break down and no training will help. Check welfare before starting any correction work."
          ]
        },
        {
          "type": "numberedList",
          "title": "Practical Assignment: The Detective Exercise",
          "intro": "Choose one behaviour of your dog that you dislike — for example, it jumps on you when you come home. Break it down using the S-O-R-C formula.",
          "items": [
            { "title": "Identify the stimulus (S)", "text": "What happens in the second before the behaviour? Who or what triggers it?" },
            { "title": "Assess the organism (O)", "text": "What is the dog's state at that moment? Tired, excited, hungry, in pain?" },
            { "title": "Describe the response (R)", "text": "What exactly does the dog do? Use only verbs and measurable facts — no interpretations." },
            { "title": "Find the consequence (C)", "text": "What does the dog get as a result? Attention, space, food, withdrawal of a threat?" }
          ]
        },
        {
          "type": "callout",
          "tone": "success",
          "label": "Camera exercise",
          "paragraphs": [
            "Try to describe the behaviour for 2 minutes using only verbs and facts, as if you were an impartial video camera. This is the first step towards genuine cooperation with your dog."
          ]
        },
        {
          "type": "quote",
          "quote": "This lesson is your entry ticket into a world where you no longer fight your dog, but begin to cooperate with it.",
          "caption": "A practical principle of humane dog training"
        },
        {
          "type": "glossary",
          "title": "Glossary: Key Concepts of the Lesson",
          "items": [
            { "term": "Behaviour Iceberg", "definition": "A model showing that visible behaviour (symptoms) is driven by hidden causes: physiology, emotions, environment, and genetics." },
            { "term": "Anthropomorphism", "definition": "The attribution of human feelings, motives, and qualities to animals, which distorts objective observation." },
            { "term": "Camera Rule", "definition": "Describe only what can be filmed and measured. If it cannot be measured, it is interpretation, not fact." },
            { "term": "S-O-R-C", "definition": "Stimulus — Organism — Response — Consequence: a four-part model for analysing any behaviour." },
            { "term": "LIMA", "definition": "Least Intrusive, Minimally Aversive: choosing the gentlest and most effective method available." },
            { "term": "Five Freedoms", "definition": "A welfare framework ensuring the dog is free from hunger, discomfort, pain, unnatural restriction, and fear." }
          ]
        }
      ]
    },
    "pl": {
      "title": "Filozofia behawiorystyki. Jak «czytać» psa poprzez objawy",
      "summary": "Lekcja 1: koncepcja «Góry Lodowej Zachowania», różnica między obserwacją a interpretacją, formuła S-O-R-C oraz zasada LIMA i Pięć Wolności.",
      "outcomes": [
        "Góra Lodowa Zachowania: widoczne objawy i ich ukryte przyczyny",
        "Jak oddzielić obserwację od interpretacji — zasada «Kamery»",
        "Formuła S-O-R-C do analizy każdego zachowania",
        "Zasada LIMA i Pięć Wolności jako fundament etycznej pracy"
      ],
      "article": [
        {
          "type": "section",
          "title": "Wprowadzenie: Pies jako zamknięta książka",
          "paragraphs": [
            "Wyobraź sobie, że przyjeżdżasz do kraju, którego języka nie znasz. Widzisz, jak miejscowy macha rękami i głośno krzyczy. Czy to złość, prośba o pomoc, czy ostrzeżenie przed nadciągającą burzą?",
            "Większość właścicieli psów jest dokładnie w takiej sytuacji. Gdy pies szczeka, widzą «złe zachowanie». Behawiorysta widzi natomiast komunikat. Naszym celem na tym kursie jest nauczenie się tego języka."
          ]
        },
        {
          "type": "section",
          "title": "Część 1. Koncepcja «Góry Lodowej Zachowania»",
          "paragraphs": [
            "Pierwsza rzecz do przyswojenia: zachowanie to tylko czubek góry lodowej. Kliknij każdą przyczynę poniżej, aby zobaczyć, co kryje się pod powierzchnią."
          ]
        },
        {
          "type": "iceberg",
          "aboveLabel": "Nad wodą — widoczne objawy",
          "belowLabel": "Pod wodą — ukryte przyczyny",
          "above": ["Szczekanie", "Skakanie", "Agresja", "Kopanie dołów", "Odmowa smyczy"],
          "below": [
            { "label": "Fizjologia", "color": "#c97b22", "items": ["Ból", "Głód", "Hormony", "Niedobór snu"] },
            { "label": "Emocje", "color": "#3a7d9e", "items": ["Strach", "Frustracja", "Radość", "Lęk"] },
            { "label": "Środowisko", "color": "#4a8a5c", "items": ["Hałas", "Ciasnota", "Brak bezpieczeństwa"] },
            { "label": "Genetyka", "color": "#7a52a8", "items": ["Instynkty rasowe", "Instynkt pasterski", "Instynkt łowiecki"] }
          ]
        },
        {
          "type": "callout",
          "tone": "accent",
          "label": "Główny wniosek",
          "paragraphs": [
            "Nie ma sensu próbować «odcinać» czubka góry lodowej (zakazywać szczekania), jeśli nie pracujemy z tym, co leży pod powierzchnią. Jeśli pies szczeka ze strachu, a my go za to karzemy, strach nigdzie nie znika — szuka po prostu innego ujścia, na przykład przez ugryzienie."
          ]
        },
        {
          "type": "section",
          "title": "Część 2. Obserwacja vs Interpretacja",
          "paragraphs": [
            "To najtrudniejsza umiejętność dla człowieka. Jesteśmy istotami społecznymi skłonnymi do antropomorfizmu — przypisywania zwierzętom ludzkich cech. Kliknij każdą kartę: to obserwacja czy interpretacja?"
          ]
        },
        {
          "type": "flipCards",
          "title": "Obserwacja czy interpretacja? Kliknij każdą kartę.",
          "tapHint": "Kliknij, aby odkryć",
          "interpretationLabel": "Interpretacja ✗",
          "observationLabel": "Obserwacja ✓",
          "doneMessage": "Świetnie! Zasada Kamery w działaniu.",
          "items": [
            { "front": "«Robi to mi na złość»", "isInterpretation": true, "explanation": "Nie można sfilmować. «Złośliwość» to ludzki motyw." },
            { "front": "«On wie, że jest winny»", "isInterpretation": true, "explanation": "Nie da się zmierzyć. Sygnały appeasementu wyglądają jak wina, ale pełnią inną funkcję." },
            { "front": "Uszy przyciśnięte, ogon podwinięty, ciało nisko, oblizuje nos", "isInterpretation": false, "explanation": "W pełni obserwowalne. Opisuje postawę i działania ciała." },
            { "front": "«Ona jest po prostu uparta»", "isInterpretation": true, "explanation": "Nie można sfilmować. «Upór» to interpretacja niepożądanego zachowania." },
            { "front": "Pies odsunął się 1 m, odwrócił się tyłem, ziewnął dwukrotnie", "isInterpretation": false, "explanation": "W pełni obserwowalne. Dystans, kierunek i częstotliwość są mierzalne." },
            { "front": "«Dominuje nad rodziną»", "isInterpretation": true, "explanation": "Przestarzała koncepcja. Nie jest bezpośrednio obserwowalna ani mierzalna." },
            { "front": "Pies warknął i szarpnął, gdy ręka zbliżyła się do jego miski", "isInterpretation": false, "explanation": "W pełni obserwowalne. Bodziec i reakcja opisane w kategoriach faktycznych." }
          ]
        },
        {
          "type": "callout",
          "tone": "accent",
          "label": "Zasada «Kamery»",
          "paragraphs": [
            "Jeśli tego, co opisujesz, nie można sfilmować i zmierzyć — na przykład «urazy» nie da się zmierzyć, ale «częstotliwość oblizywania nosa» już tak — to jest twoja interpretacja, nie fakt. Aby pomóc psu, musimy operować wyłącznie faktami."
          ]
        },
        {
          "type": "numberedList",
          "title": "Część 3. Formuła S-O-R-C: Rozkładanie zachowania na atomy",
          "intro": "Aby zrozumieć dowolne działanie psa, używamy naukowego modelu analizy.",
          "items": [
            { "title": "S — Bodziec / Sygnał", "text": "Co wydarzyło się chwilę przed działaniem? (Zadzwonił dzwonek, przebiegł kot.)" },
            { "title": "O — Organizm", "text": "Kim jest ten pies? Czy dobrze spał? Jest młody czy stary? Czy bolą go stawy? Czy jest najedzony?" },
            { "title": "R — Reakcja", "text": "Co dokładnie zrobił? (Rzucił się na drzwi, warknął.)" },
            { "title": "C — Konsekwencja", "text": "Czym się skończyło? (Właściciel krzyknął = uwaga uzyskana; kot uciekł = zwycięstwo.)" }
          ]
        },
        {
          "type": "callout",
          "tone": "success",
          "label": "Dlaczego to ważne",
          "paragraphs": [
            "Jeśli konsekwencja (C) jest korzystna dla psa, będzie powtarzał to zachowanie wciąż i wciąż. Zrozumienie tego, co pies zyskuje, jest kluczem do zmiany wzorca."
          ]
        },
        {
          "type": "sorcBuilder",
          "title": "Teraz zastosuj formułę do zachowania swojego psa",
          "labels": { "S": "Bodziec", "O": "Organizm", "R": "Reakcja", "C": "Konsekwencja" },
          "placeholders": {
            "S": "np. Zadzwonił dzwonek",
            "O": "np. Pies był sam przez 3 godziny, lekko głodny",
            "R": "np. Rzucił się na drzwi, zaszczekał 5 razy",
            "C": "np. Właściciel krzyknął — uwaga uzyskana"
          },
          "resultLabel": "Twoja analiza:",
          "resetLabel": "Resetuj"
        },
        {
          "type": "section",
          "title": "Część 4. Etyka: Zasada LIMA i Pięć Wolności",
          "paragraphs": [
            "Pracujemy zgodnie z systemem LIMA — Least Intrusive, Minimally Aversive — wybierając najłagodniejszą i najskuteczniejszą ścieżkę.",
            "Zanim zaczniemy uczyć psa czegokolwiek nowego, musimy sprawdzić, czy jego Pięć Wolności jest zachowanych."
          ]
        },
        {
          "type": "checkList",
          "title": "Pięć Wolności",
          "items": [
            { "title": "Wolność od pragnienia i głodu", "text": "Stały dostęp do świeżej wody i odpowiednie żywienie." },
            { "title": "Wolność od dyskomfortu", "text": "Wygodne miejsce do spania i bezpieczne środowisko domowe." },
            { "title": "Wolność od bólu i chorób", "text": "Terminowa opieka weterynaryjna i profilaktyka." },
            { "title": "Wolność do wyrażania naturalnych zachowań", "text": "Możliwość kopania, węszenia, zabawy i kontaktów społecznych." },
            { "title": "Wolność od strachu i stresu", "text": "Środowisko, w którym pies czuje się bezpiecznie i ma poczucie kontroli." }
          ]
        },
        {
          "type": "callout",
          "tone": "accent",
          "label": "Ważne",
          "paragraphs": [
            "Jeśli choć jedna z Pięciu Wolności jest naruszona, zachowanie zacznie się «łamać» i żaden trening nie pomoże. Sprawdź dobrostan przed rozpoczęciem jakiejkolwiek pracy korekcyjnej."
          ]
        },
        {
          "type": "numberedList",
          "title": "Zadanie praktyczne: Ćwiczenie «Detektyw»",
          "intro": "Wybierz jedno zachowanie swojego psa, które ci przeszkadza — na przykład skacze na ciebie po powrocie do domu. Rozłóż je według formuły S-O-R-C.",
          "items": [
            { "title": "Zidentyfikuj bodziec (S)", "text": "Co dzieje się w chwili przed zachowaniem? Kto lub co je wyzwala?" },
            { "title": "Oceń organizm (O)", "text": "W jakim stanie jest pies w tym momencie? Zmęczony, pobudzony, głodny, w bólu?" },
            { "title": "Opisz reakcję (R)", "text": "Co dokładnie robi pies? Używaj tylko czasowników i mierzalnych faktów — bez interpretacji." },
            { "title": "Znajdź konsekwencję (C)", "text": "Co pies zyskuje w wyniku tego zachowania? Uwagę, przestrzeń, jedzenie, wycofanie zagrożenia?" }
          ]
        },
        {
          "type": "callout",
          "tone": "success",
          "label": "Ćwiczenie z kamerą",
          "paragraphs": [
            "Spróbuj opisywać zachowanie przez 2 minuty, używając tylko czasowników i faktów, jakbyś był bezstronną kamerą wideo. To pierwszy krok ku prawdziwej współpracy z psem."
          ]
        },
        {
          "type": "quote",
          "quote": "Ta lekcja to twój bilet wstępu do świata, w którym nie walczysz już z psem, ale zaczynasz z nim współpracować.",
          "caption": "Praktyczna zasada humanitarnej kynologii"
        },
        {
          "type": "glossary",
          "title": "Słownik: Kluczowe pojęcia lekcji",
          "items": [
            { "term": "Góra Lodowa Zachowania", "definition": "Model pokazujący, że widoczne zachowanie (objawy) jest napędzane przez ukryte przyczyny: fizjologię, emocje, środowisko i genetykę." },
            { "term": "Antropomorfizm", "definition": "Przypisywanie zwierzętom ludzkich uczuć, motywów i cech, co zniekształca obiektywną obserwację." },
            { "term": "Zasada «Kamery»", "definition": "Opisuj tylko to, co można sfilmować i zmierzyć. Jeśli nie można tego zmierzyć, jest to interpretacja, nie fakt." },
            { "term": "S-O-R-C", "definition": "Bodziec — Organizm — Reakcja — Konsekwencja: czteroczęściowy model analizy dowolnego zachowania." },
            { "term": "LIMA", "definition": "Least Intrusive, Minimally Aversive: wybieranie najłagodniejszej i najskuteczniejszej dostępnej metody." },
            { "term": "Pięć Wolności", "definition": "Ramy dobrostanu zapewniające psu wolność od głodu, dyskomfortu, bólu, nienaturalnych ograniczeń i strachu." }
          ]
        }
      ]
    },
    "ru": {
      "title": "Философия бихевиористики. Как «читать» собаку сквозь симптомы",
      "summary": "Лекция 1: концепция «Айсберга поведения», разница между наблюдением и интерпретацией, формула S-O-R-C и принцип LIMA с Пятью свободами.",
      "outcomes": [
        "«Айсберг поведения»: видимые симптомы и их скрытые причины",
        "Как отделить наблюдение от интерпретации — правило «Видеокамеры»",
        "Формула S-O-R-C для анализа любого поведения",
        "Принцип LIMA и Пять свобод как основа этичной работы"
      ],
      "article": [
        {
          "type": "section",
          "title": "Введение: Собака как закрытая книга",
          "paragraphs": [
            "Представьте, что вы приехали в страну, языка которой не знаете. Вы видите, как местный житель машет руками и громко кричит. Что это: он злится, просит о помощи или предупреждает о надвигающемся шторме?",
            "Большинство владельцев собак находятся в такой же ситуации. Когда собака лает, они видят «плохое поведение». Бихевиорист же видит сообщение. Наша задача на этом курсе — выучить этот язык."
          ]
        },
        {
          "type": "section",
          "title": "Часть 1. Концепция «Айсберга поведения»",
          "paragraphs": [
            "Первое, что нужно усвоить: поведение — это только верхушка айсберга. Нажмите на каждую причину ниже, чтобы увидеть, что скрывается под поверхностью."
          ]
        },
        {
          "type": "iceberg",
          "aboveLabel": "Над водой — видимые симптомы",
          "belowLabel": "Под водой — скрытые причины",
          "above": ["Лай", "Прыжки", "Агрессия", "Рытьё ям", "Отказ от поводка"],
          "below": [
            { "label": "Физиология", "color": "#c97b22", "items": ["Боль", "Голод", "Гормональный фон", "Недосып"] },
            { "label": "Эмоции", "color": "#3a7d9e", "items": ["Страх", "Фрустрация", "Радость", "Тревога"] },
            { "label": "Среда", "color": "#4a8a5c", "items": ["Шум", "Теснота", "Нет безопасности"] },
            { "label": "Генетика", "color": "#7a52a8", "items": ["Породные инстинкты", "Пастуший инстинкт", "Охотничий инстинкт"] }
          ]
        },
        {
          "type": "callout",
          "tone": "accent",
          "label": "Главный вывод",
          "paragraphs": [
            "Бессмысленно пытаться «срезать» верхушку айсберга (запрещать лай), если мы не работаем с тем, что находится под водой. Если собака лает от страха, а мы её за это наказываем, страх никуда не уходит — он просто ищет другой выход, например через укус."
          ]
        },
        {
          "type": "section",
          "title": "Часть 2. Наблюдение vs Интерпретация",
          "paragraphs": [
            "Это самый сложный навык для человека. Мы — социальные существа, склонные к антропоморфизму — приписыванию животным человеческих качеств. Нажмите на каждую карточку: наблюдение или интерпретация?"
          ]
        },
        {
          "type": "flipCards",
          "title": "Наблюдение или интерпретация? Нажмите на каждую карточку.",
          "tapHint": "Нажмите, чтобы узнать",
          "interpretationLabel": "Интерпретация ✗",
          "observationLabel": "Наблюдение ✓",
          "doneMessage": "Отлично! Правило «Видеокамеры» в действии.",
          "items": [
            { "front": "«Он делает это мне назло»", "isInterpretation": true, "explanation": "Нельзя заснять. «Назло» — человеческий мотив." },
            { "front": "«Он понимает, что виноват»", "isInterpretation": true, "explanation": "Нельзя измерить. Сигналы примирения похожи на вину, но выполняют иную функцию." },
            { "front": "Уши прижаты, хвост поджат, тело низко, облизывает морду", "isInterpretation": false, "explanation": "Полностью наблюдаемо. Описывает позу и действия тела." },
            { "front": "«Она просто упрямая»", "isInterpretation": true, "explanation": "Нельзя заснять. «Упрямство» — интерпретация нежелательного поведения." },
            { "front": "Собака отошла на 1 метр, повернулась спиной, зевнула дважды", "isInterpretation": false, "explanation": "Полностью наблюдаемо. Дистанция, направление и частота — всё измеримо." },
            { "front": "«Он доминирует над семьёй»", "isInterpretation": true, "explanation": "Устаревшая концепция. Не поддаётся прямому наблюдению или измерению." },
            { "front": "Собака зарычала и щёлкнула зубами, когда рука потянулась к миске", "isInterpretation": false, "explanation": "Полностью наблюдаемо. Стимул и реакция описаны в фактических терминах." }
          ]
        },
        {
          "type": "callout",
          "tone": "accent",
          "label": "Правило «Видеокамеры»",
          "paragraphs": [
            "Если то, что вы описываете, нельзя заснять на камеру и измерить — например «обиду» нельзя измерить, а «частоту облизывания морды» можно — значит, это ваша интерпретация, а не факт. Чтобы помочь собаке, мы должны оперировать только фактами."
          ]
        },
        {
          "type": "numberedList",
          "title": "Часть 3. Формула S-O-R-C: Как разложить поведение на атомы",
          "intro": "Чтобы понять любое действие собаки, мы используем научную модель анализа.",
          "items": [
            { "title": "S — Стимул / Сигнал", "text": "Что произошло за секунду до действия? (Зазвонил звонок, пробежала кошка.)" },
            { "title": "O — Организм", "text": "Кто эта собака? Она сегодня выспалась? Молодая или старая? У неё болят суставы? Она сыта?" },
            { "title": "R — Реакция", "text": "Что именно она сделала? (Прыгнула на дверь, зарычала.)" },
            { "title": "C — Последствие", "text": "Чем всё закончилось? (Хозяин прикрикнул = внимание получено; кошка убежала = победа.)" }
          ]
        },
        {
          "type": "callout",
          "tone": "success",
          "label": "Почему это важно",
          "paragraphs": [
            "Если последствие (C) выгодно собаке, она будет повторять это поведение снова и снова. Понять, что собака получает в итоге, — ключ к изменению паттерна."
          ]
        },
        {
          "type": "sorcBuilder",
          "title": "Теперь примените формулу к поведению вашей собаки",
          "labels": { "S": "Стимул", "O": "Организм", "R": "Реакция", "C": "Последствие" },
          "placeholders": {
            "S": "например: зазвонил звонок",
            "O": "например: собака была одна 3 часа, немного голодна",
            "R": "например: бросилась к двери, залаяла 5 раз",
            "C": "например: хозяин прикрикнул — внимание получено"
          },
          "resultLabel": "Ваш анализ:",
          "resetLabel": "Сбросить"
        },
        {
          "type": "section",
          "title": "Часть 4. Этика: Принцип LIMA и Пять свобод",
          "paragraphs": [
            "Мы работаем по системе LIMA — Least Intrusive, Minimally Aversive — выбирая самый мягкий и эффективный путь.",
            "Прежде чем учить собаку чему-то новому, мы обязаны проверить, соблюдаются ли её Пять свобод."
          ]
        },
        {
          "type": "checkList",
          "title": "Пять свобод",
          "items": [
            { "title": "Свобода от жажды и голода", "text": "Постоянный доступ к чистой воде и полноценное питание." },
            { "title": "Свобода от дискомфорта", "text": "Удобное место для сна и безопасная домашняя среда." },
            { "title": "Свобода от боли и болезней", "text": "Своевременная ветеринарная помощь и профилактика." },
            { "title": "Свобода проявлять естественное поведение", "text": "Возможность копать, нюхать, играть и общаться с сородичами." },
            { "title": "Свобода от страха и стресса", "text": "Среда, в которой собака чувствует себя в безопасности и имеет ощущение контроля." }
          ]
        },
        {
          "type": "callout",
          "tone": "accent",
          "label": "Важно",
          "paragraphs": [
            "Если хотя бы один пункт нарушен — поведение будет «ломаться», и никакая дрессировка не поможет. Проверьте благополучие собаки до начала любой коррекционной работы."
          ]
        },
        {
          "type": "numberedList",
          "title": "Практическое задание: Упражнение «Детектив»",
          "intro": "Выберите одно поведение вашей собаки, которое вам не нравится — например, она прыгает на вас при встрече. Разложите его по формуле S-O-R-C.",
          "items": [
            { "title": "Определите стимул (S)", "text": "Что происходит за секунду до поведения? Кто или что его запускает?" },
            { "title": "Оцените организм (O)", "text": "В каком состоянии собака в этот момент? Уставшая, возбуждённая, голодная, в боли?" },
            { "title": "Опишите реакцию (R)", "text": "Что именно делает собака? Используйте только глаголы и измеримые факты — никаких интерпретаций." },
            { "title": "Найдите последствие (C)", "text": "Что собака получает в итоге? Внимание, пространство, еду, устранение угрозы?" }
          ]
        },
        {
          "type": "callout",
          "tone": "success",
          "label": "Упражнение «Видеокамера»",
          "paragraphs": [
            "Попробуйте описывать поведение в течение 2 минут, используя только глаголы и факты, как будто вы — беспристрастная видеокамера. Это первый шаг к настоящему сотрудничеству с собакой."
          ]
        },
        {
          "type": "quote",
          "quote": "Эта лекция — ваш входной билет в мир, где вы больше не боретесь с собакой, а начинаете с ней сотрудничать.",
          "caption": "Практический принцип гуманной кинологии"
        },
        {
          "type": "glossary",
          "title": "Глоссарий: Ключевые понятия лекции",
          "items": [
            { "term": "Айсберг поведения", "definition": "Модель, показывающая, что видимое поведение (симптомы) определяется скрытыми причинами: физиологией, эмоциями, средой и генетикой." },
            { "term": "Антропоморфизм", "definition": "Приписывание животным человеческих чувств, мотивов и качеств, что искажает объективное наблюдение." },
            { "term": "Правило «Видеокамеры»", "definition": "Описывай только то, что можно заснять и измерить. Если нельзя измерить — это интерпретация, а не факт." },
            { "term": "S-O-R-C", "definition": "Стимул — Организм — Реакция — Последствие: четырёхчастная модель анализа любого поведения." },
            { "term": "LIMA", "definition": "Least Intrusive, Minimally Aversive: выбор самого мягкого и эффективного из доступных методов." },
            { "term": "Пять свобод", "definition": "Система оценки благополучия, обеспечивающая собаке свободу от голода, дискомфорта, боли, неестественных ограничений и страха." }
          ]
        }
      ]
    }
  }
};
