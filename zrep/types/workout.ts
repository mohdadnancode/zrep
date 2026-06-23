export interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  category: "compound" | "isolation";
  equipment: string;
}

export interface Set {
  id: string;
  setNumber: number;
  weight: number;
  reps: number;
  completed: boolean;
  isPersonalRecord?: boolean;
}

export interface WorkoutExercise {
  id: string;
  exercise: Exercise;
  sets: Set[];
  notes?: string;
}

export interface WorkoutSession {
  id: string;
  name: string;
  date: string;
  duration: number;
  exercises: WorkoutExercise[];
  totalVolume: number;
  notes?: string;
}