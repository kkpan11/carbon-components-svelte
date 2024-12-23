import type { SvelteComponentTyped } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

type $RestProps = SvelteHTMLElements["div"];

type $Props = {
  /**
   * Set to `true` to use the small variant
   * @default false
   */
  small?: boolean;

  /**
   * Set to `false` to disable the active state
   * @default true
   */
  active?: boolean;

  /**
   * Set to `false` to disable the overlay
   * @default true
   */
  withOverlay?: boolean;

  /**
   * Specify the description to describe the loading state
   * @default "loading"
   */
  description?: string;

  [key: `data-${string}`]: any;
};

export type LoadingProps = Omit<$RestProps, keyof $Props> & $Props;

export default class Loading extends SvelteComponentTyped<
  LoadingProps,
  Record<string, any>,
  {}
> {}
