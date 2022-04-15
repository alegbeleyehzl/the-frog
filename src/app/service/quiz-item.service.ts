import { Injectable } from '@angular/core';
import { QuizItem } from '../model/quiz-item';

@Injectable({
  providedIn: 'root'
})
export class QuizItemService {

  private assessment = [
    {
      id          : 1,
      quizId      : 1,
      question    : 'When does a frog become an adult?',
      choices     : ['When its tail gets smaller', 'When it has back legs.', 'When it has all four legs.', 'When it has all four legs and its tail disappears'],
      answer      : 'When it has all four legs and its tail disappears',
    }
    ,{
      id          : 2,
      quizId      : 1,
      question    : 'The young form of an animal that changes as it becomes an adult is a',
      choices     : ['egg', 'frog', 'baby', 'larva'],
      answer      : 'larva',
    }
    ,{
      id          : 3,
      quizId      : 1,
      question    : 'Which of the following is NOT CORRECT about tadpoles and frogs?',
      choices     : ["Frogs have smooth skin, but tadpoles don't.", "Tadpoles use their tails to move and frogs use their legs.", "Tadpoles can be found in Antarctica, but frogs can't.", "Tadpoles breathe with gills and most frogs use lungs."],
      answer      : "Tadpoles can be found in Antarctica, but frogs can't.",
    }
    ,{
      id          : 4,
      quizId      : 1,
      question    : 'To begin digestion, which organ stores food and mixes it with enzymes?',
      choices     : ["Small Intestine", "Large Intestine", "Stomach", "Pancreas"],
      answer      : 'Large Intestine',
    }
    ,{
      id          : 5,
      quizId      : 1,
      question    : "What is the name of the digestive system's posterior organ that stores undigested food?",
      choices     : ["Small Intestine", "Large Intestine", "Stomach", "Pancreas"],
      answer      : 'Large Intestine',
    }
    ,{
      id          : 6,
      quizId      : 1,
      question    : "In the duodenum, which gland secretes digesting enzymes?",
      choices     : ["Small Intestine", "Large Intestine", "Stomach", "Pancreas"],
      answer      : 'Pancreas',
    }
    ,{
      id          : 7,
      quizId      : 1,
      question    : "Which of these distinguishes a frog from a toad base on its skin features?",
      choices     : ["Moist and Slippery", "Rough", "Warty", "Moist"],
      answer      : "Moist and Slippery",
    }
    ,{
      id          : 8,
      quizId      : 1,
      question    : "Which of these is NOT a head feature of a frog?",
      choices     : ["Eyes", "Tympanic Membrane", "External Nares", "Shank"],
      answer      : "Shank",
    }
    ,{
      id          : 9,
      quizId      : 1,
      question    : "What is the name of the huge reddish-brown organ that secretes bile and is divided into left, middle, and right lobes?",
      choices     : ["Liver", "Spleen", "Anus", "Cloaca"],
      answer      : "Liver",
    }
    ,{
      id          : 10,
      quizId      : 1,
      question    : "When frogs swim, what part of their body do they use to propel themselves through the water while steering with their front legs?",
      choices     : ["Forelimb", "Hind limb", "Foot", "Biceps"],
      answer      : "Hind limb",
    }
    ,{
      id          : 11,
      quizId      : 1,
      question    : "Which is/are part of Digestive Glands? I. Liver II. Gall Bladder III. Cloaca IV. Anus",
      choices     : ["I only", "II only ", "I and II ", "I, II, and IV"],
      answer      : "I and II ",
    }
    ,{
      id          : 12,
      quizId      : 1,
      question    : "Which of the following is CORRECT digestive tract?",
      choices     : ["Mouth, pharynx, esophagus, stomach, large intestine, small intestine, cloaca", "Mouth, esophagus, pharynx, stomach, small intestine, large intestine, cloaca", "Mouth, pharynx, esophagus, stomach, small intestine, large intestine, cloaca", "Pharynx, mouth, esophagus, small intestine, large intestine, stomach, cloaca"],
      answer      : "Mouth, pharynx, esophagus, stomach, small intestine, large intestine, cloaca",
    }
    ,{
      id          : 13,
      quizId      : 1,
      question    : "What chamber of a frog's heart is responsible for pumping blood from the heart to the lungs and other bodily parts?",
      choices     : ["Ventricle", "Left Atrium", "Right Atrium", "Pulmonary Veins"],
      answer      : "Ventricle",
    }
    ,{
      id          : 14,
      quizId      : 1,
      question    : "What do you call the fat deposits in frogs' bodily cavities that are needed to hibernate and reproduce?",
      choices     : ["Fat Body", "Cloaca", "Ureter", "Kidney"],
      answer      : "Fat Body",
    }
    ,{
      id          : 15,
      quizId      : 1,
      question    : "What are the tubes that transport eggs from the ovaries to the cloaca in a female frog's reproductive system?",
      choices     : ["Ova", "Ovaries", "Ovum", "Oviducts"],
      answer      : "Oviducts",
    }
    ,{
      id          : 16,
      quizId      : 1,
      question    : "What do you call the primary pathway that connects the brain to the rest of the body?",
      choices     : ["Spinal Cord", "Spinal Nerves", "Cranial Nerves", "All of the above"],
      answer      : "Spinal Cord",
    }
    ,{
      id          : 17,
      quizId      : 1,
      question    : "Which portion of the brain is responsible for maintaining balance and equilibrium?",
      choices     : ["Cerebrum", "Medulla Oblongata", "Cerebellum", "Optic Lobe"],
      answer      : "Cerebellum",
    }
    ,{
      id          : 18,
      quizId      : 1,
      question    : "What nerves connect the brain to the rest of the body?",
      choices     : ["Medulla Oblongata", "Spinal Nerves", "Olfactory Lobe", "Cranial Nerves"],
      answer      : "Cranial Nerves",
    }
    ,{
      id          : 19,
      quizId      : 1,
      question    : "What part of the frog's ventral abdomen divides the rectus abdominis and the inscriptiones tendinae medially?",
      choices     : ["Iliolumbares", "Dorsalis Scapulae", "Periformis", "Linea Alba"],
      answer      : "Linea Alba",
    }
    ,{
      id          : 20,
      quizId      : 1,
      question    : "What is the name of the muscle that lies behind the tympanum?",
      choices     : ["Depressor mandibularis", "Temporalis", "Dorsalis scapulae", "Deltoid"],
      answer      : "Depressor mandibularis",
    }
    ,{
      id          : 21,
      quizId      : 1,
      question    : "What do you call the bones located at lower part of the palm?",
      choices     : ["Metacarpus", "Carpus", "Ilium", "Femur"],
      answer      : "Carpus",
    }
    ,{
      id          : 22,
      quizId      : 1,
      question    : "What is called the thigh bone?",
      choices     : ["Illim", "Femur", "Tibiofibula", "Radio Ulna"],
      answer      : "Femur",
    }
    ,{
      id          : 23,
      quizId      : 1,
      question    : "What glands secrete sticky and bitter substances to make amphibians unattractive to predators?",
      choices     : ["Mucous glands", "Adrenal glands", "Granular glands", "All of the above"],
      answer      : "Granular glands",
    }
    ,{
      id          : 24,
      quizId      : 1,
      question    : "What is the name of the sac that collects blood from the vena cava?",
      choices     : ["Ventricle", "Posterior Vena cava", "Sinus Venosus ", "Truncus Arteriosis"],
      answer      : "Sinus Venosus ",
    }
    ,{
      id          : 25,
      quizId      : 1,
      question    : "What is the posterior external opening called?",
      choices     : ["Cloaca", "Anus", "Mouth", "Esophagus"],
      answer      : "Anus",
    }
    ,{
      id          : 26,
      quizId      : 1,
      question    : "What are the tubes of a female frog's reproductive system that carry eggs from the ovaries to the cloaca?",
      choices     : ["Oviducts", "Sperm", "Ovaries", "Ova or eggs"],
      answer      : "Oviducts",
    }
    ,{
      id          : 27,
      quizId      : 1,
      question    : "What is the male sex cell or gametes?",
      choices     : ["Oviducts", "Sperm", "Testes", "Ova or eggs"],
      answer      : "Sperm",
    }
    ,{
      id          : 28,
      quizId      : 1,
      question    : "What are small bones forming the fingers?",
      choices     : ["Phalange", "Carpus", "Prootic", "Orbital cavity"],
      answer      : "Phalange",
    }
    ,{
      id          : 29,
      quizId      : 1,
      question    : "What broad sheet of muscle across the lower jaw called?",
      choices     : ["Mylohyoid", "Deltoid", "Genohyoid", "Hypoglossus"],
      answer      : "Mylohyoid",
    }
    ,{
      id          : 30,
      quizId      : 1,
      question    : "What is the name for the broad muscle sheet that runs over the lower jaw?",
      choices     : ["Optic Lobes", "Olfactory lobe", "Cerebellum", "Cerebrum"],
      answer      : "Optic Lobes",
    }
  ];

  private items = [
    {
      id          : 1,
      quizId      : 1,
      question    : "What is the name of the nearly grown frog with some of its tail still attached and breathes through its lungs?",
      choices     : ["Tadpole", "Froglet", "Adult frog", "Tadpole with legs"],
      answer      : "Froglet",
    }
    ,{
      id          : 2,
      quizId      : 1,
      question    : "In the life cycle of a frog, how many stages are there?",
      choices     : ["Six", "Four", "Five", "Three"],
      answer      : "Four",
    }
    ,{
      id          : 3,
      quizId      : 1,
      question    : "Which of the following list of stages of a frog's life cycle is CORRECT?",
      choices     : ["Frog, Froglet, Tadpole, Adult", "Egg, Tadpole, Froglet, Frog", "Tadpole, Egg, Frog, Froglet", "Mother, Froglet, Tadpole, Frog, Egg"],
      answer      : "Egg, Tadpole, Froglet, Frog",
    }
    ,{
      id          : 4,
      quizId      : 1,
      question    : "Where do amphibians live?",
      choices     : ["Mountains", "On Land", "In Water", "Both water and land"],
      answer      : "Both water and land",
    }
    ,{
      id          : 5,
      quizId      : 1,
      question    : "A frog is an amphibian, what other organism is an amphibian?",
      choices     : ["snake", "toad", "fish", "turtle"],
      answer      : "toad",
    }
    ,{
      id          : 6,
      quizId      : 2,
      question    : "Which of these distinguishes a toad from a frog base of its body features?",
      choices     : ["Streamlined", "Rough and Warty", "Massive and Bulky", "None of the above"],
      answer      : "Massive and Bulky",
    }
    ,{
      id          : 7,
      quizId      : 2,
      question    : "What is it called the row of little conical teeth on the upper jaw edge that toads lack?",
      choices     : ["Vomerine Teeth", "Maxillary Teeth", "Glottis", "None of the above"],
      answer      : "Maxillary Teeth",
    }
    ,{
      id          : 8,
      quizId      : 2,
      question    : "Which of the following is NOT a reason why female frogs have a larger size than a male frog?",
      choices     : ["because bigger females can hold more eggs.", "Female frogs are protected by their size with the predator.", "Female frogs are the ones responsible for holding the eggs.", "because it is needed to accommodate the weight of the male frog during mating."],
      answer      : "Female frogs are protected by their size with the predator.",
    }
    ,{
      id          : 9,
      quizId      : 2,
      question    : "What happened to the vocal sac of a male frog when not calling or croaking?",
      choices     : ["Thin and baggy skin of their throat.", "Shades of yellowish or greenish are prevalent.", "The skin of the vocal sac is also frequently the same in colour and the rest of the bottom.", "All of the above"],
      answer      : "Thin and baggy skin of their throat.",
    }
    ,{
      id          : 10,
      quizId      : 2,
      question    : "What are the features that can be used to differentiate male from female frogs?",
      choices     : ["The size of the male frog is smaller.", "The presence of the vocal sac of male frogs.", "The size of the ears are larger than their eyes.", "All of the above"],
      answer      : "All of the above",
    }
    ,{
      id          : 11,
      quizId      : 3,
      question    : "What are the three parts that the exchange of oxygen and carbon dioxide takes in a frog?",
      choices     : ["Lungs, heart, mouth", "Mouth, nostril, lungs", "Skin, lungs, mouth", "Skin, blood vessels, lungs"],
      answer      : "Skin, blood vessels, lungs",
    }
    ,{
      id          : 12,
      quizId      : 3,
      question    : "What is the largest organ in a frog's body?",
      choices     : ["Liver", "Heart", "Large intestine", "Small intestine"],
      answer      : "Liver",
    }
    ,{
      id          : 13,
      quizId      : 3,
      question    : "What is the name of a transparent, retractable membrane that protects the Frog's eye?",
      choices     : ["Tympanic membrane", "Nictitating membrane", "Mucous Membrane", "Plasma membrane"],
      answer      : "Nictitating membrane",
    }
    ,{
      id          : 14,
      quizId      : 3,
      question    : "If humans have two forearm and lower leg bones, how many forearm and lower leg bone/s do frogs have?",
      choices     : ["1", "2", "3", "4"],
      answer      : "1",
    }
    ,{
      id          : 15,
      quizId      : 3,
      question    : "What is the difference between the fertilization of eggs in humans and frogs?",
      choices     : ["Human egg and frog's egg are both fertilized externally.", "Human egg and frog's egg are both fertilized internally.", "Human egg is fertilized internally while a frog's egg is fertilized externally.", "Human egg is fertilized externally while a frog's egg is fertilized internally."],
      answer      : "Human egg is fertilized internally while a frog's egg is fertilized externally.",
    }
    ,{
      id          : 16,
      quizId      : 4,
      question    : "What region on the lower side or belly that is away from the back and opposite the dorsal?",
      choices     : ["Medial", "Lateral	", "Distal", "Ventral"],
      answer      : "Ventral",
    }
    ,{
      id          : 17,
      quizId      : 4,
      question    : "What region pertains to the back or upper surface that are opposite to the ventral region?",
      choices     : ["Dorsal", "Cephalic", "Caudal", "Medial"],
      answer      : "Dorsal",
    }
    ,{
      id          : 18,
      quizId      : 4,
      question    : "What plane divides the body into symmetrical right and left halves that includes the longitudinal axis?",
      choices     : ["Frontal plane", "Sagittal plane", "Transverse plane", "Parasagittal plane"],
      answer      : "Sagittal plane",
    }
    ,{
      id          : 19,
      quizId      : 4,
      question    : "What axis from side to side at right angle to the longitudinal and dorso-ventral axes?",
      choices     : ["Main axis", "Transverse axis", "Longitudinal axis", "Dorso-ventral axis"],
      answer      : "Transverse axis",
    }
    ,{
      id          : 20,
      quizId      : 4,
      question    : "What particular region is the hind part or toward the tail end and definitely away from the head?",
      choices     : ["Anterior", "Posterior", "Proximal", "Distal"],
      answer      : "Posterior",
    }
    ,{
      id          : 21,
      quizId      : 5,
      question    : "The eyes of a frog are large and move around in their sockets. What is the name of the transparent skin flap that covers the eyes?",
      choices     : ["Outer membrane", "Nictitating membrane", "Nictitating membrane", "Outer eyelid"],
      answer      : "Nictitating membrane",
    }
    ,{
      id          : 22,
      quizId      : 5,
      question    : "What is the name of the muscle structure linked to the front of the mouth and used to collect insects (its food)?",
      choices     : ["Tongue", "Esophagus", "Eye Socket", "Pharynx"],
      answer      : "Tongue",
    }
    ,{
      id          : 23,
      quizId      : 5,
      question    : "In a frog, what joins the mouth to the stomach?",
      choices     : ["Glottis", "Esophagus/Gullet", "Eustachian tube openings", "Tongue"],
      answer      : "Esophagus/Gullet",
    }
    ,{
      id          : 24,
      quizId      : 5,
      question    : "Which is NOT a part of a group (mouthpart)?",
      choices     : ["Maxillary Teeth", "Eye Socket", "Gullet", "Forelimb"],
      answer      : "Forelimb",
    }
    ,{
      id          : 25,
      quizId      : 5,
      question    : "What is the name of the membranous extension of the skin connecting one toe to the other?",
      choices     : ["web", "foot", "Hindlimb", "forelimb"],
      answer      : "web",
    }
    ,{
      id          : 26,
      quizId      : 6,
      question    : "What organ that collects and stores urine until it is released?",
      choices     : ["Ureter", "Urinary Bladder", "Kidney", "Seminal Vesicles"],
      answer      : "Urinary Bladder",
    }
    ,{
      id          : 27,
      quizId      : 6,
      question    : "What is the principal organ of digestion and absorption of digested food?",
      choices     : ["Duodenum", "Large intestine", "Small intestine", "Gallbladder"],
      answer      : "Small intestine",
    }
    ,{
      id          : 28,
      quizId      : 6,
      question    : "What is the sac that stores bile?",
      choices     : ["Duodenum", "Large intestine", "Pancreas", "Gallbladder"],
      answer      : "Gallbladder",
    }
    ,{
      id          : 29,
      quizId      : 6,
      question    : "What organ is responsible for absorbing water from the food residue?",
      choices     : ["Duodenum", "Urinary bladder", "Small intestine", "Large Intestine"],
      answer      : "Large Intestine",
    }
    ,{
      id          : 30,
      quizId      : 6,
      question    : "What is called an organ that produces, stores, and eliminates blood cells?",
      choices     : ["Liver", "Spleen", "Bile sac", "Pancreas"],
      answer      : "Spleen",
    }
    ,{
      id          : 31,
      quizId      : 7,
      question    : "What is the name of the huge reddish-brown organ that secretes bile and is divided into left, middle, and right lobes?",
      choices     : ["Liver", "Spleen", "Anus", "Cloaca"],
      answer      : "Liver",
    }
    ,{
      id          : 32,
      quizId      : 7,
      question    : "What is the name of the organ on the ventral side of the median lobe which is a little greenish sac containing bile?",
      choices     : ["Spleen", "Pancreas", "Gallbladder", "Pharynx"],
      answer      : "Gallbladder",
    }
    ,{
      id          : 33,
      quizId      : 7,
      question    : "What is the name of the digestive system's posterior external opening, which regulates feces expulsion?",
      choices     : ["Cloaca", "Anus", "Pylorus", "Gallbladder"],
      answer      : "Anus",
    }
    ,{
      id          : 34,
      quizId      : 7,
      question    : "When the frog's digestive and urogenital system's products are discharged from the body, which organ do they pass through?",
      choices     : ["Cloaca", "Anus", "Pylorus", "Gallbladder"],
      answer      : "Cloaca",
    }
    ,{
      id          : 35,
      quizId      : 7,
      question    : "What organ is responsible for digestion and absorption of digested food?",
      choices     : ["Small Intestine", "Large Intestine", "Stomach", "Pancreas"],
      answer      : "Small Intestine",
    }
    ,{
      id          : 36,
      quizId      : 8,
      question    : "What is the name of the huge vein that carries blood from the anterior of the body to the heart?",
      choices     : ["Ventricle", "Anterior Vena Cava", "Posterior Vena cava", "Sinus Venosus"],
      answer      : "Anterior Vena Cava",
    }
    ,{
      id          : 37,
      quizId      : 8,
      question    : "What is the name of the chamber in the heart of a frog that takes blood from the sinus venosus?",
      choices     : ["Ventricle", "Left Atrium", "Right Atrium", "Pulmonary Veins"],
      answer      : "Right Atrium",
    }
    ,{
      id          : 38,
      quizId      : 8,
      question    : "The chamber of the heart that takes blood from the lungs is called what?",
      choices     : ["Ventricle", "Left Atrium", "Right Atrium", "Pulmonary Veins"],
      answer      : "Left Atrium",
    }
    ,{
      id          : 39,
      quizId      : 8,
      question    : "What organ in the frog's circulatory system that makes, stores, and destroys blood cells?",
      choices     : ["Kidney", "Spleen", "Stomach", "Urinary Bladder"],
      answer      : "Spleen",
    }
    ,{
      id          : 40,
      quizId      : 8,
      question    : "What chamber of a frog's heart is responsible for pumping blood from the heart to the lungs and other bodily parts?",
      choices     : ["Pulmonary Veins", "Right Atrium", "Left Atrium", "Ventricle "],
      answer      : "Ventricle ",
    }
    ,{
      id          : 41,
      quizId      : 9,
      question    : "How do tadpoles and froglets breathe?",
      choices     : ["Using the gills", "Through the lungs", "Using their mouth", "Through their skin"],
      answer      : "Using the gills",
    }
    ,{
      id          : 42,
      quizId      : 9,
      question    : "What respiration is accomplished through the use of external gills?",
      choices     : ["Cutaneous respiration", "Buccal respiration", "Branchial respiration", "Pulmonary respiration"],
      answer      : "Branchial respiration",
    }
    ,{
      id          : 43,
      quizId      : 9,
      question    : "What type of respiration is the act of breathing on air with the help of the lungs while on land?",
      choices     : ["Cutaneous respiration", "Buccal respiration", "Branchial respiration", "Pulmonary respiration"],
      answer      : "Pulmonary respiration",
    }
    ,{
      id          : 44,
      quizId      : 9,
      question    : "What is the term of the passage through which the air enters and leaves the lungs?",
      choices     : ["Respiratory tract", "Pharynx", "Trachea", "Nose"],
      answer      : "Respiratory tract",
    }
    ,{
      id          : 45,
      quizId      : 9,
      question    : "What is the type of breathing that occurs through the lining of the bucco-pharyngeal cavity?",
      choices     : ["Cutaneous respiration", "Buccal respiration", "Branchial respiration", "Pulmonary respiration"],
      answer      : "Buccal respiration",
    }
    ,{
      id          : 46,
      quizId      : 10,
      question    : "What organ of the female reproductive system is responsible for egg production?",
      choices     : ["Ova", "Ovary", "Ovum", "Oviduct"],
      answer      : "Ovary",
    }
    ,{
      id          : 47,
      quizId      : 10,
      question    : "What is the sex organ that produces sex cells in males?",
      choices     : ["Sperm", "Testes", "Ova", "None of the above"],
      answer      : "Testes",
    }
    ,{
      id          : 48,
      quizId      : 10,
      question    : "What hormone-secreting organs are positioned near the kidneys?",
      choices     : ["Urinary Ducts", "Fat body", "Urinary Bladder", "Adrenal Glands"],
      answer      : "Adrenal Glands",
    }
    ,{
      id          : 49,
      quizId      : 10,
      question    : "What are the female sex cells or gametes called?",
      choices     : ["Ova", "Ovaries", "Ovum", "Oviducts"],
      answer      : "Ova",
    }
    ,{
      id          : 50,
      quizId      : 10,
      question    : "What is the name of the organ that collects and holds urine until it is released?",
      choices     : ["Ureter", "Urinary Bladder", "Kidney", "Seminal Vesicles"],
      answer      : "Urinary Bladder",
    }
    ,{
      id          : 51,
      quizId      : 11,
      question    : "Which part of the frog's brain is responsible for smelling?",
      choices     : ["Medulla Oblongata", "Spinal Nerves", "Olfactory Lobe", "Cranial Nerves"],
      answer      : "Olfactory Lobe",
    }
    ,{
      id          : 52,
      quizId      : 11,
      question    : "In which area of the brain are some involuntary functions centered?",
      choices     : ["Medulla Oblongata", "Spinal Nerves", "Olfactory Lobe", "Cranial Nerves"],
      answer      : "Medulla Oblongata",
    }
    ,{
      id          : 53,
      quizId      : 11,
      question    : "What nerves connect the spinal cord to the rest of the body?",
      choices     : ["Medulla Oblongata", "Spinal Nerves", "Olfactory Lobe", "Cranial Nerves"],
      answer      : "Spinal Nerves",
    }
    ,{
      id          : 54,
      quizId      : 11,
      question    : "Which is NOT a part of Frog's brain?",
      choices     : ["Cerebrum", "Cerebellum", "Optic Lobe", "None of the above"],
      answer      : "None of the above",
    }
    ,{
      id          : 55,
      quizId      : 11,
      question    : "What organ of a frog is white-colored, elongated structure that is safely located in the cranial cavity of the skull?",
      choices     : ["Nerves", "Brain", "Spinal Cord", "Peripheral Nervous System"],
      answer      : "Brain",
    }
    ,{
      id          : 56,
      quizId      : 12,
      question    : "What is the name of the narrow muscle that is partially covered by the sartorius at the distal end but exposed at the proximal end?",
      choices     : ["Gracilis minor", "Gracilis major", "Abductor lungus", "Abductor magnus"],
      answer      : "Abductor lungus",
    }
    ,{
      id          : 57,
      quizId      : 12,
      question    : "What is the round muscle located directly above the depressor on the dorsal portion of the body?",
      choices     : ["Temporalis", "Latissimus Dorsi", "Triceps femoris", "External oblique"],
      answer      : "Temporalis",
    }
    ,{
      id          : 58,
      quizId      : 12,
      question    : "Which muscle is located on the sides of the abdomen, originates from the dorsal fascia, inserts on the linea alba, supports and compresses the abdomen, and compresses the lung?",
      choices     : ["Triceps brachii", "Pectoralis", "External oblique", "Sartorius"],
      answer      : "External oblique",
    }
    ,{
      id          : 59,
      quizId      : 12,
      question    : "What is the name of the fan-shaped muscle that lies dorsally between the supra scapula and the scapula?",
      choices     : ["Longissimus Dorsi", "Illiolumbaris", "Coccygeoiliacus", "Latissimus Dorsi"],
      answer      : "Latissimus Dorsi",
    }
    ,{
      id          : 60,
      quizId      : 12,
      question    : "What is the name of the long bone that runs from the shoulder to the elbow in the arm or forelimb?",
      choices     : ["Humerus", "Maxillary", "Vertibra", "Carpus"],
      answer      : "Humerus",
    }
  ];

  public getItems( quizId: number ): {} {
    let quizItems = this.items.filter( item => item.quizId == quizId );
    return this.shuffle( quizItems );
  }

  public getAssessmentQuestions(): {} {
    return this.shuffle(this.assessment);
  }

  shuffle(items) {
    var m = items.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = items[m];
      items[m] = items[i];
      items[i] = t;
    }
  
    return items;
  }
}
