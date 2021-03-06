import React from 'react'
import cl from 'classnames'
import { Switch, Route } from 'react-router-dom'

import 'styles/themes/dark-theme.scss'

import Sidebar from 'App/components/Sidebar'
import Feed from 'App/components/Feed'
import Search from 'App/components/Search'
import WhoToFollow from 'App/components/WhoToFollow'

import s from './App.module.scss'
import t from './dark-theme.module.scss'

import { routes } from './constants'

function App() {
  return (
    <div className={cl(
      s.root,
      t.root,
    )}
    >
      <div
        data-sidebar
        style={{
          flex: '0 0 275px',
          padding: '0 10px',
        }}
      >
        <Sidebar />
      </div>

      <Switch>
        {Object.entries(routes).map(([route, { path, widgets }]) => (
          <Route key={route} path={path}>
            {(() => {
              switch (route) {
                case 'home': {
                  return (
                    <>
                      <div
                        data-feed
                        className={cl(
                          'bordered-left',
                          'bordered-right',
                        )}
                        style={{
                          flex: '0 0 600px',
                        }}
                      >
                        <Feed />
                      </div>

                      <div
                        data-widgets
                        style={{
                          flex: '0 0 350px',
                          paddingLeft: '30px',
                          paddingTop: '10px',
                          paddingRight: '10px',
                        }}
                      >

                        <div
                          className={cl(
                            s.widget,
                            t.widget,
                          )}
                          style={{
                            position: 'relative',
                            height: '38px',
                          }}
                        >
                          <div style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '100%',
                          }}>
                            <Search />
                          </div>
                        </div>

                        <div className={cl(
                          s.widget,
                          t.widget,
                        )}>
                          <WhoToFollow />
                        </div>
                      </div>
                    </>
                  )
                }
                default: return null
              }
            })()}
          </Route>
        ))}
      </Switch>
    </div>
  )
}

export default App
