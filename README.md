# Study Mate

**StudyMate** is a website where students can get help based on their subjects. On this platform, students can find **study partners** and achieve their **goals and dreams** through group study. There are many students who struggle to find someone to share their problems with — this website is especially helpful for them, as well as for those who want to learn something new.

## Features

Firstly, the homepage contains a slider, top study partners, and three other sections. **This website uses Firebase Authentication, including Google login, email-password registration, and email-password login**. Some pages are set as **private routes** — users cannot access them without logging in.

Then, there is a **Find Partners** section where all partners are shown by default. By clicking on View Profile, users can see each partner’s profile. On this page, a user can **search partners by subject and sort** them based on their experience. Both search and sort functionalities are handled from the backend.

The Partner **Details page** displays **all information** about a partner, including ratings. Users can leave **reviews there**, and there’s also a related partners section. If someone **sends a partner request**, the partner’s request count will increase by 1, and a success toast will appear.

Next, on the **Create Partner Profile page**, users can create their own profiles. Then, on the **My Connections page**, users can view the data of the partners they’ve sent requests to. Users can also **update their information or delete a partner** if they wish.

A **dark mode** feature has been added to this website, allowing users to switch to dark mode if they prefer.

Finally, on the **Profile page**, users can view their information, and by clicking the logout button, they can **log out**. If a user visits a page that doesn’t exist or an invalid path, they’ll be redirected to the **404 error page**.

All the data is stored in **MongoDB**, and **CRUD operations** have been implemented on the backend.

## Npm Packages

### Frontend

This website is built using **React**. For styling, **Tailwind CSS** has been used, along with **Vite** as the build tool. It also uses **React Router, DaisyUI, Axios, and Firebase**.

For beautiful icons, **React Icons** and **Lucide React** have been used.
For simple animations, **Framer Motion** has been implemented.
Additionally, **React Marquee, React Helmet, React Toastify, SweetAlert2, and Swiper Slider** have also been used.

### Backend

The backend is built using **MongoDB, Express.js, Node.js** and **CORS**.

Backend Link : <a href="https://github.com/oiiemon9/study-mate-server">https://github.com/oiiemon9/study-mate-server</a>

### Dependencies

```bash
"dependencies": {
"@smastrom/react-rating": "^1.5.0",
"@tailwindcss/vite": "^4.1.17",
"axios": "^1.13.2",
"daisyui": "^5.4.7",
"firebase": "^12.5.0",
"lucide-react": "^0.553.0",
"motion": "^12.23.24",
"react": "^19.1.1",
"react-dom": "^19.1.1",
"react-fast-marquee": "^1.6.5",
"react-helmet-async": "^2.0.5",
"react-icons": "^5.5.0",
"react-router": "^7.9.5",
"react-toastify": "^11.0.5",
"sweetalert2": "^11.26.3",
"swiper": "^12.0.3",
"tailwindcss": "^4.1.17"
},
```

```bash
"devDependencies": {
"@eslint/js": "^9.36.0",
"@types/react": "^19.1.16",
"@types/react-dom": "^19.1.9",
"@vitejs/plugin-react": "^5.0.4",
"eslint": "^9.36.0",
"eslint-plugin-react-hooks": "^5.2.0",
"eslint-plugin-react-refresh": "^0.4.22",
"globals": "^16.4.0",
"vite": "^7.1.7"
}
```

## How to Use

Clone the repo and install dependencies:

```bash
git clone https://github.com/oiiemon9/study-mate-client.git
cd study-mate-client
npm install
```

Set up environment variables by creating a .env file in the root directory:

```bash
VITE_apiKey=****************
VITE_authDomain=****************
VITE_projectId=****************
VITE_storageBucket=****************
VITE_messagingSenderId=****************
VITE_appId=****************
```

Run the application:

```bash
npm run dev
```

## Live Link

<a href="https://study-mate-94d47.web.app/">https://study-mate-94d47.web.app/</a>
