export interface QuickStatblock {
    cr?: number;

    hp: number;
    ac: number;
    defCR?: number;

    dmgRnd: number;
    atk: number;
    dc?: number;
    // if false use atk, if true use dc
    atkVsDc: boolean;
    offCR?: number;
}