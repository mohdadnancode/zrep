export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  plan: "free" | "pro";
  goal?: "muscle_gain" | "fat_loss" | "strength" | "endurance";
  experienceLevel?: "beginner" | "intermediate" | "advanced";
  height?: number;
  weight?: number;
  age?: number;
  gender?: "male" | "female" | "other";
  createdAt: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  success: boolean;
  user: User;
  message: string;
}