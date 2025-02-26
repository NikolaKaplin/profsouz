"use client";

import Image from "next/image";
import logo from "../logo.png";

export default function Logo(props: Partial<Parameters<typeof Image>[0]>) {
    return <Image
        src={logo}
        alt="Логотип Профсоюза КСТ"
        {...props}
    />
}