import latoFontImage from "./img/lato.png";

import hawaiiSliderImage1 from "./img/hawaii-laptop-1.png";
import hawaiiSliderImage2 from "./img/hawaii-laptop-2.png";
import hawaiiSliderImage3 from "./img/hawaii-laptop-3.png";

import mindfulSliderImage1 from "./img/Project_Mindful-1.png";
import mindfulSliderImage2 from "./img/Project_Mindful-2.png";

import movieSliderImage1 from "./img/Project_MovieApp-1.png";
import movieSliderImage2 from "./img/Project_MovieApp-2.png";
import movieSliderImage3 from "./img/Project_MovieApp-3.png";
import movieSliderImage4 from "./img/Project_MovieApp-4.png";
import movieSliderImage5 from "./img/Project_MovieApp-5.png";

import movieAppColors from "./img/movieappColor.jpg";
import hawaiiColors from "./img/hawaiiColors.jpg";
import mindfulColors from "./img/mindfulColorsjpg.jpg";

import hawaiiCover from "./img/backgroundImgHawaii.png";
import contactsCover from "./img/contactsCover.png";
import mindfulCover from "./img/mindfulCover.png";
import movieAppCover from "./img/movieAppCover.jpg";

import contactsImage from "./img/contacts.png";

export const projectsData = [
    {
        id: 1,
        name: "Weddings Hawaii",
        client: "Student Project",
        desc:
            "Landing page for a fictional wedding company based in Hawaii. This project is inspired by a wedding company I had contact with. The purpose of this project was to practise the design skills and improve my skills in CSS.",
        tech:
            "The main idea behind building this website was improving on my HTML, CSS skills as well as working on simple animations and making the website responsive.",
        bgImg: hawaiiCover,
        link: "https://weddings-hawaii.herokuapp.com/",
        designIntro:
            "The main idea behind the website was to have a pleasant and elegant feeling as well as to reflect the sunny and relaxed atmosphere of Hawaii.",
        designTypographyImg: latoFontImage,
        designColorsImg: hawaiiColors,
        textColorIntro: "#333",
        sliderImages: [
            hawaiiSliderImage1,
            hawaiiSliderImage2,
            hawaiiSliderImage3
        ]
    },
    {
        id: 2,
        name: "Mindful",
        client: "Student Project",

        desc:
            "Landing page for a fictional Mindful app. The purpose of this project was to practise the design skills and improve my skills in CSS.",
        tech:
            "The main idea behind building this website was improving on my HTML, CSS skills as well as working on simple animations and making the website responsive.",
        bgImg: mindfulCover,
        link: "https://mindful-app.herokuapp.com/",
        designIntro:
            "By using soft and gentle colors the website should give the feeling of relaxation and ease.",
        designTypographyImg: latoFontImage,
        designColorsImg: mindfulColors,
        textColorIntro: "#fff",
        sliderImages: [mindfulSliderImage1, mindfulSliderImage2]
    },
    {
        id: 3,
        name: "Movie App",
        client: "Student Project",

        desc:
            "Movie application relying on MovieDB REST API. It is a website for Movie lovers to search for movies, rate them, read about them, as well as create lists of favorite movies.",
        tech:
            "The main idea behind the project was to practice working with React, Redux and Redux Thunk. The application is relying on MovieDB API.",
        bgImg: movieAppCover,
        link: "https://mdb-movie-app.herokuapp.com/",
        designIntro:
            "The website is using a lot of images to associate the user with the movies and the movie world. More subtle colors were used so as to achieve a clean and modern look that plays along with the heavy use of images.",
        designTypographyImg: latoFontImage,
        designColorsImg: movieAppColors,
        textColorIntro: "#fff",
        sliderImages: [
            movieSliderImage2,
            movieSliderImage3,
            movieSliderImage4,
            movieSliderImage5
        ]
    },
    {
        id: 4,
        name: "Contact Keeper",
        client: "Student Project",

        desc:
            "Fullstack MERN application for managing contact. The main idea behind the project was improving on the backend skills.",
        tech:
            "The project is build in React and Context API on the frontend. I wanted to improve on using the hooks and context for the state managment. Backend is built on Node.js platform with MongoDB.",
        bgImg: contactsCover,
        link: "https://contacts--keeper-app.herokuapp.com/",
        designIntro: "",
        designTypographyImg: "",
        textColorIntro: "#333",
        designColorsImg: "",
        sliderImages: [contactsImage]
    }
];
