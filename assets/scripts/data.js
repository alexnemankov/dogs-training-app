export const uiText = {
  en: {
    brandKicker: "Bilingual curriculum MVP",
    brandTitle: "Dog Course Planner",
    brandSubtitle:
      "A future-ready course workspace for structured lessons, lecture media, and scalable English or Polish content.",
    introBadge: "Editorial learning shell",
    introTitle: "Built for course growth, not just a one-off page.",
    introCopy:
      "This redesign turns the old single-file planner into a modular front end with a bilingual content model, lesson states, and clean places for images, notes, and downloadable assets.",
    searchLabel: "Search lessons",
    searchPlaceholder: "Search by title, summary, or module",
    filterLabel: "Filter",
    mapTitle: "Course map",
    mapSubtitle: "Modules, lessons, and learner progress",
    filters: {
      all: "All",
      continue: "Continue",
      bookmarked: "Saved",
      video: "Video",
      reading: "Reading",
      workshop: "Workshop"
    },
    stats: {
      seededLessons: "Seeded lessons",
      modules: "Modules",
      completed: "Completed",
      saved: "Saved"
    },
    heroKicker: "Current lesson",
    lessonOverviewTitle: "Lesson overview",
    outcomesTitle: "Learning outcomes",
    materialsTitle: "Suggested materials",
    resourcesTitle: "Content blocks",
    roadmapTitle: "Module roadmap",
    roadmapCopy: "Use this as the editable structure for future lectures.",
    platformTitle: "Future development",
    platformCopy: "This UI is prepared for richer content and a later framework move.",
    primaryAction: "Mark as complete",
    primaryActionDone: "Completed",
    secondaryAction: "Save lesson",
    secondaryActionSaved: "Saved",
    resourceStatusReady: "Ready for production content",
    resourceStatusPlanned: "Planned slot",
    heroVisualEyebrow: "Lecture media",
    heroVisualTitle: "Image-ready layout",
    noResults: "No lessons match this search or filter yet.",
    durationLabel: "Duration",
    levelLabel: "Level",
    moduleLabel: "Module",
    moduleProgressLabel: "done",
    lessonCardCompleted: "Completed lesson",
    lessonCardPending: "In progress"
  },
  pl: {
    brandKicker: "Dwujezyczne MVP programu",
    brandTitle: "Dog Course Planner",
    brandSubtitle:
      "Gotowy na rozwoj workspace kursu z uporzadkowanymi lekcjami, multimediami i skalowalna trescia po angielsku lub polsku.",
    introBadge: "Redakcyjny szkielet nauki",
    introTitle: "Zaprojektowane pod rozwoj kursu, a nie tylko jedna strone.",
    introCopy:
      "Ten redesign zamienia stary planer w modularny front-end z dwujezycznym modelem tresci, stanami lekcji oraz gotowymi miejscami na obrazy, notatki i pliki do pobrania.",
    searchLabel: "Szukaj lekcji",
    searchPlaceholder: "Szukaj po tytule, opisie lub module",
    filterLabel: "Filtr",
    mapTitle: "Mapa kursu",
    mapSubtitle: "Moduly, lekcje i postep uczestnika",
    filters: {
      all: "Wszystkie",
      continue: "Kontynuuj",
      bookmarked: "Zapisane",
      video: "Wideo",
      reading: "Czytanie",
      workshop: "Warsztat"
    },
    stats: {
      seededLessons: "Lekcje startowe",
      modules: "Moduly",
      completed: "Ukonczone",
      saved: "Zapisane"
    },
    heroKicker: "Aktualna lekcja",
    lessonOverviewTitle: "Przeglad lekcji",
    outcomesTitle: "Efekty nauki",
    materialsTitle: "Sugerowane materialy",
    resourcesTitle: "Bloki tresci",
    roadmapTitle: "Plan modulu",
    roadmapCopy: "Traktuj to jako edytowalna strukture dla kolejnych wykladow.",
    platformTitle: "Dalszy rozwoj",
    platformCopy: "Interfejs jest gotowy na bogatsza tresc i pozniejsze przejscie do frameworka.",
    primaryAction: "Oznacz jako ukonczone",
    primaryActionDone: "Ukonczone",
    secondaryAction: "Zapisz lekcje",
    secondaryActionSaved: "Zapisane",
    resourceStatusReady: "Gotowe na tresc produkcyjna",
    resourceStatusPlanned: "Zaplanowane miejsce",
    heroVisualEyebrow: "Media do wykladu",
    heroVisualTitle: "Uklad gotowy na obrazy",
    noResults: "Brak lekcji pasujacych do wyszukiwania lub filtra.",
    durationLabel: "Czas",
    levelLabel: "Poziom",
    moduleLabel: "Modul",
    moduleProgressLabel: "ukonczono",
    lessonCardCompleted: "Lekcja ukonczona",
    lessonCardPending: "W trakcie"
  }
};

export const courseData = {
  stats: {
    seededLessons: 9
  },
  platformNotes: [
    {
      id: "i18n",
      title: {
        en: "Translation-first data shape",
        pl: "Model danych oparty o tlumaczenia"
      },
      description: {
        en: "Every module and lesson already supports separate EN and PL text blocks, so you can add real copy without changing the UI layer.",
        pl: "Kazdy modul i kazda lekcja maja osobne bloki EN i PL, wiec mozesz dodawac tresc bez przebudowy warstwy UI."
      }
    },
    {
      id: "media",
      title: {
        en: "Image and asset slots",
        pl: "Miejsca na obrazy i zasoby"
      },
      description: {
        en: "Lessons include room for lecture covers, galleries, worksheets, slide decks, and future attachments.",
        pl: "Lekcje maja miejsce na oklady wykladow, galerie, arkusze pracy, slajdy i przyszle zalaczniki."
      }
    },
    {
      id: "migration",
      title: {
        en: "Easy framework migration",
        pl: "Latwe przejscie do frameworka"
      },
      description: {
        en: "The app is split into HTML, CSS, and ES modules, so moving to React, Vue, or Next later is straightforward.",
        pl: "Aplikacja jest rozdzielona na HTML, CSS i moduly ES, wiec przejscie do Reacta, Vue lub Next bedzie proste."
      }
    }
  ],
  modules: [
    {
      id: "behavior-core",
      accent: "#295667",
      order: 1,
      title: {
        en: "Behavior Foundations",
        pl: "Podstawy zachowania"
      },
      summary: {
        en: "Core reading of behavior, stress, and observation before intervention.",
        pl: "Podstawy czytania zachowania, stresu i obserwacji przed interwencja."
      },
      lessons: [
        {
          id: "observation-before-advice",
          format: "reading",
          duration: 28,
          level: "Core",
          cover: {
            eyebrow: {
              en: "Lecture image placeholder",
              pl: "Miejsce na ilustracje wykladu"
            },
            title: {
              en: "Observation wall",
              pl: "Sciana obserwacji"
            },
            description: {
              en: "Add a behavior map, annotated photo sequence, or a lecture hero image here later.",
              pl: "Tutaj pozniej dodasz mape zachowania, sekwencje zdjec z opisami albo obraz tytulowy lekcji."
            }
          },
          resources: [
            {
              kind: "summary",
              status: "ready",
              title: {
                en: "Lecture summary block",
                pl: "Blok podsumowania lekcji"
              },
              description: {
                en: "Ideal for a concise argument, definition list, or study recap.",
                pl: "Dobre miejsce na zwiezle wyjasnienie, liste definicji albo podsumowanie nauki."
              }
            },
            {
              kind: "gallery",
              status: "planned",
              title: {
                en: "Behavior photo gallery",
                pl: "Galeria zdjec zachowan"
              },
              description: {
                en: "Reserve this space for image-based examples of body language in context.",
                pl: "Zarezerwowane miejsce na obrazowe przyklady mowy ciala w kontekscie."
              }
            }
          ],
          translations: {
            en: {
              title: "Observation before interpretation",
              summary:
                "Build the habit of describing what the dog actually does before naming it as stubborn, dominant, anxious, or reactive.",
              outcomes: [
                "Separate visible behavior from human interpretation.",
                "Write neutral, useful notes for later case analysis.",
                "Spot missing context before giving recommendations."
              ],
              materials: [
                "Annotated observation sheet",
                "Short owner interview prompts",
                "Example behavior log with neutral wording"
              ]
            },
            pl: {
              title: "Obserwacja przed interpretacja",
              summary:
                "Buduj nawyk opisywania tego, co pies realnie robi, zanim nazwiesz go upartym, dominujacym, lekliwym albo reaktywnym.",
              outcomes: [
                "Oddziel zachowanie widoczne od ludzkiej interpretacji.",
                "Tworz neutralne notatki przydatne w dalszej analizie.",
                "Wylapuj brakujacy kontekst przed dawaniem rekomendacji."
              ],
              materials: [
                "Arkusz obserwacji z opisem",
                "Krotkie pytania do wywiadu z opiekunem",
                "Przykladowy dziennik zachowan w neutralnym jezyku"
              ]
            }
          }
        },
        {
          id: "stress-regulation-baseline",
          format: "video",
          duration: 34,
          level: "Core",
          cover: {
            eyebrow: {
              en: "Lecture image placeholder",
              pl: "Miejsce na ilustracje wykladu"
            },
            title: {
              en: "Stress curve",
              pl: "Krzywa stresu"
            },
            description: {
              en: "This slot works well for a stress cycle diagram or a still from the lecture deck.",
              pl: "To miejsce sprawdzi sie dla diagramu cyklu stresu albo kadru ze slajdow."
            }
          },
          resources: [
            {
              kind: "worksheet",
              status: "ready",
              title: {
                en: "Recovery checklist",
                pl: "Checklist regeneracji"
              },
              description: {
                en: "A downloadable worksheet for mapping triggers, decompression, and sleep quality.",
                pl: "Arkusz do pobrania do mapowania triggerow, dekompresji i jakosci snu."
              }
            }
          ],
          translations: {
            en: {
              title: "Stress, regulation, and recovery baseline",
              summary:
                "Give learners a practical framework for reading overload, recovery debt, and the difference between activation and resilience.",
              outcomes: [
                "Explain acute versus cumulative stress in plain language.",
                "Identify recovery indicators that matter in everyday life.",
                "Turn stress insight into realistic workload decisions."
              ],
              materials: [
                "Trigger inventory",
                "Sleep and recovery tracker",
                "Environment checklist for decompression"
              ]
            },
            pl: {
              title: "Stres, regulacja i punkt wyjsciowy regeneracji",
              summary:
                "Daj uczestnikom praktyczne ramy do czytania przeciazenia, dlugu regeneracyjnego i roznicy miedzy pobudzeniem a odpornoscia.",
              outcomes: [
                "Wyjasniaj prostym jezykiem stres ostry i kumulacyjny.",
                "Rozpoznawaj wskazniki regeneracji wazne w codziennym zyciu.",
                "Zamieniaj wiedze o stresie na realistyczne decyzje treningowe."
              ],
              materials: [
                "Inwentarz triggerow",
                "Tracker snu i regeneracji",
                "Checklist srodowiska dla dekompresji"
              ]
            }
          }
        },
        {
          id: "body-language-in-context",
          format: "workshop",
          duration: 42,
          level: "Applied",
          cover: {
            eyebrow: {
              en: "Lecture image placeholder",
              pl: "Miejsce na ilustracje wykladu"
            },
            title: {
              en: "Context board",
              pl: "Tablica kontekstu"
            },
            description: {
              en: "Use this slot for photo comparisons showing how the same posture changes meaning across situations.",
              pl: "To miejsce moze pokazac porownania zdjec, gdzie ta sama postawa zmienia znaczenie w roznych sytuacjach."
            }
          },
          resources: [
            {
              kind: "gallery",
              status: "ready",
              title: {
                en: "Context comparison set",
                pl: "Zestaw porownawczy kontekstu"
              },
              description: {
                en: "Best used for paired lecture images and short prompts for discussion.",
                pl: "Najlepsze miejsce na parowane obrazy do wykladu i krotkie pytania do dyskusji."
              }
            }
          ],
          translations: {
            en: {
              title: "Body language in context",
              summary:
                "Move beyond memorized signals and teach learners to read posture, distance, pacing, and environmental pressure together.",
              outcomes: [
                "Avoid one-signal explanations of behavior.",
                "Compare posture across social, training, and home settings.",
                "Use context notes to improve case decisions."
              ],
              materials: [
                "Photo comparison board",
                "Context checklist",
                "Prompt deck for workshop discussion"
              ]
            },
            pl: {
              title: "Mowa ciala w kontekscie",
              summary:
                "Wyjdz poza zapamietane sygnaly i ucz czytania postawy, dystansu, tempa oraz presji srodowiskowej jako calosci.",
              outcomes: [
                "Unikaj wyjasniania zachowania jednym sygnalem.",
                "Porownuj postawy w relacjach spolecznych, treningu i domu.",
                "Wykorzystuj notatki o kontekscie do lepszych decyzji w pracy."
              ],
              materials: [
                "Tablica porownawcza zdjec",
                "Checklist kontekstu",
                "Zestaw pytan do dyskusji warsztatowej"
              ]
            }
          }
        }
      ]
    },
    {
      id: "training-systems",
      accent: "#b96c32",
      order: 2,
      title: {
        en: "Training Systems",
        pl: "Systemy treningowe"
      },
      summary: {
        en: "Reinforcement planning, criteria design, and skill progressions that scale.",
        pl: "Planowanie wzmocnien, projektowanie kryteriow i skalowalne progresje umiejetnosci."
      },
      lessons: [
        {
          id: "reinforcement-architecture",
          format: "video",
          duration: 30,
          level: "Core",
          cover: {
            eyebrow: {
              en: "Lecture image placeholder",
              pl: "Miejsce na ilustracje wykladu"
            },
            title: {
              en: "Reward architecture",
              pl: "Architektura nagrod"
            },
            description: {
              en: "Good location for a reinforcement flow diagram or food versus toy decision tree.",
              pl: "Dobre miejsce na diagram przeplywu wzmocnien albo drzewo decyzji jedzenie kontra zabawka."
            }
          },
          resources: [
            {
              kind: "worksheet",
              status: "ready",
              title: {
                en: "Reward strategy sheet",
                pl: "Arkusz strategii nagradzania"
              },
              description: {
                en: "Map primary rewards, access rewards, and functional reinforcers for each learner.",
                pl: "Mapuj nagrody pierwotne, dostep do zasobow i wzmocnienia funkcjonalne dla kazdego ucznia."
              }
            }
          ],
          translations: {
            en: {
              title: "Reinforcement architecture",
              summary:
                "Instead of random treats, build a deliberate reward system tied to the behavior, the environment, and the learner profile.",
              outcomes: [
                "Choose reinforcers based on function, not habit.",
                "Link reward timing to clearer feedback.",
                "Plan sessions that stay motivating without chaos."
              ],
              materials: [
                "Reward matrix",
                "Session planning notes",
                "Examples of functional reinforcement"
              ]
            },
            pl: {
              title: "Architektura wzmocnien",
              summary:
                "Zamiast losowych smaczkow buduj swiadomy system nagradzania powiazany z zachowaniem, otoczeniem i profilem ucznia.",
              outcomes: [
                "Dobieraj wzmocnienia wedlug funkcji, a nie przyzwyczajenia.",
                "Lacz timing nagrody z czytelniejszym feedbackiem.",
                "Planuj sesje, ktore utrzymuja motywacje bez chaosu."
              ],
              materials: [
                "Macierz nagrod",
                "Notatki do planowania sesji",
                "Przyklady wzmocnien funkcjonalnych"
              ]
            }
          }
        },
        {
          id: "criteria-and-progression",
          format: "reading",
          duration: 24,
          level: "Core",
          cover: {
            eyebrow: {
              en: "Lecture image placeholder",
              pl: "Miejsce na ilustracje wykladu"
            },
            title: {
              en: "Criteria ladder",
              pl: "Drabina kryteriow"
            },
            description: {
              en: "Use this card for a progression ladder, session board, or criteria tracker screenshot.",
              pl: "Ta karta pasuje do drabiny progresji, tablicy sesji albo zrzutu trackera kryteriow."
            }
          },
          resources: [
            {
              kind: "summary",
              status: "ready",
              title: {
                en: "Criteria template",
                pl: "Szablon kryteriow"
              },
              description: {
                en: "A reusable template for step-by-step shaping plans.",
                pl: "Powtarzalny szablon do planowania ksztaltowania krok po kroku."
              }
            }
          ],
          translations: {
            en: {
              title: "Criteria design and progression",
              summary:
                "Teach learners how to raise difficulty on purpose, avoid muddy repetitions, and recover cleanly after setbacks.",
              outcomes: [
                "Define one clear criterion per training step.",
                "Spot when a plan is advancing too fast.",
                "Use resets and easier reps without losing clarity."
              ],
              materials: [
                "Progression ladder",
                "Criteria tracker",
                "Regression and reset checklist"
              ]
            },
            pl: {
              title: "Projektowanie kryteriow i progresji",
              summary:
                "Pokaz uczestnikom, jak celowo podnosic trudnosc, unikac rozmytych powtorzen i czysto wracac po potknieciach.",
              outcomes: [
                "Definiuj jedno czytelne kryterium na kazdy krok treningu.",
                "Rozpoznawaj, kiedy plan przyspiesza zbyt mocno.",
                "Korzystaj z resetu i latwiejszych prob bez utraty jasnosci."
              ],
              materials: [
                "Drabina progresji",
                "Tracker kryteriow",
                "Checklist regresji i resetu"
              ]
            }
          }
        },
        {
          id: "recall-protocol",
          format: "workshop",
          duration: 45,
          level: "Applied",
          cover: {
            eyebrow: {
              en: "Lecture image placeholder",
              pl: "Miejsce na ilustracje wykladu"
            },
            title: {
              en: "Recall field map",
              pl: "Mapa przywolania"
            },
            description: {
              en: "Perfect for a recall drill sequence, distraction map, or location planning image.",
              pl: "Idealne miejsce na sekwencje cwiczen przywolania, mape rozproszen albo grafike planowania miejsca."
            }
          },
          resources: [
            {
              kind: "worksheet",
              status: "ready",
              title: {
                en: "Recall build plan",
                pl: "Plan budowy przywolania"
              },
              description: {
                en: "Document cue history, reinforcement value, distance, and distraction levels.",
                pl: "Dokumentuj historie sygnalu, wartosc nagrody, dystans i poziom rozproszen."
              }
            }
          ],
          translations: {
            en: {
              title: "Reliable recall protocol",
              summary:
                "Structure recall as a safety skill with clean cue history, staged distractions, and measurable criteria.",
              outcomes: [
                "Teach recall as a system, not a single exercise.",
                "Protect the cue from repetition and weak outcomes.",
                "Plan environments that support success before pressure."
              ],
              materials: [
                "Recall training ladder",
                "Environment progression map",
                "Checklist for cue protection"
              ]
            },
            pl: {
              title: "Protokol niezawodnego przywolania",
              summary:
                "Traktuj przywolanie jako umiejetnosc bezpieczenstwa z czysta historia sygnalu, stopniowanymi rozproszeniami i mierzalnymi kryteriami.",
              outcomes: [
                "Ucz przywolania jako systemu, a nie jednego cwiczenia.",
                "Chron sygnal przed powtarzaniem i slabym efektem.",
                "Planuj srodowiska wspierajace sukces zanim pojawi sie presja."
              ],
              materials: [
                "Drabina treningu przywolania",
                "Mapa progresji srodowiska",
                "Checklist ochrony sygnalu"
              ]
            }
          }
        }
      ]
    },
    {
      id: "welfare-practice",
      accent: "#35654b",
      order: 3,
      title: {
        en: "Welfare and Daily Practice",
        pl: "Dobrostan i codzienna praktyka"
      },
      summary: {
        en: "Home setup, learner profile, and applied course planning for real life.",
        pl: "Organizacja domu, profil ucznia i praktyczne planowanie kursu pod codzienne zycie."
      },
      lessons: [
        {
          id: "home-learning-environment",
          format: "reading",
          duration: 26,
          level: "Core",
          cover: {
            eyebrow: {
              en: "Lecture image placeholder",
              pl: "Miejsce na ilustracje wykladu"
            },
            title: {
              en: "Home setup map",
              pl: "Mapa organizacji domu"
            },
            description: {
              en: "Add room layouts, decompression zones, or sample apartment solutions in this area.",
              pl: "Tutaj dodasz uklady pomieszczen, strefy dekompresji albo przykladowe rozwiazania dla mieszkania."
            }
          },
          resources: [
            {
              kind: "summary",
              status: "ready",
              title: {
                en: "Environment checklist",
                pl: "Checklist srodowiska"
              },
              description: {
                en: "Useful for room-by-room setup planning and safety notes.",
                pl: "Przydatne do planowania ustawienia pomieszczen i notatek bezpieczenstwa."
              }
            }
          ],
          translations: {
            en: {
              title: "Home as a learning environment",
              summary:
                "Show learners how layout, rest quality, access to space, and predictable routines shape behavior before formal training begins.",
              outcomes: [
                "Audit the home for friction, noise, and overload.",
                "Design rest and retreat spaces that the dog can use well.",
                "Support training by improving the environment first."
              ],
              materials: [
                "Home setup checklist",
                "Rest zone examples",
                "Routine mapping worksheet"
              ]
            },
            pl: {
              title: "Dom jako srodowisko nauki",
              summary:
                "Pokaz uczestnikom, jak uklad przestrzeni, jakosc odpoczynku, dostep do miejsca i przewidywalne rytualy ksztaltuja zachowanie jeszcze przed treningiem formalnym.",
              outcomes: [
                "Audytuj dom pod katem tarcia, halasu i przeciazenia.",
                "Projektuj strefy odpoczynku i wycofania, z ktorych pies realnie korzysta.",
                "Wspieraj trening przez poprawe srodowiska najpierw."
              ],
              materials: [
                "Checklist organizacji domu",
                "Przyklady stref odpoczynku",
                "Arkusz mapowania rytualow"
              ]
            }
          }
        },
        {
          id: "breed-history-and-learner-profile",
          format: "video",
          duration: 31,
          level: "Applied",
          cover: {
            eyebrow: {
              en: "Lecture image placeholder",
              pl: "Miejsce na ilustracje wykladu"
            },
            title: {
              en: "Learner profile board",
              pl: "Tablica profilu ucznia"
            },
            description: {
              en: "Save this space for breed history cards, learner profiles, and comparison images.",
              pl: "To miejsce zachowaj na karty historii rasy, profile ucznia i porownawcze obrazy."
            }
          },
          resources: [
            {
              kind: "slides",
              status: "ready",
              title: {
                en: "Learner profile deck",
                pl: "Pakiet profilu ucznia"
              },
              description: {
                en: "A lecture block for comparing inherited tendencies with current lifestyle demands.",
                pl: "Blok wykladu do porownywania tendencji odziedziczonych z aktualnymi wymaganiami stylu zycia."
              }
            }
          ],
          translations: {
            en: {
              title: "Breed history and learner profile",
              summary:
                "Use breed context as one lens among many, without letting labels replace real observation of the individual dog.",
              outcomes: [
                "Read breed purpose without stereotyping the learner.",
                "Map daily needs against inherited patterns and current stress load.",
                "Write recommendations that fit the actual dog in front of you."
              ],
              materials: [
                "Learner profile template",
                "Breed history prompts",
                "Lifestyle fit checklist"
              ]
            },
            pl: {
              title: "Historia rasy i profil ucznia",
              summary:
                "Wykorzystuj kontekst rasy jako jedna z soczewek, nie pozwalajac etykietom zastapic realnej obserwacji konkretnego psa.",
              outcomes: [
                "Czytaj przeznaczenie rasy bez szufladkowania ucznia.",
                "Mapuj potrzeby dnia codziennego wobec wzorcow odziedziczonych i aktualnego obciazenia stresem.",
                "Tworz rekomendacje pasujace do realnego psa, a nie do stereotypu."
              ],
              materials: [
                "Szablon profilu ucznia",
                "Pytania o historie rasy",
                "Checklist dopasowania stylu zycia"
              ]
            }
          }
        },
        {
          id: "client-case-blueprint",
          format: "workshop",
          duration: 48,
          level: "Applied",
          cover: {
            eyebrow: {
              en: "Lecture image placeholder",
              pl: "Miejsce na ilustracje wykladu"
            },
            title: {
              en: "Case blueprint",
              pl: "Szkic przypadku"
            },
            description: {
              en: "Use this area for a consultation board, progress dashboard, or sample client packet imagery.",
              pl: "To miejsce pasuje do tablicy konsultacji, dashboardu postepow albo obrazu pakietu dla klienta."
            }
          },
          resources: [
            {
              kind: "worksheet",
              status: "ready",
              title: {
                en: "Case planning canvas",
                pl: "Canvas planowania przypadku"
              },
              description: {
                en: "A structured template for goals, constraints, recommendations, and follow-up rhythm.",
                pl: "Ustrukturyzowany szablon na cele, ograniczenia, rekomendacje i rytm dalszej pracy."
              }
            }
          ],
          translations: {
            en: {
              title: "Client case blueprint",
              summary:
                "Combine behavior reading, training logic, welfare needs, and owner reality into one practical plan that can actually be followed.",
              outcomes: [
                "Turn a vague problem into a useful working case.",
                "Prioritize changes instead of overloading the owner.",
                "Deliver a structured next-step plan in a teachable format."
              ],
              materials: [
                "Case blueprint canvas",
                "Goal hierarchy worksheet",
                "Follow-up message template"
              ]
            },
            pl: {
              title: "Szkic pracy z przypadkiem klienta",
              summary:
                "Polacz czytanie zachowania, logike treningu, potrzeby dobrostanowe i realia opiekuna w jeden praktyczny plan, ktory da sie wdrozyc.",
              outcomes: [
                "Zamieniaj niejasny problem w uzyteczny przypadek roboczy.",
                "Ustalaj priorytety zmian zamiast przeciazac opiekuna.",
                "Dostarczaj uporzadkowany plan kolejnych krokow w formacie, ktory da sie uczyc."
              ],
              materials: [
                "Canvas przypadku",
                "Arkusz hierarchii celow",
                "Szablon wiadomosci follow-up"
              ]
            }
          }
        }
      ]
    }
  ]
};
