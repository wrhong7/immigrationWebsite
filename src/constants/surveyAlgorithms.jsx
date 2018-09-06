import React from 'react';

export const responsePreferenceWeights = {
  //Score Weights are in following arrays
  //[Career vs. Life Score, Risk Averse vs. Risk Prefer Score, AUS, CAN (without spouse), CAN (with spouse), Ireland, NZ, UK, US (Immigration Eligibility Scores]
  questionOneSelected: {
    Q1Option1: [5, -10, 0, 0, 0, 0, 0, 0, 0],
    Q1Option2: [10, -5, 0, 0, 0, 0, 0, 0, 0],
    Q1Option3: [-10, 10, 0, 0, 0, 0, 0, 0, 0],
    Q1Option4: [-10, 5, 0, 0, 0, 0, 0, 0, 0],
    Q1Option5: [-5, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  questionTwoSelected: {
    Q2Option1: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    Q2Option2: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    Q2Option3: [0, -2, 0, 0, 0, 0, 0, 0, 0],
    Q2Option4: [0, -2.5, 0, 0, 0, 0, 0, 0, 0],
    Q2Option5: [0, -0.5, 0, 0, 0, 0, 0, 0, 0],
    Q2Option6: [0, -2, 0, 0, 0, 0, 0, 0, 0],
    Q2Option7: [0, -3, 0, 0, 0, 0, 0, 0, 0],
    Q2Option8: [0, -3.5, 0, 0, 0, 0, 0, 0, 0],
    Q2Option9: [0, -4.5, 0, 0, 0, 0, 0, 0, 0],
    Q2Option10: [0, -2, 0, 0, 0, 0, 0, 0, 0],
  },
  questionThreeSelected: {
    Q3Option1: [10, -10, 0, 0, 0, 0, 0, 0, 0],
    Q3Option2: [5, -5, 0, 0, 0, 0, 0, 0, 0],
    Q3Option3: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    Q3Option4: [-5, 5, 0, 0, 0, 0, 0, 0, 0],
    Q3Option5: [-10, 10, 0, 0, 0, 0, 0, 0, 0],
  },
  questionFourSelected: {
    Q4Option1: [0, -2, 0, 0, 0, 0, 0, 0, 0],
    Q4Option2: [0, -2, 0, 0, 0, 0, 0, 0, 0],
    Q4Option3: [0, -2, 0, 0, 0, 0, 0, 0, 0],
    Q4Option4: [0, -2, 0, 0, 0, 0, 0, 0, 0],
    Q4Option5: [0, -2, 0, 0, 0, 0, 0, 0, 0],
  },
  questionFiveSelected: {
    Q5Option1: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    Q5Option2: [0, -5, 0, 0, 0, 0, 0, 0, 0],
    Q5Option3: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    Q5Option4: [0, 5, 0, 0, 0, 0, 0, 0, 0],
    Q5Option5: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  questionSixPartOneSelected: {
    Q6Part1Option1: [0, 0, 15, 120, 112, 0, 0, 0, 0],
    Q6Part1Option2: [0, 0, 15, 185, 176, 0, 0, 0, 0],
    Q6Part1Option3: [0, 0, 20, 200, 190, 0, 0, 0, 0],
  },
  questionSixPartTwoSelected: {
    Q6Part2Option1: [0, 0, 0, 25, 13, 0, 0, 0, 0],
    Q6Part2Option2: [0, 0, 0, 25, 13, 0, 0, 0, 0],
    Q6Part2Option3: [0, 0, 5, 50, 50, 0, 0, 0, 0],
    Q6Part2Option4: [0, 0, 10, 50, 50, 0, 0, 0, 0],
    Q6Part2Option5: [0, 0, 600, 600, 600, 600, 600, 600, 600],
    Q6Part2Option6: [0, 0, 20, 136, 128, 0, 0, 0, 0],
    Q6Part2Option7: [0, 0, 0, 54, 54, 0, 0, 0, 0],
    Q6Part2Option8: [0, 0, 0, 15, 15, 0, 0, 0, 0],
  },
  questionSixPartThreeSelected: {
    Q6Part3Option1: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    Q6Part3Option2: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  questionSixPartFourSelected: {
    Q6Part4Option1: [0, 0, 0, 8, 0, 0, 0, 0, 0],
    Q6Part4Option2: [0, 0, 0, 10, 0, 0, 0, 0, 0],
    Q6Part4Option3: [0, 0, 0, 10, 0, 0, 0, 0, 0],
  },
  questionSixPartFiveSelected: {
    Q6Part5Option1: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    Q6Part5Option2: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    Q6Part5Option3: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    Q6Part5Option4: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    Q6Part5Option5: [0, 0, 600, 600, 600, 600, 600, 600, 600],
    Q6Part5Option6: [0, 0, 5, 0, 20, 0, 0, 0, 0],
    Q6Part5Option7: [0, 0, 0, 0, 20, 0, 0, 0, 0],
    Q6Part5Option8: [0, 0, 0, 0, 15, 0, 0, 0, 0],
  },
  questionSevenPartOneSelected: {
    Q7Part1Option1: [-5, -5, 0, 0, 0, 0, 0, 0, 0],
    Q7Part1Option2: [-3, -5, 0, 0, 0, 0, 0, 0, 0],
    Q7Part1Option3: [0, -5, 0, 0, 0, 0, 0, 0, 0],
    Q7Part1Option4: [5, -5, 0, 0, 0, 0, 0, 0, 0],
    Q7Part1Option5: [-5, 10, 0, 0, 0, 0, 0, 0, 0],
  },
  questionSevenPartTwoSelected: {
    Q7Part2Option1: [2.5, 0, 0, 0, 0, 0, 0, 0, 0],
    Q7Part2Option2: [1, 0, 0, 0, 0, 0, 0, 0, 0],
    Q7Part2Option3: [1.5, 0, 0, 0, 0, 0, 0, 0, 0],
    Q7Part2Option4: [-2.5, 0, 0, 0, 0, 0, 0, 0, 0],
    Q7Part2Option5: [1.5, 0, 0, 0, 0, 0, 0, 0, 0],
    Q7Part2Option6: [-2., 0, 0, 0, 0, 0, 0, 0, 0],
    Q7Part2Option7: [1.5, 0, 0, 0, 0, 0, 0, 0, 0],
    Q7Part2Option8: [2.5, 0, 0, 0, 0, 0, 0, 0, 0],
    Q7Part2Option9: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    Q7Part2Option10: [-5, 0, 0, 0, 0, 0, 0, 0, 0],
    Q7Part2Option11: [1.5, 0, 0, 0, 0, 0, 0, 0, 0],
    Q7Part2Option12: [1.5, 0, 0, 0, 0, 0, 0, 0, 0],
    Q7Part2Option13: [-5, 0, 0, 0, 0, 0, 0, 0, 0],
    Q7Part2Option14: [1.5, 0, 0, 0, 0, 0, 0, 0, 0],
  },
};

export const preferenceScorePerCountry = {
  ausPrefScore: {
    "Career": 9.14,
    "Life": 9.23,
    "riskAverse": 9.99,
    "riskTaking": 0.86,
    "industryPref": {
      "corporate": 9.27,
      "finance": 9.21,
      "healthcare": 9.31,
      "software": 9.38,
      "self-employed": 9.52,
    }
  },
  canPrefScore: {
    "Career": 8.27,
    "Life": 9.19,
    "riskAverse": 9.4,
    "riskTaking": 0.92,
    "industryPref": {
      "corporate": 9.48,
      "finance": 9.49,
      "healthcare": 9.24,
      "software": 9.10,
      "self-employed": 9.65,
    }
  },
  irePrefScore: {
    "Career": 7.37,
    "Life": 9.27,
    "riskAverse": 9.7,
    "riskTaking": 0.89,
    "industryPref": {
      "corporate": 8.47,
      "finance": 9.05,
      "healthcare": 8.92,
      "software": 9.57,
      "self-employed": 9.23,
    }
  },
  nzPrefScore: {
    "Career": 7.34,
    "Life": 8.22,
    "riskAverse": 9.4,
    "riskTaking": 0.92,
    "industryPref": {
      "corporate": 9.99,
      "finance": 9.80,
      "healthcare": 9.80,
      "software": 9.14,
      "self-employed": 9.15,
    }
  },
  ukPrefScore: {
    "Career": 9.85,
    "Life": 9.56,
    "riskAverse": 8.8,
    "riskTaking": 0.98,
    "industryPref": {
      "corporate": 9.6,
      "finance": 9.33,
      "healthcare": 9.03,
      "software": 9.45,
      "self-employed": 9.25,
    }
  },
  usPrefScore: {
    "Career": 9.60,
    "Life": 6.44,
    "riskAverse": 8.7,
    "riskTaking": 0.99,
    "industryPref": {
      "corporate": 9.15,
      "finance": 9.45,
      "healthcare": 9.31,
      "software": 9.19,
      "self-employed": 9.75,
    }
  },
};