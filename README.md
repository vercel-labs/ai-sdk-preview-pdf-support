# AI SDK PDF Support Example

This example demonstrates how to use the [AI SDK](https://sdk.vercel.ai/docs) with [Next.js](https://nextjs.org/) with the `useObject` hook to submit PDF messages to the AI provider of your choice (Google or Anthropic).

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel-labs%2Fai-sdk-preview-pdf-support&env=GOOGLE_GENERATIVE_AI_API_KEY&envDescription=API%20keys%20needed%20for%20application&envLink=google.com)

## How to use

Run [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/vercel-labs/ai-sdk-preview-pdf-support ai-sdk-preview-pdf-support-example
```

```bash
yarn create next-app --example https://github.com/vercel-labs/ai-sdk-preview-pdf-support ai-sdk-preview-pdf-support-example
```

```bash
pnpm create next-app --example https://github.com/vercel-labs/ai-sdk-preview-pdf-support ai-sdk-preview-pdf-support-example
```

To run the example locally you need to:

1. Sign up for accounts with the AI providers you want to use (e.g., Google).
2. Obtain API keys for Google provider.
3. Set the required environment variables as shown in the `.env.example` file, but in a new file called `.env`.
4. `npm install` to install the required dependencies.
5. `npm run dev` to launch the development server.


## Learn More

To learn more about Vercel AI SDK or Next.js take a look at the following resources:

- [AI SDK docs](https://sdk.vercel.ai/docs)
- [Vercel AI Playground](https://play.vercel.ai)
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

