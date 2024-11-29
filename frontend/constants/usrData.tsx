// eslint-disable-next-line import/no-unresolved
import images from "@/assets/images/user_profile_photos/photos";
import { ImageSourcePropType } from "react-native";
import { SharedValue } from "react-native-reanimated";

//Approach 3: interface
export interface UserType {
    id: number;
    name: string;
    email: string;
    university: string;
    major: string;
    yearOfStudy: string;
    preference: string;
    imgPath: ImageSourcePropType;
  }

//type alias for user's data    
export type Usr_dataType = {
    user: UserType;
    numberOfcards: number,
    index: number,
    activeIndex: SharedValue<number>;
    onResponse:(a: boolean) => void;
};

export const usr_data: UserType[] = [
    {
        id: 1,
        name: 'Ahemed',
        email: "ahemed@dal.ca",
        university: "Dalhousie University",
        major: "Computer Science",
        yearOfStudy: "4th",
        preference: "Group sudy",
        imgPath: images.Ahemed
    },

    {
        id: 2,
        name: 'Faris',
        email: "faris@dal.ca",
        university: "Dalhousie University",
        major: "Computer Science",
        yearOfStudy: "3rd",
        preference: "Group sudy",
        imgPath: images.Faris
    },

    {
        id: 3,
        name: 'karl',
        email: "karl@dal.ca",
        university: "Dalhousie University",
        major: "Computer Science",
        yearOfStudy: "4th",
        preference: "Group sudy",
        imgPath: images.Karl
    },

    {
        id: 4,
        name: 'Tyler',
        email: "tyler@dal.ca",
        university: "Dalhousie University",
        major: "Computer Science",
        yearOfStudy: "2nd",
        preference: "Group sudy",
        imgPath: images.Tyler
    },

    {
        id: 5,
        name: 'Ryan',
        email: "ryan@dal.ca",
        university: "Dalhousie University",
        major: "Computer Science",
        yearOfStudy: "3rd",
        preference: "Group sudy",
        imgPath: images.Ryan
    },

    {
        id: 6,
        name: 'Yasuo',
        email: "123@lonia.ca",
        university: "Ionia University",
        major: "Computer Science",
        yearOfStudy: "4th",
        preference: "Group sudy",
        imgPath: images.Yasuo
    },

    {
        id: 7,
        name: 'Jinx',
        email: "234@lol.ca",
        university: "Riot University",
        major: "Mental Health",
        yearOfStudy: "4th",
        preference: "Self-study",
        imgPath: images.Jinx
    },

    {
        id: 8,
        name: 'Study_buddy',
        email: "Hi@dal.ca",
        university: "Dalhousie University",
        major: "Computer Science",
        yearOfStudy: "4th",
        preference: "Group sudy",
        imgPath: images.Boyes
    },

    {
        id: 9,
        name: 'Pantheon',
        email: "pan@god.ca",
        university: "Riot University",
        major: "The art of war",
        yearOfStudy: "4th",
        preference: "Self-study",
        imgPath: images.pantheon
    },

    {
        id: 10,
        name: 'Elon_musk',
        email: "elon@spacex.ca",
        university: "Tesla University",
        major: "Rocket Engineering",
        yearOfStudy: "Graduated",
        preference: "Self-study",
        imgPath: images.elon_musk
    },

];


// To define the type for usr_data, check all available approaches below.

{/* Approach 1: Create a new type alias for usr_data 
    
    type User_dataType = {
     id: number,
     name: string,
     email: string,
     university: string,
     major: string,
     yearOfStudy: string,
     preference: string,
     imgPath: ImageSourcePropType
 }

    const usr_data: User_dataType[] = {...}
*/}


{/* Approach 2: Using indexed access types 
    
        export type User_data_Type = Usr_dataType['user']; <== access the index element of usr_dataType (Only available for type alias)

        export const usrs_data: User_data_Type[] = []

*/}


{/* Approach 3: Using interface 
    
    Adopted.
    
*/}