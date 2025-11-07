import { prismaClient } from "db/client";
import { json } from "stream/consumers";

export default async function Home() {
  const users = await prismaClient.user.findMany();
  return (
    <div >
      {JSON.stringify(users)}
    </div>
  );
}
