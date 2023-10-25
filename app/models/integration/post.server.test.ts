import { createPost } from "../post.server";

describe("creating posts", () => {
  // integration object is fully typed
  it("creates post with normal user set as the author", async ({
    integration,
  }) => {
    // we use it to create a random user
    const user = await integration.createNormalUser();
    // we use the user to test something else
    const result = await createPost({
      title: "hello world",
      content: "this is a test",
      authorId: user.id,
    });
    expect(result.authorId).toBe(user.id);
  });

  // integration object is fully typed
  it("creates the post with admin user set as the author", async ({
    integration,
  }) => {
    // we use it to create a random admin user
    const user = await integration.createAdminUser();
    // we use the admin user to test something else
    const result = await createPost({
      title: "hello world",
      content: "this is a test",
      authorId: user.id,
    });
    expect(result.authorId).toBe(user.id);
  });
});
