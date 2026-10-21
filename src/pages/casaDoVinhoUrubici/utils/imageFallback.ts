import type { SyntheticEvent } from "react";

/**
 * Graceful image degradation: a failed bottle or panel photograph must never leave a
 * broken-image icon over the catalog. The container keeps its dark plate and the
 * <img> is hidden, so layout and text stay intact.
 */
export function markImageFailed(img: HTMLImageElement) {
  if (img.dataset.failed === "true") return;
  img.dataset.failed = "true";
  img.style.visibility = "hidden";
  const frame = img.parentElement;
  if (frame) frame.dataset.mediaFailed = "true";
}

export function handleImageError(event: SyntheticEvent<HTMLImageElement>) {
  markImageFailed(event.currentTarget);
}