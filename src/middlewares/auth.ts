import { NextRequest, NextResponse } from "next/server";

export async function authMiddleware(req: NextRequest): Promise<NextResponse | null> {
    try {
        const accessToken = req.cookies.get("access_token")?.value;

        if (!accessToken) {
            const redirectUrl = new URL("/", req.url);
            redirectUrl.searchParams.set("redirectTo", req.nextUrl.pathname);

            return NextResponse.redirect(redirectUrl);
        }
        return null;
    } catch (error) {
        console.error("authMiddleware error:", error);
        return NextResponse.redirect(new URL("/", req.url));
    }
}