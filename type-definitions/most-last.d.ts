declare module "most-last" {
  import { Stream } from "@most/types";

  export function last<T> (stream: Stream<T>): Stream<T>;
}
