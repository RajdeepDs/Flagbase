import z from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.email(),
  emailVerified: z.boolean(),
  image: z.nullable(z.url()),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  defaultProject: z.nullable(z.string()),
});
