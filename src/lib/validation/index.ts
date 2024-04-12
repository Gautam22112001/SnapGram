import { z } from "zod";

export const SignUpValidationSchems = z.object({
  name: z.string().min(2, { message: "Name must contain 2 letters!" }),
  username: z.string().min(2, { message: "Username must contain 2 letters!" }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must contain 8 letters!" }),
});

export const SignInValidationSchems = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must contain 8 letters!" }),
});

export const PostValidationSchems = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(2200),
  tags: z.string(),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  username: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  bio: z.string(),
});
