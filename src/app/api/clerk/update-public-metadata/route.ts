import { clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ success: false });
  }
  const { entity, userId } = await req.json();
  if (!entity || !userId) {
    return NextResponse.json({ success: false });
  }
  const client = await clerkClient();
  try {
    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        entity,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating metadata:", error);
    return NextResponse.json({ success: false });
  }
}
