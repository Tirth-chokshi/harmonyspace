Sure, let's enhance the README file according to the problem statement and the specified tech stack (Next.js 14, MongoDB, Shadcn-UI). Here's the updated README:

```markdown
<p align="center">
  <img src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/96/external-readme-is-a-easy-to-build-a-developer-hub-that-adapts-to-the-user-logo-regular-tal-revivo.png" width="100" />
</p>
<p align="center">
    <h1 align="center">HARMONYSPACE</h1>
</p>
<p align="center">
    <em>Cultivating human connections and promoting mental wellness in the digital age</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Tirth-chokshi/harmonyspace.git?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Tirth-chokshi/harmonyspace.git?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Tirth-chokshi/harmonyspace.git?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Tirth-chokshi/harmonyspace.git?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=flat&logo=MongoDB&logoColor=white" alt="MongoDB">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running harmonyspace](#-running-harmonyspace)
>   - [🧪 Tests](#-tests)
> - [🛠 Project Roadmap](#-project-roadmap)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)
> - [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

Harmonyspace is a full-stack application focused on cultivating human connections and promoting mental wellness in the digital age. It provides a platform for users to connect, share experiences, and access mental wellness resources.

---

## 📦 Features

- **User Authentication and Profiles**
  - User registration and login with email/password or social media.
  - User profiles with customizable information like interests, goals, and preferred communication styles.
- **Community Building**
  - Creation of interest-based communities or groups.
  - Discussion forums within communities for users to engage in conversations.
- **Mental Wellness Resources**
  - Curated collection of articles, videos, podcasts, and online courses related to mental health and well-being.
  - Integration with mental health professionals for advice and guidance.
- **Events and Workshops**
  - Schedule and host virtual events, workshops, and webinars on mental wellness topics.
  - Calendar integration for users to keep track of upcoming events.
- **Support and Counseling**
  - Access to online counseling sessions with licensed therapists or counselors.
  - Peer support groups for users to connect and share experiences.

---

## 📂 Repository Structure

```sh
└── harmonyspace/
    ├── README.md
    ├── components.json
    ├── jsconfig.json
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── next.svg
    │   └── vercel.svg
    ├── src
    │   ├── app
    │   │   ├── api
    │   │   │   └── auth
    │   │   │       └── [kindeAuth]
    │   │   ├── auth
    │   │   │   └── log
    │   │   │       └── page.jsx
    │   │   ├── dashboard
    │   │   │   └── page.jsx
    │   │   ├── desktopNav
    │   │   │   └── page.js
    │   │   ├── favicon.ico
    │   │   ├── globals.css
    │   │   ├── home
    │   │   │   └── page.js
    │   │   ├── layout.js
    │   │   ├── page.js
    │   │   └── profile
    │   │       └── page.jsx
    │   ├── components
    │   │   ├── DesktopNav.js
    │   │   ├── ModeToggle.js
    │   │   ├── NavLinks.js
    │   │   ├── theme-provider.js
    │   │   └── ui
    │   │       ├── button.jsx
    │   │       ├── card.jsx
    │   │       ├── dropdown-menu.jsx
    │   │       ├── input.jsx
    │   │       ├── label.jsx
    │   │       ├── navigation-menu.jsx
    │   │       ├── sonner.jsx
    │   │       └── tabs.jsx
    │   ├── lib
    │   │   ├── action.js
    │   │   ├── dbConnect.js
    │   │   ├── models.js
    │   │   └── utils.js
    │   └── pages
    │       └── api
    │           ├── communities.js
    │           ├── login.js
    │           ├── profile.js
    │           └── register.js
    └── tailwind.config.js
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                                                                                                   | Summary                                        |
| ---                                                                                                    | ---                                            |
| [jsconfig.json](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/jsconfig.json)           | Configuration for JavaScript project structure |
| [postcss.config.mjs](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/postcss.config.mjs) | Configuration for PostCSS                      |
| [components.json](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/components.json)       | Component definitions                          |
| [package.json](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/package.json)             | Project dependencies and scripts               |
| [next.config.mjs](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/next.config.mjs)       | Next.js configuration                          |
| [tailwind.config.js](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/tailwind.config.js) | Tailwind CSS configuration                     |
| [package-lock.json](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/package-lock.json)   | Lockfile for npm dependencies                  |

</details>

<details closed><summary>src.pages.api</summary>

| File                                                                                                         | Summary                                                  |
| ---                                                                                                          | ---                                                      |
| [communities.js](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/pages/api/communities.js) | API for managing communities                             |
| [register.js](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/pages/api/register.js)       | API for user registration                                |
| [login.js](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/pages/api/login.js)             | API for user login                                       |
| [profile.js](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/pages/api/profile.js)         | API for user profile management                          |

</details>

<details closed><summary>src.components</summary>

| File                                                                                                                | Summary                                                      |
| ---                                                                                                                 | ---                                                          |
| [ModeToggle.js](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/components/ModeToggle.js)         | Component for toggling between light and dark modes          |
| [DesktopNav.js](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/components/DesktopNav.js)         | Component for desktop navigation                             |
| [theme-provider.js](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/components/theme-provider.js) | Theme provider component                                     |
| [NavLinks.js](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/components/NavLinks.js)             | Component for navigation links                               |

</details>

<details closed><summary>src.components.ui</summary>

| File                                                                                                                       | Summary                                                           |
| ---                                                                                                                        | ---                                                               |
| [label.jsx](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/components/ui/label.jsx)                     | UI component for labels                                           |
| [tabs.jsx](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/components/ui/tabs.jsx)                       | UI component for tabs                                             |
| [input.jsx](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/components/ui/input.jsx)                     | UI component for input fields                                     |
| [sonner.jsx](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/components/ui/sonner.jsx)                   | UI component for notifications                                    |
| [card.jsx](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/components/ui/card.jsx)                       | UI component for cards                                            |
| [dropdown-menu.jsx](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/components/ui/dropdown-menu.jsx)     | UI component for dropdown menus                                   |
| [navigation-menu.jsx](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/components/ui/navigation-menu.jsx) | UI component for navigation menus                                 |
| [button.jsx](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/components/ui/button.jsx)                   | UI component for buttons                                          |

</details>

<details closed><summary>src.lib</summary>

| File                                                                                               | Summary                                          |
| ---                                                                                                | ---                                              |
| [models.js](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/lib/models.js)       | Database models                                  |
| [utils.js](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/lib/utils.js)         | Utility functions                                |
| [dbConnect.js](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/lib/dbConnect.js) | Database connection setup                        |
| [action.js](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/lib/action.js)       | Action handlers                                  |

</details>

<details closed><summary>src.app</summary>

| File                                                                                             | Summary                                         |
| ---                                                                                              | ---                                             |
| [layout.js](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/app/layout.js)     | Layout component                                |
| [page.js](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/app/page.js)         | Main page component                             |
| [globals.css](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/app/globals.css) | Global CSS styles                               |

</details>

<details closed><summary>src.app.home</summary>

| File                                                                                          | Summary                                          |
| ---                                                                                           | ---                                              |
| [page.js](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/app/home/page.js) | Home page component                              |

</details>

<details closed><summary>src.app.dashboard</summary>

| File                                                                                                 | Summary                                                |
| ---                                                                                                  | ---                                                    |
| [page.jsx](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/app/dashboard/page.jsx) | Dashboard page component                               |

</details>

<details closed><summary>src.app.profile</summary>

| File                                                                                               | Summary                                              |
| ---                                                                                                | ---                                                  |
| [page.jsx](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/app/profile/page.jsx) | Profile page component                               |

</details>

<details closed><summary>src.app.api.auth.[kindeAuth]</summary>

| File                                                                                                            | Summary                                                           |
| ---                                                                                                             | ---                                                               |
| [route.js](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/app/api/auth/[kindeAuth]/route.js) | Authentication route handler                                      |

</details>

<details closed><summary>src.app.auth.log</summary>

| File                                                                                                | Summary                                               |
| ---                                                                                                 | ---                                                   |
| [page.jsx](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/app/auth/log/page.jsx) | Login page component                                  |

</details>

<details closed><summary>src.app.desktopNav</summary>

| File                                                                                                | Summary                                                |
| ---                                                                                                 | ---                                                    |
| [page.js](https://github.com/Tirth-chokshi/harmonyspace.git/blob/master/src/app/desktopNav/page.js) | Desktop navigation page component                      |

</details>

---

## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: version x.y.z
* **Node.js**: version x.y.z
* **MongoDB**: version x.y.z

### ⚙️ Installation

1. Clone the harmonyspace repository:

```sh
git clone https://github.com/Tirth-chokshi/harmonyspace.git
```

2. Change to the project directory:

```sh
cd harmonyspace
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running harmonyspace

Use the following command to run harmonyspace:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 🧪 Tests

To execute tests, run:

```sh
npm test
```

---

## 🛠 Project Roadmap

- [X] Implement user authentication and profiles
- [ ] Develop community building features
- [ ] Integrate mental wellness resources
- [ ] Schedule and host virtual events
- [ ] Provide support and counseling services

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/Tirth-chokshi/harmonyspace.git/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Tirth-chokshi/harmonyspace.git/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/Tirth-chokshi/harmonyspace.git/issues)**: Submit bugs found or log feature requests for Harmonyspace.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/Tirth-chokshi/harmonyspace.git
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the [MIT License](https://choosealicense.com/licenses/mit/). For more details, refer to the [LICENSE](https://choosealicense.com/licenses/mit/) file.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [next/font](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs