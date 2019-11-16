#!/usr/bin/env node
declare enum Difficulty {
    Easy = "Easy",
    Medium = "Medium",
    Hard = "Hard"
}
export interface LeetCodeProblem {
    id: number;
    title: string;
    acceptance?: number;
    difficulty?: Difficulty;
}
export declare const firstToUpper: (str: string) => string;
export declare const firstToLower: (str: string) => string;
export {};
