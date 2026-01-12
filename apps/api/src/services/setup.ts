import prisma from "@flagbase/db";
import type { ProjectSetupInput } from "@flagbase/orpc";
import { ORPCError } from "@orpc/server";
import type { AuthenticatedContext } from "@/context";

export async function createProject({
  input,
  ctx,
}: {
  input: ProjectSetupInput;
  ctx: AuthenticatedContext;
}) {
  const userId = ctx.session.user.id;
  const { projectName, projectURL } = input;

  const existingProject = await prisma.project.findFirst({
    where: {
      url: projectURL,
      authorId: ctx.session.user.id,
    },
  });

  if (existingProject) {
    throw new ORPCError("CONFLICT", {
      message: "A Project with this URL is already exists.",
    });
  }

  const project = await prisma.project.create({
    data: {
      name: projectName,
      url: projectURL,
      authorId: userId,
    },
  });

  return project;
}
