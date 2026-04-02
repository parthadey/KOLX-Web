const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const appLinks = {
  // KOLX application routes
  login: `${APP_URL}/login`,
  register: `${APP_URL}/register`,
  dashboard: `${APP_URL}/dashboard`,

  // KOLX-Web marketing routes
  demo: "/demo",
  pricing: "/pricing",
  features: "/features",
  contact: "/contact",
};
