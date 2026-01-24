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
    "I enjoy building products that help people, learning new things (especially related to ML and robotics), and working on difficult problems.",
    "I am always looking for new challenges, feel free to <a href=\"#contact\" class=\"link-highlight\">reach out</a> if you'd like to chat!"
  ],
  logoText: "YK"
};

export default personalInfo;
