import { closeMessages, urlMessageSchema } from "src/schema/messages";
import { z } from "zod";
export type UrlMessags = z.infer<typeof urlMessageSchema>;
export type CloseMessages = z.infer<typeof closeMessages>;
export type Messages = UrlMessags | CloseMessages;
