import { AnyAction } from 'redux'

export const MAIN_MENU_OPEN = 'MAIN_MENU_OPEN'
export const MAIN_MENU_CLOSE = 'MAIN_MENU_CLOSE'

export interface MainMenuOpenArguments {}

export interface MainMenuCloseArguments {}

export const mainMenuOpen = (
  payload: MainMenuOpenArguments = {},
): AnyAction => ({
  payload,
  type: MAIN_MENU_OPEN,
})

export const mainMenuClose = (
  payload: MainMenuCloseArguments = {},
): AnyAction => ({
  payload,
  type: MAIN_MENU_CLOSE,
})
