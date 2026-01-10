import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { email, password } = await req.json();

    // DEMO: hard-code user
    if (email === "admin@gmail.com" && password === "123456") {
        const res = NextResponse.json({ success: true });

        // set cookie (giả lập session)
        res.cookies.set("auth_token", "logged_in", {
            httpOnly: true,
            path: "/",
        });

        return res;
    }

    return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
    );
}
