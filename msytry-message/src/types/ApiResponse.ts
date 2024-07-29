import { Message } from "@/model/User";

export interface ApiResponse {
  success: boolean;
  message: string;
  isAcceptingMessaes?: boolean;
  messages?: Array<Message>
}