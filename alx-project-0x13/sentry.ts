import * as Sentry from "@sentry/nextjs";

if (process.env.NODE_ENV !== "development") {
  Sentry.init({
    dsn: process.env.SENTRY_DSN || "",

    // Limit the data being sent (optional)
    tracesSampleRate: 0.1, // Only send 10% of traces
    // Or use dynamic sampling:
    // tracesSampler: samplingContext => {
    //   return process.env.NODE_ENV === "production" ? 1.0 : 0.0;
    // },

    // Add other config as needed
  });
}