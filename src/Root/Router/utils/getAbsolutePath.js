const getAbsolutePath = path => {
  if (path[0] === '/') return path

  if (path[0] === '.' && path[1] === '/') path = path.slice(2)

  let currentPath = window.location.pathname

  if (currentPath[currentPath.length - 1] === '/') currentPath = currentPath.slice(0, -1)

  return `${currentPath}/${path}`
}


export default getAbsolutePath
