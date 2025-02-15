import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { SearchFilters } from '../components/SearchFilters';
import Footer from '../components/userComponents/Footer';
import Navbar from '../components/userComponents/Navbar';
import ProfilePopup from '../components/userComponents/ProfilePopup';

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [interests, setInterests] = useState({});

  const profiles = [
    {
      profileCreator: 'Self',
      personalInfo: {
        name: "Priya Sharma",
        age: 27,
        currentLocation: "Mumbai, India",
        Native: 'Mumbai',
        height: 165,
        weight: 55,
        bmi: 20.2,
        bodyType: "Slim",
        skinTone: "Fair",
        disability: "",
        birthMonth: 5,
        birthYear: 1996,
        horoscope: "Taurus",
      },
      religious: {
        religion: "Hindu",
        community: "Brahmin",
        subCommunity: "Iyer",
        partnersCast: "Any",
        gothram: "Bharadwaja",
      },
      astro: {
        dosham: "No",
        dob: "1996-05-15",
        cityOfBirth: "Mumbai",
        raasi: "Taurus",
        natchatram: "Rohini",
        laknam: "Leo",
      },
      educationCareer: {
        education: "B.Tech in Computer Science",
        occupation: "Software Engineer",
        company: "Google",
        income: "25 LPA",
      },
      familyBackground: {
        fatherName: "Rajesh Sharma",
        motherName: "Meena Sharma",
        fatherOccupation: "Business Owner",
        motherOccupation: "Homemaker",
        siblings: 1,
        familyAssets: "Own House, Business",
        personalAssets: "Savings, Investments",
      },
      LifeStyle: {
        diet: "Vegetarian",
        hobbies: "Reading, Yoga, Traveling",
      },
      profilePictures: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"],
      partnerPreferences: {
        locations: ["Mumbai", "Pune", "Bangalore"],
        minHeight: 170,
        maxHeight: 185,
        minWeight: 65,
        maxWeight: 80,
        preferredSkinTones: ["Fair", "Wheatish"],
        preferredProfessions: ["Software Engineer", "Doctor", "Business"],
      },
      membershipType: "Gold",
      membershipNumber: "MA123456"
    },
    
    {
      profileCreator: 'Self',
      personalInfo: {
        name: "Priya Sharma",
        age: 27,
        currentLocation: "Mumbai, India",
        Native: 'Mumbai',
        height: 165,
        weight: 55,
        bmi: 20.2,
        bodyType: "Slim",
        skinTone: "Fair",
        disability: "",
        birthMonth: 5,
        birthYear: 1996,
        horoscope: "Taurus",
      },
      religious: {
        religion: "Hindu",
        community: "Brahmin",
        subCommunity: "Iyer",
        partnersCast: "Any",
        gothram: "Bharadwaja",
      },
      astro: {
        dosham: "No",
        dob: "1996-05-15",
        cityOfBirth: "Mumbai",
        raasi: "Taurus",
        natchatram: "Rohini",
        laknam: "Leo",
      },
      educationCareer: {
        education: "B.Tech in Computer Science",
        occupation: "Software Engineer",
        company: "Google",
        income: "25 LPA",
      },
      familyBackground: {
        fatherName: "Rajesh Sharma",
        motherName: "Meena Sharma",
        fatherOccupation: "Business Owner",
        motherOccupation: "Homemaker",
        siblings: 1,
        familyAssets: "Own House, Business",
        personalAssets: "Savings, Investments",
      },
      LifeStyle: {
        diet: "Vegetarian",
        hobbies: "Reading, Yoga, Traveling",
      },
      profilePictures: ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"],
      partnerPreferences: {
        locations: ["Mumbai", "Pune", "Bangalore"],
        minHeight: 170,
        maxHeight: 185,
        minWeight: 65,
        maxWeight: 80,
        preferredSkinTones: ["Fair", "Wheatish"],
        preferredProfessions: ["Software Engineer", "Doctor", "Business"],
      },
      membershipType: "Gold",
      membershipNumber: "MA123456"
    },
    {
      profileCreator: 'Self',
      personalInfo: {
        name: "Priya Sharma",
        age: 27,
        currentLocation: "Mumbai, India",
        Native: 'Mumbai',
        height: 165,
        weight: 55,
        bmi: 20.2,
        bodyType: "Slim",
        skinTone: "Fair",
        disability: "",
        birthMonth: 5,
        birthYear: 1996,
        horoscope: "Taurus",
      },
      religious: {
        religion: "Hindu",
        community: "Brahmin",
        subCommunity: "Iyer",
        partnersCast: "Any",
        gothram: "Bharadwaja",
      },
      astro: {
        dosham: "No",
        dob: "1996-05-15",
        cityOfBirth: "Mumbai",
        raasi: "Taurus",
        natchatram: "Rohini",
        laknam: "Leo",
      },
      educationCareer: {
        education: "B.Tech in Computer Science",
        occupation: "Software Engineer",
        company: "Google",
        income: "25 LPA",
      },
      familyBackground: {
        fatherName: "Rajesh Sharma",
        motherName: "Meena Sharma",
        fatherOccupation: "Business Owner",
        motherOccupation: "Homemaker",
        siblings: 1,
        familyAssets: "Own House, Business",
        personalAssets: "Savings, Investments",
      },
      LifeStyle: {
        diet: "Vegetarian",
        hobbies: "Reading, Yoga, Traveling",
      },
      profilePictures: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"],
      partnerPreferences: {
        locations: ["Mumbai", "Pune", "Bangalore"],
        minHeight: 170,
        maxHeight: 185,
        minWeight: 65,
        maxWeight: 80,
        preferredSkinTones: ["Fair", "Wheatish"],
        preferredProfessions: ["Software Engineer", "Doctor", "Business"],
      },
      membershipType: "Gold",
      membershipNumber: "MA123456"
    },
    {
      profileCreator: 'Self',
      personalInfo: {
        name: "Priya Sharma",
        age: 27,
        currentLocation: "Mumbai, India",
        Native: 'Mumbai',
        height: 165,
        weight: 55,
        bmi: 20.2,
        bodyType: "Slim",
        skinTone: "Fair",
        disability: "",
        birthMonth: 5,
        birthYear: 1996,
        horoscope: "Taurus",
      },
      religious: {
        religion: "Hindu",
        community: "Brahmin",
        subCommunity: "Iyer",
        partnersCast: "Any",
        gothram: "Bharadwaja",
      },
      astro: {
        dosham: "No",
        dob: "1996-05-15",
        cityOfBirth: "Mumbai",
        raasi: "Taurus",
        natchatram: "Rohini",
        laknam: "Leo",
      },
      educationCareer: {
        education: "B.Tech in Computer Science",
        occupation: "Software Engineer",
        company: "Google",
        income: "25 LPA",
      },
      familyBackground: {
        fatherName: "Rajesh Sharma",
        motherName: "Meena Sharma",
        fatherOccupation: "Business Owner",
        motherOccupation: "Homemaker",
        siblings: 1,
        familyAssets: "Own House, Business",
        personalAssets: "Savings, Investments",
      },
      LifeStyle: {
        diet: "Vegetarian",
        hobbies: "Reading, Yoga, Traveling",
      },
      profilePictures: ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"],
      partnerPreferences: {
        locations: ["Mumbai", "Pune", "Bangalore"],
        minHeight: 170,
        maxHeight: 185,
        minWeight: 65,
        maxWeight: 80,
        preferredSkinTones: ["Fair", "Wheatish"],
        preferredProfessions: ["Software Engineer", "Doctor", "Business"],
      },
      membershipType: "Silver",
      membershipNumber: "MA123456"
    },

    ,
    {
      profileCreator: 'Self',
      personalInfo: {
        name: "Priya Sharma",
        age: 27,
        currentLocation: "Mumbai, India",
        Native: 'Mumbai',
        height: 165,
        weight: 55,
        bmi: 20.2,
        bodyType: "Slim",
        skinTone: "Fair",
        disability: "",
        birthMonth: 5,
        birthYear: 1996,
        horoscope: "Taurus",
      },
      religious: {
        religion: "Hindu",
        community: "Brahmin",
        subCommunity: "Iyer",
        partnersCast: "Any",
        gothram: "Bharadwaja",
      },
      astro: {
        dosham: "No",
        dob: "1996-05-15",
        cityOfBirth: "Mumbai",
        raasi: "Taurus",
        natchatram: "Rohini",
        laknam: "Leo",
      },
      educationCareer: {
        education: "B.Tech in Computer Science",
        occupation: "Software Engineer",
        company: "Google",
        income: "25 LPA",
      },
      familyBackground: {
        fatherName: "Rajesh Sharma",
        motherName: "Meena Sharma",
        fatherOccupation: "Business Owner",
        motherOccupation: "Homemaker",
        siblings: 1,
        familyAssets: "Own House, Business",
        personalAssets: "Savings, Investments",
      },
      LifeStyle: {
        diet: "Vegetarian",
        hobbies: "Reading, Yoga, Traveling",
      },
      profilePictures: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"],
      partnerPreferences: {
        locations: ["Mumbai", "Pune", "Bangalore"],
        minHeight: 170,
        maxHeight: 185,
        minWeight: 65,
        maxWeight: 80,
        preferredSkinTones: ["Fair", "Wheatish"],
        preferredProfessions: ["Software Engineer", "Doctor", "Business"],
      },
      membershipType: "Gold",
      membershipNumber: "MA123456"
    },
    {
      profileCreator: 'Self',
      personalInfo: {
        name: "Priya Sharma",
        age: 27,
        currentLocation: "Mumbai, India",
        Native: 'Mumbai',
        height: 165,
        weight: 55,
        bmi: 20.2,
        bodyType: "Slim",
        skinTone: "Fair",
        disability: "",
        birthMonth: 5,
        birthYear: 1996,
        horoscope: "Taurus",
      },
      religious: {
        religion: "Hindu",
        community: "Brahmin",
        subCommunity: "Iyer",
        partnersCast: "Any",
        gothram: "Bharadwaja",
      },
      astro: {
        dosham: "No",
        dob: "1996-05-15",
        cityOfBirth: "Mumbai",
        raasi: "Taurus",
        natchatram: "Rohini",
        laknam: "Leo",
      },
      educationCareer: {
        education: "B.Tech in Computer Science",
        occupation: "Software Engineer",
        company: "Google",
        income: "25 LPA",
      },
      familyBackground: {
        fatherName: "Rajesh Sharma",
        motherName: "Meena Sharma",
        fatherOccupation: "Business Owner",
        motherOccupation: "Homemaker",
        siblings: 1,
        familyAssets: "Own House, Business",
        personalAssets: "Savings, Investments",
      },
      LifeStyle: {
        diet: "Vegetarian",
        hobbies: "Reading, Yoga, Traveling",
      },
      profilePictures: ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"],
      partnerPreferences: {
        locations: ["Mumbai", "Pune", "Bangalore"],
        minHeight: 170,
        maxHeight: 185,
        minWeight: 65,
        maxWeight: 80,
        preferredSkinTones: ["Fair", "Wheatish"],
        preferredProfessions: ["Software Engineer", "Doctor", "Business"],
      },
      membershipType: "Silver",
      membershipNumber: "MA123456"
    },
    {
      profileCreator: 'Self',
      personalInfo: {
        name: "Priya Sharma",
        age: 27,
        currentLocation: "Mumbai, India",
        Native: 'Mumbai',
        height: 165,
        weight: 55,
        bmi: 20.2,
        bodyType: "Slim",
        skinTone: "Fair",
        disability: "",
        birthMonth: 5,
        birthYear: 1996,
        horoscope: "Taurus",
      },
      religious: {
        religion: "Hindu",
        community: "Brahmin",
        subCommunity: "Iyer",
        partnersCast: "Any",
        gothram: "Bharadwaja",
      },
      astro: {
        dosham: "No",
        dob: "1996-05-15",
        cityOfBirth: "Mumbai",
        raasi: "Taurus",
        natchatram: "Rohini",
        laknam: "Leo",
      },
      educationCareer: {
        education: "B.Tech in Computer Science",
        occupation: "Software Engineer",
        company: "Google",
        income: "25 LPA",
      },
      familyBackground: {
        fatherName: "Rajesh Sharma",
        motherName: "Meena Sharma",
        fatherOccupation: "Business Owner",
        motherOccupation: "Homemaker",
        siblings: 1,
        familyAssets: "Own House, Business",
        personalAssets: "Savings, Investments",
      },
      LifeStyle: {
        diet: "Vegetarian",
        hobbies: "Reading, Yoga, Traveling",
      },
      profilePictures: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"],
      partnerPreferences: {
        locations: ["Mumbai", "Pune", "Bangalore"],
        minHeight: 170,
        maxHeight: 185,
        minWeight: 65,
        maxWeight: 80,
        preferredSkinTones: ["Fair", "Wheatish"],
        preferredProfessions: ["Software Engineer", "Doctor", "Business"],
      },
      membershipType: "Silver",
      membershipNumber: "MA123456"
    },
    {
      profileCreator: 'Self',
      personalInfo: {
        name: "Priya Sharma",
        age: 27,
        currentLocation: "Mumbai, India",
        Native: 'Mumbai',
        height: 165,
        weight: 55,
        bmi: 20.2,
        bodyType: "Slim",
        skinTone: "Fair",
        disability: "",
        birthMonth: 5,
        birthYear: 1996,
        horoscope: "Taurus",
      },
      religious: {
        religion: "Hindu",
        community: "Brahmin",
        subCommunity: "Iyer",
        partnersCast: "Any",
        gothram: "Bharadwaja",
      },
      astro: {
        dosham: "No",
        dob: "1996-05-15",
        cityOfBirth: "Mumbai",
        raasi: "Taurus",
        natchatram: "Rohini",
        laknam: "Leo",
      },
      educationCareer: {
        education: "B.Tech in Computer Science",
        occupation: "Software Engineer",
        company: "Google",
        income: "25 LPA",
      },
      familyBackground: {
        fatherName: "Rajesh Sharma",
        motherName: "Meena Sharma",
        fatherOccupation: "Business Owner",
        motherOccupation: "Homemaker",
        siblings: 1,
        familyAssets: "Own House, Business",
        personalAssets: "Savings, Investments",
      },
      LifeStyle: {
        diet: "Vegetarian",
        hobbies: "Reading, Yoga, Traveling",
      },
      profilePictures: ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"],
      partnerPreferences: {
        locations: ["Mumbai", "Pune", "Bangalore"],
        minHeight: 170,
        maxHeight: 185,
        minWeight: 65,
        maxWeight: 80,
        preferredSkinTones: ["Fair", "Wheatish"],
        preferredProfessions: ["Software Engineer", "Doctor", "Business"],
      },
      membershipType: "Silver",
      membershipNumber: "MA123456"
    },{
      profileCreator: 'Self',
      personalInfo: {
        name: "Priya Sharma",
        age: 27,
        currentLocation: "Mumbai, India",
        Native: 'Mumbai',
        height: 165,
        weight: 55,
        bmi: 20.2,
        bodyType: "Slim",
        skinTone: "Fair",
        disability: "",
        birthMonth: 5,
        birthYear: 1996,
        horoscope: "Taurus",
      },
      religious: {
        religion: "Hindu",
        community: "Brahmin",
        subCommunity: "Iyer",
        partnersCast: "Any",
        gothram: "Bharadwaja",
      },
      astro: {
        dosham: "No",
        dob: "1996-05-15",
        cityOfBirth: "Mumbai",
        raasi: "Taurus",
        natchatram: "Rohini",
        laknam: "Leo",
      },
      educationCareer: {
        education: "B.Tech in Computer Science",
        occupation: "Software Engineer",
        company: "Google",
        income: "25 LPA",
      },
      familyBackground: {
        fatherName: "Rajesh Sharma",
        motherName: "Meena Sharma",
        fatherOccupation: "Business Owner",
        motherOccupation: "Homemaker",
        siblings: 1,
        familyAssets: "Own House, Business",
        personalAssets: "Savings, Investments",
      },
      LifeStyle: {
        diet: "Vegetarian",
        hobbies: "Reading, Yoga, Traveling",
      },
      profilePictures: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"],
      partnerPreferences: {
        locations: ["Mumbai", "Pune", "Bangalore"],
        minHeight: 170,
        maxHeight: 185,
        minWeight: 65,
        maxWeight: 80,
        preferredSkinTones: ["Fair", "Wheatish"],
        preferredProfessions: ["Software Engineer", "Doctor", "Business"],
      },
      membershipType: "Gold",
      membershipNumber: "MA123456"
    },
    {
      profileCreator: 'Self',
      personalInfo: {
        name: "Priya Sharma",
        age: 27,
        currentLocation: "Mumbai, India",
        Native: 'Mumbai',
        height: 165,
        weight: 55,
        bmi: 20.2,
        bodyType: "Slim",
        skinTone: "Fair",
        disability: "",
        birthMonth: 5,
        birthYear: 1996,
        horoscope: "Taurus",
      },
      religious: {
        religion: "Hindu",
        community: "Brahmin",
        subCommunity: "Iyer",
        partnersCast: "Any",
        gothram: "Bharadwaja",
      },
      astro: {
        dosham: "No",
        dob: "1996-05-15",
        cityOfBirth: "Mumbai",
        raasi: "Taurus",
        natchatram: "Rohini",
        laknam: "Leo",
      },
      educationCareer: {
        education: "B.Tech in Computer Science",
        occupation: "Software Engineer",
        company: "Google",
        income: "25 LPA",
      },
      familyBackground: {
        fatherName: "Rajesh Sharma",
        motherName: "Meena Sharma",
        fatherOccupation: "Business Owner",
        motherOccupation: "Homemaker",
        siblings: 1,
        familyAssets: "Own House, Business",
        personalAssets: "Savings, Investments",
      },
      LifeStyle: {
        diet: "Vegetarian",
        hobbies: "Reading, Yoga, Traveling",
      },
      profilePictures: ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"],
      partnerPreferences: {
        locations: ["Mumbai", "Pune", "Bangalore"],
        minHeight: 170,
        maxHeight: 185,
        minWeight: 65,
        maxWeight: 80,
        preferredSkinTones: ["Fair", "Wheatish"],
        preferredProfessions: ["Software Engineer", "Doctor", "Business"],
      },
      membershipType: "Gold",
      membershipNumber: "MA123456"
    },
    {
      profileCreator: 'Self',
      personalInfo: {
        name: "Priya Sharma",
        age: 27,
        currentLocation: "Mumbai, India",
        Native: 'Mumbai',
        height: 165,
        weight: 55,
        bmi: 20.2,
        bodyType: "Slim",
        skinTone: "Fair",
        disability: "",
        birthMonth: 5,
        birthYear: 1996,
        horoscope: "Taurus",
      },
      religious: {
        religion: "Hindu",
        community: "Brahmin",
        subCommunity: "Iyer",
        partnersCast: "Any",
        gothram: "Bharadwaja",
      },
      astro: {
        dosham: "No",
        dob: "1996-05-15",
        cityOfBirth: "Mumbai",
        raasi: "Taurus",
        natchatram: "Rohini",
        laknam: "Leo",
      },
      educationCareer: {
        education: "B.Tech in Computer Science",
        occupation: "Software Engineer",
        company: "Google",
        income: "25 LPA",
      },
      familyBackground: {
        fatherName: "Rajesh Sharma",
        motherName: "Meena Sharma",
        fatherOccupation: "Business Owner",
        motherOccupation: "Homemaker",
        siblings: 1,
        familyAssets: "Own House, Business",
        personalAssets: "Savings, Investments",
      },
      LifeStyle: {
        diet: "Vegetarian",
        hobbies: "Reading, Yoga, Traveling",
      },
      profilePictures: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"],
      partnerPreferences: {
        locations: ["Mumbai", "Pune", "Bangalore"],
        minHeight: 170,
        maxHeight: 185,
        minWeight: 65,
        maxWeight: 80,
        preferredSkinTones: ["Fair", "Wheatish"],
        preferredProfessions: ["Software Engineer", "Doctor", "Business"],
      },
      membershipType: "Gold",
      membershipNumber: "MA123456"
    },
    {
      profileCreator: 'Self',
      personalInfo: {
        name: "Priya Sharma",
        age: 27,
        currentLocation: "Mumbai, India",
        Native: 'Mumbai',
        height: 165,
        weight: 55,
        bmi: 20.2,
        bodyType: "Slim",
        skinTone: "Fair",
        disability: "",
        birthMonth: 5,
        birthYear: 1996,
        horoscope: "Taurus",
      },
      religious: {
        religion: "Hindu",
        community: "Brahmin",
        subCommunity: "Iyer",
        partnersCast: "Any",
        gothram: "Bharadwaja",
      },
      astro: {
        dosham: "No",
        dob: "1996-05-15",
        cityOfBirth: "Mumbai",
        raasi: "Taurus",
        natchatram: "Rohini",
        laknam: "Leo",
      },
      educationCareer: {
        education: "B.Tech in Computer Science",
        occupation: "Software Engineer",
        company: "Google",
        income: "25 LPA",
      },
      familyBackground: {
        fatherName: "Rajesh Sharma",
        motherName: "Meena Sharma",
        fatherOccupation: "Business Owner",
        motherOccupation: "Homemaker",
        siblings: 1,
        familyAssets: "Own House, Business",
        personalAssets: "Savings, Investments",
      },
      LifeStyle: {
        diet: "Vegetarian",
        hobbies: "Reading, Yoga, Traveling",
      },
      profilePictures: ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"],
      partnerPreferences: {
        locations: ["Mumbai", "Pune", "Bangalore"],
        minHeight: 170,
        maxHeight: 185,
        minWeight: 65,
        maxWeight: 80,
        preferredSkinTones: ["Fair", "Wheatish"],
        preferredProfessions: ["Software Engineer", "Doctor", "Business"],
      },
      membershipType: "Gold",
      membershipNumber: "MA123456"
    },
    {
      profileCreator: 'Self',
      personalInfo: {
        name: "Priya Sharma",
        age: 27,
        currentLocation: "Mumbai, India",
        Native: 'Mumbai',
        height: 165,
        weight: 55,
        bmi: 20.2,
        bodyType: "Slim",
        skinTone: "Fair",
        disability: "",
        birthMonth: 5,
        birthYear: 1996,
        horoscope: "Taurus",
      },
      religious: {
        religion: "Hindu",
        community: "Brahmin",
        subCommunity: "Iyer",
        partnersCast: "Any",
        gothram: "Bharadwaja",
      },
      astro: {
        dosham: "No",
        dob: "1996-05-15",
        cityOfBirth: "Mumbai",
        raasi: "Taurus",
        natchatram: "Rohini",
        laknam: "Leo",
      },
      educationCareer: {
        education: "B.Tech in Computer Science",
        occupation: "Software Engineer",
        company: "Google",
        income: "25 LPA",
      },
      familyBackground: {
        fatherName: "Rajesh Sharma",
        motherName: "Meena Sharma",
        fatherOccupation: "Business Owner",
        motherOccupation: "Homemaker",
        siblings: 1,
        familyAssets: "Own House, Business",
        personalAssets: "Savings, Investments",
      },
      LifeStyle: {
        diet: "Vegetarian",
        hobbies: "Reading, Yoga, Traveling",
      },
      profilePictures: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"],
      partnerPreferences: {
        locations: ["Mumbai", "Pune", "Bangalore"],
        minHeight: 170,
        maxHeight: 185,
        minWeight: 65,
        maxWeight: 80,
        preferredSkinTones: ["Fair", "Wheatish"],
        preferredProfessions: ["Software Engineer", "Doctor", "Business"],
      },
      membershipType: "Gold",
      membershipNumber: "MA123456"
    },
    {
      profileCreator: 'Self',
      personalInfo: {
        name: "Priya Sharma",
        age: 27,
        currentLocation: "Mumbai, India",
        Native: 'Mumbai',
        height: 165,
        weight: 55,
        bmi: 20.2,
        bodyType: "Slim",
        skinTone: "Fair",
        disability: "",
        birthMonth: 5,
        birthYear: 1996,
        horoscope: "Taurus",
      },
      religious: {
        religion: "Hindu",
        community: "Brahmin",
        subCommunity: "Iyer",
        partnersCast: "Any",
        gothram: "Bharadwaja",
      },
      astro: {
        dosham: "No",
        dob: "1996-05-15",
        cityOfBirth: "Mumbai",
        raasi: "Taurus",
        natchatram: "Rohini",
        laknam: "Leo",
      },
      educationCareer: {
        education: "B.Tech in Computer Science",
        occupation: "Software Engineer",
        company: "Google",
        income: "25 LPA",
      },
      familyBackground: {
        fatherName: "Rajesh Sharma",
        motherName: "Meena Sharma",
        fatherOccupation: "Business Owner",
        motherOccupation: "Homemaker",
        siblings: 1,
        familyAssets: "Own House, Business",
        personalAssets: "Savings, Investments",
      },
      LifeStyle: {
        diet: "Vegetarian",
        hobbies: "Reading, Yoga, Traveling",
      },
      profilePictures: ["https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"],
      partnerPreferences: {
        locations: ["Mumbai", "Pune", "Bangalore"],
        minHeight: 170,
        maxHeight: 185,
        minWeight: 65,
        maxWeight: 80,
        preferredSkinTones: ["Fair", "Wheatish"],
        preferredProfessions: ["Software Engineer", "Doctor", "Business"],
      },
      membershipType: "Gold",
      membershipNumber: "MA123456"
    },
    {
      profileCreator: 'Self',
      personalInfo: {
        name: "Priya Sharma",
        age: 27,
        currentLocation: "Mumbai, India",
        Native: 'Mumbai',
        height: 165,
        weight: 55,
        bmi: 20.2,
        bodyType: "Slim",
        skinTone: "Fair",
        disability: "",
        birthMonth: 5,
        birthYear: 1996,
        horoscope: "Taurus",
      },
      religious: {
        religion: "Hindu",
        community: "Brahmin",
        subCommunity: "Iyer",
        partnersCast: "Any",
        gothram: "Bharadwaja",
      },
      astro: {
        dosham: "No",
        dob: "1996-05-15",
        cityOfBirth: "Mumbai",
        raasi: "Taurus",
        natchatram: "Rohini",
        laknam: "Leo",
      },
      educationCareer: {
        education: "B.Tech in Computer Science",
        occupation: "Software Engineer",
        company: "Google",
        income: "25 LPA",
      },
      familyBackground: {
        fatherName: "Rajesh Sharma",
        motherName: "Meena Sharma",
        fatherOccupation: "Business Owner",
        motherOccupation: "Homemaker",
        siblings: 1,
        familyAssets: "Own House, Business",
        personalAssets: "Savings, Investments",
      },
      LifeStyle: {
        diet: "Vegetarian",
        hobbies: "Reading, Yoga, Traveling",
      },
      profilePictures: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"],
      partnerPreferences: {
        locations: ["Mumbai", "Pune", "Bangalore"],
        minHeight: 170,
        maxHeight: 185,
        minWeight: 65,
        maxWeight: 80,
        preferredSkinTones: ["Fair", "Wheatish"],
        preferredProfessions: ["Software Engineer", "Doctor", "Business"],
      },
      membershipType: "Gold",
      membershipNumber: "MA123456"
    },
  ];

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  const handleInterestClick = (e, profileId) => {
    e.stopPropagation(); // Prevent profile popup from opening
    setInterests(prev => {
      const newState = { ...prev };
      // Toggle interest state
      if (!newState[profileId] || !newState[profileId].interested) {
        newState[profileId] = {
          interested: true,
          animating: true
        };
        // Reset animation state after animation completes
        setTimeout(() => {
          setInterests(current => ({
            ...current,
            [profileId]: {
              ...current[profileId],
              animating: false
            }
          }));
        }, 1000);
      } else {
        // Unlike the profile
        delete newState[profileId];
      }
      return newState;
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <main>
          <div className="relative h-screen bg-cover bg-center bg-[url('https://images.pexels.com/photos/30232952/pexels-photo-30232952/free-photo-of-elegant-gold-wedding-rings-on-invitation.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] flex justify-center items-center">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
              <h2 className="text-4xl font-bold text-white">Find Your Perfect Match</h2>
              <p className="text-xl text-gray-200">Join thousands of happy couples who found their soulmate with us</p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-8">
              <SearchFilters />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mx-32">
                {profiles.map((profile, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all border-4  relative"
                    onClick={() => handleProfileClick(profile)}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={profile.profilePictures[0]}
                        alt={profile.personalInfo.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{profile.personalInfo.name}</h3>
                      <p className="text-sm text-gray-600 mb-1">{profile.personalInfo.age} years</p>
                      <p className="text-sm text-gray-600">{profile.personalInfo.currentLocation}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className={`text-xs px-2 py-1 rounded ${
                          profile.membershipType.toLowerCase() === 'gold' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {profile.membershipType}
                        </span>
                        <span className="text-xs text-gray-500">{profile.membershipNumber}</span>
                      </div>
                    </div>
                    <button
                      onClick={(e) => handleInterestClick(e, index)}
                      className={`absolute top-4 right-4 p-2 rounded-full bg-white shadow-lg 
                        transition-all duration-300 hover:border hover:border-gray-200 group
                        ${interests[index]?.interested ? 'bg-pink-50' : ''}`}
                      title={interests[index]?.interested ? "Remove Interest" : "Send Interest"}
                    >
                      <Heart
                        className={`w-6 h-6 transition-all duration-300
                          ${interests[index]?.interested 
                            ? 'fill-red-500 text-red-500' 
                            : 'text-gray-600 group-hover:text-red-500'} 
                          ${interests[index]?.animating 
                            ? 'scale-125 animate-pulse' 
                            : ''}`}
                      />
                      {interests[index]?.interested && (
                        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white bg-gray-800 px-2 py-1 rounded whitespace-nowrap">
                          Interest Sent
                        </span>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {selectedProfile && (
        <ProfilePopup
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
      
      <Footer />
    </>
  );
}