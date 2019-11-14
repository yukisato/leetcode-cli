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
export {};
