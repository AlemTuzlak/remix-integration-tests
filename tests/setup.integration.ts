import * as integration from "./factory";

beforeEach((ctx) => {
  ctx.request = new Request("http://localhost");
  ctx.integration = integration;
});
