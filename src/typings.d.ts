declare module "global";

declare module "cartesian" {
  export default function cartesian<T>(obj: T | T[]): T[];
}
