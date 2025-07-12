"use client"

export interface PersonalInfo {
  name: string
  tagline: string[]  // Array of paragraph strings, can contain HTML
  logoText: string
}

const personalInfo: PersonalInfo = {
  name: "Yash Kothari",
  tagline: [
    "I'm studying CS at <a href=\"https://cs.uwaterloo.ca/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"link-highlight\">UWaterloo</a> and am currently interning at SeatGeek.",
    "I enjoy building products that help people, learning new things (especially related to ML and robotics), working on difficult problems, and automating mundane tasks."
  ],
  logoText: "YK"
};

export default personalInfo;
