import { questionSchema, questionsSchema } from "@/lib/schemas";
import { createGateway } from "@ai-sdk/gateway";
import { streamObject } from "ai";
import { checkBotId } from "botid/server";

const gateway = createGateway({
  baseURL: "https://ai-gateway.vercel.sh/v1/ai",
});

export const maxDuration = 60;

export async function POST(req: Request) {
  const { isBot } = await checkBotId();
  if (isBot) {
    return new Response("Access denied", { status: 403 });
  }

  const { files } = await req.json();
  const firstFile = files[0].data;

  const result = streamObject({
    model: gateway("google/gemini-1.5-pro-latest"),
    messages: [
      {
        role: "system",
        content:
          "You are a teacher. Your job is to take a document, and create a multiple choice test (with 4 questions) based on the content of the document. Each option should be roughly equal in length.",
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Create a multiple choice test based on this document.",
          },
          {
            type: "file",
            data: firstFile,
            mediaType: "application/pdf",
          },
        ],
      },
    ],
    schema: questionSchema,
    output: "array",
    onFinish: ({ object }) => {
      const res = questionsSchema.safeParse(object);
      if (res.error) {
        throw new Error(res.error.errors.map((e) => e.message).join("\n"));
      }
    },
  });

  return result.toTextStreamResponse();
}
