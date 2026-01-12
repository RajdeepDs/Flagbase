import z from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.email(),
  emailVerified: z.boolean(),
  image: z.nullable(z.url()),
  createdAt: z.date(),
  updatedAt: z.date(),
});
