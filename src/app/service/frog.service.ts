import { Injectable } from '@angular/core';
import { Frog } from '../model/frog';

@Injectable({
  providedIn: 'root'
})
export class FrogService {

  private dissection = [
    {
      id          : 1,
      name        : "Full Body - Closed Guts",
      filename    : "full_body_closed_guts.png",
      order       : 1,
      action      : 3
    }
    ,{
      id          : 2,
      name        : "Full Body - Closed Guts and Pinned Limbs with Dotted Lines",
      filename    : "closed_guts_pinned_limbs_and_dotted_lines.png",
      action      : 2
    }
    ,{
      id          : 3,
      name        : "Full Body - Closed Guts and Pinned Limbs with Solid Lines",
      filename    : "closed_guts_pinned_limbs_and_solid_lines.png",
      action      : 3
    }
    ,{
      id          : 4,
      name        : "Full Body - Skin Opened and Pinned Limbs and Skin",
      filename    : "open_skin_pinned_limbs_and_skin.png",
      action      : 1
    }
    ,{
      id          : 5,
      name        : "Full Body - Skin Opened and Pinned Limbs and Skin with Solid Lines",
      filename    : "open_skin_pinned_limbs_and_skin_solid_lines.png",
      action      : 3
    }
    ,{
      id          : 6,
      name        : "Full Body - Opened Guts and Pinned Limbs, Skin, and Muscles",
      filename    : "open_guts_pinned_limbs_and_skin_and_muscle.png",
      action      : 0
    }
    
  ];

  private bodyParts = [
    {
      id          : 0,
      name        : "Complete Internal Organs",
      filename    : "0_internal_organs_complete.png",
      description : "Instructions",
      action      : 0
    }
    ,{
      id          : 1,
      name        : "Fat Bodies",
      filename    : "1_fatbodies_lifted.jpg",
      description : "Frogs with fat bodies have large amounts of fat in their body cavities. It is required for hibernation and mating.",
      action      : 1
    }
    ,{
      id          : 2,
      name        : "Fat Bodies",
      filename    : "2_fatbodies_removed.png",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      action      : 0
    }
    ,{
      id          : 3,
      name        : "Liver",
      filename    : "3_liver_lifted.jpg",
      description : "In the digestive process of a frog, it performs a crucial role. It creates the liquid that helps frogs digest their meal.",
      action      : 1
    }
    ,{
      id          : 4,
      name        : "Liver",
      filename    : "4_liver_removed.png",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      action      : 0
    }
    ,{
      id          : 5,
      name        : "Large Intestine",
      filename    : "5_largeintestine_lifted.jpg",
      description : "It is responsible for absorbing water from the food residue.",
      action      : 1
    }
    ,{
      id          : 6,
      name        : "Large Intestine",
      filename    : "6_largeintestine_removed.png",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      action      : 0
    }
    ,{
      id          : 7,
      name        : "Small Intestine",
      filename    : "7_smallintestine_lifted.jpg",
      description : "is the main organ for digestion and absorption of food.",
      action      : 1
    }
    ,{
      id          : 8,
      name        : "Small Intestine",
      filename    : "8_smallintestine_removed.png",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      action      : 0
    }
    ,{
      id          : 9,
      name        : "Gonads",
      filename    : "9_eggs_lifted.jpg",
      description : "The testes in the male and the ovaries in the female are the gonads, or primary reproductive organs. These organs are responsible for the production of sperm and eggs, as well as secreting hormones and being classified as endocrine glands.",
      action      : 1
    }
    ,{
      id          : 10,
      name        : "Gonads",
      filename    : "10_eggs_removed.png",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      action      : 0
    }
    ,{
      id          : 11,
      name        : "Heart",
      filename    : "11_heart_lifted.jpg",
      description : "The circulatory system's pumping organ (has 3 chambers).",
      action      : 1
    }
    ,{
      id          : 12,
      name        : "Heart",
      filename    : "12_heart_removed.png",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      action      : 0
    }
    ,{
      id          : 13,
      name        : "Stomach",
      filename    : "13_stomach_lifted.jpg",
      description : "Food is stored and mixed with enzymes to start digestion.",
      action      : 1
    }
    ,{
      id          : 14,
      name        : "Stomach",
      filename    : "14_stomach_removed.png",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      action      : 0
    }
    ,{
      id          : 15,
      name        : "Kidney",
      filename    : "15_kidney_lifted.jpg",
      description : "filter the blood and eliminate the surplus water. The urine is subsequently transported from the kidneys to the urinary bladder via the ureters.",
      action      : 1
    }
    ,{
      id          : 16,
      name        : "Kidney",
      filename    : "16_kidney_removed.png",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      action      : 0
    }
    ,{
      id          : 17,
      name        : "Lungs",
      filename    : "17_lungs_lifted.jpg",
      description : "to breathe when they are active and need more oxygen than skin respiration alone can provide.",
      action      : 1
    }
    ,{
      id          : 18,
      name        : "Lungs",
      filename    : "18_lungs_removed.png",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      action      : 0
    }
    ,{
      id          : 19,
      name        : "Spleen",
      filename    : "19_splin_lifted.jpg",
      description : "A circulatory system has an organ that produces, stores, and eliminates  blood cells.",
      action      : 1
    }
    ,{
      id          : 20,
      name        : "Spleen",
      filename    : "20_splin_removed.png",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      action      : 0
    }
    ,{
      id          : 21,
      name        : "Gall Bladder",
      filename    : "21_galbladder_lifted.jpg",
      description : "stores the bile produced by the liver.",
      action      : 1
    }
    ,{
      id          : 22,
      name        : "Gall Bladder",
      filename    : "22_gallbladder_removed.png",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      action      : 0
    }
    ,{
      id          : 23,
      name        : "Urinary Bladder",
      filename    : "23_bladder_lifted.jpg",
      description : "is the organ that collects and holds urine until it is released.",
      action      : 1
    }
    ,{
      id          : 24,
      name        : "Urinary Bladder",
      filename    : "24_bladder_removed.png",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      action      : 0
    }
  ];



  public getFrogDissectionParts(): Array<Frog> {
    return this.dissection;
  }

  public getFrogOrgans(): Array<Frog>{
    return this.bodyParts;
  }
}


