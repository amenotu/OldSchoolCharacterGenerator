import React from "react";
import { GiDominoMask, GiLockPicking } from "react-icons/gi";
import thiefSkillsTable from "../../static/thiefSkillsChanceOfSuccess.png";
import { thiefInventory } from "../equipmentKits/thiefInventory";

export const thief = {
  name: "Thief",
  icon: React.createElement(GiDominoMask, {}),
  skillsIcon: React.createElement(GiLockPicking, {}),
  skillsTable: React.createElement("img", {
    src: thiefSkillsTable,
    style: { width: "25rem", height: "33rem" }
  }),
  requirements: "None",
  primeRequisite: "DEX",
  hitDice: "1d4",
  hitDiceCount: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "9",
    "9",
    "9",
    "9",
    "9"
  ],
  experienceLevel: [
    "1,200",
    "2,400",
    "4,800",
    "9,600",
    "20,000",
    "40,000",
    "80,000",
    "160,000",
    "280,000",
    "400,000",
    "520,000",
    "640,000",
    "760,000",
    "Max Level"
  ],
  maximumLevel: "14",
  allowedArmor: "Leather armor, no shields",
  allowedWeapons: "Any",
  languages: ["Alignment", "Common", "Thieves' Cant"],
  attackBonus: [
    "0",
    "0",
    "0",
    "0",
    "+2",
    "+2",
    "+2",
    "+2",
    "+5",
    "+5",
    "+5",
    "+5",
    "+7",
    "+7"
  ],
  saves: {
    poison: [13, 13, 13, 13, 12, 12, 12, 12, 10, 10, 10, 10, 8, 8],
    wands: [14, 14, 14, 14, 13, 13, 13, 13, 11, 11, 11, 11, 9, 9],
    stone: [13, 13, 13, 13, 11, 11, 11, 11, 9, 9, 9, 9, 7, 7],
    breath: [16, 16, 16, 16, 14, 14, 14, 14, 12, 12, 12, 12, 10, 10],
    magic: [15, 15, 15, 15, 13, 13, 13, 13, 10, 10, 10, 10, 8, 8]
  },
  inventory: thiefInventory,
  abilities: [
    "<strong>Back-stab:</strong> When attacking an unaware opponent from behind, a thief receives a +4 bonus to hit and doubles any damage dealt.",
    "<strong>Combat:</strong> Because of their need of stealth and free movement, thieves cannot wear armor heavier than leather and cannot use shields. They can use any weapon.",
    "<strong>Thief Skills:</strong> Thieves have the following skills, which improve as the character gains levels. Note that dice rolls for these abilities are usually made by the referee, because a thief is not always aware that he or she has failed!\n\n<div style='padding: 0 1.5rem'><strong>Climb Sheer Surfaces:</strong> A roll is required for each 100’ to be climbed. If the roll fails, the thief falls at the halfway point, suffering falling damage.\n\n<strong>Find or Remove Traps:</strong> A roll is required to find a treasure trap and then another to remove it. This may be attempted only once per trap.\n\n<strong>Hear Noise:</strong> In a quiet environment (e.g. not in combat), a thief may attempt to listen at a door or to hear the sounds of something (e.g. a wandering monster) approaching.\n\n<strong>Hide in Shadows:</strong> Requires the thief to be motionless—attacking or moving while hiding is not possible.\n\n<strong>Move Silently:</strong> A thief may attempt to sneak past enemies unnoticed.\n\n<strong>Open Locks:</strong> Requires thieves’ tools (see <i>Equipment, p24</i>). A thief can only try this skill once per lock. If the roll fails, the thief may not try the same lock again before gaining an experience level.\n\n<strong>Pick Pockets:</strong> If the victim is above 5th level, the thief’s roll is penalized by 5% for every level above 5th. There is always at least a 1% chance of failure. A roll of more than twice the percentage required for success means that the attempted theft is noticed. The referee should determine the reaction of the victim (possibly using the reaction table under <i>Encounters, Core Rules</i>).</div>"
  ],
  abilitiesSummary:
    "Back-stab, Thief Skills (climb sheer surfaces, find or remove traps, hear noise, hide in shadows, move silently, open locks, pick pockets)",
  /**
   * @see for "Using a Thief Skill" homebrew rule
   * http://doomslakers.blogspot.com/2019/01/once-again-with-thieves.html
   */
  thiefSkills: [
    "<strong>Climb Sheer Surface (CS), Find or Remove Traps (TR), Hear Noise (HN), Hide in Shadows (HS), Move Silently (MS), Open Locks (OL), Pick Pockets (PP)</strong>\n",
    "<strong>Using a Thief Skill:</strong> The DM will roll skill dice and the thief player will roll an ability check (d20 + DEX modifier) simultaneously. If the skill roll is successful, the thief has perfectly executed their subtle craft and cannot fail. Otherwise the ability check result is used to determine success or failure. <i>Thieves are exceptional at these skills. Other classes may attempt these skills with only an ability check and usually disadvantage (DM discretion).</i>"
  ]
};
