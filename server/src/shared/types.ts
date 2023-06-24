import { intensities } from "./constants";

type Tags = {
  tags: string[];
};
export type Intensity = (typeof intensities)[number];
export type DurationIntensity = {
  duration: number;
  intensity: Intensity;
};
export type Sleep = {
  duration: number;
  hadDreams: boolean;
};
export type Hydration = {
  waterAmount: number;
  sodaAmount: number;
  hadAlcohol: boolean;
};
export type Sex = {
  hadSex: boolean;
  didMasturbate: boolean;
};
export type Food = {
  calories: number;
} & Tags;
export type Sport = DurationIntensity & Tags;

export type Rating = {
  mood?: number;
  success?: number;
  focus?: number;
  satisfaction?: number;
  health?: number;
  energy?: number;
  rating: number;
};
export type RatingField = keyof Rating;

export type DailyReport = {
  _id: string;
  ownerId: string;
  date: Date;

  parameters: {
    sleep: Sleep;
    hydration: Hydration;
    work: DurationIntensity;
    sex: Sex;

    // with tags
    food: Food;
    sport: Sport;
  };
  rating: Rating;
};
export type ParametersField = keyof DailyReport["parameters"];
export type NewReport = Pick<DailyReport, "rating" | "parameters">;
