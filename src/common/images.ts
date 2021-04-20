import { Player, API_BASE_URL } from "../api";

const IMG_BASE_URL = "http://transformice.com/images";

export const getBadge = (id: string | number) => {
  // removes counter from badge
  return `${IMG_BASE_URL}/x_transformice/x_badges/x_${id.toString().split("_")[0]}.png`;
};

export const getInventory = (id: string | number) => {
  return `${IMG_BASE_URL}/x_transformice/x_inventaire/${id}.jpg`;
};

export const getImage = (path: string) => {
  return `${IMG_BASE_URL}/${path}`;
};

type getLook = {
  (player: Player): string;
  (outfit: string): string;
};
export const getLook: getLook = (playerOrLook: Player | string) => {
  if (typeof playerOrLook === "string") return `${API_BASE_URL}/dressroom/mouse/${playerOrLook}`;
  else return `${API_BASE_URL}/dressroom/mouse/${playerOrLook.shop.look}`;
};

/**
 * Get player avatar by id
 *
 * @param id the player id
 * @param min whether to get the min version (50x50) or normal version (100x100)
 */
export const getAvatar = (id: number, min = false) => {
  const lastId = id % 10000;
  return `https://avatars.atelier801.com/${lastId}/${id}${min ? "_50" : ""}.jpg`;
};
