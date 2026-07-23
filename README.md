# Steven. — personal site

Minimal multi-page portfolio implemented from the Figma design
[`Website`](https://www.figma.com/design/mL4i01Z84zR0PG8Drr6A8m/Website).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Inter (Google Fonts)

## Pages

| Route         | Content                          |
|---------------|----------------------------------|
| `/`           | Home doodle + thought bubble     |
| `/about`      | Bio                              |
| `/education`  | Schools + skills                  |
| `/works`      | Experience list                  |
| `/projects`   | OpenMila, Mealry                 |
| `/contact`    | Email, phone, LinkedIn, GitHub   |

Desktop layout only (left sidebar + content), matching the current Figma frames.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Copy and links live in [`src/data/content.ts`](src/data/content.ts).
Illustrations are under [`public/illustrations/`](public/illustrations/).
