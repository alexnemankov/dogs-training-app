import wolfImg from '../../assets/img/lesson2/wolf.jpg';
import skullImg from '../../assets/img/lesson2/skull.jpg';
import cheeseExpertImg from '../../assets/img/lesson2/cheese-expert.jpg';

export default {
  "id": "behavior-002",
  "translations": {
    "en": {
      "title": "From Harsh Predator to Couch Potato",
      "summary": "How wolves became dogs: self-domestication, Belyaev's fox experiment, neoteny, the oxytocin bond, and the key biological differences between wolves and dogs.",
      "outcomes": [
        "Why dogs domesticated themselves — the self-domestication theory",
        "Belyaev's fox experiment and the domestication syndrome",
        "Neoteny: why dogs stay 'puppies' forever",
        "The oxytocin eye-contact bond between dogs and humans",
        "Key biological differences between wolves and dogs"
      ],
      "article": [
        {
          "type": "section",
          "title": "Introduction",
          "paragraphs": [
            "How did a dangerous pack predator become an animal that sleeps on your sofa and stares at you with tragic eyes when you eat? The answer is tens of thousands of years of evolution — and a surprisingly large role played by the dogs themselves."
          ]
        },
        {
          "type": "image",
          "src": wolfImg,
          "alt": "A wolf in the wild — the ancestor of the domestic dog",
          "caption": "The common ancestor: from this to your sofa companion in roughly 15,000 years."
        },
        {
          "type": "section",
          "title": "Part 1. The Great Divide: We Didn't Catch Them",
          "paragraphs": [
            "For a long time the story went: a rugged caveman stole a wolf cub, raised it, and — voilà — man's best friend was born. Modern scientists are sceptical. Wolves are dangerous apex predators. Keeping them in a cave with infants is not a survival strategy.",
            "The leading theory today is self-domestication. The least fearful, most curious wolves started hanging around human camps to scavenge leftovers. Those who didn't growl at humans got more calories, survived, and passed that calm temperament on to their offspring. Over thousands of generations, a new animal emerged — one shaped not by us, but by its own willingness to live alongside us.",
            "Tap each card below to test your assumptions about how domestication really happened."
          ]
        },
        {
          "type": "flipCards",
          "title": "Myth or Fact? Tap each card to find out.",
          "tapHint": "Tap to reveal",
          "interpretationLabel": "Myth ✗",
          "observationLabel": "Fact ✓",
          "doneMessage": "Well done! Now you know the real story.",
          "items": [
            {
              "front": "Humans captured wolf cubs and deliberately tamed them",
              "isInterpretation": true,
              "explanation": "Wolf cubs require intensive hand-rearing and never fully socialise to humans. Wild wolves can't be 'tamed' through captivity alone."
            },
            {
              "front": "The friendliest wolves got more food near human camps and survived longer",
              "isInterpretation": false,
              "explanation": "This is the self-domestication model: calm wolves outcompeted aggressive ones near human settlements, naturally selecting for friendliness."
            },
            {
              "front": "Dogs and wolves are basically the same animal with different training",
              "isInterpretation": true,
              "explanation": "Dogs differ from wolves in brain size, digestion, socialization window, stress hormones, and the unique ability to read human social cues."
            },
            {
              "front": "Dogs evolved the ability to digest starch — something wolves largely cannot do",
              "isInterpretation": false,
              "explanation": "Dogs have extra copies of the amylase gene, letting them digest carbohydrates. This adaptation is a direct result of living near humans who cooked food."
            },
            {
              "front": "A wolf raised from a pup is just as safe and trainable as a dog",
              "isInterpretation": true,
              "explanation": "Wolf socialization closes at 2-3 weeks. Even hand-reared wolves remain fundamentally different from dogs in their responses to humans."
            }
          ]
        },
        {
          "type": "callout",
          "tone": "accent",
          "label": "Key insight",
          "paragraphs": [
            "Dogs didn't become dogs because we decided to make them. They became dogs because the calmest, most people-tolerant individuals had a survival advantage. Evolution did the rest."
          ]
        },
        {
          "type": "section",
          "title": "Part 2. Belyaev's Experiment: Why Do They Have Spots?",
          "paragraphs": [
            "Why do domestic animals look different from their wild relatives? Floppy ears, curly tails, white patches on the forehead, shorter muzzles — why does domestication produce the same set of changes across completely different species?",
            "Soviet geneticist Dmitry Belyaev answered this question in a landmark experiment with silver foxes. By selecting only the tamest individuals for breeding, within just a few generations he produced foxes that not only wagged their tails but began to look like dogs.",
            "The reason: stress hormones (adrenaline, cortisol) and mood hormones (serotonin, dopamine) are biochemically linked to pigmentation, bone development, and organ timing. When you breed for calm, you accidentally select for the entire 'domestication package'."
          ]
        },
        {
          "type": "principles",
          "title": "The Domestication Syndrome — Traits That Come as a Package",
          "items": [
            {
              "icon": "Ear",
              "title": "Floppy ears",
              "text": "In wild animals, upright ears help detect predators. Reduced adrenaline means less need — and the cartilage stays soft."
            },
            {
              "icon": "Spiral",
              "title": "Curly or wagging tail",
              "text": "Wild canid tails are typically straight and held low. The curled or perpetually wagging tail is a by-product of reduced fear response."
            },
            {
              "icon": "Palette",
              "title": "White patches and spots",
              "text": "Pigment cells (melanocytes) originate from the same stem cells as stress-response cells. Calmer animals have fewer of both — hence the spots."
            },
            {
              "icon": "Bone",
              "title": "Smaller skull and shorter muzzle",
              "text": "Domestic animals have less developed jaw muscles. They rely on humans for food rather than hunting — smaller jaws are sufficient."
            },
            {
              "icon": "Confetti",
              "title": "Extended playfulness",
              "text": "Wild animals play only as juveniles. Domesticated species retain play behaviour into adulthood — a direct effect of lower baseline stress."
            }
          ]
        },
        {
          "type": "section",
          "title": "Part 3. Neoteny: Eternal Children",
          "paragraphs": [
            "A dog is essentially a wolf that got stuck in childhood.",
            "Wolves have a strict socialization window — roughly 3 weeks — after which anything unfamiliar is treated as a threat. Dogs have a much wider window (3–14 weeks) and retain curiosity and playfulness well into old age. This is called neoteny: the retention of juvenile traits into adulthood.",
            "Morphologically it's obvious too. Dogs have proportionally shorter muzzles and larger eyes relative to skull size than wolves. This triggers what ethologists call the 'baby schema' — the same set of features that makes humans want to protect and feed infants. We are biologically wired to find dogs irresistible."
          ]
        },
        {
          "type": "image",
          "src": skullImg,
          "alt": "Comparison of dog and wolf skull anatomy showing shorter muzzle and larger eye socket in dogs",
          "caption": "Dog skull (left) vs wolf skull (right). The shorter muzzle and proportionally larger orbits trigger the human 'baby schema' response."
        },
        {
          "type": "callout",
          "tone": "success",
          "label": "Why this matters for training",
          "paragraphs": [
            "A dog's extended socialization window means early experiences have an outsized impact on adult behaviour. Positive exposure to different people, surfaces, sounds, and animals before 14 weeks shapes a dog's emotional responses for life."
          ]
        },
        {
          "type": "section",
          "title": "Part 4. Dogs Learned to Look Us in the Eyes",
          "paragraphs": [
            "This is one of the most remarkable features of domestic dogs — and it is completely absent in wolves.",
            "Wolves perceive direct eye contact as a challenge or a threat. Dogs, however, use eye contact to communicate with humans: to ask for help, to signal distress, and — most astonishingly — to trigger an oxytocin response in both parties.",
            "Research by Takefumi Kikusui showed that when a dog gazes at its owner and the owner gazes back, oxytocin levels in both humans and dogs rise significantly — the same bonding mechanism that operates between a mother and her newborn infant. We have literally hacked each other's biology.",
            "This capacity is unique to dogs among all animal species. Not even wolves raised by humans show it."
          ]
        },
        {
          "type": "image",
          "src": cheeseExpertImg,
          "alt": "Dog with soulful puppy eyes looking up",
          "caption": "\"Genetically modified expert in cheese extraction.\" Those soft brows (levator anguli oculi medialis) evolved specifically to trigger human nurturing responses."
        },
        {
          "type": "callout",
          "tone": "accent",
          "label": "The 'brow raise' muscle",
          "paragraphs": [
            "Dogs have a facial muscle — the levator anguli oculi medialis — that wolves do not have. This muscle creates the 'puppy eyes' expression: inner brows raised, eyes wide. Studies confirm that dogs who use this expression more frequently get adopted from shelters faster. It evolved because it works."
          ]
        },
        {
          "type": "section",
          "title": "Part 5. Key Differences: Dog vs Wolf",
          "paragraphs": [
            "Despite sharing 99.96% of their DNA, wolves and dogs are profoundly different animals. Understanding these differences helps explain why 'alpha dog' training methods borrowed from wolf pack studies simply don't apply."
          ]
        },
        {
          "type": "comparison",
          "title": null,
          "columns": [
            {
              "title": "🐺 Wolf",
              "items": [
                "Brain ~20-30% larger relative to body",
                "Strict carnivore — cannot digest starch",
                "Socialization window: 2-3 weeks",
                "Communication directed within the pack",
                "Direct eye contact = threat or challenge",
                "Stress hormones remain high near humans",
                "Problem-solving: works alone or with pack"
              ]
            },
            {
              "title": "🐕 Dog",
              "items": [
                "Smaller brain — humans took over many functions",
                "Can digest starch (extra amylase genes)",
                "Socialization window: 3-14 weeks",
                "Communication directed toward humans",
                "Eye contact = bonding and communication tool",
                "Oxytocin rises in presence of familiar humans",
                "Problem-solving: looks to humans for help first"
              ]
            }
          ],
          "paragraphs": [
            "The last point is particularly significant: when faced with an unsolvable problem, wolves keep trying independently. Dogs stop and look at a human for guidance. This 'referencing' behaviour did not exist in wolves — dogs evolved it."
          ]
        },
        {
          "type": "numberedList",
          "title": "Practical Task: Find the Signs of Domestication",
          "intro": "Look at your own dog (or any dog you encounter). Try to identify at least 3 domestication traits and think about how each one helps the dog survive in the modern human world.",
          "items": [
            {
              "title": "Look at the ears",
              "text": "Are they floppy, semi-erect, or mobile? How does the dog use them to communicate with you vs. with other dogs?"
            },
            {
              "title": "Watch the eyes",
              "text": "Does the dog make eye contact when uncertain or wanting something? Notice how different this is from how dogs look at each other."
            },
            {
              "title": "Observe coat markings",
              "text": "White blaze, spotted coat, pale patches? These are likely domestication syndrome markers — not just aesthetics."
            },
            {
              "title": "Notice play behaviour",
              "text": "Does an adult dog still play? With toys, with you, with other dogs? This retained juvenile behaviour is a domestication marker."
            }
          ]
        },
        {
          "type": "callout",
          "tone": "success",
          "label": "What to write down",
          "paragraphs": [
            "Note the 3 traits you found and, for each one, describe one way it helps the dog get what it needs from humans. For example: 'floppy ears + soft expression → I respond to it more gently than I would to an animal that looks aggressive.'"
          ]
        },
        {
          "type": "quote",
          "quote": "Dogs are not failed wolves. They are a new kind of animal — one that evolved specifically to live with us.",
          "caption": "Alexandra Horowitz, canine cognition researcher"
        },
        {
          "type": "glossary",
          "title": "Glossary",
          "items": [
            {
              "term": "Self-domestication",
              "definition": "The process by which animals voluntarily associated with humans and were naturally selected for calm, human-tolerant behaviour — without deliberate human intervention in breeding."
            },
            {
              "term": "Domestication syndrome",
              "definition": "A cluster of physical and behavioural traits that appear together in domesticated species: floppy ears, spots, curly tail, reduced stress hormones, and extended playfulness."
            },
            {
              "term": "Neoteny",
              "definition": "The retention of juvenile physical and behavioural traits into adulthood. Dogs are neotenic wolves — they retain puppy-like features and behaviours throughout their lives."
            },
            {
              "term": "Baby schema",
              "definition": "A set of physical features (large eyes, round face, short nose) that trigger nurturing responses in humans. Dogs evolved to display these features more prominently than wolves."
            },
            {
              "term": "Oxytocin",
              "definition": "A bonding hormone released during social touch and eye contact. Dogs and humans trigger each other's oxytocin release through mutual gaze — a bond unique in the animal kingdom."
            },
            {
              "term": "Levator anguli oculi medialis",
              "definition": "A facial muscle present in dogs but absent in wolves. It raises the inner brow to create the 'puppy eyes' expression that humans instinctively respond to."
            }
          ]
        }
      ]
    },
    "pl": {
      "title": "Od groźnego drapieżnika do kanapowca",
      "summary": "Jak wilki stały się psami: samoudomowienie, eksperyment Bielajewa, neotenia, więź oksytocynowa i kluczowe biologiczne różnice między wilkami a psami.",
      "outcomes": [
        "Dlaczego psy same się udomowiły — teoria samoudomowienia",
        "Eksperyment Bielajewa z lisami i syndrom udomowienia",
        "Neotenia: dlaczego psy pozostają «szczeniętami» na zawsze",
        "Więź oksytocynowa przez kontakt wzrokowy między psem a człowiekiem",
        "Kluczowe biologiczne różnice między wilkami a psami"
      ],
      "article": [
        {
          "type": "section",
          "title": "Wprowadzenie",
          "paragraphs": [
            "Jak niebezpieczny drapieżnik stadny stał się zwierzęciem śpiącym na twojej sofie i patrzącym na ciebie tragicznymi oczami, gdy jesz? Odpowiedź to dziesiątki tysięcy lat ewolucji — i zaskakująco duża rola odegrana przez same psy."
          ]
        },
        {
          "type": "image",
          "src": wolfImg,
          "alt": "Wilk na wolności — przodek psa domowego",
          "caption": "Wspólny przodek: od tego do twojego towarzysza kanapy w ciągu mniej więcej 15 000 lat."
        },
        {
          "type": "section",
          "title": "Część 1. Wielki podział: My ich nie złapaliśmy",
          "paragraphs": [
            "Przez długi czas historia brzmiała tak: surowy jaskiniowiec ukradł wilcze szczenię, wychował je i — voilà — tak powstał najlepszy przyjaciel człowieka. Współcześni naukowcy podchodzą do tego sceptycznie. Wilki to niebezpieczne drapieżniki szczytowe. Trzymanie ich w jaskini z niemowlętami nie jest strategią przetrwania.",
            "Wiodąca teoria mówi o samoudomowieniu. Najmniej płochliwe, najbardziej ciekawskie wilki zaczęły kręcić się w pobliżu ludzkich obozowisk, żeby zbierać resztki jedzenia. Te, które nie warczały na ludzi, dostawały więcej kalorii, przeżywały i przekazywały ten spokojny temperament potomstwu. Przez tysiące pokoleń wyłoniło się nowe zwierzę — ukształtowane nie przez nas, ale przez własną gotowość do życia obok nas.",
            "Kliknij każdą kartę poniżej, aby sprawdzić swoje założenia dotyczące tego, jak naprawdę przebiegło udomowienie."
          ]
        },
        {
          "type": "flipCards",
          "title": "Mit czy Fakt? Kliknij każdą kartę, aby sprawdzić.",
          "tapHint": "Kliknij, aby odkryć",
          "interpretationLabel": "Mit ✗",
          "observationLabel": "Fakt ✓",
          "doneMessage": "Świetnie! Teraz znasz prawdziwą historię.",
          "items": [
            {
              "front": "Ludzie schwytali wilcze szczenięta i celowo je oswajali",
              "isInterpretation": true,
              "explanation": "Wilcze szczenięta wymagają intensywnej opieki ręcznej i nigdy w pełni nie socjalizują się z ludźmi. Dzikich wilków nie można «oswoić» samym trzymaniem w niewoli."
            },
            {
              "front": "Najbardziej przyjazne wilki dostawały więcej jedzenia w pobliżu ludzkich obozowisk i dłużej przeżywały",
              "isInterpretation": false,
              "explanation": "To model samoudomowienia: spokojne wilki wyprzedzały agresywne w pobliżu ludzkich osad, naturalnie selekcjonując się pod kątem przyjazności."
            },
            {
              "front": "Psy i wilki to w zasadzie to samo zwierzę, różniące się tylko tresurą",
              "isInterpretation": true,
              "explanation": "Psy różnią się od wilków wielkością mózgu, trawieniem, oknem socjalizacji, hormonami stresu i unikalną zdolnością odczytywania ludzkich sygnałów społecznych."
            },
            {
              "front": "Psy ewoluowały zdolność trawienia skrobi — czego wilki w dużej mierze nie potrafią",
              "isInterpretation": false,
              "explanation": "Psy mają dodatkowe kopie genu amylazy, co pozwala im trawić węglowodany. Ta adaptacja jest bezpośrednim wynikiem życia w pobliżu gotujących jedzenie ludzi."
            },
            {
              "front": "Wilk wychowany od szczeniaka jest równie bezpieczny i podatny na tresurę jak pies",
              "isInterpretation": true,
              "explanation": "Okno socjalizacji wilka zamyka się w 2-3 tygodniu życia. Nawet wilki wychowane ręcznie pozostają zasadniczo różne od psów w swoich reakcjach na ludzi."
            }
          ]
        },
        {
          "type": "callout",
          "tone": "accent",
          "label": "Kluczowy wniosek",
          "paragraphs": [
            "Psy nie stały się psami dlatego, że my tak postanowiliśmy. Stały się psami, ponieważ najspokojniejsze, najbardziej tolerujące ludzi osobniki miały przewagę w przetrwaniu. Ewolucja zrobiła resztę."
          ]
        },
        {
          "type": "section",
          "title": "Część 2. Eksperyment Bielajewa: Dlaczego mają łatki?",
          "paragraphs": [
            "Dlaczego zwierzęta domowe wyglądają inaczej niż ich dzikie krewniaki? Oklapnięte uszy, zakręcone ogony, białe łatki na czole, krótsze pyski — dlaczego udomowienie przynosi ten sam zestaw zmian u zupełnie różnych gatunków?",
            "Radziecki genetyk Dmitrij Bielajew odpowiedział na to pytanie w przełomowym eksperymencie z lisami srebrzystymi. Wybierając do hodowli tylko najbardziej potulne osobniki, w ciągu zaledwie kilku pokoleń uzyskał lisy, które nie tylko merdały ogonami, ale i zaczęły wyglądać jak psy.",
            "Przyczyna: hormony stresu (adrenalina, kortyzol) i hormony nastroju (serotonina, dopamina) są biochemicznie powiązane z pigmentacją, rozwojem kości i terminowaniem organów. Kiedy hodujemy pod kątem spokoju, przypadkowo selekcjonujemy cały «pakiet udomowienia»."
          ]
        },
        {
          "type": "principles",
          "title": "Syndrom udomowienia — cechy, które przychodzą w pakiecie",
          "items": [
            {
              "icon": "Ear",
              "title": "Oklapnięte uszy",
              "text": "U dzikich zwierząt wyprostowane uszy pomagają wykrywać drapieżniki. Mniejsza adrenalina oznacza mniejszą potrzebę — chrząstka pozostaje miękka."
            },
            {
              "icon": "Spiral",
              "title": "Zakręcony lub merdający ogon",
              "text": "Ogony dzikich psowatych są zazwyczaj proste i trzymane nisko. Zakręcony lub wiecznie merdający ogon jest efektem ubocznym obniżonej reakcji strachowej."
            },
            {
              "icon": "Palette",
              "title": "Białe łatki i cętki",
              "text": "Komórki pigmentowe (melanocyty) wywodzą się z tych samych komórek macierzystych co komórki odpowiedzi na stres. Spokojniejsze zwierzęta mają ich mniej — stąd łatki."
            },
            {
              "icon": "Bone",
              "title": "Mniejsza czaszka i krótszy pysk",
              "text": "Zwierzęta domowe mają słabiej rozwinięte mięśnie żuchwy. Polegają na ludziach w zdobywaniu jedzenia zamiast polować — mniejsze szczęki są wystarczające."
            },
            {
              "icon": "Confetti",
              "title": "Wydłużona chęć do zabawy",
              "text": "Dzikie zwierzęta bawią się tylko jako młode. Zwierzęta udomowione zachowują zachowania zabawowe w dorosłości — bezpośredni efekt niższego bazowego poziomu stresu."
            }
          ]
        },
        {
          "type": "section",
          "title": "Część 3. Neotenia: Wieczne dzieci",
          "paragraphs": [
            "Pies to w istocie wilk, który utknął w dzieciństwie.",
            "Wilki mają ścisłe okno socjalizacji — około 3 tygodni — po którym wszystko, co nieznane, jest traktowane jako zagrożenie. Psy mają znacznie szersze okno (3–14 tygodni) i zachowują ciekawość oraz chęć do zabawy do późnej starości. Nazywa się to neoteną: zachowaniem cech młodocianych w dorosłości.",
            "Jest to zauważalne również morfologicznie. Psy mają proporcjonalnie krótsze pyski i większe oczy w stosunku do rozmiaru czaszki niż wilki. To wyzwala u ludzi tak zwany «schemat niemowlęcia» — ten sam zestaw cech, który sprawia, że chcemy chronić i karmić niemowlęta. Jesteśmy biologicznie zaprogramowani, by znajdować psy nieodpartymi."
          ]
        },
        {
          "type": "image",
          "src": skullImg,
          "alt": "Porównanie anatomii czaszki psa i wilka pokazujące krótszy pysk i większą orbitę oczną u psa",
          "caption": "Czaszka psa (po lewej) vs czaszka wilka (po prawej). Krótszy pysk i proporcjonalnie większe oczodoły wyzwalają u ludzi reakcję «schematu niemowlęcia»."
        },
        {
          "type": "callout",
          "tone": "success",
          "label": "Dlaczego ma to znaczenie dla tresury",
          "paragraphs": [
            "Rozszerzone okno socjalizacji psa oznacza, że wczesne doświadczenia mają nieproporcjonalnie duży wpływ na zachowanie dorosłego. Pozytywna ekspozycja na różnych ludzi, powierzchnie, dźwięki i zwierzęta przed 14. tygodniem życia kształtuje emocjonalne reakcje psa na całe życie."
          ]
        },
        {
          "type": "section",
          "title": "Część 4. Psy nauczyły się patrzeć nam w oczy",
          "paragraphs": [
            "To jedna z najbardziej niezwykłych cech psów domowych — i jest całkowicie nieobecna u wilków.",
            "Wilki postrzegają bezpośredni kontakt wzrokowy jako wyzwanie lub zagrożenie. Psy natomiast używają kontaktu wzrokowego do komunikacji z ludźmi: by prosić o pomoc, sygnalizować stres i — co najbardziej zdumiewające — wyzwalać reakcję oksytocynową u obu stron.",
            "Badania Takefumiego Kikusui wykazały, że gdy pies patrzy na właściciela, a właściciel patrzy na psa, poziom oksytocyny u obu — zarówno u ludzi, jak i u psów — znacząco rośnie — ten sam mechanizm więzi, który działa między matką a noworodkiem. Dosłownie zhakowaliśmy nawzajem swoją biologię.",
            "Ta zdolność jest unikalna dla psów spośród wszystkich gatunków zwierząt. Nawet wilki wychowane przez ludzi jej nie wykazują."
          ]
        },
        {
          "type": "image",
          "src": cheeseExpertImg,
          "alt": "Pies z błagalnym spojrzeniem szczeniaka patrzący w górę",
          "caption": "«Genetycznie zmodyfikowany ekspert od wyłudzania sera.» Te miękkie brwi (levator anguli oculi medialis) ewoluowały specjalnie po to, by wyzwalać u ludzi reakcje opiekuńcze."
        },
        {
          "type": "callout",
          "tone": "accent",
          "label": "Mięsień «psioczek»",
          "paragraphs": [
            "Psy mają mięsień twarzy — levator anguli oculi medialis — którego wilki nie mają. Unosi on wewnętrzną brew, tworząc wyraz «szczeniaczych oczu»: uniesione wewnętrzne brwi, szeroko otwarte oczy. Badania potwierdzają, że psy częściej używające tego wyrazu szybciej są adoptowane ze schronisk. Ewoluował, bo działa."
          ]
        },
        {
          "type": "section",
          "title": "Część 5. Kluczowe różnice: Pies vs Wilk",
          "paragraphs": [
            "Mimo że dzielą 99,96% DNA, wilki i psy to zwierzęta zasadniczo różne. Zrozumienie tych różnic pomaga wyjaśnić, dlaczego metody tresury «alfa» zapożyczone z badań nad watahami wilków po prostu nie mają zastosowania do psów."
          ]
        },
        {
          "type": "comparison",
          "title": null,
          "columns": [
            {
              "title": "🐺 Wilk",
              "items": [
                "Mózg ~20-30% większy w stosunku do ciała",
                "Ścisły mięsożerca — nie trawi skrobi",
                "Okno socjalizacji: 2-3 tygodnie",
                "Komunikacja skierowana w obrębie watahy",
                "Bezpośredni wzrok = zagrożenie lub wyzwanie",
                "Hormony stresu pozostają wysokie w pobliżu ludzi",
                "Rozwiązywanie problemów: działa samodzielnie lub z watahą"
              ]
            },
            {
              "title": "🐕 Pies",
              "items": [
                "Mniejszy mózg — ludzie przejęli wiele funkcji",
                "Trawi skrobię (dodatkowe geny amylazy)",
                "Okno socjalizacji: 3-14 tygodni",
                "Komunikacja skierowana na człowieka",
                "Kontakt wzrokowy = narzędzie więzi i komunikacji",
                "Oksytocyna rośnie w obecności znanych ludzi",
                "Rozwiązywanie problemów: najpierw patrzy na człowieka po wskazówki"
              ]
            }
          ],
          "paragraphs": [
            "Ostatni punkt jest szczególnie istotny: gdy staje w obliczu nierozwiązywalnego problemu, wilk nadal próbuje samodzielnie. Pies zatrzymuje się i patrzy na człowieka po wskazówki. To zachowanie «odniesienia» nie istniało u wilków — psy je ewoluowały."
          ]
        },
        {
          "type": "numberedList",
          "title": "Zadanie praktyczne: Znajdź oznaki udomowienia",
          "intro": "Przyjrzyj się swojemu psu (lub jakiemukolwiek napotkanemu psu). Postaraj się zidentyfikować co najmniej 3 cechy udomowienia i zastanów się, jak każda z nich pomaga psu przetrwać we współczesnym ludzkim świecie.",
          "items": [
            {
              "title": "Spójrz na uszy",
              "text": "Czy są oklapnięte, półwyprostowane, czy ruchome? Jak pies używa ich do komunikacji z tobą w porównaniu z innymi psami?"
            },
            {
              "title": "Obserwuj oczy",
              "text": "Czy pies nawiązuje kontakt wzrokowy, gdy jest niepewny lub czegoś chce? Zauważ, jak różni się to od tego, jak psy patrzą na siebie nawzajem."
            },
            {
              "title": "Zaobserwuj umaszczenie",
              "text": "Biały strzałek, cętkowane futro, jasne łatki? To prawdopodobnie markery syndromu udomowienia — nie tylko estetyka."
            },
            {
              "title": "Zauważ zachowania zabawowe",
              "text": "Czy dorosły pies nadal się bawi? Z zabawkami, z tobą, z innymi psami? To zatrzymane zachowanie młodociane jest markerem udomowienia."
            }
          ]
        },
        {
          "type": "callout",
          "tone": "success",
          "label": "Co zapisać",
          "paragraphs": [
            "Zapisz 3 znalezione cechy i dla każdej opisz jeden sposób, w jaki pomaga psu uzyskać to, czego potrzebuje od ludzi. Na przykład: «oklapnięte uszy + miękki wyraz twarzy → reaguję na psa łagodniej, niż reagowałbym na zwierzę wyglądające agresywnie»."
          ]
        },
        {
          "type": "quote",
          "quote": "Psy to nie nieudane wilki. To nowy rodzaj zwierzęcia — który ewoluował specjalnie po to, by żyć z nami.",
          "caption": "Alexandra Horowitz, badaczka psiej kognitywistyki"
        },
        {
          "type": "glossary",
          "title": "Słownik pojęć",
          "items": [
            {
              "term": "Samoudomowienie",
              "definition": "Proces, w którym zwierzęta dobrowolnie kojarzyły się z ludźmi i były naturalnie selekcjonowane pod kątem spokojnego, tolerującego ludzi zachowania — bez celowej ingerencji człowieka w hodowlę."
            },
            {
              "term": "Syndrom udomowienia",
              "definition": "Skupisko cech fizycznych i behawioralnych pojawiających się razem u udomowionych gatunków: oklapnięte uszy, łatki, zakręcony ogon, obniżone hormony stresu i wydłużona chęć do zabawy."
            },
            {
              "term": "Neotenia",
              "definition": "Zachowanie młodocianych cech fizycznych i behawioralnych w dorosłości. Psy są neotenicznymi wilkami — przez całe życie zachowują cechy i zachowania szczeniaka."
            },
            {
              "term": "Schemat niemowlęcia",
              "definition": "Zestaw cech fizycznych (duże oczy, okrągła twarz, krótki nos) wyzwalających u ludzi reakcje opiekuńcze. Psy ewoluowały, by wykazywać te cechy wyraźniej niż wilki."
            },
            {
              "term": "Oksytocyna",
              "definition": "Hormon więzi uwalniany podczas społecznego dotyku i kontaktu wzrokowego. Psy i ludzie wzajemnie wyzwalają u siebie wyrzut oksytocyny przez wzajemne spojrzenia — więź unikalna w królestwie zwierząt."
            },
            {
              "term": "Levator anguli oculi medialis",
              "definition": "Mięsień twarzy obecny u psów, ale nieobecny u wilków. Unosi wewnętrzną brew, tworząc wyraz «szczeniaczych oczu», na który ludzie instynktownie reagują."
            }
          ]
        }
      ]
    },
    "ru": {
      "title": "От сурового хищника до любителя диванов",
      "summary": "Как волки стали собаками: самодоместикация, эксперимент Беляева, неотения, окситоциновая связь и ключевые биологические различия между волками и собаками.",
      "outcomes": [
        "Почему собаки одомашнили себя сами — теория самодоместикации",
        "Эксперимент Беляева с лисами и синдром доместикации",
        "Неотения: почему собаки навсегда остаются «щенками»",
        "Окситоциновая связь через зрительный контакт между собакой и человеком",
        "Ключевые биологические различия между волками и собаками"
      ],
      "article": [
        {
          "type": "section",
          "title": "Введение",
          "paragraphs": [
            "Как опасный стайный хищник превратился в животное, которое спит на вашем диване и смотрит на вас трагическими глазами, пока вы едите? Ответ — десятки тысяч лет эволюции и удивительно большая роль, сыгранная самими собаками."
          ]
        },
        {
          "type": "image",
          "src": wolfImg,
          "alt": "Волк на воле — предок домашней собаки",
          "caption": "Общий предок: от этого до вашего диванного компаньона примерно за 15 000 лет."
        },
        {
          "type": "section",
          "title": "Часть 1. Великое разделение: Мы их не ловили",
          "paragraphs": [
            "Долгое время история звучала так: суровый пещерный человек украл волчонка, вырастил его — и вуаля, лучший друг человека готов. Современные учёные к этому скептичны. Волки — опасные хищники вершины пищевой цепи. Держать их в пещере с младенцами — не стратегия выживания.",
            "Ведущая теория сегодня — самодоместикация. Наименее пугливые, наиболее любопытные волки начали держаться рядом с человеческими стоянками, чтобы подбирать остатки еды. Те, кто не рычал на людей, получали больше калорий, выживали и передавали этот спокойный темперамент потомству. За тысячи поколений возникло новое животное — сформированное не нами, а собственной готовностью жить рядом с нами.",
            "Нажмите на каждую карточку ниже, чтобы проверить свои предположения о том, как на самом деле произошла доместикация."
          ]
        },
        {
          "type": "flipCards",
          "title": "Миф или Факт? Нажмите на каждую карточку.",
          "tapHint": "Нажмите, чтобы узнать",
          "interpretationLabel": "Миф ✗",
          "observationLabel": "Факт ✓",
          "doneMessage": "Отлично! Теперь вы знаете настоящую историю.",
          "items": [
            {
              "front": "Люди поймали волчат и целенаправленно их приручили",
              "isInterpretation": true,
              "explanation": "Волчата требуют интенсивного ручного выкармливания и никогда полностью не социализируются с людьми. Диких волков нельзя «приручить» одним содержанием в неволе."
            },
            {
              "front": "Самые дружелюбные волки получали больше еды рядом с лагерями людей и дольше выживали",
              "isInterpretation": false,
              "explanation": "Это модель самодоместикации: спокойные волки конкурировали успешнее возле человеческих поселений, естественно отбираясь на дружелюбие."
            },
            {
              "front": "Собаки и волки — по сути одно животное с разной дрессировкой",
              "isInterpretation": true,
              "explanation": "Собаки отличаются от волков размером мозга, пищеварением, окном социализации, гормонами стресса и уникальной способностью считывать социальные сигналы человека."
            },
            {
              "front": "Собаки эволюционировали умение переваривать крахмал — чего волки в основном не могут",
              "isInterpretation": false,
              "explanation": "У собак есть дополнительные копии гена амилазы, позволяющие переваривать углеводы. Эта адаптация — прямой результат жизни рядом с людьми, которые готовили пищу."
            },
            {
              "front": "Волк, выращенный с рождения, так же безопасен и обучаем, как собака",
              "isInterpretation": true,
              "explanation": "Окно социализации волка закрывается на 2–3 неделе жизни. Даже волки, выращенные вручную, принципиально отличаются от собак в своих реакциях на людей."
            }
          ]
        },
        {
          "type": "callout",
          "tone": "accent",
          "label": "Ключевой вывод",
          "paragraphs": [
            "Собаки стали собаками не потому, что мы так решили. Они стали собаками, потому что самые спокойные, наиболее терпимые к людям особи имели преимущество в выживании. Эволюция сделала остальное."
          ]
        },
        {
          "type": "section",
          "title": "Часть 2. Эксперимент Беляева: Почему у них появились пятнышки?",
          "paragraphs": [
            "Почему домашние животные выглядят иначе, чем их дикие родственники? Висячие уши, закрученные хвосты, белые пятна на лбу, более короткие морды — почему доместикация производит один и тот же набор изменений у совершенно разных видов?",
            "Советский генетик Дмитрий Беляев ответил на этот вопрос в знаковом эксперименте с серебристыми лисами. Отбирая для разведения только самых покладистых особей, уже через несколько поколений он получил лис, которые не только виляли хвостами, но и начали выглядеть как собаки.",
            "Причина: гормоны стресса (адреналин, кортизол) и гормоны настроения (серотонин, дофамин) биохимически связаны с пигментацией, развитием костей и сроками созревания органов. Когда мы отбираем на спокойствие, мы случайно выбираем весь «пакет доместикации»."
          ]
        },
        {
          "type": "principles",
          "title": "Синдром доместикации — черты, которые идут в комплекте",
          "items": [
            {
              "icon": "Ear",
              "title": "Висячие уши",
              "text": "У диких животных прямые уши помогают обнаруживать хищников. Меньше адреналина — меньше необходимости в этом, и хрящ остаётся мягким."
            },
            {
              "icon": "Spiral",
              "title": "Закрученный или виляющий хвост",
              "text": "Хвосты диких псовых обычно прямые и опущенные. Закрученный или вечно виляющий хвост — побочный эффект сниженной реакции страха."
            },
            {
              "icon": "Palette",
              "title": "Белые пятна и пятнистость",
              "text": "Пигментные клетки (меланоциты) происходят из тех же стволовых клеток, что и клетки стрессовой реакции. У более спокойных животных их меньше — отсюда пятнышки."
            },
            {
              "icon": "Bone",
              "title": "Меньший череп и более короткая морда",
              "text": "У домашних животных менее развиты жевательные мышцы. Они полагаются на людей в получении еды, а не на охоту — маленьких челюстей достаточно."
            },
            {
              "icon": "Confetti",
              "title": "Продлённая игривость",
              "text": "Дикие животные играют только в молодости. Одомашненные виды сохраняют игровое поведение во взрослом возрасте — прямой эффект более низкого базового уровня стресса."
            }
          ]
        },
        {
          "type": "section",
          "title": "Часть 3. Неотения: Вечные дети",
          "paragraphs": [
            "Собака — это по сути волк, застрявший в детстве.",
            "У волков есть строгое окно социализации — около 3 недель — после которого всё незнакомое воспринимается как угроза. У собак это окно значительно шире (3–14 недель), и они сохраняют любопытство и игривость до глубокой старости. Это называется неотенией: сохранением ювенильных черт во взрослом возрасте.",
            "Морфологически это тоже заметно. У собак относительно более короткие морды и более крупные глаза относительно размера черепа, чем у волков. Это запускает у людей так называемую «схему младенца» — тот же набор признаков, который заставляет нас хотеть защищать и кормить младенцев. Мы биологически запрограммированы находить собак неотразимыми."
          ]
        },
        {
          "type": "image",
          "src": skullImg,
          "alt": "Сравнение анатомии черепа собаки и волка, показывающее более короткую морду и более крупную глазницу у собаки",
          "caption": "Череп собаки (слева) vs череп волка (справа). Более короткая морда и пропорционально более крупные орбиты запускают у людей реакцию «схемы младенца»."
        },
        {
          "type": "callout",
          "tone": "success",
          "label": "Почему это важно для дрессировки",
          "paragraphs": [
            "Расширенное окно социализации собаки означает, что ранние переживания оказывают непропорционально большое влияние на поведение взрослой особи. Позитивный контакт с разными людьми, поверхностями, звуками и животными до 14 недель жизни формирует эмоциональные реакции собаки на всю жизнь."
          ]
        },
        {
          "type": "section",
          "title": "Часть 4. Собаки научились смотреть нам в глаза",
          "paragraphs": [
            "Это одна из самых замечательных особенностей домашних собак — и она полностью отсутствует у волков.",
            "Волки воспринимают прямой зрительный контакт как вызов или угрозу. Собаки же используют зрительный контакт для общения с людьми: чтобы просить о помощи, сигнализировать о дистрессе и — что самое поразительное — вызывать окситоциновую реакцию у обоих.",
            "Исследования Такэфуми Кикусуи показали: когда собака смотрит на хозяина, а хозяин смотрит на собаку, уровень окситоцина у обоих — как у людей, так и у собак — значительно возрастает. Тот же механизм привязанности, что работает между матерью и новорождённым младенцем. Мы буквально взломали биологию друг друга.",
            "Эта способность уникальна для собак среди всех видов животных. Даже волки, выращенные людьми, её не проявляют."
          ]
        },
        {
          "type": "image",
          "src": cheeseExpertImg,
          "alt": "Собака с невероятно жалобными щенячьими глазами смотрит вверх",
          "caption": "«Генетически модифицированный эксперт по выманиванию сыра». Эти мягкие брови (levator anguli oculi medialis) эволюционировали специально, чтобы вызывать у людей защитно-заботливые реакции."
        },
        {
          "type": "callout",
          "tone": "accent",
          "label": "Мышца «бровки домиком»",
          "paragraphs": [
            "У собак есть мимическая мышца — levator anguli oculi medialis — которой нет у волков. Она поднимает внутреннюю бровь, создавая выражение «щенячьих глаз»: приподнятые внутренние брови, широко открытые глаза. Исследования подтверждают: собаки, чаще использующие это выражение, быстрее забираются из приютов. Оно эволюционировало, потому что работает."
          ]
        },
        {
          "type": "section",
          "title": "Часть 5. Ключевые отличия: Собака vs Волк",
          "paragraphs": [
            "Несмотря на то что они разделяют 99,96% ДНК, волки и собаки — принципиально разные животные. Понимание этих различий помогает объяснить, почему методы дрессировки «альфа», заимствованные из исследований волчьих стай, просто не применимы к собакам."
          ]
        },
        {
          "type": "comparison",
          "title": null,
          "columns": [
            {
              "title": "🐺 Волк",
              "items": [
                "Мозг ~на 20-30% больше относительно тела",
                "Строгий хищник — не переваривает крахмал",
                "Окно социализации: 2-3 недели",
                "Коммуникация направлена внутри стаи",
                "Прямой взгляд = угроза или вызов",
                "Гормоны стресса остаются высокими рядом с людьми",
                "Решение задач: действует самостоятельно или со стаей"
              ]
            },
            {
              "title": "🐕 Собака",
              "items": [
                "Меньший мозг — люди взяли на себя многие функции",
                "Переваривает крахмал (дополнительные гены амилазы)",
                "Окно социализации: 3-14 недель",
                "Коммуникация направлена на человека",
                "Зрительный контакт = инструмент связи и общения",
                "Окситоцин растёт в присутствии знакомых людей",
                "Решение задач: сначала смотрит на человека за подсказкой"
              ]
            }
          ],
          "paragraphs": [
            "Последний пункт особенно важен: столкнувшись с неразрешимой задачей, волк продолжает пробовать самостоятельно. Собака останавливается и смотрит на человека в поисках руководства. Это поведение «референции» не существовало у волков — собаки его эволюционировали."
          ]
        },
        {
          "type": "numberedList",
          "title": "Практическое задание: Найдите признаки доместикации",
          "intro": "Посмотрите на свою собаку (или на любую собаку в парке). Попробуйте найти не менее 3 признаков доместикации и подумайте, как каждый из них помогает собаке выживать в современном мире людей.",
          "items": [
            {
              "title": "Посмотрите на уши",
              "text": "Они висячие, полустоячие или подвижные? Как собака использует их для общения с вами в сравнении с другими собаками?"
            },
            {
              "title": "Понаблюдайте за глазами",
              "text": "Устанавливает ли собака зрительный контакт, когда неуверена или чего-то хочет? Обратите внимание, насколько это отличается от того, как собаки смотрят друг на друга."
            },
            {
              "title": "Изучите окрас",
              "text": "Белая проточина, пятнистый окрас, светлые пятна? Скорее всего, это маркеры синдрома доместикации, а не просто эстетика."
            },
            {
              "title": "Обратите внимание на игровое поведение",
              "text": "Играет ли взрослая собака? С игрушками, с вами, с другими собаками? Это сохранённое ювенильное поведение является маркером доместикации."
            }
          ]
        },
        {
          "type": "callout",
          "tone": "success",
          "label": "Что записать",
          "paragraphs": [
            "Запишите 3 найденных признака и для каждого опишите один способ, которым он помогает собаке получить то, что ей нужно, от людей. Например: «висячие уши + мягкое выражение морды → я реагирую на собаку мягче, чем реагировал бы на животное с агрессивным видом»."
          ]
        },
        {
          "type": "quote",
          "quote": "Собаки — не неудавшиеся волки. Они новый вид животных, который эволюционировал специально для жизни рядом с нами.",
          "caption": "Александра Хоровиц, исследователь когнитивных способностей собак"
        },
        {
          "type": "glossary",
          "title": "Глоссарий",
          "items": [
            {
              "term": "Самодоместикация",
              "definition": "Процесс, при котором животные добровольно ассоциировались с людьми и естественным образом отбирались на спокойное, терпимое к людям поведение — без целенаправленного вмешательства человека в разведение."
            },
            {
              "term": "Синдром доместикации",
              "definition": "Совокупность физических и поведенческих признаков, появляющихся вместе у одомашненных видов: висячие уши, пятнистость, закрученный хвост, сниженные гормоны стресса и продлённая игривость."
            },
            {
              "term": "Неотения",
              "definition": "Сохранение ювенильных физических и поведенческих черт во взрослом возрасте. Собаки — неотенические волки: на протяжении всей жизни они сохраняют щенячьи черты и поведение."
            },
            {
              "term": "Схема младенца",
              "definition": "Набор физических признаков (большие глаза, округлое лицо, короткий нос), вызывающих у людей защитно-заботливые реакции. Собаки эволюционировали демонстрировать эти признаки ярче, чем волки."
            },
            {
              "term": "Окситоцин",
              "definition": "Гормон привязанности, выделяемый при социальном прикосновении и зрительном контакте. Собаки и люди взаимно вызывают выброс окситоцина через взаимный взгляд — связь, уникальная в животном мире."
            },
            {
              "term": "Levator anguli oculi medialis",
              "definition": "Мимическая мышца, присутствующая у собак, но отсутствующая у волков. Поднимает внутреннюю бровь, создавая выражение «щенячьих глаз», на которое люди инстинктивно реагируют."
            }
          ]
        }
      ]
    }
  }
};
