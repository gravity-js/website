const match = (mask, path, isExact=false) => {
  const patterns = mask.split('/').filter(Boolean)
  const parts = path.split('/').filter(Boolean)

  if (isExact && patterns.length !== parts.length) return null

  const result = {}

  const isMatched = patterns.every((pattern, index) => {
    if (!(index in parts)) return false

    if (pattern === '*') return true

    const part = parts[index]

    if (pattern[0] === ':') {
      const key = pattern.slice(1)
      result[key] = part
      return true
    }

    return pattern === part
  })

  return isMatched ? result : null
}


export default match
