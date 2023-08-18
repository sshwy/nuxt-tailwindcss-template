export default defineAppConfig({
  title:
    process.env.NODE_ENV === "production"
      ? "Production Page"
      : "Dev Page",
});
