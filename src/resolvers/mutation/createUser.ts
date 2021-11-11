import { prisma } from '../../lib/prisma';
import { MutationResolvers } from '../../types/generated/graphql';

export const createUser: MutationResolvers['createUser'] = async (
  parent,
  args,
  context,
  info
) => {
  const createdUser = await prisma.user.create({data: {
    id: args.id ?? "",
    name: args.input?.name
  }});
  return createdUser;
};