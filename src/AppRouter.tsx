import { HomePage } from 'pages/Home'
import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

export const AppRouter = (): React.ReactElement => {
  return (

      <Switch>
        <Route path='/'>
            <HomePage />
        </Route>
      </Switch>

  )
}
