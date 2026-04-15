import { NextRequest, NextResponse } from "next/server";
import { authMiddleware } from "./middlewares/auth";

export default async function proxy(req: NextRequest) {

    const authResult = await authMiddleware(req);
    if (authResult) return authResult;

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/profile/:path*",
    ],
};