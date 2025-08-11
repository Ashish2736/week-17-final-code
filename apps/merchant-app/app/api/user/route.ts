import { NextResponse } from "next/server"
import  prisma  from "@repo/db/client";

export const GET = async () => {
    await prisma.user.upsert({
    where: { email: "asd" },
    update: {},
    create: {
      email: "asd",
      name: "adsads",
      password: "secret",
      number: "123",
    },
  });
    return NextResponse.json({
        message: "hi there"
    })
}



export const dynamic = 'force-dynamic';  // prevents prerendering -> this means dont prerender this route,always run it as runtime.no more db calls at build