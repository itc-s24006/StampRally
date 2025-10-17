"use client";

import {signIn} from "next-auth/react";
import Image from "next/image";

export default function Index() {

    return (
        <>
            <button onClick={() => signIn("google" , {callbackUrl: "http://localhost:3000/questions"})}>
                <Image src="/images/web_neutral_sq_SI@3x.png" alt="" width={250} height={60} />
            </button>
        </>
    );
}