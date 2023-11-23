export interface Project {
  name: string;
  description: string;
  stack: string[];
  link: string;
  type: string;
}

export const projects: Project[] = [
  {
    name: "Multi Form",
    description:
      "Multi Step form allows users to seamlessly progress through each step, make selections, go back to update their choices, and finally, confirm their order.",
    link: "https://multistep-form-olive.vercel.app/",
    stack: ["Angular", "TailwindCSS"],
    type: "front",
  },
  {
    name: "Administrator UI",
    description:
      "Allows you to view, filter, edit, delete, and select users from a list retrieved via an API. The project also includes pagination and user selection capabilities.",
    link: "https://geektrust-adminui-weld.vercel.app/",
    stack: ["Angular", "TailwindCSS", "Axios"],
    type: "front",
  },
  {
    name: "Restaurant Manager",
    description:
      " App is a Node.js-based RESTful API. The goal is to manage information about restaurants and their respective menus.",
    link: "https://github.com/RuannJS/doof-app",
    stack: ["NestJS", "TypeScript", "Prisma", "MongoDB"],
    type: "back",
  },
  {
    name: "Kinvo",
    description:
      "This project aims to help a student save expenses and manage personal finances.",
    link: "https://github.com/RuannJS/kinvo-backend-test",
    stack: ["NestJS", "TypeScript", "Prisma", "MongoDB", "GraphQL"],
    type: "back",
  },
  {
    name: "Pagar.me",
    description:
      "The Pagar.me Processing Service allows you to process transactions, create payables, and provides a means for clients to check their balances.",
    link: "https://github.com/RuannJS/pagarme-psp-test",
    stack: ["NestJS", "TypeScript", "Prisma", "MongoDB"],
    type: "back",
  },
];
