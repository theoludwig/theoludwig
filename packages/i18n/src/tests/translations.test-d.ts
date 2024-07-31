import { expectTypeOf, test } from "vitest"
import en from "../translations/en-US.json"
import fr from "../translations/fr-FR.json"

test("translations types should match", () => {
  expectTypeOf(en).toEqualTypeOf(fr)
})
