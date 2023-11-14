export default function removeEmptyKeys(
  obj: Record<string, unknown>
): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, v]) => v !== "")
      .filter(([_, v]) => v)
  )
}
