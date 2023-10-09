enum SkillLevel{
    beginner,
    intermediate,
    advanced
}

export interface Skill {
    title: string,
    skillLevel: SkillLevel,
    years: number,
    needToBrush: boolean
}