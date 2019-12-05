import { View, Router, Route, Redirect, go, router } from '@gravity-js/client'



class Profile extends View {
  render () {
    return <div>
      Profile page
    </div>
  }
}

class DocsPage extends View {
  render () {
    return <div>
      Docs page
    </div>
  }
}


class MainPage extends View {
  render () {
    return <div>
      <h1>Hello</h1>

      { routes(
          { path: '/docs', match: () => <DocsPage/> },
          { path: '/profile/:id', match: ({ id }) => <Profile id={id}/> },
          // { match: () => Redirect('/') }
      ) }

      <Router 
        routes={[
          [ '/docs', () => <DocsPage/> ],
          [ '/profile/:id', ({ id }) => <Profile id={id}/> ],
        ]}
      />


      <Router
        routes={[
          { path: '/docs', render: () => <DocsPage/> },
          { path: '/profile/:id', render: ({ id }) => <Profile id={id}/> },
          {
            path: '/profile',
            exact: true,
            match: (parts, params) => <Profile id={id}/>
          },
          { render: () => Router.navigate('/') }
        ]}
      />

      <Link href='/profile'/>

      <Router>
        {[
          { path: '/docs', render: () => <DocsPage/> },
          { path: '/profile/:id', render: ({ id }) => <Profile id={id}/> }
        ]}
      </Router>



      { router.match('/docs', (parts, params) => <DocsPage/> ) }
      { router.match('/profile/:id', (parts) => <Profile id={parts.id}/> ) }

      { router.routes([
        '/'
      ]) }





      { matchUrl('/docs/:part', (params) => <DocsPage/> )}

      <Route url='/docs'>
        <DocsPage/>
      </Route>
      <Route url='/docs'>
        { params => <DocsPage/> }
      </Route>
      <Route url='/profile' params={['user_id']}>
        <DocsPage/>
      </Route>
      <Redirect url='/kek'/>
    </div>
  }

  beforeUnmount = () => {
    go('/profile', { 'user_id': 1 })
  }
}
