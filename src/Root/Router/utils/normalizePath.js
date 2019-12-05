const normalizePath = path => {
  if (path[0] === '/') return [ path, true ]

  if (path[0] === '.' && path[1] === '/') path = path.slice(2)

  return [ path, false ]
}


export default normalizePath
