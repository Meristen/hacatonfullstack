import { CATEGORIES_MAP } from "./consts";

export function getConfig() {
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const Authorization = `Bearer ${tokens.access}`;
  const config = {
    headers: {
      Authorization,
    },
  };
  return config;
}

export function toggleCategory(category) {
  return {
    id: category.id,
    title: CATEGORIES_MAP[category.title],
  };
}

export function toggleCategories(categories) {
  return categories.map(toggleCategory);
}
