export type TBuildMode = 'production' | 'development'

export interface TBuildPath {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface IBuildOptions {
    mode: TBuildMode,
    paths: TBuildPath;
    isDev: boolean;
    port: number;
}

export interface IBuildEnv {
    mode: TBuildMode,
    port: number;
}