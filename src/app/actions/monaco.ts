import { Action } from '@ngrx/store';
import { type, PlaygroundError } from '../helpers';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
    CHANGE_TAB: type('[Monaco] Change Tab'),
    CHANGE_THEME: type('[Monaco] Change Theme'),
    CHANGE_LANGUAGE: type('[Monaco] Change Language'),
    REPORT_ERROR: type('[Monaco] Report Error'),
    UPDATE_INTELLISENSE: type('[Monaco Update Intellisense]'),
    UPDATE_INTELLISENSE_SUCCESS: type('[Monaco Update Intellisense Success]'),
    INFO: type('[Monaco] Show Info')
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class ChangeTabAction implements Action {
    type = ActionTypes.CHANGE_TAB;

    constructor(public payload: string) { }
}

export class ChangeThemeAction implements Action {
    type = ActionTypes.CHANGE_THEME;

    constructor(public payload: string) { }
}

export class ChangeLanguageAction implements Action {
    type = ActionTypes.CHANGE_LANGUAGE;

    constructor(public payload: string) { }
}

export class ReportErrorAction implements Action {
    type = ActionTypes.REPORT_ERROR;

    constructor(public payload: PlaygroundError) { }
}

export class InfoAction implements Action {
    type = ActionTypes.INFO;

    constructor() { }
}

export class UpdateIntellisenseAction implements Action {
    type = ActionTypes.UPDATE_INTELLISENSE;

    constructor(libraries: string[]) { }
}

export class UpdateIntellisenseSuccessAction implements Action {
    type = ActionTypes.UPDATE_INTELLISENSE_SUCCESS;

    constructor() { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
    = ChangeTabAction
    | ChangeThemeAction
    | ChangeLanguageAction
    | ReportErrorAction
    | InfoAction
    | UpdateIntellisenseAction
    | UpdateIntellisenseSuccessAction;
