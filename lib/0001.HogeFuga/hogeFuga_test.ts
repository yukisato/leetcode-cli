import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import hogeFuga from "./hogeFuga.ts";

test("0001. Hoge Fuga", () => {
  const testValue = "";
  assertEquals(hogeFuga(testValue, 777), true);
});
