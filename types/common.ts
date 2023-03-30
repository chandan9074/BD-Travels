export type ThemeDT = {
    textColor: stringDT;
    fontSize: numberDT;
    fontWight: fontWightDT;
}

export type stringDT = {
    [key: string]: string;
}

export type numberDT = {
    [key: string]: number;
}

export type fontWightDT = {
    [key: string]: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
}