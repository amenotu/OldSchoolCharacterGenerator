import { getAbilityScoreModifier } from "./getAbilityScoreModifier";
/**
 * Utility for determining Armor Class (AC).
 * We determine ascending AC, because THAC0 is
 * awkward.
 *
 * AC = armor + Dex modifier
 *
 * @param dexScore
 */
export const getArmorClass = (dexScore: number, equipment: string) => {
  /**
   * Determine if character has any of the following types
   * of armor and use that as the base AC, otherwise base
   * AC is 10.
   *
   * Unarmored: 10
   * Leather: 12
   * Chain mail: 14
   * Plate mail: 16
   * Shield: +1
   */
  let baseArmorClass = 10;
  const leather = equipment.includes("Leather Armor");
  const chain = equipment.includes("Chain Armor");
  const plate = equipment.includes("Plate Armor");
  const shield = equipment.includes("Shield");

  if (leather) baseArmorClass = 12;
  if (chain) baseArmorClass = 14;
  if (plate) baseArmorClass = 16;
  if (shield) baseArmorClass = baseArmorClass + 1;
  /**
   * Since getAbilityScoreModifier returns a string for display,
   * we need to do a little work here to make sure that "None"
   * and other strings are converted to numbers for calculating
   * armor class.
   */
  const armorClass =
    baseArmorClass +
    Number(
      getAbilityScoreModifier(dexScore) === "None"
        ? "0"
        : getAbilityScoreModifier(dexScore)
    );

  return armorClass;
};