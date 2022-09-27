import { shimmer, toBase64 } from "../utils/string";

export const blurDataURL = `data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`;
