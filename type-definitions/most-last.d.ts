declare module "most-last" {
  import { Stream } from "most";

  export function last<T> (stream: Stream<T>): Stream<T>;
}
