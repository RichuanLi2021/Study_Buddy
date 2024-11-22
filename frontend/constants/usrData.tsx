// eslint-disable-next-line import/no-unresolved
import images from "@/assets/images/user_profile_photos/photos";
import { ImageSourcePropType } from "react-native";


export type Usr_DataType = {
    user: {
        id: number,
        name: string,
        email: string,
        university: string,
        major: string,
        yearOfStudy: string,
        preference: string,
        imgPath: ImageSourcePropType
    };
    numberOfcards: number,
    currentIndex: number
};


export const Usr_Data = [
    {
        id: 1,
        name: 'Yasuo',
        email: "123@lonia.ca",
        university: "Ionia University",
        major: "Computer Science",
        yearOfStudy: "4th",
        preference: "Group sudy",
        imgPath: images.Yasuo
    },

    {
        id: 2,
        name: 'Jinx',
        email: "234@lol.ca",
        university: "Riot University",
        major: "Mental Health",
        yearOfStudy: "4th",
        preference: "Self-study",
        imgPath: images.Jinx
    },

    {
        id: 3,
        name: 'Pantheon',
        email: "pan@god.ca",
        university: "Riot University",
        major: "The art of war",
        yearOfStudy: "4th",
        preference: "Self-study",
        imgPath: images.pantheon
    },

    {
        id: 4,
        name: 'Elon_musk',
        email: "elon@spacex.ca",
        university: "Tesla University",
        major: "Rocket Engineering",
        yearOfStudy: "Graduated",
        preference: "Self-study",
        imgPath: images.elon_musk
    },

];