"use server";

export async function registerAction(username, password) {
  console.log({
    username,
    password,
  });
  // stub for registration
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    code: 200,
    status: "OK",
  };
}