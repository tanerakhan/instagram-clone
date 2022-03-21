export const articles = [
  {
    post_image: "post1.jpeg",
    post_alt: "karavan kamp",
    avatar: "avatar.jpeg",
    description: "test açıklama",
    is_active_post: true,
    tags: [
      {
        name: "lion",
        url: "/",
      },
      {
        name: "felin",
        url: "/",
      },
      {
        name: "animallove",
        url: "/",
      },
    ],
    user: {
      name: "african_animal",
      url: "/",
    },
  },
  {
    post_image: "post2.jpeg",
    post_alt: "karavan kamp 2",
    avatar: "avatar.jpeg",
    description: "Are you team lion 🦁 or team cheetah 🐆 ?",
    is_active_post: false,
    user: {
      name: "african_animal",
      url: "/",
    },
  },
];

export const suggegtion_for_you = [
  {
    id: 1,
    user_image: "avatar.jpeg",
    user_name: "african_animal",
    user_full_name: "African Animal",
    user_url: "/",
    status: "followed",
    who_is_following: ["national geo", "animal planet"],
  },
  {
    id: 2,
    user_image: "avatar.jpeg",
    user_name: "african_animal",
    user_full_name: "African Animal",
    user_url: "/",
    status: "new",
    who_is_following: ["african leopar", "panter"],
  },
];

export const user = {
  user_image: "avatar.jpeg",
  user_name: "tanerakhan",
  user_full_name: "Taner Akhan",
  user_url: "/",
};

export const footerLink = [
  "Meta",
  "About",
  "Blog",
  "Help",
  "API",
  "Privacy",
  "Terms",
  "Top & Accounts",
  "Hashtags",
  "Locations",
  "Dance",
  "Food & Drink",
  "Home & Garden",
  "Music",
  "Visual",
];

export const suggegtionLink = [
  "About",
  "Help",
  "Press",
  "API",
  "Jobs",
  "Privacy",
  "Terms",
  "Locations",
  "Top Accounts",
  "Hashtags",
  "Language",
];
