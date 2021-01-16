import technology from 'assets/data/technology.json';

/**
 * Get the Display name of a technology.
 * If the technology wasn't defined a warning will be written to the console and the key will be returned.
 * @param {string} techKey A key that identifies a technology.
 */
export function getTechName(techKey) {
  const techEntry = technology[techKey]?.name;
  if (techEntry === undefined) {
    console.warn(`No tech entry for ${techKey}.`);
  }
  return techEntry ?? techKey;
}